const { create, find } = require('../model/boxes')
// const { addUserBox } = require('./add_user_box')

const createBox = async ctx => {
  const boxInfo = ctx.request.body
  const { boxId, createId, className, course } = boxInfo
  if (!boxId || boxId.length > 30 || !createId || !className || !course) {
    return (ctx.body = {
      status: 400,
      msg: '缺少参数',
    })
  }

  await find(boxInfo, 'boxId').then(
    async res => {
      if (res.length >= 1) {
        return (ctx.body = {
          msg: '该盒子已存在，请重新输入!',
          status: 400,
        })
      }
      await create(boxInfo).then(
        async () => {
          // await addUserBox({userId: createId, boxId}).then(res => {
          //   return ctx.body = {
          //     msg: '创建成功并且添加对应关系成功!',
          //     status: 200,
          //     data: boxInfo,
          //   }
          // }, err => {
          //   console.log(err)
          //   return ctx.body = {
          //     msg: '创建成功得手动添加对应关系',
          //     status: 100,
          //   }
          // })
          return (ctx.body = {
            msg: '创建成功',
            status: 500,
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
  createBox,
}
