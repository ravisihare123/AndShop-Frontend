import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { post } from '../../helper/api';

const BillingsInfo = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipCode] = useState("")
    const [address, setAdress] = useState("")
    const [message, setMessage] = useState("")

    const [data, setData] = useState([])
    const [itemName, setItemName] = useState({})
    const [itemPrice, setItemPrice] = useState({})

    const productList = async () => {
      var body = {};
      var result = await post("master/productList", body);
      setData(result.data);
      setItemName(result.data.map((item) => item.name));
      setItemPrice(result.data.map((item) => item.sales_price));
      // console.log(typeof(result.data));
    };

  

    // alert((itemName + "" +itemPrice ))
    useEffect(() => {
        productList()
    }, [])
    

    const handleOrder = async(e) => {
        e.preventDefault();

        var body = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            country: country,
            state: state,
            zipcode: zipcode,
            address: address,
            message: message,
            itemname: itemName,
            itemprice:itemPrice
            
        }

        var result = await post("master/orderDetails", body)
            if(result.data){
                Swal.fire({
                  icon: "success",
                  title: "order successfully!!",
                });
        }
        else {
    Swal.fire({
      icon: "error",
      title: "order Unsucessfull",
    });
        }
    }
    return (
      <>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="checkout-area-bg bg-white">
            <div className="check-heading">
              <h3>Billings Information</h3>
            </div>
            <div className="check-out-form">
              <form method="post">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="fname">
                        First name<span className="text-danger">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        required=""
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                        id="fname"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="lname">
                        Last name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        required=""
                        className="form-control"
                        id="lname"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Addresse<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        required=""
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="info@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="country">
                        Country<span className="text-danger">*</span>
                      </label>
                      <select
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control first_null"
                        id="country"
                      >
                        <option defaultValue="">Select an option...</option>
                        <option defaultValue="AX">usa</option>
                        <option defaultValue="AF">Afghanistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="city">
                        State/City<span className="text-danger">*</span>
                      </label>
                      <select
                        onChange={(e) => setState(e.target.value)}
                        className="form-control first_null"
                        id="city"
                      >
                        <option defaultValue="">Select an option...</option>
                        <option defaultValue="AX">Aland Islands</option>
                        <option defaultValue="AF">Afghanistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="zip">
                        State/City<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        onChange={(e) => setZipCode(e.target.value)}
                        required=""
                        placeholder="Enter Your zipcode"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="faddress">
                        Full Address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setAdress(e.target.value)}
                        className="form-control"
                        id="faddress"
                        required=""
                        placeholder="Enter your address here.."
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                    <div className="form-group">
                      <label htmlFor="messages">
                        Additional Notes<span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows="5"
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        id="messages"
                        placeholder="Order notes"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                    <div className="form-check">
                      <button className="btn btn-warning" onClick={handleOrder}>
                        save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default BillingsInfo