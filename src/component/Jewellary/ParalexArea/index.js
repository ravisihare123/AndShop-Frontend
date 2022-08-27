import React from 'react'
import { Link } from 'react-router-dom'
const ParalexArea = () => {
    return (
        <>
            <section id="paralex_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="paralex_text">
                                <h3>20% sale off all products</h3>
                                <h2>Explore trending collection</h2>
                                <p> 100% authentic jewellery and diamonds at a fraction of the retail price
                                    with complete customer satisfaction.</p>
                                <Link to="/shoplist" className="theme-btn-one bg-whites btn_md">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ParalexArea