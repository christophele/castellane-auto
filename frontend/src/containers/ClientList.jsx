// La liste de tous les clients

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getClients, deleteClient} from '../actions/index';
import ClientListItem from '../components/ClientListItem';
import {Link} from 'react-router';
import {Card, CardBody, Table, Fa} from 'mdbreact';
import NavbarPage from '../components/NavbarPage';
import Button from '../components/Button';

class ClientList extends Component {
    componentWillMount() {
        this.props.getClients();
    }

    renderClients() {
        const {clients} = this.props;
        if(clients){
            return clients.map((client) => {
                return <ClientListItem key={client.numclient} client={client} deleteClientCallBack={(client) => this.deleteClientCallBack(client)}/>
            })
        }
    }

    // supprime le client en prenant l'id du client
    deleteClientCallBack(client){
        this.props.deleteClient(client.numclient);
    }

    render() {
        console.log(this.props.clients);
        return (
            <div>
                <NavbarPage />
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des clients&nbsp;
                                        <Link to={'create-client'}>
                                            <Button><Fa icon="plus"/></Button>
                                        </Link>
                                    </h2>

                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Adresse</th>
                                                <th>Date de naissance</th>
                                                <th>Téléphone</th>
                                                <th>Mail</th>
                                                <th>Date d'inscription</th>
                                                <th>Statut</th>
                                                <th>Mot de passe</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderClients()}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients : state.clients
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getClients, deleteClient}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
