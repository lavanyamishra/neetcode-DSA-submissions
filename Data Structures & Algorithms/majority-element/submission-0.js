class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map;
        let num = 0
        for(num of nums){
            map.set(num,(map.get(num) || 0)+1);
        }
        console.log(map);
        for(let [key,value] of map){
            if(value> nums.length/2) return key;
        }
    }
}
