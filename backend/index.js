var express = require('express');
var credentials = require('./credentials.json');
var os = require('os');
var cors = require('cors');
var bodyParser = require('body-parser')
var mysql = require('mysql');
const app = express();
app.use(cors());
var networkInterfaces = os.networkInterfaces();
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'Studyapp',
    password: credentials['pass'],
    user: credentials['user']
});
 
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});


console.log(networkInterfaces['eth0'][0]['address']);
app.use(express.json());
app.listen(8000, () =>{
    console.log('Listening on port 8000');
});
app.get('/', (req,res) =>{
    
    res.send({'square' : 'circles'});
});
//TODO: Remove this endpoint or make it meaningfully different from /storeNote
app.post('/NewNote', (req,res) =>{
    res.send({'square' : 'circles'});
    let data = req.body;
    console.log(data['title']);
});
// Requires requests to have three attributes in the body of the API request: folder, title, data
app.post('/storeNotes', (req,res)=>{
    connection.query(`DELETE FROM NOTES WHERE Folder ="${req.body['folder']}" AND Title="${req.body['title']}"`, (err,rows)=>{
        if(err) throw err;
    })
    connection.query(`INSERT INTO NOTES (Folder, Title, Data) VALUES ("${req.body['folder']}", "${req.body['title']}", "${req.body['data']}")`, (err,rows)=>{
        if (err) throw err;
        console.log(rows);
    });
});
//TODO: Create automatic $groupings in MySQL, and retrieve N of such documents.
app.get('/retrieveNotes', (req,res)=>{
    console.log(req.headers['title']);
    //TODO: SANITIZE INPUTS!!!
    connection.query(`INSERT INTO NOTES (Folder, Title, Data) VALUES ("newFolder", "title", "data")`, (err,rows)=>{
        if (err) throw err;
        console.log(rows);
    });


    res.send({'title' : "Sample Title",
            'data' : "Sample Data"});
});
// TODO: Implement changing the grouping of individual files into preexisting or new groups in MySQL.
app.post('/changeNoteGroup', (res,req)=>{

});
app.get('/returnFolders', (res,req)=>{

});