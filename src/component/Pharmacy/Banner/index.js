import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/pharmacy/banner/banner1.png'
import img2 from '../../../assets/img/pharmacy/banner/banner2.png'
import img3 from '../../../assets/img/pharmacy/banner/banner3.png'
const PharmacyBanner = () => {
    return (
        <>
            <div id="pharmacy_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pharmacy_banner_img">
                                <Link to="/shop-left-bar">
                                    <img src={img1} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                                    <div className="pharmacy_banner_img banner_last_img">
                                        <Link to="/shop-left-bar">
                                            <img src={img2} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                                    <div className="pharmacy_banner_img banner_last_img">
                                        <Link to="/shop-left-bar">
                                            <img src={img3} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PharmacyBanner