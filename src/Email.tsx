import * as React from 'react';

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
    <div>
      <Title>Weather report for {data.city}</Title>
    </div>
  );
}

export default Email;
