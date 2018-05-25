/* fichier de conf des reducers où l'on associe le retour des reducers à des variables */

import {combineReducers} from 'redux';
import leconReducer from './lecon-reducer';
import clientReducer from './client-reducer';
import moniteurReducer from './moniteur-reducer';
import vehiculeReducer from './vehicule-reducer';
import messageReducer from './message-reducer';
import planningReducer from './planning-reducer';
import authReducer from './auth-reducer';
import clientAuthReducer from './client-auth-reducer';
import {reducer as formReducer} from 'redux-form';
import activeMoniteurReducer from './active-moniteur-reducer';

/* on récupère chaque reducer qu'on stocke dans une variable et qui devient un bout de state récupérable grâce à la fonction mapStateToProps */
const rootReducer = combineReducers({
    lecons : leconReducer,
    clients : clientReducer,
    moniteurs : moniteurReducer,
    activeMoniteur : activeMoniteurReducer,
    vehicules : vehiculeReducer,
    messages : messageReducer,
    plannings : planningReducer,
    auth: authReducer,
    clientAuth : clientAuthReducer,
    form : formReducer
});

export default rootReducer;
