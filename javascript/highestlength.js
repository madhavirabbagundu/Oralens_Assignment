function abc(str){
    str  = str.split(" ")
    var out  = "";
    var max = 0;
    for(var i = 0; i < str.length; i++){
       if(str[i].length > out.length){
        out = str[i]
       }
  

       
    }
    console.log(out)
   
    

}
console.log(abc("I am a madhavi"))


// second method like sort method

function sor(s){
   s =  s.split(" ")
//    console.log(s)
    s =  s.reduce((a , b) =>(
        b.length > a.length ? b : a
    ))
    
return s;
}
console.log(sor("I am madhavi from the ap"))