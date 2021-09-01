import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Email from './Email';

export function generateEmailTpl(type, props) {
  const emailElement = React.createElement(Email, props);
  const content = ReactDOMServer.renderToStaticMarkup(emailElement);

  return content;
}
