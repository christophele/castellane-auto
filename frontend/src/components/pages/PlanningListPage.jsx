import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import PlanningList from '../../containers/PlanningList';

class PlanningListPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <PlanningList />
            </div>
        )
    }
}

export default PlanningListPage;
