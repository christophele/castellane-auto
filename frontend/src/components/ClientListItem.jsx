import React from 'react';
import Button from './Button';
import {FormattedDate} from 'react-intl';

const ClientListItem = (props) => {
    // on reçoit un client dans les props
    const {client} = props;
    return (
        // on retourne une ligne de tableau
        <tr>
            <td>{client.numclient}</td>
            <td>{client.nomclient}</td>
            <td>{client.prenomclient}</td>
            <td>{client.adresseclient}</td>
            <td>{client.datedenaissanceclient}</td>
            <td>{client.telephoneclient}</td>
            <td>{client.mailclient}</td>
            <td><FormattedDate value={new Date(client.dateinscriptionclient)} year="numeric" month="numeric" day="numeric" /></td>
            <td>{client.typeclient}</td>
            <td>{client.mdpclient}</td>
            <td><Button color="danger" onClick={() => deleteClient(client)}>Supprimer</Button></td>
        </tr>
    )

    // suppression du client, on envoie le client à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deleteClient(client){
        props.deleteClientCallBack(client)
    }
}

export default ClientListItem;
