import React from 'react'
import { Link } from 'react-router-dom'
import BabyHeading from '../Heading'
import { BabyData } from '../Data'
const TrendingProducts = () => {
    return (
        <>
            <section id="baby_trending_product" className="ptb-100">
                <div className="container">
                    <BabyHeading heading="Trending products" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs_center_button">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li role="presentation">
                                        <a data-toggle="tab" href="#top_seller">TOP SELLER</a>
                                    </li>
                                    <li role="presentation">
                                        <a data-toggle="tab" href="#new_arrival">NEW ARRIVAL</a>
                                    </li>
                                    <li role="presentation">
                                        <a data-toggle="tab" href="#top_rated">TOP RATED</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tabs_el_wrapper">
                                <div className="tab-content" id="myTabContent">
                                    <div id="top_seller" className="tab-pane fade show in active" role="tabpanel">
                                        <div className='row'>
                                            {BabyData.map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <div className="jewellary_product_card">
                                                        <div className="jewellary_product_img">
                                                            <Link to="/product-details-one/1">
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
                                                            <h3><Link to="/shop">{data.title}</Link></h3>
                                                            <p>{data.des}</p>
                                                            <h4>{data.price} <span><del>{data.oldprice}</del></span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="new_arrival" className="tab-pane fade" role="tabpanel">
                                        <div className='row'>
                                            {BabyData.slice(4, 8).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <div className="jewellary_product_card">
                                                        <div className="jewellary_product_img">
                                                            <Link to="/product-details-one/1">
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
                                                            <h3><Link to="/shop">{data.title}</Link></h3>
                                                            <p>{data.des}</p>
                                                            <h4>{data.price} <span><del>{data.oldprice}</del></span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="top_rated" className="tab-pane fade" role="tabpanel">
                                        <div className='row'>
                                            {BabyData.slice(4, 8).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <div className="jewellary_product_card">
                                                        <div className="jewellary_product_img">
                                                            <Link to="/product-details-one/1">
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
                                                            <h3><Link to="/shop">{data.title}</Link></h3>
                                                            <p>{data.des}</p>
                                                            <h4>{data.price} <span><del>{data.oldprice}</del></span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrendingProducts