import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../actions/productActions";
import displayNotification from "../../pushNotification";

const AddProduct = props => {
  let history = useHistory();
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  // const dispatch = useDispatch();

  const productSubmit = e => {
    let newProductId = Object.keys(allProducts).length + 1;
    let prodObj = {
      productId: newProductId,
      productName: prodName,
      category: category,
      price: price,
      isAvailable: true,
      description: description,
      image: "shirt",
      isFavourite: false
    };
    debugger;
    dispatch(addProduct(prodObj));
    //Ask permission for Push Notification
    if (Notification) {
      Notification.requestPermission(function(status) {
        console.log("Notification permission status:", status);
        displayNotification(prodName);
      });
    }
    history.push("/");
  };

  return (
    <section className="addproduct">
      <div className="container">
        <div className="addproduct__box">
          <h3>Add Products</h3>
          <form onSubmit={productSubmit}>
            <div className="form-group">
              <label for="dress-select">Product Name:</label>
              <input
                id="dress-select"
                type="text"
                className="form-control"
                value={prodName}
                onChange={e => setProdName(e.target.value)}
              />
              {/* <select id="dress-select" name="dress" className="custom-select">
                            <option selected>Long Sleeve Shirt</option>
                            <option value="short">Short Sleeve Shirt</option>
                        </select> */}
            </div>
            <div className="form-group">
              <label for="category-select">Category:</label>
              <input
                id="category-select"
                type="text"
                className="form-control"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
              {/* <select id="category-select" name="dress" className="custom-select">
                            <option selected>Long Sleeve Shirt</option>
                            <option value="short">Short Sleeve Shirt</option>
                        </select> */}
            </div>
            <div className="form-group">
              <label for="price-add">Price:</label>
              <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="form-control"
                id="price-add"
              />
            </div>
            <div className="form-group">
              <label for="description-add">Description:</label>
              <textarea
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows="5"
                id="description-add"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              aria-label="Left Align"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
