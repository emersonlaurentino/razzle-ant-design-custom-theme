import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { store } from '../common/store/configureStore';
import App from '../application';

render(
  <LocaleProvider locale={require('antd/lib/locale-provider/pt_BR')}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
