// La liste de tous les leçons

import React, {Component} from 'react';
/* connect React à Redux */
import {connect} from 'react-redux';
// import des actions
import {getLecons, deleteLecon} from '../actions/index';
import {bindActionCreators} from 'redux';
import LeconListItem from '../components/LeconListItem';
import {Card, CardBody, Table, Fa} from 'mdbreact';
import Button from '../components/Button';
import {Link} from 'react-router-dom';

class LeconList extends Component {
    componentWillMount() {
        this.props.getLecons();
    }

    // on map sur les Lecons et on retourne un lecon-list-item à chaque fois
    renderLecons(){
        // on récupère les lecons
        const {lecons} = this.props;
        if(lecons) {
            return lecons.map((lecon) => {
                return <LeconListItem key={lecon.numlecon} lecon={lecon} deleteLeconCallBack={(lecon) => this.deleteLeconCallBack(lecon)} />
            })
        }
    }

    // supprime le client en prenant l'id du client
    deleteLeconCallBack(lecon){
        this.props.deleteLecon(lecon.numlecon);
    }

    render() {
        console.log(this.props.lecons);
        return (
            <div>
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des leçons&nbsp;
                                        <Link to={'/create-lecon'}>
                                            <Button><Fa icon="plus"/></Button>
                                        </Link>
                                    </h2>
                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date de leçon</th>
                                                <th>Heure de leçon</th>
                                                <th>Tarif de l'heure en euros</th>
                                                <th>Numéro de la demande du client</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderLecons()}
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
        lecons : state.lecons // == this.props.lecons
    }
}

/* je mets l'action creator 'getLecons' dans les props (this.props.getLecons) et je veux que ça envoie (dispatch) l'action
à tous les reducers, et le reducer concerné va attraper l'info et la mettre dans le state */
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getLecons, deleteLecon}, dispatch), // syntaxe ES6 car sinon c'est {getLecons : getLecons} (affectation)
});

/* on connecte le component(LeconList) à Redux */
export default connect(mapStateToProps, mapDispatchToProps)(LeconList);

/* mapStateToProps devient la fonction de pont entre react et redux */
/* on rajoute mapDispatchToProps dans connect() */
