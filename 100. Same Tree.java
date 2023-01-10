/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        boolean val = false;
        
        if (p == null && q == null) {
            return true;
        }
        
        if (p != null && q != null) {
            val = p.val == q.val;
        }
        
        return val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}