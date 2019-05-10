const {
  findUserid,
} = require('../model/resources')

const findUserResources = async ctx => {
  const { userId } = ctx.request.query
  if (!userId) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }

  await findUserid({
    userId,
  }).then(
    async res => {
      console.log(res)
      if (res.length >= 1) {
        return (ctx.body = {
          data: res,
          status: 200,
        })
      }
      return (ctx.body = {
        msg: '该盒子下面没有资源',
        status: 204,
      })
    },
    err => {
      console.log(err)
      return (ctx.body = {
        msg: '查询错误',
        status: 500,
      })
    }
  )
}

module.exports = {
  findUserResources,
}