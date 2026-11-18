console.log("Closures-Memoization");

function add(fn) {
    let obj = {};

    return function (x, y) {
        let key = `${x},${y}`;

        if (obj.hasOwnProperty(key)) {
            console.log("from cache");
            return obj[key];
        }

        let res = fn(x, y);
        obj[key] = res;
        return res;
    };
}

const myAddFn = add((a, b) => {
    return a + b;
});

console.log(myAddFn(2, 3)); 
console.log(myAddFn(2, 3)); 
console.log(myAddFn(4, 5)); 