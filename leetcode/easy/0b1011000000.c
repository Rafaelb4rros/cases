// 704 - binary search
// O(n) solution;
int search(int* nums, int numsSize, int target){
    int left = 0, right = numsSize-1;
    while(left <= right) {
        int mid = left+(right-left)/2;
        if(nums[mid] == target) return mid;
        else if(target > nums[mid]) left = mid+1;
        else if(target < nums[mid]) right = mid-1;
    }
    return -1;
}
