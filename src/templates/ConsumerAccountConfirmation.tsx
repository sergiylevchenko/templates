import * as React from 'react';

import Base from '../layouts/Base';
import Title from '../components/Title';

const ConsumerAccountConfirmation = ({data}: any) => (
  <Base>
    <Title>{data.subject}</Title>
  </Base>
);

export default ConsumerAccountConfirmation;
