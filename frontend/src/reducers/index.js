import {combineReducers} from 'redux';
import leconReducer from './LeconReducer';
import clientReducer from './ClientReducer';

const rootReducer = combineReducers({
    lecons : leconReducer,
    clients : clientReducer
});

export default rootReducer;
