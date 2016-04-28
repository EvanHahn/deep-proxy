const fs = require('fs')

module.exports = function readFile (file) {
  let stats

  try {
    stats = fs.statSync(file)
  } catch (err) {
    if (err.code !== 'ENOENT') { throw err }

    fs.writeFileSync(file, '{}', 'utf8')

    return {}
  }

  if (stats.isFile()) {
    const rawJson = fs.readFileSync(file, 'utf8')

    if (!rawJson.trim()) { return {} }

    try {
      return JSON.parse(rawJson)
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new Error(`Could not parse ${file} as JSON`)
      } else {
        throw err
      }
    }
  } else {
    throw new Error(`${file} is not a valid file`)
  }
}
