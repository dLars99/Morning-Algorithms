/* A N A G R A M
Frequency counter practice exercise.
Check if two strings are anagrams of each other. For the purpose of this function, the strings contain a single word
with no spaces or punctuation, and all the characters are lowercase.
*/

function validAnagram(str1, str2) {
    // 1. Compare lengths of two strings
    if (str1.length !== str2.length) {
        return false
    }

    // 2. Instantiate frequency counter objects
    const counterObject1 = {}
    const counterObject2 = {}

    // 3. Loop through each string and assign characters to counter objects as keys
    for (let i = 0; i < str1.length; i++) {
        const character = str1.charAt(i)
        // If the character is already present as a key, add 1 to its value. If not, the value is undefined, so set the value to 0 and add 1)
        counterObject1[character] = (counterObject1[character] || 0) + 1
    }
    for (let i = 0; i < str2.length; i++) {
        const character = str2.charAt(i)
        counterObject2[character] = (counterObject2[character] || 0) + 1
    }

    // 4. Use for/in on first counter object and compare keys to second counter object
    for (let key in counterObject1) {
        if (!key in counterObject2) {
            return false
        }
        if (counterObject1[key] !== counterObject2[key]) {
            return false
        }
    }

    return true
}

// Demonstration 1 - returns 'false' because the quantities of each character differ
str1 = "aaz"
str2 = "zza"

console.log(validAnagram(str1, str2))

// Demonstration 2 - returns 'true'
str3 = "texttwisttime"
str4 = "timetwisttext"

console.log(validAnagram(str3, str4))