const router = require('koa-router')();
const createBoxCtrl = require('../controller/create_box');
const addBoxCtrl = require('../controller/add_box');

const routers = router
    .post('/createBox', createBoxCtrl.createBox)
    .post('/addBox', addBoxCtrl.addBox);

module.exports = routers;