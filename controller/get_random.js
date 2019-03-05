const { find } = require('../model/boxes')
const { getRandom: getNum } = require('../config/getRandom')

const getRandom = async ctx => {
  const boxId = getNum()
  await find({ boxId }, 'boxId').then(
    res => {
      if (res.length >= 1) {
        getRandom()
      } else {
        return (ctx.body = {
          status: 200,
          msg: '暂无此ID',
          id: boxId,
        })
      }
    },
    err => {
      console.log(err)
      return (ctx.body = {
        status: 500,
        msg: '查询出错',
      })
    }
  )
}

module.exports = {
  getRandom,
}
