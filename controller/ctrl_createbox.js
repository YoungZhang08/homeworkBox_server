const createBoxModel = require('../model/model_createbox');

module.exports = {
    async createBox(ctx) {
        let boxInfo = {
            boxName: ctx.request.body.boxName,
            courseName: ctx.request.courseName,
            className: ctx.request.body.className
        }
        console.log(boxInfo);
        await createBoxModel.createBox(boxInfo)
            .then(async(res) => {
                console.log(res);
                if(res.courseName === boxInfo.courseName && res.className === boxInfo.className) {
                    console.log("该班级该课程已存在，请重新输入!");
                } else if(res.boxName === boxInfo.boxName) {
                    console.log("该盒子名称已被占用，请重新输入!");
                } else {
                    console.log("创建成功!")
                }
            })
    }
}