import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import PlanningForm from '../../containers/PlanningForm';

class PlanningFormPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <PlanningForm />
            </div>
        )
    }
}

export default PlanningFormPage;
