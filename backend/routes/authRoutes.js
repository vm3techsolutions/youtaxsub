import express from 'express';
import { createOrder } from '../controllers/paymentController.js';
import { submitPlan } from '../controllers/planController.js';
const router = express.Router();

router.post('/create-order', createOrder);

router.post('/submit-plan', submitPlan);


export default router;
