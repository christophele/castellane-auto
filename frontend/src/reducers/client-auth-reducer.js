import {ACTION_TYPES} from '../actions/action-types';

export default function (state={}, action) {
    switch(action.type) {
        case ACTION_TYPES.AUTH_CLIENT:
            return {
                ...state, clientAuthenticated: true
            };
        case ACTION_TYPES.UNAUTH_CLIENT:
            return {
                ...state, clientAuthenticated: false
            };
        case ACTION_TYPES.AUTH_ERROR:
            return {
                ...state, error: action.payload
            };
        default:
    }
    return state;
}
