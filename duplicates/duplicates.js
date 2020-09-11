/* A R E   T H E R E   D U P L I C A T E S
See if there are any duplicates in a set of arguments and return true if a duplicate pair is found.
The function should accept any number of arguments.
Time: O(n)   Space: O(1)
*/

// The original problem states that it can be solved using frequency counters or multiple pointers.
// This solution uses frequency counters.

function areThereDuplicates() {
    // Instantiate an object to keep track of existing values.
    const counterObject = {}
    // Use the 'arguments' object to iterate through any arguments passed in to the function
    for (let i = 0; i < arguments.length; i++) {
        if (counterObject[arguments[i]]) {
            // If the value already exists as a key in counterObject, it is a duplicate.
            return true
        } else {
            // Create a key to represent the arguments value. The object value can be anything; we just need to show
            // that this key exists.
            counterObject[arguments[i]] = 1
        }
    }
    // If we have made it this far, there are no duplicates.
    return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 1, 1))
console.log(areThereDuplicates('a', 'b', 'hello', 'b'))


/* Fun solution from the problem source. This does not incorporate either approach, but uses the Set object in JavaScript
to create a duplicate-less set. It then compares that Set's size to the original argument set's length. If they are the same,
there are no duplicates. Different sizes means there are duplicates.

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length
}

*/

