function numStringrange(a,b,c){
    var obj = {
           start:a,
            end:b,
            value:c,
            output:function(){
                  var result=[];
                  if(typeof this.start=='number'){
                      for(var i=this.start;i<=this.end;i++){
                          result.push(i);
                          i+=this.value-1;
                      }
                  }else{
                      var string='abcdefghijklmnopqrstuvwxyz';
                      var array=string.split('');
                      for(var i=0;i<array.length;i++){
                          result.push(array[i])
                          i+=this.value-1;
                      }
                  }
                      return result;
              }	
      }
      return obj.output()
  }
  console.log(numStringrange(1,10,2))
console.log(numStringrange('a','z',2))