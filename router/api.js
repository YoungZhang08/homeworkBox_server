const router = require('koa-router')();
const createBoxCtrl = require('../controller/createbox');
const addBoxCtrl = require('../controller/addbox');

const routers = router
    .post('/createBox', createBoxCtrl.createBox)
    .post('/addBox', addBoxCtrl.addBox);

module.exports = routers;