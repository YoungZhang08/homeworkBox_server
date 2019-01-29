const { create, find } = require('../model/boxes')


const createBox = async (ctx) => {
  const boxInfo = ctx.request.body
  const { boxId, createId, className, course, introduce } = boxInfo
  if (!boxId || boxId.length > 30 || !createId || !className || !course || !introduce) {
    return ctx.body = {
      status: 400,
      msg: '缺少参数',
    }
  }

  await find(boxInfo)
    .then(async(res) => {
      if (res.length >= 1) {
        return ctx.body = {
          msg: '该盒子已存在，请重新输入!',
          status: 400,
        }
      }
      await create(boxInfo).then(() => {
        ctx.body = {
          msg: '创建成功!',
          status: 200,
          data: boxInfo,
        }
      }, err => {
        console.log(err)
        return ctx.body = {
          msg: '创建错误',
          status: 500,
        }
      })
    }, err => {
      console.log(err)
      return ctx.body = {
        msg: '查询错误',
        status: 500,
      }
    })
}

module.exports = {
  createBox,
}