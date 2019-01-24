const router = require('koa-router')()
const api = require('./api.js')

router.use('/homework', api.routes(), api.allowedMethods())

module.exports = router