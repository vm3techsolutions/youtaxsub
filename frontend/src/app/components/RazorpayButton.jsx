import axios from "axios";    // Axios is used to send HTTP requests

const RazorpayButton = ({ amount, planName }) => {
    const handlePayment = async () => {
        const { data: order } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/create-order`,
          { amount }
        );
    }

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,  // Public key
        amount: order.amount,                          // Amount in paisa
        currency: "INR",
        name: "My Website",                            // Your site or company name
        description: planName,                         // Description of the plan
        order_id: order.id,                            // Razorpay order ID
        handler: function (response) {
          alert("Payment Successful!");                // Alert after success
          console.log(response);                       // Print response details
        },
        theme: { color: "#3399cc" },                   // Customize theme color
      };
  
      const rzp = new window.Razorpay(options);  // Create Razorpay checkout instance
      rzp.open();                                // Open the Razorpay payment popup
    

    return (
        <button onClick={handlePayment} className="btn">
          Pay ₹{amount} for {planName}
        </button>
      );
    };
    
    export default RazorpayButton;