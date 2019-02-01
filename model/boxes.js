const mysql = require('../config/mysql.js')

const create = async(data) => {
  const { boxId, createId, className, course, introduce } = data
  const _sql = 'INSERT INTO boxes(boxId,createId,class,course,introduce) VALUES(?,?,?,?,?)'
  const res = await mysql.query(_sql, [boxId, createId, className, course, introduce])
  return res
}

const find = async(data, name) => {
  const _sql = `SELECT * FROM boxes WHERE ${name} = ?`
  const res = await mysql.query(_sql, data[name])
  return res
}

const findUserBoxes = async(data) => {
  const _sql = 'select boxes.* from boxes, users_boxes, users where users.userId = users_boxes.userId and users_boxes.boxId = boxes.boxId and users.userId = ?'
  const res = await mysql.query(_sql, data.userId)
  return res
}


module.exports = {
  create,
  find,
  findUserBoxes,
}