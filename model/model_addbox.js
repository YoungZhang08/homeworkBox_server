const mysql = require('../config/mysql.js');

let addBox = async(data) => {

    let _sql = `INSERT INTO users_boxes(userId, boxId) VALUES(?,?)`;
    let res = await mysql.query(_sql, [data.userId, data.boxId]);
    return res;
}

let findByUserBoxInfo = async(data) => {
    let _sql = `SELECT * FROM users_boxes WHERE boxId="${data.boxId}" AND userId="${data.userId}"`;
    let res = await mysql.query(_sql);
    console.log(res);
    return res;
}
module.exports = {
    addBox,
    findByUserBoxInfo
};