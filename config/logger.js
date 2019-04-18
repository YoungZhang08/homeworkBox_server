const log4js = require('koa-log4')
const path = require('path')

log4js.configure(path.join(__dirname, './log4j.json'))

let logger
module.exports = {
  getLogger: () => {
    if (logger === undefined) {
      logger = log4js.getLogger('app')
    }

    return logger
  },
  shutdownLogger: () => {
    log4js.shutdown()
  },
}