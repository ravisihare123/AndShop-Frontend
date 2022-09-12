import  React, { useEffect, useState } from "react";
import axios from 'axios';
import { post } from '../../helper/api';
import { useSelector } from "react-redux";

const Payment = () => {
    
  const [data, setData] = useState([]);
  let carts = useSelector((state) => state.products.carts);
  const productList = async () => {
    var body = {};
    var result = await post("master/productList", body);
    setData(result.data);
    // console.log(typeof(result.data));
    };
    

  useEffect(() => {
    productList();
  },[])
    
  const cartTotal = () => {
    return carts.reduce(function (total, item) {
      return total + (item.quantity || 1) * data.map((item)=>item.sales_price*100);
    }, 0);
  };


  const handlepayment = async () => {
    var body = {};
    const res = await axios.post(
      "http://localhost:5000/payment/addmoney",
      body
    );
    //  axios.post("http://localhost/5000/payment/verifyPayment", body);

    // console.log(res)
    const { order } = res.data;
    // alert(JSON.stringify(res.data))

    var options = {
      key: "rzp_test_3bIvCw7cx15BMe", // Enter the Key ID generated from the Dashboard
      amount: cartTotal(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ravi Sihare",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      prefill: {
        name: "Ravi Sihare",
        email: "ravi.koffekodes@gmail.com",
        contact: "+91-7610279025",
      },
      notes: {
        address: "Koffeekodes IT Solutions, Surat",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    document.getElementById("rzp-button1").onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    };
  };

  return (
    <>
      <div className="order_review bg-white">
        <div className="check-heading">
          <h3>Payment</h3>
        </div>
        <div className="payment_method">
          
        </div>
        {/* <button className="theme-btn-one btn-black-overlay btn_sm" onClick={handlePayment}>Place Order</button> */}
        <button
          id="rzp-button1"
          onClick={handlepayment}
          className="theme-btn-one btn-black-overlay btn_sm"
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default Payment;