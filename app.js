import  Koa  from  'koa';
import Router from 'koa-router';
import render  from 'koa-swig';
import  co from 'co';
import  s_static from "koa-static";
import  b_r from 'babel-core/register';
import  b_p from 'babel-polyfill';


import init from "./controller/initController";
import config from "./config/index";

const app = new Koa();
const router = new Router();
app
  .use(router.routes())
  .use(router.allowedMethods());

init.init(router);

app.context.render = co.wrap(render({
	root: config.get('viewDir'),
	autoescape: true,
	cache: false, 
	ext: 'html'
}));
app.use(s_static(config.get('staticDir')));
app.listen(config.get('port'),function(){
	console.log("server is running!");
})

export default  app;