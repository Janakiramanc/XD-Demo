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
        className="col-4 col-md-6 col-xl-4 col"
        id={this.props.details.productId}
      >
        <section className="product">
          <div className="product__image">
            <label className="product__new rounded-pill">New</label>
            <a
              href="#/"
              className={heartCls}
              alt="Favourites"
              ref="fav_icon"
              onClick={this.onFavIconClick}
            >
              <span className="d-none d-print-block">Favourites</span>
            </a>
            {/* <div className="product__hover">
              
              <Link
                className="far fa-eye"
                to={`/Product/${this.props.details.productId}`}
              ></Link>
            </div> */}
            <img
              className="img-fluid"
              src={require(`../../images/${this.props.details.image}.png`)}
              alt="product"
            />
          </div>
          <h5
            className="product__title"
            title={this.props.details.productName}
          >
            {this.props.details.productName}
          </h5>
          <div className="align-items-baseline row">
            <div className="col-6">
              <h5 className="product__price">{this.props.details.price}</h5>
            </div>
            <div className="col-6 text-right">
              <a className="product__cart">Add to Cart</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductCard;
