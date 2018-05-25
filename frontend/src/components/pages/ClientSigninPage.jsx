import React, {Component} from 'react';
import ClientSignin from '../../containers/ClientSignin';
import NavbarPage from '../NavbarPage';

class ClientSigninPage extends Component {
    render() {
        return (
            <div>
            <NavbarPage />
            <ClientSignin />
            </div>
        )
    }
}

export default ClientSigninPage;
