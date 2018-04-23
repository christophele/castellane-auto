/* fichier de conf des reducers où l'on associe le retour des reducers à des variables */

import {combineReducers} from 'redux';
import leconReducer from './LeconReducer';
import clientReducer from './ClientReducer';
import moniteurReducer from './MoniteurReducer';
import vehiculeReducer from './VehiculeReducer';

/* on récupère chaque reducer qu'on stocke dans une variable et qui devient un bout de state récupérable grâce à la fonction mapStateToProps */
const rootReducer = combineReducers({
    lecons : leconReducer,
    clients : clientReducer,
    moniteurs : moniteurReducer,
    vehicules : vehiculeReducer
});

export default rootReducer;
