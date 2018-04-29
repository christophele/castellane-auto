import React, {Component} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {createVehicule} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import NavbarPage from '../components/NavbarPage';
import Button from '../components/Button';

const formConfig = {
    form: 'createVehiculeForm',
    fields: ['numvehicule', 'marque', 'immatriculation', 'model', 'date_achat']
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
                        </div>
                        <Link to={'/vehicules'}>
                            <Button color="danger">Retour</Button>
                        </Link>
                        <Button type="submit" color="primary">Créer</Button>
                    </form>
                </div>
            </div>
        )
    }
    // creation du vehicule
    createVehicule(vehicule) {
        this.props.createVehicule(vehicule);
        // après la création du client, retourne à la page /vehicules
        browserHistory.push('/vehicules');
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createVehicule}, dispatch),
})

// connexion du composant à reduxForm
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(VehiculeForm));
