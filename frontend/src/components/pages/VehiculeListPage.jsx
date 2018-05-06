import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import VehiculeList from '../../containers/VehiculeList';

class VehiculeListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <VehiculeList />
            </div>
        )
    }
}

export default VehiculeListPage;
