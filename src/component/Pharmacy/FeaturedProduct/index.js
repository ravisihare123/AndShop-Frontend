import React from 'react'
import CardPharmacy from '../Card'
import { FeaturedData } from '../Card/data'
const FeaturedProduct = () => {

    return (
        <>
            <section id="pharmacy_featured_product" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="grocery_heading">
                                <h2>Featured Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-lg-12">
                            <div className="tabs_left_button">
                                <ul className="nav nav-tabs">
                                    <li><a data-toggle="tab" href="#rated" className="active">Top rated</a>
                                    </li>
                                    <li><a data-toggle="tab" href="#popular">Popular</a></li>
                                    <li><a data-toggle="tab" href="#best_sellers">Best Sellers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tabs_el_wrapper">
                                <div className="tab-content">
                                    <div id="rated" className="tab-pane fade show in active">
                                        <div className="row">
                                            {FeaturedData.map((data, index) => (
                                                <CardPharmacy data={data} key={index} />
                                            ))}

                                        </div>
                                    </div>
                                    <div id="popular" className="tab-pane fade">
                                        <div className="row">
                                            {FeaturedData.map((data, index) => (
                                                <CardPharmacy data={data} key={index} />
                                            ))}

                                        </div>
                                    </div>
                                    <div id="best_sellers" className="tab-pane fade">
                                        <div className="row">
                                            {FeaturedData.map((data, index) => (
                                                <CardPharmacy data={data} key={index} />
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

export default FeaturedProduct