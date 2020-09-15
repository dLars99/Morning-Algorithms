/* R E V E R S E   S T R I N G
Given a string, reverse the characters in the string so that it reads backwards from the given input.
Time: O(N)    Space: O(1)
*/

// const reverseString = (str) => {
//     // 1. Create a new variable to hold the new string
//     let newString = ""
//     // 2. Iterate through the given string, starting at the end
//     for (let i = str.length - 1; i >= 0; i--){
//         // 3. Add character at 'i' to new string variable
//         newString += str[i]
//     }

//     return newString
// }

const reverseString = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverseString("abc"))
console.log(reverseString("Tacocat"))
console.log(reverseString("nam daed ,no em nruT"))