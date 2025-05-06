"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
const searchParams = useSearchParams();
const plan = searchParams.get('plan');

const plans = {
daily: { price: 49, name: 'Daily Plan' },
monthly: { price: 499, name: 'Monthly Plan' },
yearly: { price: 4999, name: 'Yearly Plan' },
};

const selectedPlan = plans[plan || 'daily'];

const handlePayment = async () => {
const res = await fetch('http://localhost:5000/api/payment/create-order', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ amount: selectedPlan.price }),
});

const order = await res.json();

const options = {
  key: "your_key_id", // replace with actual key
  amount: order.amount,
  currency: order.currency,
  name: "My Website",
  description: selectedPlan.name,
  order_id: order.id,
  handler: function (response) {
    alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
  },
  prefill: {
    name: "Your Name",
    email: "test@example.com",
    contact: "9999999999",
  },
};

const rzp = new window.Razorpay(options);
rzp.open();
};
return (
    <div className="p-10">
    <h1 className="text-2xl font-bold mb-5">Checkout - {selectedPlan.name}</h1>
    <p className="mb-4">Amount: ₹{selectedPlan.price}</p>
    <button onClick={handlePayment} className="bg-green-600 text-white px-6 py-2 rounded-lg" >
    Pay Now
    </button>
    </div>
    );
    }