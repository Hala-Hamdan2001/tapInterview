//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. 
//Example 1:
//Input: nums = [2,2,1]
//Output: 1

//Example 2:
//Input: nums = [4,1,2,1,2]
//Output: 4

//Example 3:
//Input: nums = [1]
//Output: 1
function repeate(arr) {
    //After the interview, I noticed that I should check whether the array is empty
    if (arr.length === 0) {
        return "The array is empty";
    } 
    else {
        // The code I wrote faces several problems, the most important of which is poor performance, 
        // so I used this method
        // Initialize a variable through which the non-duplicate value will be found
        let result = 0;
        // Loop through the array and perform a bitwise XOR operation between the result and each element in the array.
        // This operation will effectively cancel out any duplicate elements.
        for (let num of arr) {
            result ^= num;
        }
        // The final value of result after this loop will be the unique element, 
        // as all duplicates will cancel each other out, and only the unique element will remain.
        return result;
    }
}

console.log(repeate([])); // Output: "The array is empty"
console.log(repeate([4, 1, 2, 1, 2])); // Output: 4
// I will illustrate this test case when the function called and the array is not empty the real code starts
// XOR is a binary operation that compares two binary digits (0s and 1s)
// If you XOR two bits and they are different (one is 0, and the other is 1), it results in 1.
// If you XOR two bits and they are the same (both 0 or both 1), it results in 0.
// XORing a number with itself results in 0
// Initially, result = 0
// Iteration 1: result ^ 4 => 0 ^ 4 => 4
// Iteration 2: result ^ 1 => 4 ^ 1 => 5
// Iteration 3: result ^ 2 => 5 ^ 2 => 7
// Iteration 4: result ^ 1 => 7 ^ 1 => 6
// Iteration 5: result ^ 2 => 6 ^ 2 => 4
console.log(repeate([1])); // Output: 1
console.log(repeate([2,2,1])); // Output: 1






