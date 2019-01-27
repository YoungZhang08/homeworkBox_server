const { add, find } = require('../model/users_boxes')

const addUserBox = async (ctx) => {
  const info = ctx.request.body

  await find(info)
    .then(async(res) => {
      if (res.length >= 1) {
        return ctx.body = {
          msg: '你已加入过该课程，无需再次加入!',
          status: 400,
        }
      }
      await add(info).then(() => {
        return ctx.body = {
          msg: '添加对应关系成功!',
          status: 200,
          data: info,
        }
      }, err => {
        console.log(err)
        return ctx.body = {
          msg: '添加失败!',
          status: 200,
        }
      })
    }, err => {
      console.log(err)
      return ctx.body = {
        msg: '查询失败!',
        status: 200,
      }
    })
}
module.exports = {
  addUserBox,
}