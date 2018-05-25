import React, {Component} from 'react';
import Button from '../components/Button';
import {reduxForm, Field} from 'redux-form';
import {createPlanning} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link} from 'react-router-dom';
import {Input} from 'mdbreact';

const formConfig = {
    form: 'createPlanningForm',
    fields: ['numclient', 'numvehicule', 'numlecon', 'nummoniteur', 'etatplanning', 'datelecon', 'heuredebut', 'heurefin'],
    validate: validate
}

class PlanningForm extends Component {
    render() {
        const {fields, handleSubmit, errors} = this.props;
        // console.log(errors);
        return (
            <div>
                <div className="container">
                    <form className="form" onSubmit={handleSubmit(this.createPlanning.bind(this))}>
                        <p className="h3 text-center mb-4">Ajouter une leçon au planning</p>
                        <div className="form-group">
                            <label>Numéro du client</label>
                            <Field
                                name="numclient"
                                component="input"
                                type="number"
                                label="Project Name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Numéro du véhicule</label>
                            <Field
                                name="numvehicule"
                                component="input"
                                type="number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Numéro de leçon</label>
                            <Field
                                name="numlecon"
                                component="input"
                                type="number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Numéro du moniteur</label>
                            <Field
                                name="nummoniteur"
                                component="input"
                                type="number"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Etat de la leçon (En attente de validation, Confirmé)</label>
                            <Field
                                name="etatplanning"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Date de leçon</label>
                            <Field
                                name="datelecon"
                                component="input"
                                type="date"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Heure début de leçon</label>
                            <Field
                                name="heuredebut"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Heure fin de leçon</label>
                            <Field
                                name="heurefin"
                                component="input"
                                type="text"
                            />
                        </div>
                        <Link to={'/planning'}>
                            <Button color="danger">Retour</Button>
                        </Link>

                        <Button type="submit" color="primary" disabled={this.props.invalid}>Créer</Button>
                    </form>
                </div>
            </div>
        )
    }

    createPlanning(planning) {
        this.props.createPlanning(planning);
        this.props.history.push('/create-planning');
    }
}

// values = valeurs des champs
// tant que ça retourne des erreurs, ne retourne pas le formulaire

function validate(values){
    const errors = {};
    if(!values.numclient) {
        errors.numclient = "Veuillez remplir le numclient";
    }
    if(!values.numvehicule) {
        errors.numvehicule = "Veuillez remplir le numvehicule";
    }
    if(!values.numlecon) {
        errors.numlecon = "Veuillez remplir le numlecon";
    }
    if(!values.nummoniteur) {
        errors.nummoniteur = "Veuillez remplir le nummoniteur";
    }
    if(!values.etatplanning) {
        errors.etatplanning = "Veuillez remplir le etatplanning";
    }
    if(!values.datelecon) {
        errors.datelecon = "Veuillez remplir le datelecon";
    }
    if(!values.heuredebut) {
        errors.heuredebut = "Veuillez remplir le heuredebut";
    }
    if(!values.heurefin) {
        errors.heurefin = "Veuillez remplir le heurefin";
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPlanning}, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(reduxForm(formConfig)(PlanningForm)));
