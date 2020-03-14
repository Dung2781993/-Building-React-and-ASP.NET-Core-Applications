import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const configureStore = () => applyMiddleware(thunk)(createStore)(rootReducer);

export default configureStore;

