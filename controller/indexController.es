import indexModel from '../models/indexModel';
const indexController ={
	index(){
		return async (ctx,next) => {
			ctx.body = await  ctx.render('index.html');
		}
	},
	update(){
		return async (ctx,next) => {
			const  tap = new indexModel(ctx);
			ctx.body= await tap.updateNum();
		}
	}
}

export default indexController;