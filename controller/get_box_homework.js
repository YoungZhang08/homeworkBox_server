const { find } = require('../model/homework')

const getBoxHomework = async ctx => {
  await find(ctx.request.body).then(
    async res => {
      console.log(res)
      if (res.length >= 0) {
        return (ctx.body = {
          status: 200,
          msg: '查询成功',
          data: res,
        })
      }
      return (ctx.body = {
        status: 200,
        msg: '查询成功',
        data: res,
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
  getBoxHomework,
}
