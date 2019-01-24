const router = require('koa-router')()
const boxes = require('../controller/create_box')
const usersBoxes = require('../controller/add_box')

const routers = router
  .post('/createBox', boxes.createBox)
  .post('/addBox', usersBoxes.addBox)

module.exports = routers