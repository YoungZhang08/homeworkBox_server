const mysql = require('../config/mysql.js')

const addBox = async(data) => {
  const _sql = 'INSERT INTO users_boxes(userId, boxId) VALUES(?,?)'
  await mysql.query(_sql, [data.userId, data.boxId], (err, res) => {
    if (err) {
      console.log(`加入失败 ${err}`)
      return
    }
    console.log(res)
    return res
  })
}

const findByUserBoxInfo = async(data) => {
  const _sql = `SELECT * FROM users_boxes WHERE boxId="${data.boxId}" AND userId="${data.userId}"`
  await mysql.query(_sql, (err, res) => {
    if (err) {
      // console.log(`查找失败 ${err}`);
      return {
        error: true,
        msg: '查找失败',
      }
    }
    return {error: false, res}
  })
}

module.exports = {
  addBox,
  findByUserBoxInfo,
}