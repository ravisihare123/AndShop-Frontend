import React from 'react'
import CommentForm from './CommentForm'
import RelatedPost from './RelatedPost'
import SingleCommentArea from './SingleCommentArea'
// import Img
import img1 from '../../assets/img/blog/blog_single2.png'
import author from '../../assets/img/user/author.png'

const BlogSingleContentTwo = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog_single_content">
          <div className="blog_single_img img-zoom-hover">
            <img src={img1} alt="img" />
          </div>
          <div className="blog_single_widget">
            <div className="blog_single_date">
              <ul>
                <li>Sep, 28, 2021 - By <a href="#!">Hasinas Deos</a></li>
              </ul>
            </div>
            <div className="blog_single_first_Widget">
              <h2>Fit-Flare Dress</h2>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                orci porta dapibus. Vivamus magna justo, lacinia eget
                consectetur sed, convallis at tellus. Sed porttitor lectus
                nibh.
              </p>
              <p>
                Sed porttitor lectus nibh. Vivamus suscipit tortor eget
                felis porttitor volutpat. Curabitur aliquet quam id dui
                posuere blandit. Cras ultricies ligula sed magna dictum
                porta. Sed porttitor lectus nibh. Vivamus suscipit tortor
                eget felis porttitor volutpat. Vivamus suscipit tortor eget
                felis porttitor volutpat. Nulla porttitor accumsan
                tincidunt. Curabitur aliquet quam id dui posuere blandit.
                Curabitur aliquet quam id dui posuere blandit. Praesent
                sapien massa, convallis a pellentesque nec, egestas non
                nisi.
              </p>
              <blockquote>
                Praesent sapien massa, convallis a pellentesque nec, egestas
                non nisi. Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Donec rutrum congue leo eget malesuada.
                Sed porttitor lectus nibh.
              </blockquote>
              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id
                enim. Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Vivamus magna justo, lacinia eget
                consectetur sed, convallis at tellus. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae;
                Donec velit neque, auctor sit amet aliquam vel, ullamcorper
                sit amet ligula. Proin eget tortor risus. Proin eget tortor
                risus. Curabitur aliquet quam id dui posuere blandit. Donec
                rutrum congue leo eget malesuada.
              </p>
            </div>
            <div className="single_categoris_bottom">
              <ul>
                <li><a href="#!">Fashion</a></li>
                <li><a href="#!">Style</a></li>
                <li><a href="#!">Woman</a></li>
                <li><a href="#!">Man</a></li>
              </ul>
            </div>
          </div>
          <div className="card post_author">
            <div className="card-body">
              <div className="author_img">
                <img src={author} alt="author" />
              </div>
              <div className="author_info">
                <h6 className="author_name">
                  <a href="#!" className="mb-1 d-inline-block">Maria Redwood</a>
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.
                </p>
              </div>
            </div>
          </div>
          <RelatedPost />
          <SingleCommentArea />
          <CommentForm />
        </div>
      </div>
    </>
  )
}

export default BlogSingleContentTwo