

function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    array = str.split("")
    reverseStr = []
    function reverseArray(arr) {
        // 1. Base case
        if (arr.length === 0) return
        // 2. Recursive call
        reverseStr.unshift(arr[0])
        return reverseArray(arr.slice(1))
    }
    // 2.5 Call helper function
    reverseArray(array)
    // 3. Join reversed array and return the result
    return reverseStr.join("")
}

function reverse2(str) {
    if (str.length === 0) return ""
    return str[str.length - 1] + reverse2(str.substring(0, str.length - 1))
    // Udemy answer: return reverse2(str.slice(1)) + str[0])
}

console.log(reverse2('awesome')) // 'emosewa'
console.log(reverse2('rithmschool')) // 'loohcsmhtir'
