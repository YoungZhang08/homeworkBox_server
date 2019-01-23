const router = require('koa-router')();
const createBoxCtrl = require('../controller/ctrl_createbox');
const addBoxCtrl = require('../controller/ctrl_addbox');

const routers = router
    .post('/createBox', createBoxCtrl.createBox)
    .post('/addBox', addBoxCtrl.addBox);

module.exports = routers;