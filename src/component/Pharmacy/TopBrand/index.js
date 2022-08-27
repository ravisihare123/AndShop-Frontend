import React from 'react'
import PharmacyHeading from '../PharmacyHeading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../assets/img/pharmacy/partner/partner_1.png'
import img2 from '../../../assets/img/pharmacy/partner/partner_2.png'
import img3 from '../../../assets/img/pharmacy/partner/partner_3.png'
import img4 from '../../../assets/img/pharmacy/partner/partner_4.png'
import img5 from '../../../assets/img/pharmacy/partner/partner_5.png'
import img6 from '../../../assets/img/pharmacy/partner/partner_1.png'
import img7 from '../../../assets/img/pharmacy/partner/partner_3.png'
import img8 from '../../../assets/img/pharmacy/partner/partner_2.png'
const TopBrand = () => {
    let settings = {
        arrows: false,
        dots: true,
        margin: 60,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    };
    return (
        <>
            <section id="pharmacy_top_brand" className="ptb-100 slider_button_left_right">
                <div className="container">
                    <PharmacyHeading heading="Top Brand" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pharmacy_top_brand_slider">
                                <Slider {...settings}>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"><img src={img1} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"><img src={img2} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"><img src={img3} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"> <img src={img4} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"><img src={img5} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"> <img src={img6} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"> <img src={img7} alt="img" /></a>
                                    </div>
                                    <div className="partner_logo_pharmacy">
                                        <a href="#!"> <img src={img8} alt="img" /></a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopBrand