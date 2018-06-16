import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import Inscription from '../../containers/Inscription';

class InscriptionPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <Inscription />
            </div>
        )
    }
}

export default InscriptionPage;
