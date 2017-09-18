import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const DEV = process.env.NODE_ENV === 'development';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = DEV ?
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, middlewares);

  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export const store = configureStore();

export default configureStore;
