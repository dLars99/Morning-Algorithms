/* F I B O N A C C I
Find the nth degree in the Fibonacci sequence
Time: O(2^n)    Space: O(n) */


// 1. Take in an argument for the 'nth' degree
function fib(deg) {
    //2. Establish a base case
    if (deg <= 2) return 1
    //3. Establish answer via recursive calls
    return fib(deg - 1) + fib(deg - 2)
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))
