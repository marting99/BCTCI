// problem 26.1
/** Notes:
 * create an array of characters
 * loop through our string
 * while we dont encounter a c(delimeter) we push characters to this array
 * once we reach a delimeter and our array is not emtpy we join the elements and push the result in our array.
 * T: O(n)
 * S:O(n)
 * s = "split by space" , c = ' '
 */
/**
 * @param {string} s
 * @param {string} c
 * @return {string}
 */
function mySplit(s,c){
    if(s.length === 0)return [];
    const str = [];
    const result = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === c){
            result.push(str.join(""));
            // empty our array.
            while(str.length > 0){
                str.pop();
            }
        }else if (s[i] !== c){
            str.push(s[i]);
        }
    }
    result.push(str.join(""));
    return result;
}

