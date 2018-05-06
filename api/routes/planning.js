const express = require('express');
const router = express.Router();
const connection = require('../../sql/connection');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM vue_planning', (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({err});
        }
        res.status(200).json(data);
    });
});

router.post('/', (req, res, next) => {
    const planning = {
        numclient : req.body.numclient,
        numvehicule : req.body.numvehicule,
        numlecon : req.body.numlecon,
        nummoniteur : req.body.nummoniteur,
        etatplanning : req.body.etatplanning,
        datelecon : req.body.datelecon,
        heuredebut : req.body.heuredebut,
        heurefin : req.body.heurefin
    };

    if (planning.numclient && planning.numvehicule && planning.numlecon && planning.nummoniteur && planning.etatplanning && planning.datelecon && planning.heuredebut && planning.heurefin) {
        connection.query('INSERT INTO planning (numclient, numvehicule, numlecon, nummoniteur, etatplanning, datelecon, heuredebut, heurefin) values (' + "'" + planning.numclient + "'" + "," + "'" + planning.numvehicule + "'" + "," + "'" + planning.numlecon + "'" + "," + "'" + planning.nummoniteur + "'" + "," + "'" + planning.etatplanning + "'" + "," + "'" + planning.datelecon + "'" + "," + "'" + planning.heuredebut + "'" + "," + "'" + planning.heurefin + "'" + ")", (err, data) => {
            if (err) {
				console.log(err);
				res.status(500).json({err});
			}
			res.status(201).json({
				message: "Planning mis à jour",
				data
			});
		});
	} else {
		res.status(500).json({
			message: "Entrez des données"
		});
	}
});

router.delete('/:leconId', (req, res, next) => {
	const leconId = req.params.leconId;
	if (leconId) {
		connection.query('DELETE FROM planning WHERE numlecon = ' + leconId, (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({err});
			}
			res.status(200).json({
				message: "Lecon avec l'id " + leconId + " supprimé.",
				data
			});
		});
	} else {
		res.status(500).json({
			message: "Entrez un id"
		});
	}
});

// INSERT INTO planning (numclient, numvehicule, numlecon, nummoniteur, etatplanning, datelecon, heuredebut, heurefin) VALUES
// ('128', '4', '4', '10', 'Validé', CURDATE(), CURTIME(), CURTIME());

module.exports = router;
