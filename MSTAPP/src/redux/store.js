import {applyMiddleware, combineReducers} from 'redux';
import {createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {authReducer} from './reducers/authReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  });

export const Store = createStore(RootReducer, applyMiddleware(thunk));

