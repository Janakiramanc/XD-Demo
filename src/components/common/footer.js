import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="footer__title">About Us</div>
                  <div className="footer__content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="footer__title">Newsletter</div>
                  <div className="footer__content">
                    Stay updated with our latest trends
                  </div>
                  <div className="footer__news">
                    <div className="form-group">
                      <label for="footer-email">email:</label>
                      <input
                        type="text"
                        placeholder="Email Address"
                        id="footer-email"
                        className="email-box"
                      />
                    </div>
                    <button
                      className="btn"
                      type="button"
                      aria-label="Right Align"
                    >
                      <span className="far fa-long-arrow-right"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row">
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="footer__title">Instagram Feed</div>
                  <div className="instafeed">
                    <div className="instafeed__img">
                      <img src={require("../../images/1.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/2.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/3.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/4.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/5.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/6.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/7.png")} alt="instaimg" />
                    </div>
                    <div className="instafeed__img">
                      <img src={require("../../images/8.png")} alt="instaimg" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="footer__title">Follow Us</div>
                  <div className="footer__content">Let us be social</div>
                  <div className="social-icon">
                    <span className="fab fa-facebook-f"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-dribbble"></span>
                    <span className="fab fa-behance"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col copyright">Copyright ©2020</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
