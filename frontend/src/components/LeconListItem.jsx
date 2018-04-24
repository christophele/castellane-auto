import React from 'react';

const LeconListItem = (props) => {
    // on reçoit une leçon dans les props
    const {lecon} = props;
    return (
        // on retourne une ligne de tableau avec 4 colonnes
        <tr>
            <td>{lecon.datelecon}</td>
            <td>{lecon.heurelecon}</td>
            <td>{lecon.tarifheure}</td>
            <td><button className="btn btn-danger">test</button></td>
        </tr>
    )
}

export default LeconListItem;
