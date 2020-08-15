/**
 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false


提示：

board 和 word 中只包含大写和小写英文字母。
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

 */

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let posArr = {}
    let h = board.length, w=board[0].length
    if(h === 0) return false
    let direction = [[-1,0],[0,1],[1,0],[0,-1]]
    let marked = new Array(h)
    for(let i=0; i<h;i++) {
        marked[i] = new Array(w).fill(false)
    }

    const inArea = (x, y) => {
        return x >= 0 && y >= 0 && x <= h-1 && y<= w-1
    }

    const dfs = (i,j,nextCharIndex) => {
        if(nextCharIndex === word.length - 1) {
            return board[i][j] === word[nextCharIndex]
        }
        if(board[i][j] === word[nextCharIndex]) {
            marked[i][j] = true
            for(let k = 0; k<4; k++) {
                let newX = i + direction[k][0]
                let newY = j + direction[k][1]
                if(inArea(newX, newY) && !marked[newX][newY]) {
                    if(dfs(newX,newY, nextCharIndex + 1)) {
                        return true
                    }
                }
            }
            marked[i][j] = false // 重置状态
        }
        return false
    }

    for(let i = 0; i<h; i++) {
        for(let j = 0;j<w;j++) {
            if(dfs(i,j,0)){
                return true
            }
        }
    }
    return false
}