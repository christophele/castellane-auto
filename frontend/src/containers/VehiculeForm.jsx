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
                <NavbarPage />
                <div className="container">
                    <form className="contact-form" onSubmit={handleSubmit(this.createVehicule.bind(this))}>
                        <p className="h3 text-center mb-4">Ajout d'un véhicule</p>
                        <div className="form-group">
                            <Field
                                name="numvehicule"
                                component="input"
                                type="text"
                                placeholder="Numéro du véhicule"
                                {...fields.numvehicule}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="marque"
                                component="input"
                                type="text"
                                placeholder="Nom"
                                {...fields.marque}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="immatriculation"
                                component="input"
                                type="text"
                                placeholder="Immatriculation"
                                {...fields.immatriculation}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="model"
                                component="input"
                                type="text"
                                placeholder="Immatriculation"
                                {...fields.model}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="date_achat"
                                component="input"
                                type="text"
                                placeholder="Date d'achat"
                                {...fields.date_achat}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label>Numéro à assigner</label>
                            <input className="form-control" type="text" {...fields.numvehicule} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Marque</label>
                            <input className="form-control" type="text" {...fields.marque} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Immatriculation</label>
                            <input className="form-control" type="text" {...fields.immatriculation} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Modèle</label>
                            <input className="form-control" type="text" {...fields.model} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Date d'achat</label>
                            <input className="form-control" type="text" {...fields.date_achat} />
                            <div></div>
                        </div> */}
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
        this.props.history.push('/vehicules');
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
