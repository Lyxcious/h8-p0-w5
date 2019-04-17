function fibo(num){
    if (num <= 0){
        return 0
    }
    if (num === 1){
        return 1;
    } else {
        return fibo(num - 1) + fibo(num - 2)
    }
}
console.log(fibo(8))

// fibo:
// 0 1 1 2 3 5 8 13 21 dst...
// 0 1 2 3 4 5 6  7  8