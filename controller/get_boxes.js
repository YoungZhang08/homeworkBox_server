const { find } = require('../model/boxes')

const getBoxes = async ctx => {
  const boxInfo = ctx.request.query
  const { createId } = boxInfo
  if (!createId) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }

  await find(boxInfo, 'createId').then(
    res => {
      if (res.length >= 1) {
        return (ctx.body = {
          msg: '查到了!',
          status: 200,
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
        msg: '查询错误',
        status: 500,
      })
    }
  )
}

module.exports = {
  getBoxes,
}
