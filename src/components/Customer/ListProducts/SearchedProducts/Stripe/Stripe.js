import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";




function Stripe({total}) {
    const [product] = React.useState({
        name: "CART",
        price: total,
        description: "CART"
      });

      
async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
    return (
        <div>
        <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Cart"
        billingAddress
        shippingAddress
        alipay
    
        bitcoin
   
        image="https://previews.123rf.com/images/marvinjk/marvinjk1604/marvinjk160400047/57411620-payment-methods-money-transfer-financial-transaction-banking-vector-concept.jpg"
      />
        </div>
    )
}

export default Stripe
