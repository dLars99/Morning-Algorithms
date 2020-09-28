/* P R O D U C T   O F   A R R A Y
Given an array of numbers, return the product of those numbers.
Time: O(n)  Space: O(n) */

const productOfArray = (arr) => {
    // 1. Establish base case: when we get to the final number, top off the stack and return that number
    if (arr.length === 1) return arr[0]
    // 2. Return the product of number and recursive call ("different number"). This will continue through the length of the array.
    //    Once the base call is triggered, the final answer will tally and return the end product.
    return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([6, 2, 3]))
console.log(productOfArray([1, 2, 3, 10]))
console.log(productOfArray([2, 5, 26, 37, 0, 3, 8, 1, 1, 1]))