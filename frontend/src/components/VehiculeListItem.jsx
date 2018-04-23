import React from 'react';

const VehiculeListItem = (props) => {
    const {vehicule} = props;
    return (
        <tr>
            <td>{vehicule.marque}</td>
            <td>{vehicule.immatriculation}</td>
            <td>{vehicule.model}</td>
            <td>{vehicule.date_achat}</td>
        </tr>
    )
}

export default VehiculeListItem;
