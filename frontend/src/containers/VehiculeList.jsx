// La liste de tous les vehicules

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getVehicules, deleteVehicule} from '../actions/index';
import VehiculeListItem from '../components/VehiculeListItem';
import {Link} from 'react-router-dom';
import NavbarPage from '../components/NavbarPage';
import {Card, CardBody, Table, Fa} from 'mdbreact';
import Button from '../components/Button';

class VehiculeList extends Component {
    componentWillMount() {
        this.props.getVehicules();
    }

    renderVehicules() {
        const {vehicules} = this.props;
        if(vehicules) {
            return vehicules.map((vehicule) => {
                return <VehiculeListItem key={vehicule.numvehicule} vehicule={vehicule} deleteVehiculeCallBack={(vehicule) => this.deleteVehiculeCallBack(vehicule)}/>
            })
        }
    }

    deleteVehiculeCallBack(vehicule) {
        this.props.deleteVehicule(vehicule.numvehicule);
    }

    render() {
        console.log(this.props.vehicules);
        return (
            <div>
                <NavbarPage />
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des véhicules&nbsp;
                                        <Link to={'/create-vehicule'}>
                                            <Button><Fa icon="plus"/></Button>
                                        </Link>
                                    </h2>

                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Marque</th>
                                                <th>Immatriculation</th>
                                                <th>Modèle</th>
                                                <th>Date d'achat</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderVehicules()}
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
        vehicules : state.vehicules
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getVehicules, deleteVehicule}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehiculeList);
