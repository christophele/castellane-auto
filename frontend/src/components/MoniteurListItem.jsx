import React from 'react';

const MoniteurListItem = (props) => {
    const {moniteur} = props;
    return (
        // on retourne une ligne de tableau avec 4 colonnes
        <tr>
            <td>{moniteur.nommoniteur}</td>
            <td>{moniteur.prenommoniteur}</td>
            <td>{moniteur.adressemoniteur}</td>
            <td>{moniteur.numtelephonemoniteur}</td>
            <td>{moniteur.mailmoniteur}</td>
        </tr>
    )
}

export default MoniteurListItem;
