// users_boxes查询404 bug，31号再改
const { findBoxHomework } = require('../model/homework')

const getHomework = async ctx => {
  const userId = ctx.request.body
  console.log(ctx.request.body)

  await findBoxHomework(userId).then(
    async res => {
      console.log(res)
      if (res.length > 1) {
        return (ctx.body = {
          status: 200,
          msg: '查询成功',
          data: res,
        })
      }
    },
    err => {
      console.log(err)
      return (ctx.body = {
        msg: '查询出错',
        status: 400,
      })
    }
  )
}

module.exports = {
  getHomework,
}
