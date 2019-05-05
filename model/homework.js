const mysql = require('../config/mysql.js')

let add = async data => {
  let _sql =
    'INSERT INTO homework(boxId, deadline, title, text) VALUES(?,?,?,?)'
  let res = await mysql.query(_sql, [
    data.boxId,
    data.deadline,
    data.title,
    data.text,
  ])
  console.log(res)
  return res
}

let find = async data => {
  let _sql = 'SELECT * FROM homework WHERE boxId=?'
  let res = await mysql.query(_sql, [data.boxId])
  // console.log(res)
  return res
}

let findBoxHomework = async data => {
  let _sql =
    'select homework.* from homework, users_boxes where users_boxes.boxId = homework.boxId and users_boxes.userId = ?'
  let res = await mysql.query(_sql, [data])
  console.log(res)
  return res
}
module.exports = {
  add,
  find,
  findBoxHomework,
}
