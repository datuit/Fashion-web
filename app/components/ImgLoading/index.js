import React from 'react';
import classnames from 'classnames';
import Img from 'react-image';
import Spiner from 'Components/Spiner';

const ImgLoadding = ({ src, alt, width, height, className, style }) => (
  <Img
    className={classnames(className, 'img-fluid')}
    width={width}
    height={height}
    src={src}
    alt={alt}
    loader={<Spiner />}
    unloader={<Spiner />}
    style={style}
  />
);

export default ImgLoadding;
