class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let arr = [];
        for(let i = 0;i<word1.length;i++){
            arr.push(word1[i]);
            arr.push(word2[i])
        }
        for(let i = word1.length;i<word2.length;i++){
            arr.push(word2[i]);
        }
        return arr.join('');
    }
}
