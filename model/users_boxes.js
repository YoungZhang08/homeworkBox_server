const mysql = require('../config/mysql.js')

const addBox = async(data) => {
  const _sql = 'INSERT INTO users_boxes(userId, boxId) VALUES(?,?)'
  await mysql.query(_sql, [data.userId, data.boxId])
}

const findByUserBoxInfo = async (data) => {
  const _sql = `SELECT * FROM users_boxes WHERE boxId="${data.boxId}" AND userId="${data.userId}"`
  await mysql.query(_sql)
}

module.exports = {
  addBox,
  findByUserBoxInfo,
}