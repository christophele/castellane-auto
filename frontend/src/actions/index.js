import axios from 'axios';

// Action type
export const GET_LECONS = 'GET_LECONS';
export const ERROR_GET_LECONS = 'ERROR_GET_LECONS';

const API_END_POINT = 'http://localhost:3001/';

export function getLecons() {
    return function(dispatch) {
        return axios(`${API_END_POINT}lecons`)
        .then(function(response) {
            console.log(response.data.lecons);
            dispatch({type: GET_LECONS, payload: response.data.lecons});
        })
        .catch(function (error) {
            dispatch({type: ERROR_GET_LECONS, errors: error.response.data.detail})
        });
    }
}
