const createBoxModel = require('../model/createbox');
    
module.exports = {
    async createBox(ctx) {
        let boxInfo = {
            createId: ctx.request.body.createId,
            boxName: ctx.request.body.boxName,
            courseName: ctx.request.body.courseName,
            className: ctx.request.body.className
        }

        await createBoxModel.findByBoxInfo(boxInfo)
            .then(async(res) => {
                if(res.length >= 1) {
                    if(res[0].courseName === boxInfo.courseName && res[0].className === boxInfo.className) {
                        ctx.body = {
                            success: false,
                            msg: '该班级该课程已存在，请重新输入!',
                            status: 400
                        }
                    } else if(res[0].boxName === boxInfo.boxName) {
                        ctx.body = {
                            success: false,
                            msg: '该盒子名称已被占用，请重新输入!',
                            status: 400
                        }
                    }
                } else {
                    await createBoxModel.createBox(boxInfo);
                    let returnData = await createBoxModel.findByBoxInfo(boxInfo);
                    // console.log(returnData);
                    ctx.body = {
                        success: true,
                        msg: '创建成功!',
                        status: 200,
                        data: returnData[0].boxId
                    }
                }
            })
    }
}