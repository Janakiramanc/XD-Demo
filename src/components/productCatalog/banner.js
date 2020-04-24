import React from "react";

function Banner() {
  return (
    <section className="banner text-center">
      <div className="banner__overlay"></div>
      <div className="banner__content">
        <h1 className="banner__title">
          Fashion for <br /> Upcoming Winter
        </h1>
        <p className="banner__description">
          Wear It is a fashion apparael brand. It caters to all demographics.
          From a new born baby, kids, youngsters and all have something to take
          away.
        </p>
        <button
          type="button"
          className="btn btn__big btn--bold  btn--white"
          aria-label="Center Align"
        >
          View Collection
        </button>
      </div>
    </section>
  );
}

export default Banner;
