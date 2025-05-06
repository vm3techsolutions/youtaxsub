const express = require("express");     //Import Express for creating routes
const Razorpay = require("razorpay");    //Import Razorpay SDK to create orders
const router = express.Router();        //Create new Router instance
require("dotenv").config();

//Create razorpay instance using API keys

const razorpay  = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
});

//Define POST API endpoint to create orders

router.post("/create_order", async (req, res) => {
    const {amount} = req.body;

    try {
        const order = await razorpay.orders.create({
            amount : amount * 100,
            currency: "INR",
            receipt: "reciept" + Date.now()
        });
        res.status(200).json(order);
    } catch (error){
        res.status(500).json({error: "Unable to create order"});
    }
});

module.export = router;