import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";
import * as actions from "../../actions/userActions";

const UserProfile = () => {
  const user = useSelector(state => state.user);
  let isUserSaved = Object.keys(user).length ? true : false;
  let history = useHistory();
  let [name, setName] = useState(isUserSaved ? user.name : "");
  let [dataUri, setDataUri] = useState(isUserSaved ? user.photo : "");
  let [country, setCountry] = useState(isUserSaved ? user.country : "");
  let [phoneNo, setPhoneNo] = useState(isUserSaved ? user.phone : "");

  const dispatch = useDispatch();

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  function userSubmit() {
    let userObj = {
      name: name,
      country: country,
      phone: phoneNo,
      photo: dataUri
    };
    dispatch(actions.saveUserDetails(userObj));
    history.push("/");
  }

  const isFullscreen = false;
  return (
    <section className="addproduct">
      <div className="container">
        <div className="addproduct__box">
          <h3>User Profile</h3>
          <form onSubmit={userSubmit}>
            <div className="form-group">
              <label for="dress-select">User Name:</label>
              <input
                id="dress-select"
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="category-select">Country:</label>
              <input
                id="category-select"
                type="text"
                className="form-control"
                value={country}
                onChange={e => setCountry(e.target.value)}
              />
              {/* <select id="category-select" name="dress" className="custom-select">
                            <option selected>Long Sleeve Shirt</option>
                            <option value="short">Short Sleeve Shirt</option>
                        </select> */}
            </div>
            <div className="form-group">
              <label for="price-add">Phone Number:</label>
              <input
                type="number"
                value={phoneNo}
                onChange={e => setPhoneNo(e.target.value)}
                className="form-control"
                id="price-add"
              />
            </div>
            <div className="form-group">
              {dataUri ? (
                <ImagePreview dataUri={dataUri} inHeader={"profile-img"} />
              ) : (
                <Camera
                  onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                  isFullscreen={isFullscreen}
                />
              )}
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

export default UserProfile;
