/* 
Problem 33.2
Notes:
- given an array of integers and a number where k >= 2
- must find a block of k consecutive equal integers and combine them into their sum
- if there are no k consecutive equal integers then the array is compressed
- thinking of stepping through the array and add elements to a stack, 
  just not quite sure how we are going to structure the contents of the stack
  - things that come to mind:
    - stack structure [[number,seenNumber]]
    - if number === last element in our stack, we update last seenNumber from stack
    - else we add the number and seenNumber = 1
    - while stack.length > 0 && seenNumber === k
    
    - finally we build our result from our stack
    
    T: O(n)
    S: O(n)
    
    Scratch:
    - [1, 9, 9, 3, 3, 3, 4]
    -[[1,1],[9,2],[3,1]]
*/
/**
 * 
 * @param {number} arr 
 * @param {number} k
 * @returns {number[]}
 */
function compressArrayByK(arr,k){
    const stack = [];
    const result = [];
    for(let i = 0; i < arr.length; i++){
        let number = arr[i];
        if(stack.length && number === stack[stack.length - 1][0]){
            // increment the seen value 
            stack[stack.length-1][1]++;
        }else{
            stack.push([number,1]);
        }
        while(stack.length && stack[stack.length - 1][1] === k){
            // calculation
            const [val, count] = stack.pop();
            let newVal = val * k;
            if (stack.length && stack[stack.length - 1][0] === newVal) {
                stack[stack.length - 1][1]++;
            } else {
                stack.push([newVal, 1]);
            }
        }
        
    }

    // build result array
    for(let [val,count] of stack){
        for(let i = 0; i < count; i++){
            result.push(val);
        }
    }
    return result;
}
console.log(compressArrayByK([1, 9, 9, 3, 3, 3, 4],3))
console.log(compressArrayByK([8, 4, 2, 2],2))
console.log(compressArrayByK([4, 4, 4, 4],5))
