class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newS = s;
        let newT = t;
        let sortedStringS = newS.split("").sort().join("");
        let sortedStringT = newT.split("").sort().join("");
        if (sortedStringS === sortedStringT) {
            return true;
        } else {
            return false;
        }
    }
}
