//write function that accepts two arrays
//function should return true if every value in the array has its corresponding value squared in the second array
//frequency of values must be the same, but order does not matter

function same(arr1, arr2) {
    //checking to see if the length of both arrays are equal; if they're not, then automatically false
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //looping through first array and...
    for (let num of arr1) {
        //num is the key and we are finding the value at that key --> value in this case is the frequency that the num appears
        // the value will equal the frequency, otherwise if it's not in the object it will be zero
        //each time you are at that key, you will increment 1 (keeps tally of the frequency)
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }

    //repeat the loop with arr2 (these loops are separated, which is better than a nested loop) --> time complexity is O(N)
    for (let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    //looping through the keys in the first object and...
    for (let key in frequencyCounter1) {
        // if the key^2 (ie num^2) is not in the second object, return false because no matching number
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        //if the frequency of the number in the second object is not equal to the frequency of the number in the first object we know it's not the same frequency in both objects so can return false 
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }


    return true;


}

array1 = [1, 2, 3, 2, 2]
array2 = [9, 1, 4, 4, 5]

const isThere = same(array1, array2)
console.log(isThere)