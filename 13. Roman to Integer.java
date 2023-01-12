class Solution {
    
    public int romanToInt(String s) {
        int level = 7;
        int lastNumber = 0;
        int number = 0;
        char[] c = s.toCharArray(); 
        for (int i = 0; i < c.length; i++) {
            switch (c[i]) {
                case 'M':
                    number += get(7, 1000, level, lastNumber);
                    level = 7;
                    lastNumber = 1000;
                    break;
                case 'D':
                    number += get(6, 500, level, lastNumber);
                    level = 6;
                    lastNumber = 500;
                    break;
                case 'C':
                    number += get(5, 100, level, lastNumber);
                    level = 5;
                    lastNumber = 100;
                    break;
                case 'L':
                    number += get(4, 50, level, lastNumber);
                    level = 4;
                    lastNumber = 50;
                    break;
                case 'X':
                    number += get(3, 10, level, lastNumber);
                    level = 3;
                    lastNumber = 10;
                    break;
                case 'V':
                    number += get(2, 5, level, lastNumber);
                    level = 2;
                    lastNumber = 5;
                    break;
                case 'I':
                    number += get(1, 1, level, lastNumber);
                    level = 1;
                    lastNumber = 1;
                    break;
            }
        }

        return number;
    }

    public static int get(int numLev, int num, int level, int lastNumber) {
        return level >= numLev ? num : num - (2 * lastNumber);
    }
}
