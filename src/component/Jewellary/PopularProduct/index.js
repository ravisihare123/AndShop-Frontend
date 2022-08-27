import React from 'react'
import { Link } from 'react-router-dom'
import JewellaryHeading from '../Heading'
import { ProductData } from '../ProductData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PopularProduct = () => {
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
            <section id="jewellary_popular_product" className="ptb-100 dots_style">
                <div className="container">
                    <JewellaryHeading heading="Popular products" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jewellary_popular_slider">
                                <Slider {...settings}>
                                    {ProductData.map((data, index) => (
                                        <div className="jewellary_product_card" key={index}>
                                            <div className="jewellary_product_img">
                                                <Link to="/product-details-one/2">
                                                    <img src={data.img} alt="img" />
                                                </Link>
                                                <div className="jewellary_product_icon">
                                                    <ul>
                                                        <li><a href="#!"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="#!"><i className="fa fa-shopping-cart"></i></a></li>
                                                        <li><a href="#!"><i className="fa fa-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jewellary_product_text">
                                                <h3><Link to="/product-details-one/2">{data.title}</Link></h3>
                                                <p>{data.des}</p>
                                                <h4>{data.price} <span><del>{data.oldprice}</del></span></h4>
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

export default PopularProduct