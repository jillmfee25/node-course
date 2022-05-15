
let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
        // resolve(result);
      reject("故意失敗");
    }, timer);
  });
};


    async function main(){
        try{
        let resultBrush = await doWork("刷牙", 3000);
        console.log(resultBrush);
    
        let resultEat = await doWork("吃早餐", 5000);
        console.log(resultEat);
    
        let resultHW = await doWork("寫作業", 3000);
        console.log(resultHW);
    }catch(e){
        console.log("這裡是try...catch", e);
    }
}
main();


