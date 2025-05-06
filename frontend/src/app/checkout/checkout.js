// This function triggers the Razorpay Checkout popup
export const handleRazorpayPayment = (planId, amount) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Your Razorpay public key
      amount: amount * 100, // Amount in paise (₹1 = 100 paise)
      currency: "INR", // Currency code
      name: "YouTax", // Your company name
      description: `Payment for ${planId} plan`,
      image: "/path/to/your/logo.png", // Your logo path (optional)
      handler: function (response) {
        // Handle successful payment here, you can send the response to your backend
        alert("Payment Successful: " + response.razorpay_payment_id);
        // You can redirect or show success page here
      },
      prefill: {
        name: "", // User name
        email: "", // User email
        contact: "", // User contact number
      },
      notes: {
        plan_id: planId,
      },
      theme: {
        color: "#E51D25", // Customize theme color
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  