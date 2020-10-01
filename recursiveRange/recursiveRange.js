/* R E C U R S I V E   R A N G E
Find the sum of all numbers from 0 to a given number using a recursive function.
Time: O(n), Space: O(n)*/

function recursiveRange(num) {
    // 1. Establish a base case
    if (num === 0) return 0
    // 2. Recursive call/different number
    return num + recursiveRange(num - 1)
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
