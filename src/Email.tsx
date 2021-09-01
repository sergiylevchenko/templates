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

const Email = ({data}) => {
  console.log(data);

  return (
    <div>
      <Title>Test title {data.title} 1</Title>
    </div>
  );
};

export default Email;
