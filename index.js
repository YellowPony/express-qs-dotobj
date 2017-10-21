'use strict'

const createObject = (obj, path, val) => {
    const keys = path.split('.')
    const lastKey = keys.pop()
    const lastObj = keys.reduce((obj, key) => obj[key] = obj[key] || {}, obj)
    lastObj[lastKey] = val
};

module.exports = (options) => {
  options = options || {}
  return (req, res, next) => {
    for (let qp in req.query) {
      if (qp.indexOf('.') > 0) {
        createObject(req.query, qp, req.query[qp])
        if (!options.keepOrig) {
          delete req.query[qp]
        }
      }
    }
    next()
  }
}

