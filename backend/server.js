const express = require("express");    //Import the express framework to create web server
const cors = require("cors");          //Cors allows requests from the othe domain e.g. frontend
const app = express();                 //Create instace of an express app
require("dotenv").config();

app.use(cors());         //Enable cors for all routes
app.use(express.json())  //Allow express to read JSON data from requests

const razorpayRoutes = require("./routes/razorpay"); //Import razorpay routes
app.use("/api/payment", razorpayRoutes);

const PORT = process.env.PORT || 5000;      // Set the server to run on port from .env or default 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Start the server
