import rp from 'request-promise';
class  indexModel {
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum() {
		const options ={
		    method: 'GET',
		    uri: 'http://localhost:8011/parse.php',
		    header:{'Access-control-Allow-Origin':'*'}
		};
		return new Promise((resolve,reject) =>{
			rp(options).then(function(result){
				const info =  JSON.parse(result);
				if(info){
					resolve({data:info.result});
				}else{
					reject({});
				}
			})
			
		});
	}	
}

export default indexModel;