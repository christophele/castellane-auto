import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Fa
} from 'mdbreact';
import {Link} from 'react-router';
import Waves from './Waves';

class NavbarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar light color="blue-grey lighten-3" expand="md" scrolling="scrolling">
                <NavbarBrand href="/">
                    <strong>Castellane Auto</strong>
                </NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                <Collapse isOpen={this.state.collapse} navbar="navbar">
                    <NavbarNav left="left">
                        <NavItem>
                            <Link to="/">Accueil</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='#'>Permis</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact">Contact</Link>
                        </NavItem>

                    </NavbarNav>
                    <NavbarNav right="right">
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav="nav" caret="caret"><Fa icon="user"/></DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="#">Connexion client</DropdownItem>
                                    <DropdownItem href="#">Connexion entreprise</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;
