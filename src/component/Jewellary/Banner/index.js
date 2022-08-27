import React from 'react'
import { Link } from 'react-router-dom'

const BannerArea = () => {
    return (
        <>
            <section id="jewellry_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="jewellry_banner_text">
                                <h5>Exclusive offer 50% off</h5>
                                <h1>Original ornaments
                                    season ending sale 2021</h1>
                                <h5>Starting at <span>$599.00</span></h5>
                                <Link to="/shop" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BannerArea