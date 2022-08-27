import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/pharmacy/banner/add-1.png'
import img2 from '../../../assets/img/pharmacy/banner/add-2.png'
const BannerBottom = () => {
    return (
        <>
            <div id="pharmacy_banner_bottom" className="pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="pharmacy_banner_bottom_img">
                                <Link to="/shop-left-bar"><img src={img1} alt="img" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="pharmacy_banner_bottom_img">
                                <Link to="/shop-left-bar"><img src={img2} alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerBottom