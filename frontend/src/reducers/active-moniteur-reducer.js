import {ACTION_TYPES} from '../actions/action-types';

export default function (state = null, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_MONITEUR:
            return action.payload;
    }
    return state;
}
