const { find } = require('../model/boxes')

const getBox = async (ctx) => {
  const boxInfo = ctx.request.body
  const { boxId } = boxInfo
  if (!boxId) {
    return ctx.body = {
      status: 400,
      msg: '缺少参数',
    }
  }

  await find(boxInfo)
    .then(async(res) => {
      if (res.length >= 1) {
        return ctx.body = {
          msg: '查到了!',
          status: 200,
          data: res,
        }
      }
    }, err => {
      console.log(err)
      return ctx.body = {
        msg: '查询错误',
        status: 500,
      }
    })
}

module.exports = {
  getBox,
}