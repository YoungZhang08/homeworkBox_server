const {
  download,
} = require('../model/resources')
const send = require('koa-send')
const path = require('path')
const filetype = require('../config/filetype')

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
        let suffix = res[0].url.split('.')
        console.log(filetype[suffix[suffix.length - 1]], suffix[suffix.length - 1], ctx.type)
        await send(ctx, res[0].url.split('upload')[1], {
          root: path.join(__dirname, '../upload'),
        })
        /*
        *Content-Disposition:"attachment;filename=ÌåÑé_2[www.mianfeiwendang.com].doc"
        *Content-Type:"application/octet-stream; charset=gb2312"
        */
        ctx.set('Content-Disposition', 'attachment;filename=' + res[0].title + '.' + suffix[suffix.length - 1])
        ctx.set('Content-Type', 'application/' + suffix[suffix.length - 1])
      } else {
        return (ctx.body = {
          msg: '该资源不存在',
          status: 204,
        })
      }
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