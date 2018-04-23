import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMoniteurs} from '../actions/index';
import MoniteurListItem from '../components/MoniteurListItem';

class MoniteurList extends Component {
    componentWillMount() {
        this.props.getMoniteurs();
    }

    renderMoniteurs() {
        const {moniteurs} = this.props;
        if(moniteurs) {
            return moniteurs.map((moniteur) => {
                return <MoniteurListItem key={moniteur.nummoniteur} moniteur={moniteur} />
            })
        }
    }

    render() {
        console.log(this.props.moniteurs);
        return (
            <div>
                <h1>Liste des moniteurs</h1>
                {/* tableau pour afficher les lignes */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Adresse</th>
                            <th>Téléphone</th>
                            <th>Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMoniteurs()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moniteurs : state.moniteurs
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getMoniteurs}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoniteurList);
