import fs from 'fs';
import path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import ConsumerAccountConfirmation from './templates/ConsumerAccountConfirmation';

const CONTENT_TAG = '%CONTENT%';

interface ITemplateParams {
  subject: EmailSubject | null,
  tpl: React.FunctionComponent | null
}

export enum EmailType {
  ConsumerAccountConfirmation = 'consumer-account-confirmation',
  ConsumerAddressConfirmation = 'consumer-address-confirmation',
  ConsumerEmailVerification = 'consumer-email-verification',
  ConsumerPwdResetRequest = 'consumer-pwd-reset-request',
  ConsumerPwdResetSuccess = 'consumer-pwd-reset-success',
  DriverAccountConfirmation = 'driver-account-confirmation',
  DriverBgCheckApproved = 'driver-bg-check-approved',
  DriverBgCheckDenied = 'driver-bg-check-denied',
  OrderCreatedNotification = 'order-created-notification'
}

enum EmailSubject {
  WelcomeToDeliverEnd = 'Welcome to DeliverEnd!',
  NewAddressConfirmation = 'New Address Confirmation',
  EmailVerification = 'Email Verification',
  PasswordResetRequested = 'Password Reset Requested',
  PasswordResetSuccessful = 'Password Reset Successful',
  BackgroundCheckApproved = 'Background Check Approved',
  BackgroundCheckDenied = 'Background Check Denied',
  NewOrderNotification = 'New Order Notification'
}

const getTemplate = (type: EmailType): ITemplateParams => {
  const templateParams: ITemplateParams = {
    subject: null,
    tpl: null
  };

  switch ( type ) {
    case EmailType.ConsumerAccountConfirmation:
      templateParams.subject = EmailSubject.WelcomeToDeliverEnd;
      templateParams.tpl = ConsumerAccountConfirmation;
      break;
    case EmailType.ConsumerAddressConfirmation:
      templateParams.subject = EmailSubject.NewAddressConfirmation;
      break;
    case EmailType.ConsumerEmailVerification:
      templateParams.subject = EmailSubject.EmailVerification;
      break;
    case EmailType.ConsumerPwdResetRequest:
      templateParams.subject = EmailSubject.PasswordResetRequested;
      break;
    case EmailType.ConsumerPwdResetSuccess:
      templateParams.subject = EmailSubject.PasswordResetSuccessful;
      break;
    case EmailType.DriverAccountConfirmation:
      templateParams.subject = EmailSubject.WelcomeToDeliverEnd;
      break;
    case EmailType.DriverBgCheckApproved:
      templateParams.subject = EmailSubject.BackgroundCheckApproved;
      break;
    case EmailType.DriverBgCheckDenied:
      templateParams.subject = EmailSubject.BackgroundCheckDenied;
      break;
    case EmailType.OrderCreatedNotification:
      templateParams.subject = EmailSubject.NewOrderNotification;
      break;
  }

  return templateParams;
};

const getFile = (relativePath): Promise<string> => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, relativePath);

    return fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
};

export const generateEmailTpl = async (type: EmailType, props: any): Promise<string | boolean> => {
  const {tpl, subject} = getTemplate(type);

  if (!tpl || !subject) {
    return Promise.resolve(false);
  }

  return getFile('./email.html')
    .then((template) => {
      const emailElement = React.createElement(tpl, {...props, subject});
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML.replace(CONTENT_TAG, content);

      return emailHTML;
    });
};
