const mysql = require('../config/mysql.js');
const getRandom = require('../config/getRandomCode.js');

let createBox = async(data) => {
    let max = 99999;
    let min = 10000;

    data.boxId = getRandom.getRandomCode(max, min);

    let _sql = `INSERT INTO boxes(boxId,createId,boxName,courseName,className) VALUES(?,?,?,?,?)`;
    await mysql.query(_sql, [data.boxId, data.createId, data.boxName, data.courseName, data.className], (err, res) => {
        if(err) {
            console.log(`新建失败 ${err}`);
            return;
        }
        console.log(res);
        return res;
    });
}

let findByBoxInfo = async(data) => {
    let _sql = `SELECT * FROM boxes WHERE courseName="${data.courseName}" OR className="${data.className}" OR boxName="${data.boxName}"`;
    await mysql.query(_sql, (err, res) => {
        if(err) {
            console.log(`查询失败 ${err}`);
            return;
        }
        console.log(res);
        return res;
    });
}

module.exports = {
    createBox,
    findByBoxInfo
};