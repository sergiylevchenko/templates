import * as React from 'react';

const style = {

  wrapper: {
    width: 'auto',
    margin: '0 auto',
  },

  title: {
    fontSize: '24px',
    // fontWeight: 'bold',
    marginTop: '5px',
    marginBottom: '10px',
  },

};

function Title({ children }) {
  return (
      <h1 style={style.title} className="title-heading">
        {children}
      </h1>
  );
}

export default Title;
