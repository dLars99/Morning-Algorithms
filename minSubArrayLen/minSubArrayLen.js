// This function should return the minimal length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (arr, target) => {
    if (arr.length < 1) return 0
    // 1. Instantiate the window boundaries, which are flexible
    let left = 0
    // 1.5 Check if first member meets the target by itself
    let sum = arr[left]
    let len = arr.length + 1
    if (sum >= target) {
        return 1
    }
    // 2. Iterate right pointer from 1 to the end
    for (let right = 1; right < arr.length; right++) {

        // 3. Add right pointer to cumulative sum and compare to target
        sum += arr[right]
        if (sum >= target) {

            // 4. If it's a match, start moving left pointer and subtracting values until it is no longer a match or equal to right pointer
            do {
                sum -= arr[left]
                left++
            } while (sum >= target && left <= right)
            // 5. Record length of the previous match and move on or return if length === 1
            /* When we exit the while loop, the left pointer is one farther left than the last successful subarray, so add 1.
                Then, the number of elements is 1 greater than the raw difference between the left and right indices.
                Net result: add 2 to the difference between the two indices. */
            len = Math.min(len, right - left + 2)
            if (len === 1) return len
        }
    }

    if (len > arr.length) {
        return 0
    } else {
        return len
    }

}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))