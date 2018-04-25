/* action creator */
/* une action renvoie un type (nom de l'action) et un payload (les données) */

import axios from 'axios';
import {ACTION_TYPES} from './action-types';

const API_END_POINT = 'http://localhost:3002';

/**********************************/
/************* LECON **************/
/**********************************/

export function getLecons(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/lecons`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_LECONS, payload : response.data})
        })
    }
}

export function getLeconById(id){
    return function (dispatch){
        axios.get(`${API_END_POINT}/lecons/${id}`).then((response) =>{
            dispatch({type : ACTION_TYPES.GET_LECON, payload : response.data})
        })
    }
}

/**********************************/
/************* CLIENT *************/
/**********************************/

export function getClients(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/clients`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_CLIENTS, payload : response.data})
        })
    }
}

export function getClientById(id) {
    return function(dispatch) {
        axios.get(`${API_END_POINT}/clients/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.GET_CLIENT, payload: response.data})
        })
    }
}

export function deleteClient(id) {
    return function(dispatch) {
        axios.delete(`${API_END_POINT}/clients/${id}`).then((response) => {
            dispatch({type: ACTION_TYPES.DELETE_CLIENT, payload: id})
        })
    }
}

export function createClient(client) {
    return function (dispatch) {
        axios.post(`${API_END_POINT}/clients/`, {
            nomclient : client.nomclient,
            prenomclient : client.prenomclient,
            adresseclient : client.adresseclient,
            datedenaissanceclient : client.datedenaissanceclient,
            telephoneclient : client.telephoneclient,
            mailclient : client.mailclient,
            dateinscriptionclient : client.dateinscriptionclient,
            typeclient  : client.typeclient
        }).then((response) => {
            dispatch({type: ACTION_TYPES.POST_CLIENT, payload: response.data})
        });
    }
}

/**********************************/
/************ MONITEUR ************/
/**********************************/

export function getMoniteurs(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/moniteurs`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_MONITEURS, payload : response.data})
        }).catch((error) => {
            dispatch({type: ACTION_TYPES.ERROR, payload: error.data})
        });
    }
}

/**********************************/
/************ VEHICULE ************/
/**********************************/

export function getVehicules() {
    return function (dispatch) {
        axios.get(`${API_END_POINT}/vehicules`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_VEHICULES, payload : response.data})
        })
    }
}
