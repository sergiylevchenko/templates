import * as React from 'react';

import Base from '../layout/Base';
import Title from '../components/Title';

const ConsumerAccountConfirmation = ({data}) => (
  <Base>
    <Title>Email title {data.title}</Title>
  </Base>
);

export default ConsumerAccountConfirmation;
