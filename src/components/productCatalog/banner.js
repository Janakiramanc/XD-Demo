import React from "react";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
        COOLPIX LENS FOR<br/> EVERY OCCASION
        </h1>
        <p className="banner__description">
          Combining outstanding optics with sophisticated design and features, WhiteLabel compact digital camera lens capture your everyday precious moments.
        </p>
        <button
          type="button"
          className="btn btn--bold  btn--white rounded-pill btn__wide"
          aria-label="Center Align"
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default Banner;
