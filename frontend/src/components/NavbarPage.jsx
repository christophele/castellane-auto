import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Fa,
} from 'mdbreact';
import Waves from './Waves';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

class NavbarPage extends Component {
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

    navbarAdminLink() {
        if(this.props.authenticated) {
            return [
                <NavbarNav left="left">
                    <NavItem>
                        <NavLink to="/" style={{color:'black'}}>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#' style={{color:'black'}}>Permis</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/panel-admin' style={{fontWeight: 'bold', color:'black'}}>Administration</NavLink>
                    </NavItem>
                </NavbarNav>
            ];
        }
        return [
            <NavbarNav left="left">
                <NavItem>
                    <NavLink to="/" style={{color:'black'}}>Accueil</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='#' style={{color:'black'}}>Permis</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
                </NavItem>
            </NavbarNav>
        ]
    }

    navbarSigninLink() {
        if(this.props.authenticated) {
            return [
                <NavbarNav right="right">
                    <NavItem>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav="nav" caret="caret"><Fa icon="user"/>&nbsp;Profil&nbsp;</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/deconnexion">Déconnexion</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                </NavbarNav>
            ];
        }
        return [
            <NavbarNav right="right">
                <NavItem>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav="nav" caret="caret"><Fa icon="user"/>&nbsp;Connexion&nbsp;</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/connexion">Entreprise</DropdownItem>
                            <DropdownItem href="/connexion-client">Client</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
            </NavbarNav>
        ];
    }

    render() {
        return (
            // <nav className="navbar">
            //     <div className="container">
            //         <Link to='/'><span className="brand">Authentification</span></Link>
            //     </div>
            //     {this.navbarLink()}
            // </nav>
            <Navbar light color="blue-grey lighten-3" expand="md" scrolling="scrolling">
                <NavbarBrand style={{fontWeight: 'bold'}} href="/">
                    Castellane Auto
                </NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                <Collapse isOpen={this.state.collapse} navbar="navbar">

                    {this.navbarAdminLink()}
                    {this.navbarSigninLink()}
                </Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(NavbarPage);
