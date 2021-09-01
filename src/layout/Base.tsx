import * as React from 'react';

const baseStyle = {
  body: {
    width: '100%',
  },
};

const Base = ({children, style = {}}) => (
  <html>
    <body style={{...baseStyle.body, ...style}}>{children}</body>
  </html>
);

export default Base;
