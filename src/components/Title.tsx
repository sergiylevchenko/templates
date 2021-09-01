import * as React from 'react';

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
    <h1 style={style.title} className="title-heading">
      {children}
    </h1>
  </Grid>
);

export default Title;
