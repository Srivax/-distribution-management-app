// Importing Express
const express = require("express");

//Creating server app
const app = express();

//Choosing port 
const PORT = 5000;

//Defining route for "/"
app.get("/", (req,res)=> {
    res.send("Server is ready to use");
})

//Starting server
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})