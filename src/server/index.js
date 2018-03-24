import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa2-static-middleware';
import send from 'koa-send';

import api from './api';
import auth from './auth';

const app = new Koa();
const router = new Router();

router
    //.get('/*', serve(__dirname + '/public', { index: 'index.html' }))
    .get('/:token?', async (ctx, next) => {
        await send(ctx, 'public/index.html', {root: __dirname });
    })
    .use('/api', api.routes(), api.allowedMethods())
    .use('/auth', auth.routes(), auth.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(process.env.PORT || 3200);