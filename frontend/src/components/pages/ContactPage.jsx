import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import MessageForm from '../../containers/MessageForm';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <MessageForm />
                <FooterPage />
            </div>
        )
    }
}

export default ContactPage;
