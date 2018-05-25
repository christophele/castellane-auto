import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import LeconForm from '../../containers/LeconForm';

class LeconFormPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <LeconForm />
            </div>
        )
    }
}

export default LeconFormPage;
