import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {createVehicule} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NavbarPage from '../components/NavbarPage';
import Button from '../components/Button';
import VehiculeList from './VehiculeList';

const formConfig = {
    form: 'createVehiculeForm',
    fields: ['numvehicule', 'marque', 'immatriculation', 'model', 'date_achat'],
    validate: validate
}

class VehiculeForm extends Component {
    render(){
        const {fields, handleSubmit} = this.props;
        console.log(fields);
        return (
            <div>
                <div className="container">
                    <form className="form" onSubmit={handleSubmit(this.createVehicule.bind(this))}>
                        <p className="h3 text-center mb-4">Ajout d'un véhicule</p>
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
                                name="marque"
                                component="input"
                                type="text"
                                placeholder="Marque"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="immatriculation"
                                component="input"
                                type="text"
                                placeholder="Immatriculation"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="model"
                                component="input"
                                type="text"
                                placeholder="Modèle"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="date_achat"
                                component="input"
                                type="text"
                                placeholder="Date d'achat (AAAA-MM-JJ)"
                            />
                        </div>
                        <Link to={'/vehicules'}>
                            <Button color="danger">Retour</Button>
                        </Link>
                        <Button type="submit" color="primary" disabled={this.props.invalid}>Créer</Button>
                    </form>
                </div>
            </div>
        )
    }
    // creation du vehicule
    createVehicule(vehicule) {
        this.props.createVehicule(vehicule);
        // après la création du client, retourne à la page /vehicules
        this.props.history.push('/create-vehicule');
    }
}

function validate(values){
    const errors = {};
    if(!values.numvehicule) {
        errors.numvehicule = "Veuillez remplir le numéro du véhicule";
    }
    if(!values.marque) {
        errors.marque = "Veuillez remplir la marque";
    }
    if(!values.immatriculation) {
        errors.immatriculation = "Veuillez remplir l'immatriculation";
    }
    if(!values.model) {
        errors.model = "Veuillez remplir le modèle";
    }
    if(!values.date_achat) {
        errors.date_achat = "Veuillez remplir la date d'achat";
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createVehicule}, dispatch),
})

// connexion du composant à reduxForm
export default withRouter(connect(null, mapDispatchToProps)(reduxForm(formConfig)(VehiculeForm)));
