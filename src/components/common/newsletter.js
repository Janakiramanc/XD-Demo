import React from "react";

const Newsletter = props => {
  let prodPageCls = props.sourcePageProduct ? "newsletter mt-0" : "newsletter";
  return (
    <section className="newsletter">  
      <div className="container">
      <h1 className="newsletter__title">News & Press Release</h1>
      <section className="newsletter__wrapper">
        <div className="row align-items-center">
          <div className="col col-lg-auto col-md-6">
            <img src={require("../../images/newsletter.png")} className="img-fluid" alt="newletter" />
          </div>
          <div className="col newsletter__info">
            <h6 className="newsletter__info--title">WhiteLabel Unveils New Features For the Highly Anticipated Canon EOS R5</h6>
            <p className="newsletter__info--content">
              <strong>14 March 2020 - Chicago</strong> - The new Oltiva Prime series offers softer image rendering for more natural and impressive subjects. Having a unified design with the existing Cinema EF Primes, changing of lenses during on set will be a breeze. In addition, color balance has been made uniform throughout bo...
            </p>
            <button className="btn btn--blue btn__medium rounded-pill">Read More</button>
          </div>
        </div>
      </section>        
      </div>
    </section>
  );
};

export default Newsletter;
