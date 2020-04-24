import React from "react";
import PropTypes from "prop-types";

export const ImagePreview = ({ dataUri, inHeader }) => {
  let classNameFullscreen = inHeader;

  return (
    <span className={classNameFullscreen}>
      <img src={dataUri} />
    </span>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
