/* un reducer est une fonction qui retourne une partie du state d'application */

import {ACTION_TYPES} from '../actions/action-types';

/* le state par défaut est un tab vide car on aura une liste de posts */
export default function(state = [], action) {
    switch(action.type) {
        case ACTION_TYPES.GET_LECONS:
            return action.payload; // retourne le payload avec tt les lecons
    }
    /* si ça ne concerne pas ce reducer, on apporte aucune modif */
    return state;
}
