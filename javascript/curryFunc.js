//curring function 
//1. method

function first(a){
    return function(b){
        return function(c){
            return a+b+c;

        }
    }
}
var data = first(4);
console.log(data(1)(5))

//second method
//partial
function fun(a){
  return function(b,c){
    return a+b+c;
  }

}
var sum = fun(3);
console.log(sum(4,5))

//3. step infinite curry

function curry(a){
return function(b){
    if(b){
        return curry(a+b);
    }
    else{
        return a;
    }
}

}
var da = curry(4);
console.log(da(4)(5)())