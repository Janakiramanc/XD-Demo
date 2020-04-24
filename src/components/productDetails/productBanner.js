import React from "react";

const ProdcutBanner = () => {
  return (
    <section className="banner text-center banner--small">
      <div className="banner__content">
        <h1 className="banner__title">Single Product Page</h1>
        <p className="banner__description">
          Home <span className="far fa-long-arrow-right"></span>
          Category <span className="far fa-long-arrow-right"></span>
          Product Details
        </p>
      </div>
    </section>
  );
};

export default ProdcutBanner;
