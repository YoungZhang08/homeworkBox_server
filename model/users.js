const mysql = require('../config/mysql')

const add = async data => {
  const { userId, name, portrait } = data
  const _sql = 'insert into users (userId, name, portrait) values(?,?,?)'
  const res = mysql.query(_sql, [userId, name, portrait])
  return res
}

const find = async data => {
  const _sql = 'SELECT * FROM users WHERE userId= ?'
  const res = mysql.query(_sql, [data.userId])
  return res
}

const findBoxIdUserId = async data => {
  const _sql = 'select users.* from users, users_boxes where users_boxes.boxId = ? and users_boxes.userId = users.userId'
  const res = mysql.query(_sql, [data.userId])
  return res
}

module.exports = {
  add,
  find,
  findBoxIdUserId,
}
