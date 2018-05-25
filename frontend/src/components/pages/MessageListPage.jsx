import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import MessageList from '../../containers/MessageList';

class MessageListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <MessageList />
            </div>
        )
    }
}

export default MessageListPage;
