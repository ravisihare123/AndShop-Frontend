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
  }, []);
    
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
          <form>
            <div className="accordion" id="accordionExample">
              <div className="payment_area_wrappers">
                <div className="heading_payment" id="headingOne">
                  <div
                    className=""
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="html"
                      value="HTML"
                      defaultChecked
                    />
                    <label htmlFor="html">Direct Bank Transfer</label>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="payment_body">
                    <p>Direct Bank Transfer</p>
                  </div>
                </div>
              </div>
              <div className="payment_area_wrappers">
                <div className="heading_payment" id="headingTwo">
                  <div
                    className="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="javascript"
                      value="JavaScript"
                                      />
                                      
                                      <label htmlFor="javascript">Mobile Banking</label>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <div className="payment_body">
                    <p>Direct Mobile Transfer</p>
                  </div>
                </div>
              </div>
              <div className="payment_area_wrappers">
                <div className="heading_payment" id="headingThree">
                  <div
                    className="collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="css"
                      value="JavaScript"
                    />
                    <label htmlFor="css">Paypal</label>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <div className="payment_body">
                    <p>
                      Some placeholder content for the second accordion panel.
                      This panel is hidden by default.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <button className="theme-btn-one btn-black-overlay btn_sm" onClick={handlePayment}>Place Order</button> */}
        <button
          id="rzp-button1"
          onClick={handlepayment}
          className="theme-btn-one btn-black-overlay btn_sm"
        >
          Place Order
        </button>
        {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
      </div>
    </>
  );
};

export default Payment;