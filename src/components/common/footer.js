import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list">
                <li>About Us</li>
                <li>Corporate Social Responsibility</li>
                <li>Social Media Sites</li>
                <li>Quality, Environment, Health & Safety</li>
                <li>E- Waste</li>
                <li>Diversity</li> 
                <li>Press Room</li> 
                <li>Terms of Use</li> 
                <li>Privacy Policy</li> 
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="footer__title">Products</h6>
              <ul className="footer__list">
                <li>Cinematography</li>
                <li>Photography</li>
                <li>Printing</li>
                <li>Scanning</li>
              </ul>
              <h6 className="footer__title">Services</h6>
              <ul className="footer__list">
                <li>Where to Buy</li>
                <li>Service Network</li>
                <li>Product Warranty</li>
                <li>Extended Warranty</li>
              </ul>
            </div>
            <div className="col-12 col-md-5">
              <h6 className="footer__title">Newsletter</h6> 
              <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <div className="newsletter__content">
                <div className="form-group">
                  <label for="newsletter-email">email:</label>
                  <input type="text" className="newsletter__textbox rounded-pill" placeholder="Email address" id="newsletter-email" />
                </div>
                <button type="button" className="btn btn--blue btn__medium rounded-pill" aria-label="Right Align">Subscribe</button>
              </div>
              <h6 className="footer__title">Experience Whitelabel App on Mobile</h6> 
              <a className="mr-4">
                <img src={require("../../images/playstore.png")} alt="playstore" />
              </a>
              <a>
                <img src={require("../../images/appstore.png")} alt="appstore" />
              </a>
              <h6 className="footer__title mt-5">Keep In Touch</h6> 
              <a className="fab fa-facebook-square"></a>
              <a className="fab fa-twitter"></a>
              <a className="fab fa-instagram"></a>
              <a className="fab fa-youtube"></a>
            </div>
          </div>          
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <p>In case of any concern, <a>Contact Us</a></p>
            </div>
            <div className="col-12 col-sm-7 text-right">
              <p>© 2020 www.WhiteLabel.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
