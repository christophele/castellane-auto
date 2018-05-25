// La liste des éléments du planning

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlanning, deletePlanning} from '../actions/index';
import PlanningListItem from '../components/PlanningListItem';
import {Link} from 'react-router-dom';
import {Card, CardBody, Table, Fa} from 'mdbreact';
import Button from '../components/Button';

class PlanningList extends Component {
    componentWillMount() {
        this.props.getPlanning();
    }

    // on map sur les élements du planning et on retourne un planning-list-item à chaque fois
    renderPlanning(){
        // on récupère les lecons
        const {plannings} = this.props;
        console.log(plannings);
        if(plannings) {
            return plannings.map((planning) => {
                return <PlanningListItem key={planning.numlecon} planning={planning} deletePlanningCallBack={(planning) => this.deletePlanningCallBack(planning)}/>
            })
        }
    }

    // supprime l'élément du planning en prenant le numéro de lecon (numlecon)
    deletePlanningCallBack(planning){
        this.props.deletePlanning(planning.numclient);
    }

    render() {
        console.log(this.props.plannings);
        return (
            <div>
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Planning&nbsp;
                                        <Link to={'/create-planning'}>
                                            <Button><Fa icon="plus"/></Button>
                                        </Link>
                                    </h2>
                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Nom du client</th>
                                                <th>Numéro du véhicule</th>
                                                <th>Numéro de leçon</th>
                                                <th>Nom du moniteur</th>
                                                <th>Etat</th>
                                                <th>Date de leçon</th>
                                                <th>Heure début</th>
                                                <th>Heure fin</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderPlanning()}
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

/* prends le state et le met dans les props */
const mapStateToProps = (state) => {
    return {
        /* on récupère le reducer qui lui retourne une partie du state (ici state.lecons) */
        plannings : state.plannings // == this.props.posts
    }
}

/* je mets l'action creator 'getLecons' dans les props (this.props.getLecons) et je veux que ça envoie (dispatch) l'action
à tous les reducers, et le reducer concerné va attraper l'info et la mettre dans le state */
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getPlanning, deletePlanning}, dispatch),
});

/* on connecte le component(LeconList) à Redux */
export default connect(mapStateToProps, mapDispatchToProps)(PlanningList);

/* mapStateToProps devient la fonction de pont entre react et redux */
/* on rajoute mapDispatchToProps dans connect() */
