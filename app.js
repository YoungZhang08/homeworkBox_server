const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')
const router = require('./router/index.js')

const app = new Koa()

app.use(bodyParser({}))

app.use(async(ctx, next) => {
  next()
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type, authorization')
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Max-Age', 300)
  if (ctx.request.method === 'OPTIONS') {
    ctx.body = {
      msg: 'preFlighted requested is ok!',
    }
  }
})

app.use(async (ctx, next) => {
  const { boxId, userId } = ctx.request.body
  if (!boxId || !userId) {
    ctx.body = {
      success: false,
      msg: '缺少参数',
      status: 400,
    }
    return
  }
  next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})