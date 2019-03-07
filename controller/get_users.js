const { findBoxIdUserId } = require('../model/users.js')

const getUsers = async ctx => {
  const data = ctx.request.query
  if (!data.boxId) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }

  await findBoxIdUserId(data).then(
    async res => {
      if (res.length > 0) {
        return (ctx.body = {
          status: 200,
          msg: '查询成功',
          data: res,
        })
      }
      return (ctx.body = {
        msg: '啥都没有!',
        status: 200,
        data: null,
      })
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
  getUsers,
}
