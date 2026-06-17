class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = [];
        for(let i = 0;i<n;i++){
                ans[i] = nums[i];
        }
        for(let i = n;i<2*n;i++){
                ans[i] = ans[i-n];
        }
        return ans;
    }
}
