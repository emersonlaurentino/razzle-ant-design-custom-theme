import http from 'http';
import app from './server';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000);

if (module.hot) {
  /* eslint-disable */
  console.log('✅  Server-side HMR Enabled!');
  /* eslint-enable */
  module.hot.accept('./server', () => {
    /* eslint-disable */
    console.log('🔁  HMR Reloading `./server`...');
    /* eslint-enable */
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
