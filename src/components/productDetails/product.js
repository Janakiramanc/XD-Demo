import React, { useEffect } from "react";
import ProdcutBanner from "./productBanner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Newsletter from "../common/newsletter";
import * as actions from "../../actions/productActions";
import $ from "jquery";

const Product = () => {
  const { productId } = useParams();
  const allProducts = useSelector(state => state.products);
  console.log("allProducts in Product Page", allProducts);
  const dispatch = useDispatch();

  let currentProduct = Object.keys(allProducts).length
    ? allProducts[productId]
    : {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageChange = e => {
    $("#prodImg" + currentProduct.productId).addClass("fade");
    let newImgSrc = e.target.src;
    $(e.target)
      .parent()
      .parent()
      .find(".current")
      .removeClass("current");
    $(e.target)
      .parent()
      .addClass("current");
    setTimeout(() => {
      $("#prodImg" + currentProduct.productId).attr("src", newImgSrc);
      $("#prodImg" + currentProduct.productId).removeClass("fade");
    }, 200);
    debugger;
  };

  const onFavIconClick = e => {
    debugger;
    $(e.currentTarget).toggleClass("fas");
    if (!currentProduct.isFavourite) {
      dispatch(actions.markFavourite(currentProduct.productId));
    } else {
      dispatch(actions.unMarkFavourite(currentProduct.productId));
    }
  };

  let imgId = "prodImg" + currentProduct.productId;
  let heartCls = currentProduct.isFavourite
    ? `far fa-heart fas`
    : `far fa-heart`;
  return (
    <div>
      <ProdcutBanner />
      {currentProduct.productId == productId && (
        <section className="container">
          {/* <section className="container"> */}
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="product-details-image">
                <img
                  id={imgId}
                  src={require(`../../images/${currentProduct.image}1.png`)}
                  alt="productImg"
                />
                <div
                  className="product-details-image--thumbnail"
                  onClick={imageChange}
                >
                  <div className="item">
                    <img
                      src={require(`../../images/${currentProduct.image}3.png`)}
                      alt="productImgThumb"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require(`../../images/${currentProduct.image}2.png`)}
                      alt="productImgThumb"
                    />
                  </div>
                  <div className="item current">
                    <img
                      src={require(`../../images/${currentProduct.image}1.png`)}
                      alt="productImgThumb"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="product-details">
                <h1 className="product-details__head">
                  {currentProduct.productName}
                </h1>
                <div className="product-details__price">
                  {currentProduct.price}
                </div>
                <ul className="product-details__list">
                  <li>
                    <span>Category</span>
                    <span>: {currentProduct.category}</span>
                  </li>
                  <li>
                    <span>Availability</span>
                    <span>
                      :{" "}
                      {currentProduct.isAvailable ? `In Stock` : "Out of Stock"}
                    </span>
                  </li>
                </ul>
                <p className="product-details__text">
                  {currentProduct.description}
                </p>
                <div className="product-details__quantity">
                  <span>Quantity :</span>
                  <span className="select-box">
                    <input type="number" value="1" />
                  </span>
                </div>
                <div className="product-details__cart clearfix">
                  <button
                    className="btn btn--blue btn--bold btn__wide float-left"
                    type="button"
                    aria-label="Left Align"
                  >
                    ADD TO CART
                  </button>
                  <span className="far fa-gem float-left"></span>
                  <span
                    className={heartCls + " float-left"}
                    onClick={onFavIconClick}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Newsletter sourcePageProduct={true} />
    </div>
  );
};

export default Product;
