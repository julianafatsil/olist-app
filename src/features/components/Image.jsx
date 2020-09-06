import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, className, }) => (
  <img src={src} alt={alt} width={width} className={className} />
);

export default Image;

Image.defaultProps = {
  width: `${100}%`,
  className: '',
};

Image.propTypes = {
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
