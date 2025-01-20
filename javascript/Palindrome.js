function Palindrome(n){

    return n === +n.toString().split("").reverse().join("");
}
console.log(Palindrome(10))