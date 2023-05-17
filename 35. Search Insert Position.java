class Solution {
    public int searchInsert(int[] nums, int target) {
        int indx = 0;
        while (indx < nums.length) {
            if (nums[indx] == target || nums[indx] > target) {
                return indx;
            }

            indx++;
        }

        return indx;
    }
}
