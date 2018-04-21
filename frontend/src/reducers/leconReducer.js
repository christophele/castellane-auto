import {GET_LECONS, ERROR_GET_LECONS} from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case GET_LECONS:
            return action.payload;
        case ERROR_GET_LECONS:
            return action.errors;
    }
    return state;
}
