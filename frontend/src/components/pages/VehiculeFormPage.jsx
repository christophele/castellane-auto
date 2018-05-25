import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import VehiculeForm from '../../containers/VehiculeForm';

class VehiculeFormPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <VehiculeForm />
            </div>
        )
    }
}

export default VehiculeFormPage;
