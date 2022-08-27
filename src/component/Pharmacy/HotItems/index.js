import React from 'react'
import { Link } from 'react-router-dom';
import PharmacyHeading from '../PharmacyHeading'
import { FeaturedData } from '../Card/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HotItems = () => {
    let settings = {
        arrows: false,
        dots: true,
        margin: 60,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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
            <section id="pharmacy_hot_item" className="pt-100 slider_button_left_right">
                <div className="container">
                    <PharmacyHeading heading="Hot items" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pharmacy_hot_item_slider">
                                <Slider {...settings}>
                                    {FeaturedData.map((data, index) => (
                                        <div className="pharmacy_product_card" key={index}>
                                            <div className="pharmacy_product_img">
                                                <Link to="/shoplist"><img src={data.img} alt="img" /></Link>
                                                <span className="batch">{data.batch}</span>
                                                <div className="pharmacy_product_icon">
                                                    <ul>
                                                        <li><a href="#!"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="#!"><i className="fa fa-shopping-cart"></i></a></li>
                                                        <li><a href="#!"><i className="fa fa-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pharmacy_product_text">
                                                <h3>{data.title}</h3>
                                                <p>{data.price} <del>{data.oldprice}</del></p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotItems