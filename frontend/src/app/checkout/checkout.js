export async function handleRazorpayPayment(planName, amount, userName, userEmail) {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
  
    const order = await res.json();
  
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "YouTax",
      description: planName,
      order_id: order.id,
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userName,
        email: userEmail,
      },
      theme: {
        color: "#E51D25",
      },
    };
  
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }
  