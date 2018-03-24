import Router from 'koa-router';
import Reminder from './model/Reminder';
import bodyparser from 'koa-bodyparser';
import AuthTokenProvider from './dal/auth-token-provider';

const auth = new Router();
const authTokenProvider = new AuthTokenProvider(); //todo: connection string from config

auth
    .get('/token', async (ctx, next) => {
        await authTokenProvider.createToken();
    })
    .post('/authenticate', async (ctx, next) => {
        const userId = 0; //todo: get from request body
        await authTokenProvider.authenticateToken(ctx.token, ctx.userId);
    });

export default api;