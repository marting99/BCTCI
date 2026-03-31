/*
A nested array is an array where each element is either:

1. An integer, or
2. A nested array (note that this is a recursive definition).

The sum of a nested array is defined recursively as the sum of all its elements. Given a nested array, arr, return its sum.

Example 1: arr = [1, [2, 3], [4, [5]], 6]
Output: 21

Example 2: arr = [[[[1]], 2]]
Output: 3

Example 3: arr = []
Output: 0

Example 4: arr = [[], [1, 2], [], [3]]
Output: 6

Example 5: arr = [-1, [-2, 3], [4, [-5]], 6]
Output: 5

Constraints:
- The array can be nested to depth at most 500
- Each integer in the array is between -10^9 and 10^9
- The total number of integers in the array (counting nested ones) is at most 10^5
Notes:
- contents of the given array are numbers or a subarray
- have a global result
- if our index is >= arr.length return
- if arr[i] is a number 
    - add to our result
    - if we are an array && array.length > 0
    - helper(0,arr[i])
- helper(i+1,arr) 

T: O(n) where n is the length of the input array
S:O(h) depth of each subarray
*/
function nestedArraySum(array){
    let result = 0;
    const helper = (i,arr)=>{
        if(i >= arr.length || arr.length === 0)return;
        if(typeof(arr[i]) === 'number'){
            result+=arr[i];
        }
        if(typeof(arr[i]) === 'object'){
            helper(0,arr[i]); 
        }
        helper(i+1,arr);
    }
    helper(0,array);
    return result;
}

// console.log("Result: ",nestedArraySum([1, [2, 3], [4, [5]], 6]))
// console.log("Result: ",nestedArraySum([[[[1]], 2]]))
// console.log("Result: ",nestedArraySum([]))
// console.log("Result: ",nestedArraySum([[], [1, 2], [], [3]]))
// console.log("Result: ",nestedArraySum([-1, [-2, 3], [4, [-5]], 6]))
