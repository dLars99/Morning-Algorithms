/* C O U N T   U N I Q U E   V A L U E S
Count the number of unique values in a SORTED array.
Space: O(1)  Time: O(n)
*/

const countUniqueValues = (arr) => {
    // Set left counter at the beginning. It will increment as needed.
    let i = 0;
    // Set the right counter at the second index. It will traverse the full array.
    for (let j = 1; j < arr.length; j++) {
        // If the value at index j is not equal to the value at index i, a unique value has been found.
        // We will mutate the array to track the unique values.
        // For each match, increment i by one and replace the value at that index with the unique value at index j.
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        // If the values are equal, the value at index j is not unique. Continue the loop. j increments by 1 upon the next iteration.
    }
    // Since we have been tracking unique values with i, we can simply use its ending position to determine the count. Since i is
    // the index, add one for the total count.
    return i + 1
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 3]))