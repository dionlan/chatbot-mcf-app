const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function(req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.set('Access-Control-Allow-Origin', 'https://financial-diagnosis-api.herokuapp.com/');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈')
})
app.listen(port, () => {
   console.log('Server is UP! Port: ', port);
});