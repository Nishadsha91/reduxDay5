import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import fetchData from './Reducer';
import {thunk} from 'redux-thunk'

const store = createStore(fetchData, applyMiddleware(thunk))

export default store