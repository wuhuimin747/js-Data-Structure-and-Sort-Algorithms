// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2:

// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// dp[i]表示当前抢到的总价值
// 核心问题就是判断nums[i]抢不抢，抢的话就是nums[i] + dp[i-2],不抢的话就是dp[i-1]
// 所以当前总价值是Max(nums[i] + dp[i-2], dp[i-1])
// 每次遍历需要更新dp[i-2], dp[i-1]这两个值
// dp题目一定要画表

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp_i_1 = 0;
    let dp_i_2 = 0;
    for(var i=0 ; i<nums.length; i++){
      var temp = dp_i_1;
      dp_i_1 = Math.max(nums[i] + dp_i_2, dp_i_1);
      dp_i_2 = temp;
    }
    return dp_i_1;
};