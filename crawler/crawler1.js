// hard code stock no
//股票寫死的版本

//npm i axios
const axios = require('axios');

// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220301&stockNo=2330
axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY',{
    //物件方式傳入所以使用大括號， 
    params:{ //設定query string}
        response: 'json',
        date:'20220301',
        stockNo: '2330',
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

