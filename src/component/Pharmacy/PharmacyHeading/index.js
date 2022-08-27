import React from 'react'
import { Link } from 'react-router-dom'
const PharmacyHeading = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="pharmacy_heading_wrapper">
                        <div className="grocery_heading">
                            <h2>{props.heading}</h2>
                        </div>
                        <div className="view_all_arae">
                            <Link to='./shop'>View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PharmacyHeading