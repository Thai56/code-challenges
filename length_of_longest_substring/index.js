var lengthOfLongestSubstring = function(str) {
    // console.log(str)
    if (str.length === 1) return 1;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        let tempObj = { [str.charAt(i)]: i };
        for (let j = i + 1; j < str.length; j++) {
            if (tempObj[str.charAt(j)] === undefined) { // check undefined
                // console.log('getting here', tempObj);
                tempObj[str.charAt(j)] = j;
            } else {  // should exist
                if (j - i > max) max = j - i;
                break;
            }
            
            if (j === str.length - 1) { // handle last damnit
                if (str.length - i > max) max = str.length - i;
            }
        }
    }
    
    return max;
};

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');

