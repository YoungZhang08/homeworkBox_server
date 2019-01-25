const mysql = require('../config/mysql.js')

let createBox = async(data) => {
  let _sql = 'INSERT INTO boxes(boxId,createId,introduce,course,class) VALUES(?,?,?,?,?)'
  await mysql.query(_sql, [data.boxId, data.createId, data.introduce, data.courseName, data.className])
}

let findByBoxInfo = async (data) => {
  let _sql = `SELECT * FROM boxes WHERE course="${data.courseName}" OR class="${data.className}" OR boxName="${data.boxName}"`
  return mysql.query(_sql)
}

module.exports = {
  createBox,
  findByBoxInfo,
}