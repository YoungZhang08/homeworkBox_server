const mysql = require('../config/mysql.js');
const getRandom = require('../config/getRandomCode.js');

let createBox = async(data) => {
    let max = 99999;
    let min = 10000;

    data.boxId = getRandom.getRandomCode(max, min);
    console.log(data.boxId);

    let _sql = `INSERT INTO boxes(boxId,boxName,courseName,className) VALUES(?,?,?,?)`;
    let res = await mysql.query(_sql, [data.boxId, data.boxName, data.courseName, data.className]);
    console.log("插入数据："+ res);
    return res;
}
module.exports = {
    createBox
};