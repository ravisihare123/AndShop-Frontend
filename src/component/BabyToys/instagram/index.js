import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import Img
import img1 from '../../../assets/img/baby-shop/instagram/ig_01.png'
import img2 from '../../../assets/img/baby-shop/instagram/ig_02.png'
import img3 from '../../../assets/img/baby-shop/instagram/ig_03.png'
import img4 from '../../../assets/img/baby-shop/instagram/ig_04.png'
import img5 from '../../../assets/img/baby-shop/instagram/ig_05.png'
import img6 from '../../../assets/img/baby-shop/instagram/ig_06.png'
import img7 from '../../../assets/img/baby-shop/instagram/ig_07.png'
import img8 from '../../../assets/img/baby-shop/instagram/ig_08.png'
import img9 from '../../../assets/img/baby-shop/instagram/ig_09.png'
import img10 from '../../../assets/img/baby-shop/instagram/ig_10.png'
const InstagramData = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img6
    },
    {
        img: img7
    },
    {
        img: img8
    },
    {
        img: img9
    },
    {
        img: img10
    },
]
const Instagram = () => {
    let settings = {
        arrows: false,
        dots: false,
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
            <div id="instagram_area_one">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="instagram_post_slider">
                                <Slider {...settings}>
                                    {InstagramData.map((data, index) => (
                                        <div className="instgram_post" key={index}>
                                            <a href="#!">
                                                <i className="fa fa-instagram"></i>
                                                <img src={data.img} alt="img" />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instagram