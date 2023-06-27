// list => [1, 4, 2, 3, 8, 7, 10, 12]

// 使用費波那契數列(FIb function)，寫出費波那契的函數

// 遞迴效應 recution：自己呼叫自己， but 會導致Stack 滿出來 ，要知道會停止的停止點!!!


// JavaScript迭代版  ==>https://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0

function fib(n) {
    var fib_n = function(curr, next, n) {
        if (n == 0) {
            return curr;
        }
        else {
            return fib_n(next, curr+next, n-1);
        }
    }
    return fib_n(0, 1, n);
}
alert(fib(40));

// 時間複雜度=> https://zh.wikipedia.org/zh-tw/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6


// 河內塔 ==> https://zh.wikipedia.org/zh-tw/%E6%B1%89%E8%AF%BA%E5%A1%94



