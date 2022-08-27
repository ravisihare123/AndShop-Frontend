import React from 'react'
import { Link } from 'react-router-dom'
import BabyHeading from '../Heading'
// Import Img
import img1 from '../../../assets/img/baby-shop/blog/blog-1.jpg'
import img2 from '../../../assets/img/baby-shop/blog/blog-2.jpg'
import img3 from '../../../assets/img/baby-shop/blog/blog-3.jpg'
const BlogData = [
    {
        img: img1,
        title: "We know that buying shop",
        des: `Class integer tellus praesent at torquent cras, potenti erat fames
        volutpat etiam.`,
        date: "January 08, 09:14 am"
    },
    {
        img: img2,
        title: "We know that buying shop",
        des: `Class integer tellus praesent at torquent cras, potenti erat fames
        volutpat etiam.`,
        date: "January 08, 09:14 am"
    },
    {
        img: img3,
        title: "We know that buying shop",
        des: `Class integer tellus praesent at torquent cras, potenti erat fames
        volutpat etiam.`,
        date: "January 08, 09:14 am"
    }
]

const BlogArea = () => {
    return (
        <>
            <section id="baby_blog_arae" className="pb-100">
                <div className="container">
                    <BabyHeading heading="Our latest blog" />
                    <div className="row">
                        {BlogData.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="baby_blog_card">
                                    <div className="baby_blog_thumb">
                                        <Link to="/blog-single-one">
                                            <img src={data.img} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="baby_blog_content">
                                        <span>{data.date}</span>
                                        <h3><Link to="/blog-single-one">{data.title}</Link></h3>
                                        <p>{data.des}</p>
                                        <Link to="/blog-single-one" className="read_more">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArea