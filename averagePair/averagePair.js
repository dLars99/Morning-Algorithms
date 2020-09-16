/* A V E R A G E   P A I R
Given a SORTED array and a target average, determine if the average of any two members of the array equals
the target. Return true/false. This is a 'multiple pointers' practice problem.
Time: O(n)  Space: O(1)
*/

function averagePair(arr, target) {
    //1. Check for empty array
    if (arr.length === 0) return false
    //2. Instantiate our two pointers at the beginning and end of the array
    let left = 0
    let right = arr.length - 1
    //3. Iterate through the array. If the two pointers meet, we have traversed the full array.
    while (left < right) {
        //4. Calculate the average of the two pointers. We will compare this to the target.
        const average = (arr[left] + arr[right]) / 2
        //5. If it's a match, return true 
        if (average === target) {
            return true
        } else if (average < target) {
            //6. If the current average is too low, move the left pointer, and vice versa
            left++
        } else {
            right--
        }
    }
    //7. If we make it to the end without a match, return false
    return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8], 1.5))
console.log(averagePair([-2, -1, 2, 3, 6], 7))
console.log(averagePair([], 0))