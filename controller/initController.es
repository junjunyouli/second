import index from './indexController';

const  controllerInit = {
	init(router) {
		router.get("/index/index", index.index());
		router.get("/index/update", index.update());
	}
}

export default controllerInit;
