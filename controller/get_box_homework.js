const { find } = require('../model/homework')

const getBoxHomework = async ctx => {
  const boxId = ctx.request.body

  await find(boxId).then(
    async res => {
      console.log(res)
      if (res.length >= 1) {
        return (ctx.body = {
          status: 200,
          msg: '查询成功',
          data: res,
        })
      }
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
