import React from 'react';
import Button from './Button';

const MessageListItem = (props) => {
    const {message} = props;
    return (
        // on retourne une ligne de tableau avec 4 colonnes
        <tr>
            <td>{message.nummess}</td>
            <td>{message.prenom}</td>
            <td>{message.nom}</td>
            <td>{message.email}</td>
            <td>{message.sujet}</td>
            <td>{message.message}</td>
            <td><Button color="danger" onClick={() => deleteMessage(message)}>Supprimer</Button></td>
        </tr>
    )
    // suppression du message, on envoie le message à delete par callback au container car c'est lui qui est connecté pr faire la suppresion
    function deleteMessage(message){
        props.deleteMessageCallBack(message)
    }
}

export default MessageListItem;
