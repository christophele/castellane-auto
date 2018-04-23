import {ACTION_TYPES} from '../actions/ActionTypes';

export default function (state = [], action) {
    switch(action.type){
        case ACTION_TYPES.GET_MONITEURS:
            return action.payload;
    }
    return state;
}
