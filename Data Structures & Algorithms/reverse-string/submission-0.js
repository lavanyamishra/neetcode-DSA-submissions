class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let p = 0;
        let q = s.length - 1;
        for (let i = 0; i < s.length; i++) {
            if (p < q) {
                let temp = s[p];
                s[p] = s[q];
                s[q] = temp;
                p++;
                q--;
            }
        }
        return s;
    }
}
