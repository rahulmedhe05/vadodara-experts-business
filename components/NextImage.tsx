import React from 'react';

const Image = ({ src, alt, fill, priority, style, ...props }: any) => {
  const imgStyle = fill
    ? { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', ...style }
    : style;
  return <img src={src} alt={alt} style={imgStyle} {...props} />;
};

export default Image;
