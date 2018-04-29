import {ACTION_TYPES} from '../actions/action-types';

export default function (state = [], action) {
    switch(action.type){
        case ACTION_TYPES.GET_VEHICULES:
            return action.payload;
        case ACTION_TYPES.DELETE_VEHICULE:
            return state.filter((vehicule) => {
                if(vehicule.numvehicule == action.payload) {
                    return false;
                } else {
                    return true;
                }
            })
        case ACTION_TYPES.CREATE_VEHICULE:
            return [...state, action.payload];
    }
    return state;
}
