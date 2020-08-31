/*
B I N A R Y   S E A R C H
An algorithm to perform an optimized search on a SORTED array by dividing the array in half each time.
Time Complexity: O(logN)     Space Complexity: O(1) (I think)
*/

const binarySearch = (arr, target) => {

    // 1. Point to the beginning and endpoint of the subarray
    let found                               // Value to return
    let leftPointer = 0                     // Set to beginning of array
    let rightPointer = arr.length - 1       // Set to end of array
    let middle                              // Midpoint of subarray that we will check against the target

    // Keep searching until either a) the target is found, or b) we can no longer divide the array in half
    while (arr[middle] !== target && middle <= rightPointer) {

        // 2. Find the midpoint of the current subarray
        middle = Math.floor((rightPointer - leftPointer) / 2)

        // 3. Check if the target is in the subarray
        // 4. Move the appropriate pointer
        if (target < arr[middle]) {
            // Target is lower than our current value, so we can move the RIGHT pointer and eliminate all HIGHER values
            rightPointer = middle - 1
        } else if (target > arr[middle]) {
            // Target is higher than our current value, so we can move the LEFT pointer and eliminate all LOWER values
            leftPointer = middle + 1
        } else if (arr[middle] === target) {
            // We found our target! Set 'found' to the index of the target value.
            found = middle
        }
    }

    // We will return the index if the number was found. Otherwise, we will return 'undefined'
    return found

}

const arr = [1, 4, 15, 27, 28, 33, 45, 67, 86, 99]

const check = binarySearch(arr, 9)
console.log(check)

