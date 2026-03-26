// Without using a built-in string split method, implement a split(s, c) method, which receives a string s and a character c and splits s at each occurrence of c, returning a list of strings.


// Example 1: s = "split by space", c = ' '
// Output: ["split", "by", "space"]

// Example 2: s = "beekeeper needed", c = 'e'
// Output: ["b", "", "k", "", "p", "r n", "", "d", "d"]

// Example 3: s = "/home/./..//Documents/", c = '/'
// Output: ["", "home", ".", "..", "", "Documents", ""]

// Example 4: s = "", c = '?'
// Output: []

// Constraints:

// The length of the input string is at most 10^6
// The delimiter is a single character

/** Notes:
 * create an array of characters
 * loop through our string
 * while we dont encounter a c(delimeter) we push characters to this array
 * once we reach a delimeter and our array is not emtpy we join the elements and push the result in our array.
 * T: O(n)
 * S:O(n)
 * s = "split by space" , c = ' '
 *            ^
 * tmp = []
 * ["split"]
 */
/**
 * @param {string} s
 * @param {string} c
 * @return {string []}
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

function runTests() {
  const tests = [
    // Example 1 from the book
    ["split by space", " ", ["split", "by", "space"]],
    // Example 2 from the book
    ["beekeeper needed", "e", ["b", "", "k", "", "p", "r n", "", "d", "d"]],
    // Example 3 from the book
    [
      "/home/./..//Documents/",
      "/",
      ["", "home", ".", "..", "", "Documents", ""],
    ],
    // Example 4 from the book
    ["", "?", []],
    // Edge case - empty string with various delimiters
    ["", " ", []],
    ["", "\n", []],
    ["", "", []],
    // Edge case - single character string
    ["a", "a", ["", ""]],
    ["a", "b", ["a"]],
    // Edge case - no splits
    ["hello", "x", ["hello"]],
    ["hello", "?", ["hello"]],
    // Edge case - all splits
    ["aaa", "a", ["", "", "", ""]],
    // Edge case - special characters
    ["\n\n\n", "\n", ["", "", "", ""]],
    ["tab\tseparated\ttext", "\t", ["tab", "separated", "text"]],
    // Edge case - consecutive delimiters
    ["one,,two,,,three", ",", ["one", "", "two", "", "", "three"]],
    // Edge case - delimiter at start/end
    [",start,middle,end,", ",", ["", "start", "middle", "end", ""]],
    // Edge case - mixed length strings
    [
      "short,medium string,very very long string",
      ",",
      ["short", "medium string", "very very long string"],
    ],
    // Edge case - whitespace handling
    ["  leading space", " ", ["", "", "leading", "space"]],
    ["trailing space  ", " ", ["trailing", "space", "", ""]],
    // Edge case - numbers and special chars
    ["123,456,789", ",", ["123", "456", "789"]],
    ["!@#$%", "@", ["!", "#$%"]],
  ];

  for (const [s, c, want] of tests) {
    const got = mySplit(s, c);
    if (JSON.stringify(got) !== JSON.stringify(want)) {
      throw new Error(
        `\nsplit("${s}", "${c}"): got: ${JSON.stringify(got)}, want: ${JSON.stringify(want)}\n`,
      );
    }
  }
}

runTests();
