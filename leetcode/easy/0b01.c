
//O(N*N) solution
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    //allocating memory for a array of size 2 where each value of the array
    //has a size of a integer (2 - 4 bytes) -> (16 - 32 bits);
    int* out = malloc((*returnSize = 2) * sizeof(int)); 
    for(int i = 0; i < numsSize; ++i) {
        for(int j = i+1; j < numsSize; ++j) {
            if(nums[j] + nums[i] == target) {
                out[0] = i;
                out[1] = j;
            }
        }
    }
    return out;
}




