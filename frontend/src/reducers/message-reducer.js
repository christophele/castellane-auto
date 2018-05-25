import {ACTION_TYPES} from '../actions/action-types';

export default function (state = [], action) {
    switch(action.type){
        case ACTION_TYPES.GET_MESSAGES:
            return action.payload;
        case ACTION_TYPES.DELETE_MESSAGE:
            return state.filter((message) => {
                if(message.nummess === action.payload) {
                    return false;
                } else {
                    return true;
                }
            })
        case ACTION_TYPES.POST_MESSAGE:
            return [...state, action.payload];
        default:
    }
    return state;
}
