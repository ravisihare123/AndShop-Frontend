import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { post } from '../../helper/api';

const YourOrders = () => {
    const [data, setData] = useState([])
  let carts = useSelector((state) => state.products.carts);

    
const productList = async () => {
  var body = {};
  var result = await post("master/productList", body);
  setData(result.data);
  // console.log(typeof(result.data));
    };
    
    const cartTotal = () => {
      return carts.reduce(function (total, item) {
        return (
          total +
          (item.quantity || 1) * data.map((item) => item.sales_price )
        );
      }, 0);
    };


useEffect(() => {
  productList();
}, []);

    return (
        <>
            <div className="order_review  box-shadow bg-white">
                <div className="check-heading">
                    <h3>Your Orders</h3>
                </div>
                <div className="table-responsive order_table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.map((item)=>item.name)}
                                </td>
                                <td>{ data.map((item)=>item.sales_price)}</td>
                            </tr>
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SubTotal</th>
                                <td className="product-subtotal">{cartTotal()}</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>Free Shipping</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td className="product-subtotal">{cartTotal()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default YourOrders