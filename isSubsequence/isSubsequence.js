/* I S   S U B S E Q U E N C E
Given two strings, determine if the second string contains all the characters, in order, of the first string.
Time: O(n)   Space: O(1)
*/

const isSubsequence = (str1, str2) => {
    // Instantiate a pointer to keep track of our position in str1
    let pointer1 = 0
    // We will iterate through str2, using this second pointer
    for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
        // If the values are equal, then move the first pointer to the next character on the first string
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++
        }
        // If we have matched all characters on the first string, we have completed the function with a 'true' result
        if (pointer1 === str1.length) return true

        // Past this point, the loop will continue. The second pointer continues down the second string until the character matches that on
        // the first pointer
    }
    // If we have made it this far, then the second string does not contain all the characters of the first string
    return false
}

console.log(isSubsequence('aabac', 'abracadabra'))


