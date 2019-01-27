const router = require('koa-router')()
const { createBox } = require('../controller/create_box')
const { addUserBox } = require('../controller/add_user_box.js')
const { addUser } = require('../controller/add_user')

const routers = router
  .post('/createBox', createBox)
  .post('/addUSerBox', addUserBox)
  .post('/addUser', addUser)

module.exports = routers