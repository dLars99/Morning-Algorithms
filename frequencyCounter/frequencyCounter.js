//write function that accepts two arrays
//function should return true if every value in the array has its corresponding value squared in the second array
//frequency of values must be the same, but order does not matter
// Code contributed by Sisi Freeley

function same(arr1, arr2) {
    //checking to see if the length of both arrays are equal; if they're not, then automatically false
    if (arr1.length !== arr2.length) {
        return false
    }

    //looping through array1 and...
    for (let i = 0; i < arr1.length; i++) {
        //setting the value of variable correctIndex to boolean value - checking to see if second array has the value of of arr1 at a particular index ^2
        //because this is a nested loop (indexOf is a loop in itself), it is O(N^2)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if that value is not in the second array, return false
        if (correctIndex === -1) {
            return false;
        }
        //make sure to splice or remove that one value at the index of correctIndex from the second array so it knows not to check that number again
        arr2.splice(correctIndex, 1)
    }
    return true;
}

array1 = [1, 2, 3, 2]
array2 = [9, 1, 4, 4]

const isThere = same(array1, array2)
console.log(isThere)