var express = require('express');
var bodyParser = require ('body-parser');
var cors = require('cors');

var Routes = require('./Routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(cors());

//MAIN URI
app.use('/Laboratory',Routes);

app.options('*', cors());

//Connecting to the server
app.listen(3001,function(err){
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }

    console.log('Server running on port 3001');

});

