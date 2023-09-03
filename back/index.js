const express = require("express");
const app=express();
let mongoose = require('mongoose');
let cors = require('cors');
const bodyparser=require('body-parser')
let dbConfig = require('./database/db');

const userrouter=require('./routes/userroute')



mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/',userrouter);



app.get('/', (req, res) => {
    res.end('This is backend');
});

app.listen(4000,()=>{
    console.log("port is listening at 4000")
})



