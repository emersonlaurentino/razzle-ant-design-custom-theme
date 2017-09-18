import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './common/containers/home';
import NotFound from './common/containers/not-found';
import styles from './application.less';
import './theme.ant';

const App = () => (
  <div className={styles.main}>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
