import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import AccueilPage from './components/pages/AccueilPage';
import ContactPage from './components/pages/ContactPage';
import Lecon from './containers/Lecon';
import LeconForm from './containers/LeconForm';
import LeconList from './containers/LeconList';
// import Client from './containers/Client';
import ClientList from './containers/ClientList';
import ClientForm from './containers/ClientForm';
import MoniteurList from './containers/MoniteurList';
import VehiculeList from './containers/VehiculeList';
import NotFound from './components/NotFound';

class Routes extends Component {
    render () {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={AccueilPage} />
                    <Route path='contact' component={ContactPage} />
                    <Route path='lecons' component={LeconList} />
                    <Route path='lecons/:id' component={Lecon} />
                    <Route path='lecon-form' component={LeconForm} />
                    <Route path='clients' component={ClientList} />
                    <Route path='create-client' component={ClientForm} />
                    <Route path='moniteurs' component={MoniteurList} />
                    <Route path='vehicules' component={VehiculeList} />

                    <Route path='*' component={NotFound} />
                </Router>
            </div>

        )
    }
}

export default Routes;
