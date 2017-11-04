import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './modules/user/user';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
