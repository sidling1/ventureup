const express = require('express');
const app = express();
const cors = require('cors');
// const pool = require('./db');


// middleware
app.use(cors());
app.use(express.json()); // access to request.body


// ROUTES //

// Get Sample Home Page
app.get('/api/',(req,res)=>{
    try{
        res.send('Welcome from the server !!!');
    }catch(e){
        console.log("Error Occured", e);
    }
})


app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})