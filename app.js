const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const Router = require('koa-router');

const port = process.env.PORT || 3000;
const app = new Koa();
const router = new Router();

//Serve static files
app.use(serve(__dirname + '/public'));

//Catch all for server side rendering of pages for React Router
app.use(views(__dirname + '/public', {map: {html: 'underscore'}}));
//Server renders index.html, React Router renders correct page on client
router.get('/*', function(ctx) {
   return ctx.render('index');
})
app.use(router.routes());


app.listen(port, () => console.info('Koa listening on port',  port));
