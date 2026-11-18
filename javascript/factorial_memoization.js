console.log("Factorial Memoization");

function memoizeFactorial(fn) {
    let cache = {};

    return function (n) {
        if (cache.hasOwnProperty(n)) {
            console.log("from cache");
            return cache[n];
        }

        let result = fn(n);
        cache[n] = result;
        return result;
    };
}

const factorial = memoizeFactorial(function fact(n) {
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // from cache -> 120
console.log(factorial(6)); // 720