import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AccueilPage from './components/pages/AccueilPage';
import SigninPage from './components/pages/SigninPage';
// import SignupPage from './components/pages/SignupPage';
import SignoutPage from './components/pages/SignoutPage';
import ContactPage from './components/pages/ContactPage';
import PanelMoniteurPage from './components/pages/PanelMoniteurPage';
import LeconForm from './containers/LeconForm';
import LeconList from './containers/LeconList';
import ClientList from './containers/ClientList';
import ClientForm from './containers/ClientForm';
import MoniteurList from './containers/MoniteurList';
import VehiculeList from './containers/VehiculeList';
import VehiculeForm from './containers/VehiculeForm';
import MessageList from './containers/MessageList';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import RequireNotAuth from './components/RequireNotAuth';

class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={AccueilPage} />
                <Route path='/connexion' component={RequireNotAuth(SigninPage)} />
                {/* <Route path='/inscription' component={RequireNotAuth(SignupPage)} /> */}
                <Route path='/deconnexion' component={SignoutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/lecons' component={RequireAuth(LeconList)} />
                <Route exact path='/create-lecon' component={RequireAuth(LeconForm)} />
                <Route path='/clients' component={RequireAuth(ClientList)} />
                <Route exact path='/create-client' component={RequireAuth(ClientForm)} />
                <Route path='/moniteurs' component={RequireAuth(MoniteurList)} />
                <Route path='/vehicules' component={RequireAuth(VehiculeList)} />
                <Route path='/messages' component={RequireAuth(MessageList)} />
                <Route exact path='/create-vehicule' component={RequireAuth(VehiculeForm)} />
                <Route path='/panel-moniteur' component={RequireAuth(PanelMoniteurPage)} />
                <Route path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;
