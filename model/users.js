const mysql = require('../config/mysql')

const add = async (data) => {
  const { userId, name, portrait, resources, homeworkList } = data
  const _sql = 'insert into users (userId, name, portrait, resources, homeworkList) values(?,?,?,?,?)'
  const res = mysql.query(_sql, [userId, name, portrait, resources, homeworkList])
  return res
}

const find = async (data) => {
  const _sql = 'SELECT * FROM users WHERE userId= ?'
  const res = mysql.query(_sql, [data.userId])
  return res
}

module.exports = {
  add,
  find,
}