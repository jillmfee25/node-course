// 回傳 1 + 2 + ... + n 的結果

//(變數的名稱)
// function sum1(n) {
//     // return 結果
//     let result = 0;
// for (let i=1; i<=n ;i++){
//   result += i;
// }
//     return result;
// }
// console.log(sum1(1)); // 1
// console.log(sum1(2)); // 3
// console.log(sum1(10)); // 55
// console.log(sum1(100)); // 5050



// function sum2(n) {
//     return ((n+1)*n)/2;   
// }

// console.log(sum2(1)); // 1
// console.log(sum2(2)); // 3
// console.log(sum2(10)); // 55
// console.log(sum2(100)); // 5050


function sum3(n){
  //reduce
  // let arr = [];
  // for(let i = 1; i <= n; i++){
  //   arr.push(i)
  // }
  // let sum = arr.reduce((acc, num) => {
  //   acc +=num
  //   return acc
  // }, 0)
  // return sum;

  
  return [...Array(n+1).keys()].reduce((acc, num) => {
    acc +=num
    return acc
  }, 0)
}

console.log(sum(1));
console.log(sum(2));
console.log(sum(10));
console.log(sum(100));


//recursive版本（遞迴）
// function sum4(n){
//   if(n === 1){
//     return n;
//   }
//   return sum4(n - 1) +n;
// }


// console.time('SUM1');
// sum1(1000);
// console.timeEnd('SUM1');

// console.time('SUM2');
// sum2(1000);
// console.timeEnd('SUM2');

// console.time('SUM3');
// sum3(1000);
// console.timeEnd('SUM3');

// console.time('SUM4');
// sum4(1000);
// console.timeEnd('SUM4');



// for-loop
// 公式解
// reduce
// recursive
