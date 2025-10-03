require('dotenv').config();
// Importing Express
const express = require("express");
const mongoose = require('mongoose'); // Import mongoose


//Creating server app
const app = express();

//Choosing port 
const PORT = process.env.PORT || 5000;


// --- Mongoose Connection & Starting Server ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    // Don't start listening for requests until the database is connected
    app.listen(PORT, () => {
      console.log(`Server is running successfully on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process if we can't connect to the database
  });
// --- End Mongoose Connection ---


//Defining route for "/"
app.get("/", (req,res)=> {
    res.send("Server is ready to use");
})
