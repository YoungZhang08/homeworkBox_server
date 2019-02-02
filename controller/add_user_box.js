const { add, find } = require('../model/users_boxes')

const addUserBox = async (ctx) => {
  const data = ctx.request ? ctx.request.body : ctx
  const { userId, boxId } = data
  if (!userId || !boxId ) {
    return ctx.body = {
      status: 400,
      msg: '缺少参数',
    }
  }
  await find(data)
    .then(async(res) => {
      if (res.length >= 1) {
        return ctx.body = {
          msg: '你已加入过该课程，无需再次加入!',
          status: 200,
        }
      }
      await add(data).then(() => {
        return ctx.body = {
          msg: '添加对应关系成功!',
          status: 200,
          data: data,
        }
      }, err => {
        console.log(err)
        return ctx.body = {
          msg: '添加失败!',
          status: 500,
        }
      })
    }, err => {
      console.log(err)
      return ctx.body = {
        msg: '查询失败!',
        status: 500,
      }
    })
}
module.exports = {
  addUserBox,
}