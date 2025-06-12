import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js'; // Adjust the path as needed

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Mount the route
app.use('/api/payment', paymentRoutes);
console.log('✅ Payment routes mounted');

app.get('/test', (req, res) => {
  res.send('Hello from backend');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
