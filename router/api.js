const router = require('koa-router')()
const { createBox } = require('../controller/create_box')
const { addUserBox } = require('../controller/add_user_box.js')
const { addUser } = require('../controller/add_user')
const { getRandom } = require('../controller/get_random')
const { addHomework } = require('../controller/add_homework')
const { getBoxHomework } = require('../controller/get_box_homework')
const { getHomework } = require('../controller/get_homework')

const routers = router
  .post('/createBox', createBox)
  .post('/addUserBox', addUserBox)
  .post('/addUser', addUser)
  .post('/getRandom', getRandom)
  .post('/addHomework', addHomework)
  .get('/getBoxHomework', getBoxHomework)
  .get('./getHomework', getHomework)

module.exports = routers