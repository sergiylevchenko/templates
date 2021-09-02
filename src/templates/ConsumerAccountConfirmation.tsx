import * as React from 'react';

import Base from '../layouts/Base';
import Title from '../components/Title';

const ConsumerAccountConfirmation = ({data}: any) => (
  <Base>
    <Title>Email title {data.title}</Title>
  </Base>
);

export default ConsumerAccountConfirmation;
