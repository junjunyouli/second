import rp from 'request-promise';
class  indexModel {
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum() {
		const options ={
		    method: 'GET',
		    uri: 'http://localhost:8081/parse.php'
		};
		return new Promise((resolve,reject) =>{
			rp(options).then(function(resulet){
				const info =  JSON.parse(result);
				if(info){
					resolve({data:info.resulet});
				}else{
					reject({});
				}
			})
			
		});
	}	
}

export default indexModel;