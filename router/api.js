const router = require('koa-router')();
const createBoxCtrl = require('../controller/ctrl_createbox');

const routers = router.post('/createBox', createBoxCtrl.createBox);

module.exports = routers;