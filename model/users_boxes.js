const mysql = require('../config/mysql.js')

let add = async(data) => {
  let _sql = 'INSERT INTO users_boxes(userId, boxId) VALUES(?,?)'
  let res = await mysql.query(_sql, [data.userId, data.boxId])
  return res
}

let find = async(data) => {
  let _sql = 'SELECT * FROM users_boxes WHERE boxId=? AND userId= ?'
  let res = await mysql.query(_sql, [data.boxId, data.userId])
  return res
}

// let findByUserId = async(data) => {
//   let _sql = 'SELECT * FROM users_boxes WHERE userId=?'
//   let res = await mysql.query(_sql, data.userId)
//   console.log(res)
//   return res
// }
module.exports = {
  add,
  find,
  // findByUserId,
}