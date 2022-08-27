import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../../../assets/img/baby-shop/banner/banner-1.png'
import Img2 from '../../../assets/img/baby-shop/banner/banner-2.png'
import Img3 from '../../../assets/img/baby-shop/banner/banner-3.png'

const Banner = () => {
    return (
        <>
            <div id="baby_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="baby_banner_img">
                                <Link to="/shop">
                                    <img src={Img1} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                                    <div className="baby_banner_img banner_last_img">
                                        <Link to="/shop">
                                            <img src={Img2} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                                    <div className="baby_banner_img banner_last_img">
                                        <Link to="/shop">
                                            <img src={Img3} alt="img" />
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

export default Banner