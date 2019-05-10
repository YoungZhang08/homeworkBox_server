const {
  create,
  download,
} = require('../model/resources')
const fs = require('fs')
const {
  getLogger,
} = require('../config/logger')
const logger = getLogger()

const createResources = async ctx => {
  const boxInfo = ctx.request.body
  const {
    boxId,
    title,
  } = boxInfo

  if (!boxId || boxId.length > 30 || !title || !ctx.request.files) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }

  const {
    file,
  } = ctx.request.files

  const {
    path,
  } = file
  let suffix = file.name.split('.');
  let filename = `${boxId}${Date.parse(new Date())}.${suffix[suffix.length - 1]}`
  let newPath = path.split('upload_')
  newPath[1] = filename
  newPath = newPath.join('')

  fs.rename(path, newPath, (e) => {
    if (e) {
      logger.error(`Reason: test error, Date:${new Date().toLocaleString()}, error:${e}`)
    }
  })
  await download({
    boxId,
    title,
  }).then(
    async res => {
      if (res.length >= 1) {
        return (ctx.body = {
          msg: '该文件已存在，请重新输入!',
          status: 400,
        })
      }
      await create({
        boxId,
        title,
        newPath,
      }).then(
        () => {
          return (ctx.body = {
            msg: '创建成功',
            status: 200,
            data: boxInfo,
          })
        },
        err => {
          console.log(err)
          return (ctx.body = {
            msg: '创建错误',
            status: 500,
          })
        }
      )
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
  createResources,
}