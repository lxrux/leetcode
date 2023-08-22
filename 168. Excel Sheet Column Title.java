class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder result = new StringBuilder();
        while (columnNumber > 0) {
            if (columnNumber % 26 == 0) {
                result.append('Z');
                columnNumber--;
            }
            else {
                result.append((char) (65+ columnNumber % 26 - 1));
            }
            columnNumber /= 26;
        }

        return result.reverse().toString();
    }
}
