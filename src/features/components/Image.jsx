import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, className, style, }) => (
  <img src={src} alt={alt} width={width} className={className} style={style} />
);

export default Image;

Image.defaultProps = {
  width: `${100}%`,
  className: '',
  style: {},
};

Image.propTypes = {
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.objectOf(Object).isRequired,
};
