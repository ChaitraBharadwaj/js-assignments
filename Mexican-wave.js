function wave(str){
	var obj = {
		input:str,
		output:function(){
			var result=[];
			var ind=1,index1=0,len=0;
			for(var i=0;i<this.input.length;i++){
				result.push(this.input.substr(index1,len)+this.input[i].toUpperCase()+this.input.substr(ind,this.input.length-ind))
			ind+=1;
			len+=1;
			}
		return result								
	}
	}
 return obj.output()
}
console.log(wave('hello'))
console.log(wave('gap'))