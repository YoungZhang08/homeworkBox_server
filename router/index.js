const router = require('koa-router')();
const api = require('./api.js');

router.use('/homeworkBox_api',api.routes(),api.allowedMethods());

module.exports = router;