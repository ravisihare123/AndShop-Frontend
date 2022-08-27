import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CategoriData } from './CategorieData';
import PharmacyHeading from '../PharmacyHeading';

const TopCategories = () => {
    let settings = {
        arrows: false,
        dots: true,
        margin: 60,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
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
            <section id="pharmacy_categorie" className="ptb-100 slider_button_left_right">
                <div className="container">
                    <PharmacyHeading heading="Top Categories" />
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                {CategoriData.map((data, index) => (
                                    <div className="pharmacy_top_cate" key={index}>
                                        <div className="pharmacy_top_card">
                                            <Link to='./shop'>
                                                <img src={data.img} alt="img" />
                                                <h4>{data.title}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopCategories