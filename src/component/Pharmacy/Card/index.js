import React from 'react'
import { Link } from 'react-router-dom'

const CardPharmacy = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="pharmacy_product_card">
                    <div className="pharmacy_product_img">
                        <Link to="/shoplist"><img src={props.data.img} alt="img" /></Link>
                        <span className="batch">{props.data.batch}</span>
                        <div className="pharmacy_product_icon">
                            <ul>
                                <li><a href="#!"><i className="fa fa-eye"></i></a></li>
                                <li><a href="#!"><i className="fa fa-shopping-cart"></i></a></li>
                                <li><a href="#!"><i className="fa fa-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pharmacy_product_text">
                        <h3>{props.data.title}</h3>
                        <p>{props.data.price} <del>{props.data.oldprice}</del></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPharmacy