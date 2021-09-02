import * as React from 'react';

import {IComponentsProps} from '../common/interfaces';

const baseStyle = {
  body: {
    width: '100%',
  },
};

const Base = ({children, style = {}}: IComponentsProps) => (
  <html>
    <body style={{...baseStyle.body, ...style}}>{children}</body>
  </html>
);

export default Base;
