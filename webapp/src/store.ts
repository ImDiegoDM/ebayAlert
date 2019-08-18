import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middlware = applyMiddleware(promise, logger);

export default createStore(reducer, middlware);
