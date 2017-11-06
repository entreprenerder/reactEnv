const Koa = require('koa');
const serve = require('koa-static');

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(serve(__dirname + "/public"));
app.use(router.routes());

app.listen(port, () => console.info('Koa listening on port',  port));
