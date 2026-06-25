class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return this.check(s, i + 1, j) || this.check(s, i, j - 1);
            }
            i++;
            j--;
        }
        return true;
    }

    check(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
