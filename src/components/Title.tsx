import * as React from 'react';
import tw from 'tailwind-styled-components';

import Grid from './Grid';

const style = {
  wrapper: {
    width: 'auto',
    margin: '0 auto',
  },

  title: {
    fontSize: '24px',
    marginTop: '5px',
    marginBottom: '10px',
  },
};

const Title = ({children}) => (
  <Grid style={style.wrapper}>
    <PageHeader>{children}</PageHeader>
  </Grid>
);

const PageHeader = tw.h1`
  text-2xl
  font-extrabold
  mb-4
`;

export default Title;
