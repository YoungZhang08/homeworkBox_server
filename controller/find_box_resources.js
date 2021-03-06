const {
  findBoxid,
} = require('../model/resources')

const findBoxResources = async ctx => {
  const {
    boxId,
  } = ctx.query
  if (!boxId) {
    return (ctx.body = {
      msg: '缺少参数',
      status: 400,
    })
  }
  await findBoxid({
    boxId,
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
  findBoxResources,
}