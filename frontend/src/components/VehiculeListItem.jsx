import React from 'react';
import Button from './Button';
import Moment from 'react-moment';

const VehiculeListItem = (props) => {
    const {vehicule} = props;
    return (
        // retourne une ligne de tableau
        <tr>
            <td>{vehicule.numvehicule}</td>
            <td>{vehicule.marque}</td>
            <td>{vehicule.immatriculation}</td>
            <td>{vehicule.model}</td>
            <td><Moment format="DD-MM-YYYY">{vehicule.date_achat}</Moment></td>
            <td><Button color="danger" onClick={() => deleteVehicule(vehicule)}>Supprimer</Button></td>
        </tr>
    )
    // suppression du vehicule, on envoie le vehicule à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deleteVehicule(vehicule) {
        props.deleteVehiculeCallBack(vehicule)
    }
}



export default VehiculeListItem;
