import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';
import './firebase/firebase';
import App from './init/App';
import i18n from './init/i18n'; // initialized i18next instance

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
registerServiceWorker();
