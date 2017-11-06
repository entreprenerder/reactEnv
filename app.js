const Koa = require('koa');
const Router = require('koa-router');

const port = process.env.PORT || 3000;
const app = new Koa();
const router = new Router();

router.get('/*', (ctx, next) => {
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>React Environment</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      <link rel="stylesheet" href="/globals.css">
    </head>
    <body>
      <div id="root"></div>
      <script src="/bundle.js"></script>
    </body>
  </html>`;
});


app.use(require("koa-static")(__dirname + "/public"));
app.use(router.routes());

app.listen(port, () => console.info('Koa listening on port',  port));
