import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Email from './Email';

export function sayHello() {
  console.log('hi')
}

export function sayGoodbye() {
  console.log('goodbye')
}
export function generateEmailTpl(type, props) {
  console.log(type);
  console.log(props);
  const emailElement = React.createElement(Email, props);
  console.log(emailElement)
  console.log('------------')
  const content = ReactDOMServer.renderToStaticMarkup(emailElement);

  return content;
}
