const mysql = require('../config/mysql.js')

const create = async data => {
  const {
    boxId,
    newPath,
    title,
  } = data
  const _sql =
    'INSERT INTO resources(boxId,url,title) VALUES(?,?,?)'
  const res = await mysql.query(_sql, [
    boxId,
    newPath,
    title,
  ])
  console.log(res)
  return res
}

const findBoxid = async data => {
  const _sql = 'SELECT * FROM resources WHERE boxId = ?'
  const {
    boxId,
  } = data
  const res = await mysql.query(_sql, [boxId])
  return res
}

const findUserid = async data => {
  let _sql =
    'SELECT r.* FROM resources AS r INNER JOIN users_boxes AS u ON r.boxId = u.boxId WHERE u.userId = ?'
  const {
    userId,
  } = data
  const res = await mysql.query(_sql, [userId])
  console.log(res)
  return res
}

const download = async data => {
  const _sql = 'SELECT * FROM resources WHERE boxId = ? AND title = ?'
  const {
    boxId,
    title,
  } = data
  const res = await mysql.query(_sql, [boxId, title])
  console.log(res)
  return res
}

module.exports = {
  create,
  findBoxid,
  findUserid,
  download,
}