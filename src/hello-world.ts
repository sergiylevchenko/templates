import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Email from './Email';

export function sayHello() {
  console.log('hi')
}

export function sayGoodbye() {
  console.log('goodbye')
}

export function generateEmailTpl() {
  const emailElement = React.createElement(Email, { data: {city: 'Email'} });
  console.log(emailElement)
  console.log('------------')
  const content = ReactDOMServer.renderToStaticMarkup(emailElement);

  return content;
}
