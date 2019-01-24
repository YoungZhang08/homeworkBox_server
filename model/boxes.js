const mysql = require('../config/mysql.js')
const getRandom = require('../config/getRandomCode.js')

let createBox = async(data) => {
  let max = 99999
  let min = 10000
  data.boxId = getRandom.getRandomCode(max, min)
  let _sql = 'INSERT INTO boxes(boxId,createId,boxName,courseName,className) VALUES(?,?,?,?,?)'
  await mysql.query(_sql, [data.boxId, data.createId, data.boxName, data.courseName, data.className])
}

let findByBoxInfo = async (data) => {
  let _sql = `SELECT * FROM boxes WHERE courseName="${data.courseName}" OR className="${data.className}" OR boxName="${data.boxName}"`
  return mysql.query(_sql)
}

module.exports = {
  createBox,
  findByBoxInfo,
}