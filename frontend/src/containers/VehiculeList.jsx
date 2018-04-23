import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getVehicules} from '../actions/index';
import VehiculeListItem from '../components/VehiculeListItem';

class VehiculeList extends Component {
    componentWillMount() {
        this.props.getVehicules();
    }

    renderVehicules() {
        const {vehicules} = this.props;
        if(vehicules) {
            return vehicules.map((vehicule) => {
                return <VehiculeListItem key={vehicule.numvehicule} vehicule={vehicule}/>
            })
        }
    }
    render() {
        console.log(this.props.vehicules);
        return (
            <div>
                <h1>Liste des véhicules</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Immatriculation</th>
                            <th>Modèle</th>
                            <th>Date d'achat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderVehicules()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vehicules : state.vehicules
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getVehicules}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehiculeList);
