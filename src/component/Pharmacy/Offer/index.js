import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/pharmacy/banner/sm-banner1.png'
import img2 from '../../../assets/img/pharmacy/banner/sm-banner2.png'
import img3 from '../../../assets/img/pharmacy/banner/sm-banner3.png'

const OfferArea = () => {
    return (
        <>
            <div id="pharmacy_promo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pharmacy_promo_img">
                                <Link to="/shop"><img src={img1} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pharmacy_promo_img">
                                <Link to="/shop"><img src={img2} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="pharmacy_promo_img">
                                <Link to="/shop"><img src={img3} alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferArea