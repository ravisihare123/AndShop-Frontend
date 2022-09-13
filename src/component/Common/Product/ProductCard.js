import React, { useState,useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MyVerticallyCenteredModal from '../../Common/Modal';
import { API_URL, post } from '../../../helper/api';

const ProductCard = (props) => {
  let dispatch = useDispatch();

  
  // images

    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }
    // Add to Favorite
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }
    // Add to Compare
    const addToComp = async (id) => {
        dispatch({ type: "products/addToComp", payload: { id } })
    }
    const [modalShow, setModalShow] = useState(false);
  
    const productList = async () => {
        var body = {};
        var result = await post("master/productList", body);
        dispatch({ type: "products/getProduct", payload: result.data });
      
      ;
    };
    

      useEffect(() => {
          productList();
       
      }, []);

   
    return (
      <>
        <div className="product_wrappers_one">
          <div className="thumb">
            <Link
              to={`/product-details-one/${props.data.id}`}
              className="image"
            >
              {/* {console.log(props.data?.image)} */}
              <img src={API_URL+"/images/"+props.data?.image?.[0]} alt="Product" />
              <img
                className="hover-image"
                src={API_URL+"/images/"+props.data?.image?.[1]} alt="Product"
              />
            </Link>
            <span className="badges">
              <span
                className={
                  ["hot", "new", "sale"][Math.round(Math.random() * 2)]
                }
              >
                {props.data.labels}
              </span>
            </span>

            <div className="actions">
              <a
                href="#!"
                className="action wishlist"
                title="Wishlist"
                onClick={() => addToFav(props.data.id)}
              >
                <AiOutlineHeart />
              </a>
              <a
                href="#!"
                className="action quickview"
                title="Quick view"
                onClick={() => setModalShow(true)}
              >
                <AiOutlineExpand />
              </a>
              <a
                href="#!"
                className="action compare"
                title="Compare"
                onClick={() => addToComp(props.data.id)}
              >
                <FaExchangeAlt />
              </a>
            </div>
            <button
              type="button"
              className="add-to-cart offcanvas-toggle"
              onClick={() => addToCart(props.data.id)}
            >
              Add to cart
            </button>
          </div>
          <div className="content">
            <h5 className="title">
              <Link to={`/product-details-one/${props.data.id}`}>
                {props.data?.name}
              </Link>
            </h5>
            <span className="price">
              <span className="new">
                &#8377;{props.data?.sales_price}.00
              </span>
            </span>
          </div>
        </div>

        <MyVerticallyCenteredModal
          data={props.data}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default ProductCard