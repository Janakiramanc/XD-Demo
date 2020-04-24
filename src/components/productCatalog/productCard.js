import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onFavIconClick = this.onFavIconClick.bind(this);
  }

  onFavIconClick(e) {
    debugger;
    $(e.currentTarget).toggleClass("fas");
    if (!this.props.details.isFavourite) {
      this.props.favUpdateCall(this.props.details.productId);
    } else {
      this.props.notFavUpdateCall(this.props.details.productId);
    }
  }

  render() {
    let heartCls = this.props.details.isFavourite
      ? `far fa-heart fas`
      : `far fa-heart`;
    return (
      <div
        className="product w-20 col text-center"
        id={this.props.details.productId}
      >
        <div className="product__image">
          <div className="product__hover">
            <a
              href="#/"
              className={heartCls}
              alt="Favourites"
              ref="fav_icon"
              onClick={this.onFavIconClick}
            >
              <span className="d-none d-print-block">Favourites</span>
            </a>
            <Link
              className="far fa-eye"
              to={`/Product/${this.props.details.productId}`}
            ></Link>
          </div>
          <img
            className="img-fluid"
            src={require(`../../images/${this.props.details.image}.png`)}
            alt="product"
          />
        </div>
        <h5
          className="product__title text-truncate"
          title={this.props.details.productName}
        >
          {this.props.details.productName}
        </h5>
        <h5 className="product__price">{this.props.details.price}</h5>
      </div>
    );
  }
}

export default ProductCard;
