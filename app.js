const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/routes');

const app = express();

const connection = require('./config/dbconnect')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

connection.connect((error)=>{
    if(error){
        console.log("Can not connected to database",error)
    }
    else{
        console.log("Connected to database")
    }
})

app.use("/",authRoutes);

const PORT = 5000;

app.listen(PORT,() => {
    console.log(`Server is running on prt Number ${PORT}`);
})