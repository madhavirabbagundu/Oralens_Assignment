function sum(arr,target){
for(var i = 0; i < arr.length-1; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i]+arr[j] === target){
            console.log([i,j])
        }
    }
}
}
console.log(sum([2,3,5,7,1],8))