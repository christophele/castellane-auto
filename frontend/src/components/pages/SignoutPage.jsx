import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavbarPage from '../NavbarPage';
import {signOutMoniteur} from '../../actions/index';

class SignoutPage extends Component {
    componentWillMount() {
        this.props.signOutMoniteur();
    }

    render() {
        return (
            <div>
                <NavbarPage />
                <div>
                    <p>Vous avez été déconnecté avec succès.</p>
                </div>
            </div>
        )
    }
}

export default connect(null, {signOutMoniteur})(SignoutPage);
