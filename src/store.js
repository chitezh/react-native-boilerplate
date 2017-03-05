import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from './reducers';

const configureStore = (onComplete) => {
  const middlewares = [thunk];
  const enhancers = [
    applyMiddleware(...middlewares),
    autoRehydrate(),
  ];

  if (__DEV__) {
    enhancers.push(devTools());
  }

  const store = createStore(reducers, undefined, compose(...enhancers));
  persistStore(store, { storage: AsyncStorage }, () => setTimeout(onComplete, 500));

  return store;
};

export default configureStore;
