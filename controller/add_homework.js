const { add, find } = require('../model/homework')

const addHomework = async (ctx) => {
  const data = ctx.request.body
  const { boxId, title, text, deadline } = data
  if (!boxId || !title || !text || !deadline) {
    return ctx.body = {
      status: 400,
      msg: '缺少参数',
    }
  }
  await find(data).then(async res => {
    if (res.length > 1) {
      return ctx.body = {
        status: 200,
        msg: '欢迎登陆',
      }
    }

    await add(data).then(() => {
      return ctx.body = {
        status: 200,
        msg: '添加成功',
      }
    }, err => {
      console.log(err, 3)
      return ctx.body = {
        status: 500,
        msg: '添加出错',
      }
    })
  }, err => {
    console.log(err, 1)
    return ctx.body = {
      msg: '查询出错',
      status: 400,
    }
  })
}

module.exports = {
  addHomework,
}