function fibonacci(n){

    if(n <= 1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
fibonacci(3);  // f(2)+f(1)  out:f(1)+1=1+1=2;

