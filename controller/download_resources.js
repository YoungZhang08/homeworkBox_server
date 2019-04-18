const {
  download,
} = require('../model/resources')
const send = require('koa-send')
const path = require('path')

const downloadResources = async ctx => {
  const {
    boxId,
    title,
  } = ctx.query
  if (!boxId || !title) {
    return (ctx.body = {
      msg: '缺少参数',
      status: 400,
    })
  }
  await download({
    boxId,
    title,
  }).then(
    async res => {
      if (res.length >= 1) {
        console.log(res[0].url)
        ctx.attachment(res[0].title)
        await send(ctx, res[0].url, {
          root: path.join(__dirname, '../upload'),
        })
      }
      return (ctx.body = {
        msg: '该资源不存在',
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
  downloadResources,
}