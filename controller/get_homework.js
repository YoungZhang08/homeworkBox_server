const { findBoxHomework } = require('../model/homework')

const getHomework = async ctx => {
  const { userId } = ctx.request.query
  if (!userId) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }
  await findBoxHomework(userId).then(
    res => {
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
  getHomework,
}
