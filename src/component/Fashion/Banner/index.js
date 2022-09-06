import React, { useState, useEffect} from 'react'
import BanImg from '../../../assets/img/common/man.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_URL, post } from '../../../helper/api';
;

const Banner = () => {

    const [data, setData] = useState([]);

    const bannerList = async () => {
      var body = {};
      var result = await post("master/bannerList", body);
      if (result) {
        setData(result.data);
      } else {
        alert("banner not updated!!");
      }
    };

    useEffect(() => {
     bannerList()
    }, [])
    
// alert(JSON.stringify(data))
    return (
      <>
        <section id="banner_one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner_text_one">
                  <h1
                    className="wow flipInX"
                    data-wow-duration="3.0s"
                    data-wow-delay=".3s"
                  >
                    {/* Live For{" "} */}
                    <span
                      className="wow flipInX"
                      data-wow-duration="2.0s"
                      data-wow-delay=".5s"
                    >
                      Fashion
                    </span>
                  </h1>
                  <h3>Save Up To 50%</h3>
                  <Link to="/shop" className="theme-btn-one bg-black btn_md">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero_img">
                  {data.map((item) => {
                    return (
                      <img
                        src={`${API_URL}/images/${item.image1}`}
                        style={{ width: "1920px", height: "800px" }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Banner
