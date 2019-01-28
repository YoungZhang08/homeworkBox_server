const boxesModel = require('../model/boxes')
const getRandom = require('../config/getRandomCode.js')
    
module.exports = {
  async createBox(ctx) {
    
    const boxId = getRandom.getRandomCode()
    console.log("boxId="+boxId)
    const boxInfo = ctx.request.body
    boxInfo.boxId = boxId
    const { courseName, className, boxName } = boxInfo

    await boxesModel.findByBoxInfo(boxInfo)
      .then(async(res) => {
        console.log(res)
        if (res.length >= 1) {
          if (res[0].courseName === courseName && res[0].className === className) {
            ctx.body = {
              success: false,
              msg: '该班级该课程已存在，请重新输入!',
              status: 400,
            }
          } else if (res[0].boxName === boxName) {
            ctx.body = {
              success: false,
              msg: '该盒子名称已被占用，请重新输入!',
              status: 400,
            }
          }
        } else {
          await boxesModel.createBox(boxInfo)
          let returnData = await boxesModel.findByBoxInfo(boxInfo)
          console.log(returnData);

          ctx.body = {
            success: true,
            msg: '创建成功!',
            status: 200,
            data: returnData[0].boxId,
          }
        }
      }, () => {
        ctx.body = {
          success: false,
          msg: '创建失败',
          status: 400,
        }
      })
  },
}