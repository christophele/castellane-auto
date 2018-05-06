import React from 'react';
import Button from './Button';

const PlanningListItem = (props) => {
    // on reçoit un planning dans les props
    const {planning} = props;
    return (
        // on retourne une ligne de tableau
        <tr>
            <td>{planning.nom_cl}</td>
            <td>{planning.immatriculation}</td>
            <td>{planning.num_lecon}</td>
            <td>{planning.nom_moniteur}</td>
            <td>{planning.etat_p}</td>
            <td>{planning.date_lecon}</td>
            <td>{planning.heure_debut}</td>
            <td>{planning.heure_fin}</td>
            <td><Button color="danger" onClick={() => deletePlanning(planning)}>Supprimer</Button></td>
        </tr>
    )

    // suppression du planning, on envoie le planning à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deletePlanning(planning){
        props.deletePlanningCallBack(planning)
    }
}

export default PlanningListItem;
