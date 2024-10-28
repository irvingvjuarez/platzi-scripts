const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const sum = require('./sum');

router
  .get('/', (ctx, next) => {
    return ctx.body = { message: 'Hello World' };
  })
  .get('/add', (ctx, next) => {
    return ctx.body = { message: 'Add endpoint, dummy one' };
  })
  .get('/add/:a', (ctx, next) => {
    const value = ctx.params.a;
    return ctx.body = { value };
  })
  .get('/add/:a/:b', (ctx, next) => {
    const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
    return ctx.body = { result };
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
