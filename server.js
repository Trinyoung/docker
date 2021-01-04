/*
 * @Author: your name
 * @Date: 2021-01-04 18:57:06
 * @LastEditTime: 2021-01-04 18:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \docker\server.js
 */
const connect = require('connect');
const serverStatic = require('serve-static');
const app = connect();
app.use('/', serverStatic('.', {'index': ['index.html']}));
app.listen(8080);
console.log('myApp is ready at http://localhost:8080');
