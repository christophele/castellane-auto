import React from 'react';
import Button from './Button';
import Moment from 'react-moment';

const LeconListItem = (props) => {
    // on reçoit une leçon dans les props
    const {lecon} = props;
    return (
        // on retourne une ligne de tableau avec 4 colonnes
        <tr>
            <td>{lecon.numlecon}</td>
            <td><Moment format="DD-MM-YYYY">{lecon.datelecon}</Moment></td>
            <td>{lecon.heurelecon}</td>
            <td>{lecon.tarifheure}</td>
            <td>{lecon.id_demande}</td>
            <td><Button color="danger" onClick={() => deleteLecon(lecon)}>Supprimer</Button></td>
        </tr>
    )

    // suppression de la leçon, on envoie la leçon à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deleteLecon(lecon){
        props.deleteLeconCallBack(lecon)
    }
}

export default LeconListItem;
