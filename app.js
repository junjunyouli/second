const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-swig');
const co = require('co');
const s_static = require("koa-static");
const app = new Koa();
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(s_static(__dirname+ "/public"));
app.context.render = co.wrap(render({
	root: __dirname+'/views',
	autoescape: true,
	cache: false, 
	ext: 'html'
}));

router.get("/index/index",async function (ctx,next){
		await ctx.render('index');

})





app.listen(3000,function(){
	console.log("server is running!");
})