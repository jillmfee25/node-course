//npm i express
//導入express這個模組
const express = require('express');

//利用express 來建立一個express application
const app = express();

app.get('/', (request, response, next) => {
    response.send("ok");
});

app.get('/about', (request, response, next) => {
    response.send("About me");
})

app.listen(3001, () => {
    console.log('start server at port 3001');
})