const { findUserBoxes } = require('../model/boxes')

const getAddBoxes = async ctx => {
  const userInfo = ctx.request.query
  const { userId } = userInfo
  if (!userId) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }
  await findUserBoxes(userInfo).then(
    async res => {
      if (res.length > 0) {
        return (ctx.body = {
          status: 200,
          msg: '查到了',
          data: res,
        })
      }
      return (ctx.body = {
        status: 204,
        msg: '暂无数据',
      })
    },
    err => {
      console.log(err, 1)
      return (ctx.body = {
        msg: '查询出错',
        status: 400,
      })
    }
  )
}

module.exports = {
  getAddBoxes,
}
