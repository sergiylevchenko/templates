import * as React from 'react';

const baseStyle = {
  body: {
    width: '100%',
  },
};

function Base({children, style = {}}) {
  return (
    <html>
      <body style={{...baseStyle.body, ...style}}>{children}</body>
    </html>
  )
}

export default Base;
