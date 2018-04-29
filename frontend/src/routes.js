import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import AccueilPage from './components/pages/AccueilPage';
import LoginPage from './components/pages/LoginPage';
import ContactPage from './components/pages/ContactPage';
import PanelMoniteurPage from './components/pages/PanelMoniteurPage';
import LeconForm from './containers/LeconForm';
import LeconList from './containers/LeconList';
// import Client from './containers/Client';
import ClientList from './containers/ClientList';
import ClientForm from './containers/ClientForm';
import MoniteurList from './containers/MoniteurList';
import VehiculeList from './containers/VehiculeList';
import VehiculeForm from './containers/VehiculeForm';
import MessageList from './containers/MessageList';

import NotFound from './components/NotFound';

class Routes extends Component {
    render () {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route exact path='/' component={AccueilPage} />
                    <Route path='connexion' component={LoginPage} />
                    <Route path='contact' component={ContactPage} />
                    <Route path='lecons' component={LeconList} />
                    <Route path='create-lecon' component={LeconForm} />
                    <Route path='clients' component={ClientList} />
                    <Route path='create-client' component={ClientForm} />
                    <Route path='moniteurs' component={MoniteurList} />
                    <Route path='vehicules' component={VehiculeList} />
                    <Route path='messages' component={MessageList} />
                    <Route path='create-vehicule' component={VehiculeForm} />
                    <Route path='panel-moniteur' component={PanelMoniteurPage} />
                    <Route path='*' component={NotFound} />
                </Router>
            </div>

        )
    }
}

export default Routes;
