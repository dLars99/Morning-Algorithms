//Problem: Write a function that accepts an array of integers (arr) and a number (num) that calculates the maximum sum of num consecutive elements in the array


//function taking in an array (positive and/or negative) and num, which is the number of consecutive numbers in the array that should be added together
//ie if num is 3 we would be taking the sum of three consecutive numbers in the array
function maxSubarraySum(arr, num) {
    //instanstiate maxSum which will keep track of the MAX sum of the numbers being added together
    let maxSum = 0;

    //instanstiate tempSum which will keep track of the sum of the number being added together with each iteration through the loops
    let tempSum = 0;

    //edge case - if the array length is less than the value of num, we will automatically know there are not enough numbers to sum
    //therefore, return null
    if (arr.length < num) return null;

    //iterate through the first three numbers to get our first sum, which will be added to tempSum
    //in the array below it would be summing up index 0, 1, and 2 (values 2, 6, 9 respectively)
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    //maxSum will be assigned the value of tempSum
    maxSum = tempSum;

    //iterate through the same array NOW starting at index of num (ie in array below will be starting with index 3 with value of 2)
    for (let i = num; i < arr.length; i++) {
        // tempSum will be assigned value of tempSum (currently equal to 17) - arr[3-3] (i is equal to 3 and num is equal to 3) + arr[3] (the value at index 3 is 2):
        // this creates a 'sliding window', which takes the current tempSum and subtracts the value at the first index in the sum sequence and then "moves" the window 
        // and adds the value at the new index (which will make up the next 3 consecutive numbers; in the array below that new index will be 3 with a value of 2)
        tempSum = tempSum - arr[i - num] + arr[i];

        // Math.max will find the larger value between maxSum and current tempSum; if the maxSum is greater than tempSum, maxSum will just stay the same;
        // otherwise, maxSum will be assigned the current value tempSum
        maxSum = Math.max(maxSum, tempSum);
    }

    //after iterations finished whatever the maxSum is, return it
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
