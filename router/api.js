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

const { createResources } = require('../controller/create_resources')

const routers = router
  // 得到随机boxId
  .get('/getRandom', getRandom)
  // 创建盒子
  .post('/createBox', createBox)
  // 查找用户创建的盒子
  .get('/getBoxes', getBox)
  // 查找用户加入的盒子
  .get('/getAddBoxes', getAddBoxes)

  // 添加用户和盒子对应关系
  .post('/addUserBox', addUserBox)
  // 添加用户
  .post('/addUser', addUser)
  // 查找用户
  .get('/findUser', findUser)

  // 发布作业
  .post('/addHomework', addHomework)
  // 查找盒子下的作业
  .get('/getBoxHomework', getBoxHomework)
  // 查找主页的作业
  .get('/getHomework', getHomework)

  // 发布资源
  .post('/createResources', createResources)

module.exports = routers
