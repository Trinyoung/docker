/*
 * @Author: your name
 * @Date: 2021-01-04 18:57:06
 * @LastEditTime: 2021-01-04 20:56:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \docker\server.js
 */
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
