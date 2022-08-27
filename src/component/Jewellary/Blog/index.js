import React from 'react'
import Img1 from '../../../assets/img/jewellary/blog/blog-1.png'
import Img2 from '../../../assets/img/jewellary/blog/blog-2.png'
import Img3 from '../../../assets/img/jewellary/blog/blog-3.png'
import JewellaryHeading from '../Heading'
import { Link } from 'react-router-dom'
const BlogArea = () => {
    return (
        <>
            <section id="jewellary_blog_area" className="ptb-100">
                <div className="container">
                    <JewellaryHeading heading="Our latest blog" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_blog_card">
                                <div className="jewellary_blog_img">
                                    <Link to="blog-single-one">
                                        <img src={Img1} alt="img" />
                                    </Link>
                                </div>
                                <div className="jewellary_blog_content">
                                    <h3><Link to="/blog-single-one">We bring the best products</Link></h3>
                                    <h6>By <Link to="/blog-single-one">Admin</Link> / 29 Nov 2021</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Link to="/blog-single-one" className="read_more">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_blog_card">
                                <div className="jewellary_blog_img">
                                    <Link to="/blog-single-one">
                                        <img src={Img2} alt="img" />
                                    </Link>
                                </div>
                                <div className="jewellary_blog_content">
                                    <h3><Link to="/blog-single-one">Jewellery festival 2021s</Link></h3>
                                    <h6>By <Link to="/blog-single-one">Admin</Link> / 29 Nov 2021</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Link to="/blog-single-one" className="read_more">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="jewellary_blog_card">
                                <div className="jewellary_blog_img">
                                    <Link to="/blog-single-one">
                                        <img src={Img3} alt="img" />
                                    </Link>
                                </div>
                                <div className="jewellary_blog_content">
                                    <h3><Link to="/blog-single-one">Gold ring and bracelet collection </Link></h3>
                                    <h6>By <Link to="/blog-single-one">Admin</Link> / 29 Nov 2021</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Link to="/blog-single-one" className="read_more">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArea