// Script para convertir GeoJSON del Perú → paths SVG
// Ejecutar: node scripts/generate-peru-svg.mjs

import https from 'https'

const GEOJSON_URL =
  'https://raw.githubusercontent.com/juaneladio/peru-geojson/master/peru_departamental_simple.geojson'

// ViewBox: 0 0 760 880
// Bounding box del Perú:
//   lon: -81.5 a -68.5  →  13° de ancho
//   lat: 0 a -18.5      →  18.5° de alto
const LON_MIN = -81.5
const LAT_MAX = 0
const SCALE_X = 760 / 13.0   // 58.46 px/°
const SCALE_Y = 880 / 18.5   // 47.57 px/°

function lonlatToSVG(lon, lat) {
  const x = (lon - LON_MIN) * SCALE_X
  const y = (LAT_MAX - lat) * SCALE_Y
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

function simplifyPolygon(coords, tolerance = 0.08) {
  // Douglas-Peucker simplification
  if (coords.length <= 2) return coords

  function perpendicularDistance(point, start, end) {
    const dx = end[0] - start[0]
    const dy = end[1] - start[1]
    if (dx === 0 && dy === 0) {
      return Math.sqrt((point[0]-start[0])**2 + (point[1]-start[1])**2)
    }
    const t = ((point[0]-start[0])*dx + (point[1]-start[1])*dy) / (dx*dx + dy*dy)
    const nearestX = start[0] + t * dx
    const nearestY = start[1] + t * dy
    return Math.sqrt((point[0]-nearestX)**2 + (point[1]-nearestY)**2)
  }

  function rdp(pts, tol) {
    if (pts.length <= 2) return pts
    let maxDist = 0, maxIdx = 0
    for (let i = 1; i < pts.length - 1; i++) {
      const d = perpendicularDistance(pts[i], pts[0], pts[pts.length-1])
      if (d > maxDist) { maxDist = d; maxIdx = i }
    }
    if (maxDist > tol) {
      const left = rdp(pts.slice(0, maxIdx + 1), tol)
      const right = rdp(pts.slice(maxIdx), tol)
      return [...left.slice(0, -1), ...right]
    }
    return [pts[0], pts[pts.length-1]]
  }

  return rdp(coords, tolerance)
}

function coordsToPath(rings) {
  let d = ''
  for (const ring of rings) {
    const simplified = simplifyPolygon(ring, 0.05)
    const svgPoints = simplified.map(([lon, lat]) => lonlatToSVG(lon, lat))
    d += 'M ' + svgPoints.map(([x, y]) => `${x},${y}`).join(' L ') + ' Z '
  }
  return d.trim()
}

function getLabelCenter(feature) {
  // Compute centroid of first ring of first polygon
  const geom = feature.geometry
  let ring
  if (geom.type === 'Polygon') {
    ring = geom.coordinates[0]
  } else {
    // MultiPolygon — use largest polygon
    let largest = geom.coordinates[0]
    for (const poly of geom.coordinates) {
      if (poly[0].length > largest[0].length) largest = poly
    }
    ring = largest[0]
  }

  // Centroid
  let cx = 0, cy = 0
  for (const [lon, lat] of ring) {
    cx += lon; cy += lat
  }
  cx /= ring.length
  cy /= ring.length
  const [sx, sy] = lonlatToSVG(cx, cy)
  return { lx: Math.round(sx), ly: Math.round(sy) }
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(e) }
      })
    }).on('error', reject)
  })
}

// Mapping GeoJSON names → our IDs
const NAME_TO_ID = {
  'AMAZONAS': 'amazonas',
  'ANCASH': 'ancash',
  'APURIMAC': 'apurimac',
  'AREQUIPA': 'arequipa',
  'AYACUCHO': 'ayacucho',
  'CAJAMARCA': 'cajamarca',
  'CALLAO': 'callao',
  'CUSCO': 'cusco',
  'HUANCAVELICA': 'huancavelica',
  'HUANUCO': 'huanuco',
  'ICA': 'ica',
  'JUNIN': 'junin',
  'LA LIBERTAD': 'lalibertad',
  'LAMBAYEQUE': 'lambayeque',
  'LIMA': 'lima',
  'LORETO': 'loreto',
  'MADRE DE DIOS': 'madrededios',
  'MOQUEGUA': 'moquegua',
  'PASCO': 'pasco',
  'PIURA': 'piura',
  'PUNO': 'puno',
  'SAN MARTIN': 'sanmartin',
  'TACNA': 'tacna',
  'TUMBES': 'tumbes',
  'UCAYALI': 'ucayali',
}

const DISPLAY_NAMES = {
  'amazonas': 'Amazonas',
  'ancash': 'Áncash',
  'apurimac': 'Apurímac',
  'arequipa': 'Arequipa',
  'ayacucho': 'Ayacucho',
  'cajamarca': 'Cajamarca',
  'callao': 'Callao',
  'cusco': 'Cusco',
  'huancavelica': 'Huancavelica',
  'huanuco': 'Huánuco',
  'ica': 'Ica',
  'junin': 'Junín',
  'lalibertad': 'La Libertad',
  'lambayeque': 'Lambayeque',
  'lima': 'Lima',
  'loreto': 'Loreto',
  'madrededios': 'Madre de Dios',
  'moquegua': 'Moquegua',
  'pasco': 'Pasco',
  'piura': 'Piura',
  'puno': 'Puno',
  'sanmartin': 'San Martín',
  'tacna': 'Tacna',
  'tumbes': 'Tumbes',
  'ucayali': 'Ucayali',
}

async function main() {
  console.log('Descargando GeoJSON...')
  const geojson = await fetchJSON(GEOJSON_URL)
  console.log(`Features encontradas: ${geojson.features.length}`)

  const depts = []

  for (const feature of geojson.features) {
    const rawName = (feature.properties.NOMBDEP || feature.properties.name || '').toUpperCase().trim()
    const id = NAME_TO_ID[rawName]
    if (!id) {
      console.warn(`⚠️  No se reconoció: "${rawName}"`)
      continue
    }

    const geom = feature.geometry
    let rings = []

    if (geom.type === 'Polygon') {
      rings = geom.coordinates
    } else if (geom.type === 'MultiPolygon') {
      // Aplanar todos los polígonos
      for (const poly of geom.coordinates) {
        rings.push(...poly)
      }
    }

    const path = coordsToPath(rings)
    const { lx, ly } = getLabelCenter(feature)

    depts.push({ id, nombre: DISPLAY_NAMES[id], path, labelX: lx, labelY: ly })
    console.log(`✅ ${DISPLAY_NAMES[id]} — ${path.length} chars`)
  }

  // Ordenar para consistencia
  depts.sort((a, b) => a.id.localeCompare(b.id))

  // Output TypeScript
  const ts = `// AUTO-GENERATED por scripts/generate-peru-svg.mjs
// Fuente: https://github.com/juaneladio/peru-geojson
// ViewBox: 0 0 760 880

export interface DeptDef {
  id: string
  nombre: string
  path: string
  labelX: number
  labelY: number
}

export const DEPTS: DeptDef[] = ${JSON.stringify(depts, null, 2)}
`

  const { writeFileSync } = await import('fs')
  writeFileSync('./apps/web/data/peru-depts.generated.ts', ts)
  console.log('\n✅ Generado: apps/web/data/peru-depts.generated.ts')
  console.log(`Total departamentos: ${depts.length}`)
}

main().catch(console.error)
