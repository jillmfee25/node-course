// 回傳 1 + 2 + ... + n 的結果

//(變數的名稱)
function total(10) {
  // return 結果
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // result += i;
    result = result + i;
  }
  return result;
}

function sum2(n) {
  return ((n + 1) * n) / 2;
}
// function a(n) {
//   return n;
// }

function func(sum, item){
  return sum + item
}

function sum(n) {
    // return 結果
    let result = 0;
for (let i=1; i<=n ;i++){
    result += i;
}
    return result;
}

// function sum2(n) {
//     return ((n+1)*n)/2;   
// }

// function sum3(n){
//     [1,2,3,...n].reduce((sum,item) => sum + item ,0);
// }



function sum3(n) {
  [1, 2, 3, ...n].reduce((sum, item) => sum + item, 0);
}

console.log(total(100));

// console.log(sum1(1)); // 1
// console.log(sum1(2)); // 3
// console.log(sum1(10)); // 55
// console.log(sum1(100)); // 5050

// for-loop
// 公式解
// reduce
// recursive
