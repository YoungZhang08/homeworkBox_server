const mysql = require('../config/mysql.js')

const create = async data => {
  const { boxId, createId, className, course, introduce } = data
  const _sql =
    'INSERT INTO boxes(boxId,createId,class,course,introduce) VALUES(?,?,?,?,?)'
  const res = await mysql.query(_sql, [
    boxId,
    createId,
    className,
    course,
    introduce,
  ])
  return res
}

const find = async data => {
  const _sql = 'SELECT * FROM boxes WHERE boxId = ?'
  const res = await mysql.query(_sql, data.boxId)
  return res
}

module.exports = {
  create,
  find,
}
