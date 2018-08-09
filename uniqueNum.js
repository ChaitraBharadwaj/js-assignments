function unique(arr){
    var obj = {
        input:arr,
        output:function(){
            var number;
            this.input.forEach(function(num1){
        var result = obj.input.filter(function(num){
            return num==num1;
        })
        if(result.length==1){
             number = result[0]
        }
          
    })
    return number
    }
    }
    return obj.output()
    }
    console.log(unique([1,2,3,2,1]))