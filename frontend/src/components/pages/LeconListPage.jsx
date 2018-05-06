import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import LeconList from '../../containers/LeconList';

class LeconListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <LeconList />
            </div>
        )
    }
}

export default LeconListPage;
