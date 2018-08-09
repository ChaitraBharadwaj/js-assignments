function balance(a){
    var obj = {
        input:a,
        output:function(){
            var result1=0;
            var result2=0;
            if(this.input.length%2==0){
                for(var i=0;i<this.input.length/2;i++){
                 result1+=this.input[i]
                }
                for(var j=this.input.length-1;j>=this.input.length/2;j--){
                    result2+=this.input[j]
                }
                 if(result1!=result2){
                    var result=Math.abs(result1-result2)
                }
            }
          return result;  
        }
    }
    return obj.output()
}
console.log(balance([1,2,3,1,2,5]))