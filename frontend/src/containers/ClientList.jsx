// La liste de tous les clients

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getClients, deleteClient} from '../actions/index';
import ClientListItem from '../components/ClientListItem';
import {Link} from 'react-router';

class ClientList extends Component {
    componentWillMount() {
        this.props.getClients()
    }

    renderClients() {
        const {clients} = this.props;
        if(clients){
            return clients.map((client) => {
                return <ClientListItem key={client.numclient} client={client} deleteClientCallBack={(client) => this.deleteClientCallBack(client)}/>
            })
        }
    }

    // supprime le post en prenant l'id du client
    deleteClientCallBack(client){
        this.props.deleteClient(client.numclient);
    }

    render() {
        console.log(this.props.clients);
        return (
            <div>
                <h1>Liste des clients</h1>

                {/* bouton ajouter un client */}
                <div className="button-add">
                    <Link to={'create-client'}>
                        <button className="btn btn-primary btn-circle"> + </button>
                    </Link>
                </div>

                {/* tableau pour afficher les lignes */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Adresse</th>
                            <th>Date de naissance</th>
                            <th>Téléphone</th>
                            <th>Mail</th>
                            <th>Date d'inscription</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderClients()}
                    </tbody>
                </table>
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
