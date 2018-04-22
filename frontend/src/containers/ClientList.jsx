// La liste de tous les clients

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getClients} from '../actions/index';
import ClientListItem from '../components/ClientListItem';

class ClientList extends Component {
    componentWillMount() {
        this.props.getClients()
    }

    renderClients() {
        const {clients} = this.props;
        if(clients){
            return clients.map((client) => {
                return <ClientListItem key={client.numclient} client={client} />
            })
        }
    }

    render() {
        console.log(this.props.clients);
        return (
            <div>
                <p>Liste des clients</p>
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
    ...bindActionCreators({getClients}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
