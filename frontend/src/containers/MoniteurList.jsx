import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMoniteurs} from '../actions/index';
import MoniteurListItem from '../components/MoniteurListItem';
import {Card, CardBody, Table} from 'mdbreact';
import NavbarPage from '../components/NavbarPage';

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
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des moniteurs</h2>
                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
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
        moniteurs : state.moniteurs
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getMoniteurs}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoniteurList);
