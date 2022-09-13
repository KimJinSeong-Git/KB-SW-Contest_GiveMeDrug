const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'front-home/build')));
app.use(express.static(path.join(__dirname, 'front-admin/build')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/front-home/build/index.html'));
});
app.get('/admin', function (request, response) {
  response.sendFile(path.join(__dirname, '/front-admin/build/index.html'));
});