import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import ClientForm from '../../containers/ClientForm';

class ClientFormPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <ClientForm />
            </div>
        )
    }
}

export default ClientFormPage;
