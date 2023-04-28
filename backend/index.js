var express = require('express');
var os = require('os');
var cors = require('cors');
const app = express();
app.use(cors());
var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces['eth0'][0]['address']);
app.listen(8000, () =>{
    console.log('Listening on port 8000');
});
app.get('/', (req,res) =>{
    
    res.send({'square' : 'circles'});
});