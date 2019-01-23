const addBoxModel = require('../model/model_addbox');
    
module.exports = {
    async addBox(ctx) {
        let userBoxInfo = {
            userId: ctx.request.body.userId,
            boxId: ctx.request.body.boxId
        }

        await addBoxModel.findByUserBoxInfo(userBoxInfo)
            .then(async(res) => {
                console.log(res);
                if(res.length >= 1 && res[0].userId === userBoxInfo.userId && res[0].boxId === userBoxInfo.boxId) {
                    ctx.body = {
                        success: false,
                        msg: '你已加入过该课程，无需再次加入!',
                        status: 400
                    }
                } else {
                    await addBoxModel.addBox(userBoxInfo);
                    ctx.body = {
                        success: true,
                        msg: '加入成功!',
                        status: 200
                    }
                }
            })
    }
}