import {ACTION_TYPES} from '../actions/action-types';

export default function (state = [], action) {
    switch(action.type){
        case ACTION_TYPES.GET_MONITEURS:
            return action.payload;
        default:
    }
    return state;
}
