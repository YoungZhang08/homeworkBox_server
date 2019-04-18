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
  return res
}

const find = async data => {
  const _sql = 'SELECT * FROM resources WHERE boxId = ?'
  const {
    boxId,
  } = data
  const res = await mysql.query(_sql, [boxId])
  return res
}

const download = async data => {
  const _sql = 'SELECT * FROM resources WHERE boxId = ? AND title = ?'
  const {
    boxId,
    title,
  } = data
  const res = await mysql.query(_sql, [boxId, title])
  return res
}

module.exports = {
  create,
  find,
  download,
}