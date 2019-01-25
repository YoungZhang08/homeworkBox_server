const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const config = require('./config/default.js')
// const router = require('./router/index.js')

const app = new Koa()

app.use(bodyParser({}))

app.use(async(ctx, next) => {
  console.log(222)
  await next()
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
    return 
  }
  console.log(333)
})

app.use(async (ctx, next) => {
  console.log(55, ctx.request.body)
  await next()
  console.log(777)
})

app.use(async (ctx, next) => {
  console.log(777)
})

// app.use(router.routes()).use(router.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})