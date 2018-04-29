import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class PanelMoniteurPage extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavbarPage />
                    <Drawer>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default PanelMoniteurPage;
