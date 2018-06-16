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
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            open: false,
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

    toggleDrawer = () => this.setState({open: !this.state.open});

    navbarLinks() {
        if(this.props.clientAuthenticated) {
            return [
                <NavbarNav left="left">
                    <NavItem>
                        <NavLink to="/" style={{color:'black'}}>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/tarifs' style={{color:'black'}}>Tarifs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/demande-lecon" style={{fontWeight: 'bold', color:'red'}}>Faire une demande</NavLink>
                    </NavItem>
                </NavbarNav>
            ];
        } else if (this.props.authenticated) {
            return [
                <NavbarNav left="left">
                    <NavItem>
                        <NavLink to="/" style={{color:'black'}}>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/tarifs' style={{color:'black'}}>Tarifs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggleDrawer} style={{fontWeight: 'bold', color:'red'}}>
                        Administration
                            <MuiThemeProvider>
                                <div>
                                    <Drawer width={260} open={this.state.open}>
                                        <AppBar className="blue-grey lighten-3" onLeftIconButtonClick={this.toggleDrawer} title="Castellane-Auto" />
                                        <ListItem
                                            primaryText="Gestion des clients"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/clients"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des clients</ListItem></Link>
                                                ,
                                                <Link to='/create-client'><ListItem key = {
                                                    2
                                                }
                                                >&emsp;Ajouter un client</ListItem></Link>
                                                ]}
                                        />
                                        <ListItem
                                            primaryText="Gestion des véhicules"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/vehicules"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des véhicules</ListItem></Link>
                                                ,
                                                <Link to='/create-vehicule'><ListItem key = {
                                                    2
                                                }
                                                >&emsp;Ajouter un véhicule</ListItem></Link>
                                                ]}
                                        />
                                        <ListItem
                                            primaryText="Gestion des leçons"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/lecons"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des leçons</ListItem></Link>
                                                ,
                                                <Link to='/create-lecon'><ListItem key = {
                                                    2
                                                }
                                                >&emsp;Ajouter une leçon</ListItem></Link>
                                                ]}
                                        />
                                        <ListItem
                                            primaryText="Gestion du planning"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/planning"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste du planning</ListItem></Link>
                                                ,
                                                <Link to='/create-planning'><ListItem key = {
                                                    2
                                                }
                                                >&emsp;Ajouter un planning</ListItem></Link>
                                                ]}
                                        />

                                        <ListItem
                                            primaryText="Gestion des messages"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/messages"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des messages</ListItem></Link>
                                                ]}
                                        />
                                        <ListItem
                                            primaryText="Gestion des moniteurs"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/moniteurs"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des moniteurs</ListItem></Link>
                                                ]}
                                        />
                                        <ListItem
                                            primaryText="Gestion des demandes"
                                            initiallyOpen={true}
                                            primaryTogglesNestedList={true}
                                            nestedItems=
                                                {[ <Link to="/liste-demandes"><ListItem key = {
                                                    1
                                                }
                                                >&emsp;Liste des demandes</ListItem></Link>
                                                ]}
                                        />
                                    </Drawer>
                                </div>
                            </MuiThemeProvider>
                    </NavItem>
                </NavbarNav>
            ];
        } else {
            return [
                <NavbarNav left="left">
                    <NavItem>
                        <NavLink to="/" style={{color:'black'}}>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/tarifs' style={{color:'black'}}>Tarifs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" style={{color:'black'}}>Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/inscription" style={{color:'black'}}>Inscription</NavLink>
                    </NavItem>
                </NavbarNav>
            ]
        }
    }

    navbarSigninLinks() {
        if(this.props.clientAuthenticated || this.props.authenticated) {
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
        } else {
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

    }




    render() {
        return (
            <Navbar light color="blue-grey lighten-3" expand="md" scrolling="scrolling">
                <NavbarBrand style={{fontWeight: 'bold'}} href="/">
                    Castellane Auto
                </NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                <Collapse isOpen={this.state.collapse} navbar="navbar">
                    {this.navbarLinks()}
                    {this.navbarSigninLinks()}
                </Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        clientAuthenticated: state.clientAuth.clientAuthenticated
    };
}

export default connect(mapStateToProps)(NavbarPage);
