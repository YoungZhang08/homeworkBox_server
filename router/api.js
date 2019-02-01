const router = require('koa-router')()

const { createBox } = require('../controller/create_box')
const { getBox } = require('../controller/get_boxes')
const { getAddBoxes } = require('../controller/get_add_boxes')

const { addUserBox } = require('../controller/add_user_box.js')

const { addUser } = require('../controller/add_user')
const { findUser } = require('../controller/find_user')

const { getRandom } = require('../controller/get_random')
const { addHomework } = require('../controller/add_homework')
const { getBoxHomework } = require('../controller/get_box_homework')
const { getHomework } = require('../controller/get_homework')

const routers = router
  // 创建盒子
  .post('/createBox', createBox)
  // 查找盒子
  .get('/getBoxes', getBox)
  // 查找用户加入的盒子
  .get('/getAddBoxes', getAddBoxes)

  // 添加用户和盒子对应关系
  .post('/addUserBox', addUserBox)
  // 添加用户
  .post('/addUser', addUser)
  // 查找用户
  .get('/findUser', findUser)
  // 得到随机boxId
  .get('/getRandom', getRandom)
  // 添加作业表
  .post('/addHomework', addHomework)
  // 得到家庭作业
  .get('/getBoxHomework', getBoxHomework)
  .get('./getHomework', getHomework)

module.exports = routers