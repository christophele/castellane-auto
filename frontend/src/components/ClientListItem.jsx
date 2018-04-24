import React from 'react';

const ClientListItem = (props) => {
    // on reçoit un client dans les props
    const {client} = props;
    return (
        // on retourne une ligne de tableau
        <tr>
            <td>{client.nomclient}</td>
            <td>{client.prenomclient}</td>
            <td>{client.adresseclient}</td>
            <td>{client.datedenaissanceclient}</td>
            <td>{client.telephoneclient}</td>
            <td>{client.mailclient}</td>
            <td>{client.dateinscriptionclient}</td>
            <td>{client.typeclient}</td>
            <td><button className="btn btn-danger" onClick={() => deleteClient(client)} >Supprimer</button></td>
        </tr>
    )

    // suppression du client, on envoie le client à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deleteClient(client){
        props.deleteClientCallBack(client)
    }
}

export default ClientListItem;
