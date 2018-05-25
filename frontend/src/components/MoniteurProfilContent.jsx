import React from 'react';

const MoniteurProfilContent = (props) => {
    const {moniteur} = props;
    return (
        <div>
            <h2> Mon profil </h2>
            <p>{moniteur.nommoniteur}</p>
            <p>{moniteur.prenommoniteur}</p>
            <p>{moniteur.adressemoniteur}</p>
            <p>{moniteur.numtelephonemoniteur}</p>
            <p>{moniteur.mailmoniteur}</p>
        </div>
    )
}

export default MoniteurProfilContent;
