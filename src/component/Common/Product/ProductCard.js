import React, { useState,useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import MyVerticallyCenteredModal from '../../Common/Modal';
import { API_URL, post } from '../../../helper/api';

const ProductCard = (props) => {
    let dispatch = useDispatch();
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
    const [data, setData] = useState([])
    const productList = async () => {
        var body = {};
        var result = await post("master/productList", body);
        setData(result.data);
        // console.log(typeof(result.data));
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
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
              {data.map((item) => {
                return (
                  <>
                    {/* {JSON.parse(item.image).map((item) => item)} */}
                    {/* {alert(JSON.parse(item.image).map((item)=>item[0]))} */}
                    <img src={`${API_URL}/images/${JSON.parse(item.image)}`} />
                    
                  </>
                );
              })}
              <img
                className="hover-image"
                src={props.data.hover_img}
                alt="Product"
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
                {data.map((item)=>item.name)}
              </Link>
            </h5>
            <span className="price">
              <span className="new">&#8377;{data.map((item)=>item.mrp)}.00</span>
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