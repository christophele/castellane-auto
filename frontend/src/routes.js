import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AccueilPage from './components/pages/AccueilPage';
import TarifPage from './components/pages/TarifPage';
import MoniteurSigninPage from './components/pages/MoniteurSigninPage';
// import SignupPage from './components/pages/SignupPage';
import SignoutPage from './components/pages/SignoutPage';
import ContactPage from './components/pages/ContactPage';
import ClientListPage from './components/pages/ClientListPage';
import ClientFormPage from './components/pages/ClientFormPage';
import LeconListPage from './components/pages/LeconListPage';
import LeconFormPage from './components/pages/LeconFormPage';
import MoniteurListPage from './components/pages/MoniteurListPage';
import VehiculeListPage from './components/pages/VehiculeListPage';
import VehiculeFormPage from './components/pages/VehiculeFormPage';
import MessageListPage from './components/pages/MessageListPage';
import PlanningListPage from './components/pages/PlanningListPage';
import PlanningFormPage from './components/pages/PlanningFormPage';
import ClientSigninPage from './components/pages/ClientSigninPage';
// import MoniteurProfil from './containers/MoniteurProfil';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import RequireNotAuth from './components/RequireNotAuth';

import ClientRequireAuth from './components/ClientRequireAuth';
import ClientRequireNotAuth from './components/ClientRequireNotAuth';

class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={AccueilPage} />
                <Route path='/tarifs' component={TarifPage} />
                <Route path='/connexion' component={RequireNotAuth(MoniteurSigninPage)} />
                <Route path='/connexion-client' component={ClientRequireNotAuth(ClientSigninPage)} />
                {/* <Route path='/inscription' component={RequireNotAuth(SignupPage)} /> */}
                <Route path='/deconnexion' component={SignoutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/lecons' component={RequireAuth(LeconListPage)} />
                <Route path='/create-lecon' component={RequireAuth(LeconFormPage)} />
                <Route path='/clients' component={RequireAuth(ClientListPage)} />
                <Route path='/create-client' component={RequireAuth(ClientFormPage)} />
                <Route path='/moniteurs' component={RequireAuth(MoniteurListPage)} />
                {/* <Route path='/profil' component={RequireAuth(MoniteurProfil)} /> */}
                <Route path='/messages' component={RequireAuth(MessageListPage)} />
                <Route path='/vehicules' component={RequireAuth(VehiculeListPage)} />
                <Route path='/create-vehicule' component={RequireAuth(VehiculeFormPage)} />
                <Route path='/planning' component={RequireAuth(PlanningListPage)} />
                <Route path='/create-planning' component={RequireAuth(PlanningFormPage)} />
                <Route path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;
