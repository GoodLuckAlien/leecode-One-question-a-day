/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


 put("2", "abc");
    put("3", "def");
    put("4", "ghi");
    put("5", "jkl");
    put("6", "mno");
    put("7", "pqrs");
    put("8", "tuv");
    put("9", "wxyz");


示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const output = []
    const mapObject = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }
    function backtrack(current,next_digits){
        if(next_digits.length===0){
            output.push(current)
        }else{
            const new_digits = next_digits.slice(0,1)
            const numberMaps = mapObject[new_digits]
            for(let i=0;i<numberMaps.length;i++){
                const currentNumber = numberMaps.charAt(i)
                backtrack(current+currentNumber,next_digits.slice(1))
            }
        }
    }
    if(digits.length !== 0 ){
        backtrack('',digits)
    }
    return output
};
console.log(letterCombinations('23'))