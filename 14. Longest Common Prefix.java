class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) {
            return "";
        }
        
        String result = "", tempPrefix;
        int currentStep = 0;
        
        while (true) {
            tempPrefix = "";
            for (int i = 0; i < strs.length; i++) {
                if (strs[i].length() < currentStep) {
                    return result;
                }
                
                if (i == 0) {
                    tempPrefix = strs[i].substring(0,currentStep);
                }
                else {
                    if (!tempPrefix.equals(strs[i].substring(0,currentStep))) {
                        return result;
                    }
                }
            }
            
            result = tempPrefix;
            currentStep++;
        }
    }
}
