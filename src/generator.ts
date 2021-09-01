import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import ConsumerAccountConfirmation from './ConsumerAccountConfirmation';

export function generateEmailTpl(type, props) {
  const emailElement = React.createElement(ConsumerAccountConfirmation, props);
  const content = ReactDOMServer.renderToStaticMarkup(emailElement);

  return content;
}
