var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get( '/', function( req, res ){
  console.log('in base url');
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

var auth = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
};

app.get('/key', function(req, res){ //retrieves the api key from the .env file.
  console.log(auth);
  res.json(auth);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('on port', app.get('port'));
});
