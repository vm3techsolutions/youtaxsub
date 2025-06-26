import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/authRoutes.js'; // Adjust the path as needed
import planRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Mount the route
app.use('/payment', paymentRoutes);
console.log('✅ Payment routes mounted');

app.use('/plan', planRoutes); // Mount route


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
