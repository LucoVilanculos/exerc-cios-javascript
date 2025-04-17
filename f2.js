const FACTORIAL = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * FACTORIAL (n - 1);
    

};

console.log(FACTORIAL(20))