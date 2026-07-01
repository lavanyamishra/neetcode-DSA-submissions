class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p =0;
        for(let i = 0;i<=numbers.length;i++){
            for(let j = i+1;j<numbers.length;j++){
                if(numbers[i] != numbers[j]){
                    if(numbers[i]+numbers[j]=== target){
                        return [i+1,j+1];
                    }
                }else{
                    break;
                }
            }
            // if(numbers[p]<numbers[i]){
            // if(numbers[p]+numbers[i] === target){
            //     return [numbers[p],numbers[i]];
            // }
           // }
        }
    }
}
