class Solution {
    public int[] plusOne(int[] digits) {
        int l = digits.length - 1;
        while (true) {
            if (digits[l] == 9) {
                digits[l] = 0;
                l--;
                if (l == -1) {
                    int[] joinedArray = new int[1 + digits.length];
                    joinedArray[0] = 1;
                    System.arraycopy(digits, 0, joinedArray, 1, digits.length);
                    return joinedArray;
                }
            }
            else {
                digits[l] = digits[l] + 1;
                return digits;
            }
        }
    }
}
