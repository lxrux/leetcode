class Solution {
    public int romanToInt(String s) {
        int result = 0;
        int lastNumber = 0;
        int number = 0;
        for (int i = 0; i < s.length(); i++) {
            switch (s.charAt(i)) {
                case 'M': number = 1000; break;
                case 'D': number = 500; break;
                case 'C': number = 100; break;
                case 'L': number = 50; break;
                case 'X': number = 10; break;
                case 'V': number = 5; break;
                case 'I': number = 1; break;
            }
            result += number;
            if (number > lastNumber) {
                result -= lastNumber << 1;
            }
            lastNumber = number;
        }

        return result;
    }
}
