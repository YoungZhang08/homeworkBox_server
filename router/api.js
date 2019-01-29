const router = require('koa-router')()
const { createBox } = require('../controller/create_box')
const { addUserBox } = require('../controller/add_user_box.js')
const { addUser } = require('../controller/add_user')
const { getRandom } = require('../controller/get_random')

const routers = router
  .post('/createBox', createBox)
  .post('/addUSerBox', addUserBox)
  .post('/addUser', addUser)
  .post('/getRandom', getRandom)

module.exports = routers