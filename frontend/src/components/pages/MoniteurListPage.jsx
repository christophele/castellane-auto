import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import MoniteurList from '../../containers/MoniteurList';

class MoniteurListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <MoniteurList />
            </div>
        )
    }
}

export default MoniteurListPage;