class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        int i = 0;
        while (i < nums.length) {
            if (nums[i] == val)  {
                i++;
                continue;
            }

            nums[k++] = nums[i++];
        }
        return k;
    }
}
