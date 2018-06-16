import React from 'react';
import Button from './Button';
import Moment from 'react-moment';

const DemandeleconListItem = (props) => {
    const {demandelecon} = props;
    return (
        // retourne une ligne de tableau
        <tr>
            <td>{demandelecon.id_demande}</td>
            <td><Moment format="DD-MM-YYYY">{demandelecon.datelecon}</Moment></td>
            <td>{demandelecon.heurelecon}</td>
            <td>{demandelecon.mailclient}</td>
            <td><Button color="danger" onClick={() => deleteDemandelecon(demandelecon)}>Supprimer</Button></td>
        </tr>
    )

    function deleteDemandelecon(demandelecon) {
        props.deleteDemandeLeconCallBack(demandelecon)
    }
}



export default DemandeleconListItem;
