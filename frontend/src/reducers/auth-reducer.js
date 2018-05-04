import {ACTION_TYPES} from '../actions/action-types';

export default function (state={}, action) {
    switch(action.type) {
        case ACTION_TYPES.AUTH_MONITEUR:
            return {
                ...state, authenticated: true
            };
        case ACTION_TYPES.UNAUTH_MONITEUR:
            return {
                ...state, authenticated: false
            };
        case ACTION_TYPES.AUTH_ERROR:
            return {
                ...state, error: action.payload
            };
    }
    return state;
}
