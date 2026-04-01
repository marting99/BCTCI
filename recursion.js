/*
problem 33.2
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
