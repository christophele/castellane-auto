import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import MoniteurSignin from '../../containers/MoniteurSignin';

class MoniteurSigninPage extends Component {
    render () {
        const {handleSubmit} = this.props;
        return (
            <div>
                <NavbarPage />
                <MoniteurSignin />
            </div>
        )
    }
}

export default MoniteurSigninPage;
