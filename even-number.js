var numbers=[10,20,30,45,77];
function even(numbers){
    return numbers.filter(function(n){
        return n%2==0;
    })
}
console.log(even(numbers))