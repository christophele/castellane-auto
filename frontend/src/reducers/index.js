import {combineReducers} from 'redux';
import leconReducer from './leconReducer';

const rootReducer = combineReducers({
    lecons : leconReducer
});

export default rootReducer;
