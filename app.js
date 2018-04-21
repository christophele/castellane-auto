const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes
const moniteurRoutes = require('./api/routes/moniteur');
const vehiculeRoutes = require('./api/routes/vehicule');
const clientRoutes = require('./api/routes/client');
const leconRoutes = require('./api/routes/lecon');

// middleware body-parser
app.use(bodyParser.json());

// utilise l'api partout
app.use(cors());

// use routes
app.use('/moniteurs', moniteurRoutes);
app.use('/vehicules', vehiculeRoutes);
app.use('/clients', clientRoutes);
app.use('/lecons', leconRoutes);

module.exports = app;
