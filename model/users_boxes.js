const mysql = require('../config/mysql.js')

let add = async data => {
  let _sql = 'INSERT INTO users_boxes(userId, boxId) VALUES(?,?)'
  let res = await mysql.query(_sql, [data.userId, data.boxId])
  return res
}

let find = async data => {
  let _sql = 'SELECT * FROM users_boxes WHERE boxId=? AND userId= ?'
  let res = await mysql.query(_sql, [data.boxId, data.userId])
  return res
}

module.exports = {
  add,
  find,
}
