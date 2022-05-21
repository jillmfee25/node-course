//npm i axios
const axios = require('axios');
const fs= require('fs');

//TODO:read stock no from stock.txt
// 想要從外部讀入股票代碼

//callback版本
fs.readFile('stock.txt','utf-8', (err, stockNo) => {
    if(err){
        console.error('read file error', err);
    }else{
        console.log('read stock no from file:', stockNo);
        // https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220301&stockNo=2330
       
        axios
          .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
            params: {
              //設定query string}
              response: 'json',
              date: '20220301',
              stockNo: stockNo,
            },
          })
          .then((response) => {
            //response 物件
            // response.data 用axios要注意，真正資料在data裡
            console.log(response.data);
          })
          .catch((e) => {
            console.error(e);
          });
    }
})

