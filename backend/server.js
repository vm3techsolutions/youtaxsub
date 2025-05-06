const express = require('express');
const cors = require('cors');
const app = express();
const razorpayRoutes = require('./routes/razorpay');

app.use(cors());
app.use(express.json());

// Ensure that razorpayRoutes is a valid function or router
app.use('/api/razorpay', razorpayRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
