const fs = require('fs')
const path = require('path')
// const sharp = require('sharp')

const SUPPORTED_TYPES = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']

module.exports = {
  meta: {
    ext: SUPPORTED_TYPES,
    outExt: null,
    outDir: 'img'
  },
  parse: (file, meta) => {
    return []
  },
  compile: {
    string: (str, opts) => {
      throw new Error('Not implemented')
    },
    file: (file, opts) => {
      // let type = path.extname(file).substring(1)
      // type = type === 'jpg' ? 'jpeg' : type
      // checkType(type)

      // let pipeline = sharp(file)[type]()
      // let image = deasync(pipeline.toBuffer)()
      // return image
      return
    }
  }
}

// verify sharp supports filetype
function checkType(filetype) {
  let isSupported = false
  for (let supported in SUPPORTED_TYPES)
    if (filetype === supported) isSupported = true

  return isSupported
}
