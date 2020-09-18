/* I S   S U B S E Q U E N C E
Given two strings, determine if the second string contains all the characters, in order, of the first string.
Time: O(n)   Space: O(1)
*/

const isSubsequence = (str1, str2) => {
    // Instantiate a pointer to keep track of our position in str1
    let pointer1 = 0
    // We will iterate through str2, using this second pointer
    for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++
        }
        if (pointer1 === str1.length) return true
    }
    return false
}

console.log(isSubsequence('aabac', 'abracadabra'))


