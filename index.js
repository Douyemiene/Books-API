const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//  mongodb://mongodb_container:27017/test
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(port);
console.log('Server started @ http://localhost:' + port);