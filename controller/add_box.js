const addBoxModel = require('../model/users_boxes')
    
module.exports = {
  async addBox(ctx) {
    const { userId, boxId } = ctx.request.body
    let userBoxInfo = {
      userId: userId,
      boxId: boxId,
    }

    await addBoxModel.findByUserBoxInfo(userBoxInfo)
      .then(async (res) => {
        if (res.length >= 1 && res[0].userId === userBoxInfo.userId && res[0].boxId === userBoxInfo.boxId) {
          ctx.body = {
            success: false,
            msg: '你已加入过该课程，无需再次加入!',
            status: 400,
          }
        } else {
          await addBoxModel.addBox(userBoxInfo)
          ctx.body = {
            success: true,
            msg: '加入成功!',
            status: 200,
          }
        }
      }, () => {
        ctx.body = {
          success: false,
          msg: '加入失败',
          status: 400,
        }
      })
  },
}