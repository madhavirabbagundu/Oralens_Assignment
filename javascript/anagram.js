function anagram(s,s1){
    s = s.split("").sort();
    s1 = s1.split("").sort();
    console.log(s,s1)
    if(s.length!=s1.length){
        return false;

    }
    else{
        for(var i = 0; i < s.length || s1.length; i++){
            if(s[i] === s1[i]){
              return true;
            }
        }
    }

}
console.log(anagram("listen","silent"))