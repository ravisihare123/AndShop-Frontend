import React from 'react'
import Img1 from '../../../assets/img/jewellary/banner/fetured-1.png'
import Img2 from '../../../assets/img/jewellary/banner/fetured-2.png'
import Img3 from '../../../assets/img/jewellary/banner/fetured-3.png'
const OfferArea = () => {
    return (
        <>
            <div id="jewellary_top_offer" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_offer_topimg hover_area_translateY">
                                <a href="shop-3.html">
                                    <img src={Img1} alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_offer_topimg hover_area_translateY">
                                <a href="shop-3.html">
                                    <img src={Img2} alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_offer_topimg hover_area_translateY">
                                <a href="shop-3.html">
                                    <img src={Img3} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OfferArea