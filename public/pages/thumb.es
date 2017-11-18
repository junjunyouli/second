
let f ="";
class  PraiseButton {
	constructor(num,emlemt) {
		this.num = num;
		this.emlemt = emlemt;
	}
	addPraiseButton(){
		return add(this.num);
	}
}

class Thumb extends PraiseButton {
	constructor (num,emlemt) {
		super(num,emlemt);
	}
	addThumb() {
		this.emlemt.click((e) =>{
			if(f){
				clearTimeout(f);
			}
			f= setTimeout(()=>{
			this.num=super.addPraiseButton(this.num);
			 $('#add').addClass('show');
			if(this.num%10==0){
				$(".pd").addClass('bd');
			}else{
				$(".pd").removeClass('bd');
			}
			axios.get('/index/update')
				  .then(function (response) {
				    	console.log(response);
				  })
				  .catch(function (error) {
				   	 console.log(error);
				  })
			setTimeout(function(){$('#add').removeClass('show');},1000)
			},800);
		});
	}
}
 export default {Thumb}
