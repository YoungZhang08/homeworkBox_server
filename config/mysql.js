const mysql = require('mysql')
const config = require('./default')
const {
  getLogger,
} = require('./logger')
const logger = getLogger()

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

let query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        logger.error(`Reason: test error, Date:${new Date().toLocaleString()}, error:${err}`)
      } else {
        connection.query(sql, val, (err, res) => {
          if (err) {
            reject(err)
            logger.error(`Reason: test error, Date:${new Date().toLocaleString()}, error:${err}`)
          } else {
            resolve(res)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query,
}