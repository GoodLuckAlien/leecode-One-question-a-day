/**
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1:

输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
输出: [[1,5],[6,9]]
示例 2:

输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出: [[1,2],[3,10],[12,16]]
解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠

 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
   intervals.push(newInterval)
   return merge( intervals )
};

 function merge (intervals) {
    if(intervals.length==0)
    return []
    var res=[]
    intervals.sort(function(a,b){
      return a[0]-b[0]
    })
    res.push(intervals[0])
    for(var i=1;i<intervals.length;i++){
      if(intervals[i][0]>res[res.length-1][1])
        res.push(intervals[i])
      else
        if(intervals[i][1]>res[res.length-1][1])
        res[res.length-1][1]=intervals[i][1]
    }
    return res
  };

  console.log( insert([[1,2],[3,5],[6,7],[8,10],[12,16]] ,[4,8]) )