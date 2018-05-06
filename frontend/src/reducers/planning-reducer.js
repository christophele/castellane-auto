import {ACTION_TYPES} from '../actions/action-types';

export default function (state = [], action) {
    switch(action.type){
        case ACTION_TYPES.GET_PLANNING:
            return action.payload;
        case ACTION_TYPES.DELETE_PLANNING:
            return state.filter((planning) => {
                if(planning.numlecon == action.payload) {
                    return false;
                } else {
                    return true;
                }
            })
        case ACTION_TYPES.POST_PLANNING:
            return [...state, action.payload];
    }
    return state;
}
