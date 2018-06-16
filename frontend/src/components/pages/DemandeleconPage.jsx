import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import DemandeleconForm from '../../containers/DemandeleconForm';

class DemandeleconPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <DemandeleconForm />
            </div>
        )
    }
}

export default DemandeleconPage;
