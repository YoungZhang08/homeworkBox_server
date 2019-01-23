const mysql = require('../config/mysql.js');

let addBox = async(data) => {

    let _sql = `INSERT INTO users-boxes(userId, boxId) VALUES(?,?)`;
    let res = await mysql.query(_sql, [data.userId, data.boxId]);
    return res;
}

let findByUserBoxInfo = async(data) => {
    let _sql = `SELECT * FROM users-boxes WHERE boxId="${data.boxId}" AND userId="${data.userId}"`;
    let res = await mysql.query(_sql);
    return res;
}
module.exports = {
    addBox,
    findByUserBoxInfo
};