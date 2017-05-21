const path = require('path');
const express = require('express');
const compression = require('compression');  

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/*", (req, res) => {
  return res.sendFile(__dirname + '/dist/index.html')
});

app.listen(3333, function(err) {
    console.log(3333)
})