/* action creator */
/* une action renvoie un type (nom de l'action) et un payload (les données) */

import axios from 'axios';

import {ACTION_TYPES} from './action-types';

const API_END_POINT = 'http://localhost:3002';

/* Lecon */

export function getLecons(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/lecons`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_LECONS, payload : response.data})
        });
    }
}

export function getLeconById(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/lecons/:id`).then((response) =>{
            dispatch({type : ACTION_TYPES.GET_LECON, payload : response.data})
        });
    }
}

/* Client */
export function getClients(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/clients`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_CLIENTS, payload : response.data})
        });
    }
}

/* Moniteur */

export function getMoniteurs(){
    return function (dispatch){
        axios.get(`${API_END_POINT}/moniteurs`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_MONITEURS, payload : response.data})
        });
    }
}

/* Mehicule */

export function getVehicules() {
    return function (dispatch) {
        axios.get(`${API_END_POINT}/vehicules`).then((response) => {
            dispatch({type : ACTION_TYPES.GET_VEHICULES, payload : response.data})
        });
    }
}
