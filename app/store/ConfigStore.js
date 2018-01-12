/**
 * Created by Cral-Gates on 2018/1/4.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers/Index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducers, initialState);
    return store;
}