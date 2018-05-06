import React, {Component} from 'react';
import Button from '../components/Button';
import {reduxForm, Field} from 'redux-form';
import {createPlanning} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

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
                            <Field
                                name="numclient"
                                component="input"
                                type="number"
                                placeholder="Numéro du client"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="numvehicule"
                                component="input"
                                type="number"
                                placeholder="Numéro du véhicule"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="numlecon"
                                component="input"
                                type="number"
                                placeholder="Numéro de leçon"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="nummoniteur"
                                component="input"
                                type="number"
                                placeholder="Numéro du moniteur"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="etatplanning"
                                component="input"
                                type="text"
                                placeholder="Etat de la leçon (En attente de validation, Confirmé)"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="datelecon"
                                component="input"
                                type="text"
                                placeholder="Date de leçon (AAAA-MM-JJ)"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="heuredebut"
                                component="input"
                                type="text"
                                placeholder="Heure début de leçon"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="heurefin"
                                component="input"
                                type="text"
                                placeholder="Heure fin de leçon"
                            />
                        </div>
                        <div className="text-center">
                        <Button type="submit" disabled={this.props.invalid} color="blue-grey">Envoyer
                                <i className="fas fa-paper-plane ml-2"></i>
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    createPlanning(planning) {
        this.props.createPlanning(planning);
        this.props.history.push('/');
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
