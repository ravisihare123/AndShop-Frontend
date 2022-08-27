import React from 'react'
import { Link } from 'react-router-dom'
// import Img
import img1 from '../../../assets/img/baby-shop/banner/bt-offer-1.png'
import img2 from '../../../assets/img/baby-shop/banner/bt-offer-2.png'
const BannerBottom = () => {
    return (
        <>
            <div id="baby_banner_bottom" className="pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="baby_banner_bottom_img hover_area_translateY">
                                <Link to="/shop"><img src={img1} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="baby_banner_bottom_img hover_area_translateY">
                                <Link to="/shop"><img src={img2} alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerBottom