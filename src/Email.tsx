import * as React from 'react';

import Base from './layout/Base';
import Title from './components/Title';

const Email = ({data}) => {
  return (
    <Base>
      <Title>Test title {data.title}</Title>
    </Base>
  );
};

export default Email;
