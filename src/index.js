import Koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
    console.log(ctx.path);
    await send(ctx, ctx.path, { root: __dirname + '/public' });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(process.env.PORT || 3200);