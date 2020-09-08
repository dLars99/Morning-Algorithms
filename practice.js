const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let middle
    // if (arr[left] === target || arr[right] === target) {
    //     return true
    // }
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (target === arr[middle]) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1
        } else if (arr[middle] > target) {
            right = middle - 1
        }
    }

    return false
}

const arr = [ -3, -1, 0, 3, 5, 16, 27, 33]

console.log(binarySearch(arr, 57))