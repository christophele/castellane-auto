// formulaire d'ajout d'un client
import React, {Component} from 'react';
import {Link} from 'react-router';
/* pour créer un redux form, il faut les noms des champs du formulaire, son nom, et appeler sa fonction handleSubmit, et il faut l'associer à un component */
import {reduxForm} from 'redux-form';
import {createClient} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// configuration du formulaire
const formConfig = {
    form: 'createClientForm', // nom du form
    fields: ['nomclient', 'prenomclient', 'adresseclient', 'datedenaissanceclient', 'telephoneclient', 'mailclient', 'dateinscriptionclient', 'typeclient'] // champs du formulaire
}

class ClientForm extends Component {
    render() {
        return (
            <div>
                 <h1>Ajout d'un client</h1>
                 <form>
                     <div className="form-group">
                         <label>Nom</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Prénom</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Adresse</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Date de naissance</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Téléphone</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Mail</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Date d'inscription</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <div className="form-group">
                         <label>Statut</label>
                         <input className="form-control" type="text" />
                         <div></div>
                     </div>
                     <Link to={'/clients'} className="button-space">
                         <button className="btn btn-danger">Retour</button>
                     </Link>
                     <button type="submit" className="btn btn-primary">Créer</button>
                 </form>
            </div>
        )
    }
}

// connexion du composant à reduxForm
export default connect(null, null)(reduxForm(formConfig)(ClientForm));
