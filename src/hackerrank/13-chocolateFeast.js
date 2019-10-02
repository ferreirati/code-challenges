// https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/chocolate-feast
// 13 - Chocolate Feast - 20191001

// n: an integer representing Bobby's initial amount of money
// c: an integer representing the cost of a chocolate bar
// m: an integer representing the number of wrappers he can turn in for a free bar

function chocolateFeast(n, c, m) {
    // Base case: If the money is less than the chocolate, he can't buy anymore.
    if(n<c) return 0;
    let chocolates = Math.floor(n / c);
    let wrapperValue = c / m;
    let change = n%c;
    return chocolates + chocolateFeast(change + (chocolates * wrapperValue), c, m);
}

console.log(chocolateFeast(10, 2, 5)); // 6
console.log(chocolateFeast(12, 4, 4)); // 3
console.log(chocolateFeast(6, 2, 2)); // 5
console.log(chocolateFeast(7, 3, 2)); // 3