import React from 'react';

import Grid from './layout/Grid';
import Title from './elements/Title';

const style = {

  container: {
    backgroundColor: '#efefef',
    padding: '20px 0',
    fontFamily: 'sans-serif',
  },

  main: {
    maxWidth: '500px',
    width: '100%',
  },

};

function Email({ data }) {
  return (
    <div style={style.container}>
      <Grid style={style.main}>
        <Title>Weather report for {data.city}</Title>
      </Grid>
    </div>
  );
}

export default Email;
