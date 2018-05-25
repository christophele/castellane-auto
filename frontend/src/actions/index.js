/* action creator est une fonction qui retourne un objet*/
/* une action renvoie un type (nom de l'action) et un payload (les données) */

/* quand l'action est retourné, redux va appelé tout les reducers et et leur envoyé l'action et le reducer concerné va être utilisé
car dans chaque reducer on reçoit en paramètre l'action et dans le cas où le reducer est lié au type de l'action ça retourne les données */

import axios from 'axios';
import {ACTION_TYPES} from './action-types';

const API_END_POINT = 'http://localhost:3002';

/**********************************/
/************* LECON **************/
/**********************************/

export function getLecons() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/lecons`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_LECONS, payload: response.data})
        })
    }
}

export function deleteLecon(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/lecons/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_LECON, payload: id})
        });
    }
}

export function createLecon(lecon) {
    return function(dispatch) {
        axios.post(`${API_END_POINT}/lecons/`, {
            datelecon: lecon.datelecon,
            heurelecon: lecon.heurelecon,
            tarifheure: lecon.tarifheure,
            id_demande: lecon.id_demande
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_LECON, payload: response.data})
        });
    }
}

/**********************************/
/************* CLIENT *************/
/**********************************/

export function getClients() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/clients`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_CLIENTS, payload: response.data})
        })
    }
}

export function getClientById(id) {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/clients/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_CLIENT, payload: response.data})
        });
    }
}

export function deleteClient(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/clients/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_CLIENT, payload: id})
        });
    }
}

export function createClient(client) {
    return function(dispatch) {
        axios.post(`${API_END_POINT}/clients`, {
            nomclient: client.nomclient,
            prenomclient: client.prenomclient,
            adresseclient: client.adresseclient,
            datedenaissanceclient: client.datedenaissanceclient,
            telephoneclient: client.telephoneclient,
            mailclient: client.mailclient,
            dateinscriptionclient: client.dateinscriptionclient,
            typeclient: client.typeclient,
            mdpclient: client.mdpclient
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_CLIENT, payload: response.data})
        });
    }
}

export function signInClient({
    mailclient,
    mdpclient
}, history) {
    return async (dispatch) => {
        try {
            console.log(mailclient);
            console.log(mdpclient);
            const res = await axios.post(`${API_END_POINT}/clients/connexion`, {mailclient, mdpclient});

            dispatch({type: ACTION_TYPES.AUTH_CLIENT});
            localStorage.setItem('userClient', res.data.token);
            history.push('/');
        } catch (error) {
            dispatch({type: ACTION_TYPES.AUTH_ERROR, payload: 'Email ou mot de passe invalide'});
        }
    };
}

export function signOutClient() {
    localStorage.clear();
    return {
        type: ACTION_TYPES.UNAUTH_CLIENT
    };
}

/**********************************/
/************ MONITEUR ************/
/**********************************/

export function getMoniteurs() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/moniteurs`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_MONITEURS, payload: response.data})
        }).catch((error) => {
            dispatch({type: ACTION_TYPES.ERROR, payload: error.data})
        });
    }
}

export function getMoniteurById(id) {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/moniteurs/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_MONITEUR, payload: response.data})
        });
    }
}

export function signInMoniteur({
    mailmoniteur,
    mdpmoniteur
}, history) {
    return async (dispatch) => {
        try {
            console.log(mailmoniteur);
            console.log(mdpmoniteur);
            const res = await axios.post(`${API_END_POINT}/moniteurs/connexion`, {mailmoniteur, mdpmoniteur});

            dispatch({type: ACTION_TYPES.AUTH_MONITEUR});
            localStorage.setItem('user', res.data.token);
            history.push('/');
        } catch (error) {
            dispatch({type: ACTION_TYPES.AUTH_ERROR, payload: 'Email ou mot de passe invalide'});
        }
    };
}

export function signOutMoniteur() {
    localStorage.clear();
    return {
        type: ACTION_TYPES.UNAUTH_MONITEUR
    };
}

/**********************************/
/************ VEHICULE ************/
/**********************************/

export function getVehicules() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/vehicules`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_VEHICULES, payload: response.data})
        });
    }
}

export function createVehicule(vehicule) {
    return function(dispatch) {
        axios.post(`${API_END_POINT}/vehicules/`, {
            numvehicule: vehicule.numvehicule,
            marque: vehicule.marque,
            immatriculation: vehicule.immatriculation,
            model: vehicule.model,
            date_achat: vehicule.date_achat
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_VEHICULE, payload: response.data})
        });
    }
}

export function deleteVehicule(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/vehicules/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_VEHICULE, payload: id})
        });
    }
}

/**********************************/
/************ MESSAGE *************/
/**********************************/

export function getMessages() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/messages`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_MESSAGES, payload: response.data})
        });
    }
}

export function createMessage(message) {
    return function(dispatch) {
        axios.post(`${API_END_POINT}/messages`, {
            prenom: message.prenom,
            nom: message.nom,
            email: message.email,
            sujet: message.sujet,
            message: message.message
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_MESSAGE, payload: response.data})
        });
    }
}

export function deleteMessage(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/messages/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_MESSAGE, payload: id})
        });
    }
}

/**********************************/
/*********** PLANNING *************/
/**********************************/

export function getPlanning() {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/plannings`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_PLANNING, payload: response.data})
        });
    }
}

export function createPlanning(planning) {
    return function (dispatch) {
        axios.post(`${API_END_POINT}/plannings`, {
            numclient: planning.numclient,
            numvehicule : planning.numvehicule,
            numlecon : planning.numlecon,
            nummoniteur : planning.nummoniteur,
            etatplanning : planning.etatplanning,
            datelecon : planning.numvehicule,
            heuredebut : planning.heuredebut,
            heurefin : planning.heurefin
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_PLANNING, payload: response.data})
        });
    }
}

export function deletePlanning(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/plannings/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_PLANNING, payload: id})
        });
    }
}
