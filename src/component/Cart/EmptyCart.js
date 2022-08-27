import React from 'react'
import { Link } from 'react-router-dom'
// import Img
import img from '../../assets/img/common/empty-cart.png'

const EmptyCart = () => {
    return (
        <>
            <section id="empty_cart_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                            <div className="empaty_cart_area">
                                <img src={img} alt="img" />
                                <h2>YOUR CART IS EMPTY</h2>
                                <h3>Sorry Mate... No Item Found Inside Your Cart!</h3>
                                <Link to="/shop" className="btn btn-black-overlay btn_md">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmptyCart
