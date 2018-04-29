// La liste de tous les leçons

import React, {Component} from 'react';
/* connect React à Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLecons} from '../actions/index';
import LeconListItem from '../components/LeconListItem';
import {Card, CardBody, Table} from 'mdbreact';


import NavbarPage from '../components/NavbarPage';

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
                return <LeconListItem key={lecon.numlecon} lecon={lecon}/>
            })
        }
    }

    render() {
        console.log(this.props.lecons);
        return (
            <div>
                <NavbarPage />
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des leçons</h2>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Date de leçon</th>
                                                <th>Heure de leçon</th>
                                                <th>Tarif de l'heure en euros</th>
                                                <th>Test</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderLecons()}
                                        </tbody>
                                    </table>
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
        lecons : state.lecons // == this.props.posts
    }
}

/* je mets l'action creator 'getLecons' dans les props (this.props.getLecons) et je veux que ça envoie (dispatch) l'action
à tous les reducers, et le reducer concerné va attraper l'info et la mettre dans le state */
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getLecons}, dispatch),
});

/* on connecte le component(LeconList) à Redux */
export default connect(mapStateToProps, mapDispatchToProps)(LeconList);

/* mapStateToProps devient la fonction de pont entre react et redux */
/* on rajoute mapDispatchToProps dans connect() */
