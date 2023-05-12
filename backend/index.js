var express = require('express');
var data = require('./credentials.json');
var os = require('os');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
app.use(cors());
var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces['eth0'][0]['address']);
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.listen(8000, () =>{
    console.log('Listening on port 8000');
});
app.get('/', (req,res) =>{
    
    res.send({'square' : 'circles'});
});
app.post('/NewNote', (req,res) =>{
    res.send({'square' : 'circles'});
    let data = req.body;
    console.log(data);
});
app.get('/auth/', (req,res) =>{
    console.log(data);
});