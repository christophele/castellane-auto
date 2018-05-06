import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import ClientList from '../../containers/ClientList';

class ClientListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <ClientList />
            </div>
        )
    }
}

export default ClientListPage;
