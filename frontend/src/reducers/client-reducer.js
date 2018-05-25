/* un reducer est une fonction qui retourne une partie du state d'application */

import {ACTION_TYPES} from '../actions/action-types';

/* le state par défaut est un tab vide car on aura une liste de clients */
export default function(state = [], action) {
    switch(action.type) {
        case ACTION_TYPES.GET_CLIENTS:
            return action.payload; // retourne le payload avec tt les lecons
        case ACTION_TYPES.DELETE_CLIENT:
            // on prend le state avec tous les clients et on le filtre, et on retire dans le cas où il y a l'id
            return state.filter((client) => { // pour chaque client
                if(client.numclient === action.payload){ // si l'id du client en cours ds la recherche du state est égal à action.payload (id du client à supprimer (en cliquant sur le bouton supprimer))
                    return false; // alors supprime du state
                } else {
                    return true; // retourne la valeur d'itération (client)
                }
            });
        case ACTION_TYPES.POST_CLIENT:
            // retourne le state en lui ajoutant action.payload (ici, un nouveau client)
            return [...state, action.payload];
        default:
    }
    /* si ça ne concerne pas ce reducer, on apporte aucune modif */
    return state;
}
