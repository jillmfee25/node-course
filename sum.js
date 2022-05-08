
// 回傳 1 + 2 + ... + n 的結果
function sum1(n) {
    // return 結果
    let sum = 0;
for (let i=1; i<=n ;i++){
    sum += i;
}
    return sum;
}


  console.log(sum(1)); // 1
  console.log(sum(2)); // 3
  console.log(sum(10)); // 55
  console.log(sum(100)); // 5050

// for-loop
// 公式解
// reduce
// recursive