
class  PraiseButton {
	constructor(num,emlemt) {
		this.num = num;
		this.emlemt = emlemt;
	}
	addPraiseButton(){
		return this.num+1;
	}
}

class Thumb extends PraiseButton {
	constructor (num,emlemt) {
		super(num,emlemt);
	}
	addThumb() {
		this.emlemt.click((e) =>{
			this.num=super.addPraiseButton(this.num);
			 $('#add').addClass('show');
			if(this.num%10==0){
				$(".pd").addClass('bd');
			}else{
				$(".pd").removeClass('bd');
			}
			setTimeout(function(){$('#add').removeClass('show');},1000)
		});
	}
}
 export default {Thumb}


