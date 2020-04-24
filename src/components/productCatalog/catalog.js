import React, { Component } from "react";
import ProductCard from "./productCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Newsletter from "../common/newsletter";
import * as productActions from "../../actions/productActions";
import Banner from "./banner";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadProducts = this.loadProducts.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
  }

  componentDidMount() {
    if (!Object.keys(this.props.products).length) this.loadProducts();
    window.scrollTo(0, 0);
  }

  loadProducts() {
    this.props.actions.loadProducts();
  }

  displayProducts() {
    let prodArrs = [];
    let products = this.props.products;
    let isFavPage = this.props.isFavourites;
    let productKeys = Object.keys(products);
    prodArrs = productKeys.map((prod, ind) => {
      let prodDetails = products[prod];
      console.log("Value of Prod Details", prodDetails);
      if(isFavPage){
        if(prodDetails.isFavourite){
          return (
            <ProductCard
              key={prod}
              details={prodDetails}
              favUpdateCall={this.props.actions.markFavourite}
              notFavUpdateCall={this.props.actions.unMarkFavourite}
            />
          );
        }else{
          return null;
        }
      }else{
        return (
          <ProductCard
            key={prod}
            details={prodDetails}
            favUpdateCall={this.props.actions.markFavourite}
            notFavUpdateCall={this.props.actions.unMarkFavourite}
          />
        );
      }      
      
    });
    return prodArrs;
  }

  render() {
    return (
      <>
        <Banner />
        <div className="container">
          <div className="row">{this.displayProducts()}</div>
        </div>
        <Newsletter />
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("all products in catalog", state.products);
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // loadProducts: ()=> dispatch(productActions.loadProducts)
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
