import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import PlanningForm from '../../containers/PlanningForm';

class PlanningFormPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <PlanningForm />
                <FooterPage />
            </div>
        )
    }
}

export default PlanningFormPage;
