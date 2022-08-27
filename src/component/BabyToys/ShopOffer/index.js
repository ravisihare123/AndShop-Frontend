import React from 'react'
import { Link } from 'react-router-dom'
// import Img
import Img1 from '../../../assets/img/baby-shop/banner/offer-1.png'
import Img2 from '../../../assets/img/baby-shop/banner/offer-2.png'
import Img3 from '../../../assets/img/baby-shop/banner/offer-3.png'
const BabyOffer = () => {
    return (
        <>
            <div id="baby_offer_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="baby_offer_one_img hover_area_translateY">
                                <Link to="/shop"><img src={Img1} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <div className="baby_offer_one_img hover_area_translateY" >
                                <Link to="/shop"><img src={Img2} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <div className="baby_offer_one_img hover_area_translateY" >
                                <Link to="/shop"><img src={Img3} alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BabyOffer