const { findBoxIdUserId } = require('../model/users.js')

const getUsers = async ctx => {
  const boxId = ctx.request.query

  await findBoxIdUserId(boxId).then(
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
  getUsers,
}
