import React from 'react'
import { Link } from 'react-router-dom'
// import img
import img1 from '../../../assets/img/jewellary/banner/offer-1.png'
import img2 from '../../../assets/img/jewellary/banner/offer-2.png'
import img3 from '../../../assets/img/jewellary/banner/offer-3.png'
import img4 from '../../../assets/img/jewellary/banner/offer-4.png'
import img5 from '../../../assets/img/jewellary/banner/offer-5.png'
import img6 from '../../../assets/img/jewellary/banner/offer-6.png'

const OfferAreaTwo = () => {
    return (
        <>
            <div id="jewellary_offer_topimg_two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img1} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img2} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img3} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img4} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img5} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="jewellry_top_twoimg hover_area_translateY">
                                <Link to="/shop">
                                    <img src={img6} alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferAreaTwo