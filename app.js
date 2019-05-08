const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')
const router = require('./router/index.js')
const Logger = require('koa-logger')
const log4js = require('koa-log4')
const path = require('path')
const Cors = require('@koa/cors')
const app = new Koa()

app.use(bodyParser({}))

app.use(Cors({
  credentials: true,
}))

log4js.configure(path.join(__dirname, './config/log4j.json'))
app.use(log4js.koaLogger(log4js.getLogger('http'), {
  level: 'auto',
}))
app.use(Logger())


app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})