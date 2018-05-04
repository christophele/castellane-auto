// formulaire d'ajout d'un client
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
/* pour créer un redux form, il faut les noms des champs du formulaire, son nom, et appeler sa fonction handleSubmit, et il faut l'associer à un component */
import {reduxForm, Field} from 'redux-form';
import {createClient} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NavbarPage from '../components/NavbarPage';
import Button from '../components/Button';

// configuration du formulaire
const formConfig = {
    form: 'createClientForm', // nom du form
    fields: ['nomclient', 'prenomclient', 'adresseclient', 'datedenaissanceclient', 'telephoneclient', 'mailclient', 'dateinscriptionclient', 'typeclient', 'mdpclient'], // champs du formulaire
    // validate: validate
}

class ClientForm extends Component {
    render() {
        // on récupère les infos dans les props
        const {fields, handleSubmit} = this.props;
        console.log(fields);
        return (
            <div>
                <NavbarPage />
                <div className="container">
                    <form className="contact-form" onSubmit={handleSubmit(this.createClient.bind(this))}>
                        <p className="h3 text-center mb-4">Ajout d'un client</p>
                        {/* <div className="form-group">
                            <label>Nom</label>
                            <input className="form-control" type="text" {...fields.nomclient} />
                        </div> */}
                        <div className="form-group">
                            <Field
                                name="nomclient"
                                component="input"
                                type="text"
                                placeholder="Nom"
                                {...fields.nomclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="prenomclient"
                                component="input"
                                type="text"
                                placeholder="Prenom"
                                {...fields.prenomclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="adresseclient"
                                component="input"
                                type="text"
                                placeholder="Adresse"
                                {...fields.adresseclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="datedenaissanceclient"
                                component="input"
                                type="text"
                                placeholder="Date de naissance (YYYY-MM-DD)"
                                {...fields.datedenaissanceclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="telephoneclient"
                                component="input"
                                type="text"
                                placeholder="Téléphone"
                                {...fields.telephoneclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="mailclient"
                                component="input"
                                type="text"
                                placeholder="Adresse e-mail"
                                {...fields.mailclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="dateinscriptionclient"
                                component="input"
                                type="text"
                                placeholder="Date d'inscription"
                                {...fields.dateinscriptionclient}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="typeclient"
                                component="input"
                                type="text"
                                placeholder="Type du client"
                                {...fields.typeclient}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="mdpclient"
                                component="input"
                                type="text"
                                placeholder="Mot de passe"
                                {...fields.mdpclient}
                            />
                        </div>
                        <Link to={'/clients'}>
                            <Button color="danger">Retour</Button>
                        </Link>
                        <Button type="submit" color="primary" disabled={this.props.invalid}>Créer</Button>
                    </form>
                 </div>
            </div>
        )
    }
    // creation du client
    createClient(client){
        this.props.createClient(client); // appelle l'action createClient
        // après la création du client, retourne à la page /clients
        this.props.history.push('/clients');
    }
}

// values = valeurs des champs
// tant que ça retourne des erreurs, ne retourne pas le formulaire
// function validate(values){
//     const errors = {};
//     if(!values.nomclient) {
//         errors.nomclient = "Veuillez remplir le nom";
//     }
//     if(!values.prenomclient) {
//         errors.prenomclient = "Veuillez remplir le prenom";
//     }
//     if(!values.adresseclient) {
//         errors.adresseclient = "Veuillez remplir l'adresse";
//     }
//     if(!values.datedenaissanceclient) {
//         errors.datedenaissanceclient = "Veuillez remplir la date de naissance";
//     }
//     if(!values.telephoneclient) {
//         errors.telephoneclient = "Veuillez remplir le numéro de téléphone";
//     }
//     if(!values.mailclient) {
//         errors.mailclient = "Veuillez remplir le mail";
//     }
//     if(!values.dateinscriptionclient) {
//         errors.dateinscriptionclient = "Veuillez remplir la date d'inscription";
//     }
//     if(!values.typeclient) {
//         errors.typeclient = "Veuillez remplir le statut";
//     }
//     if(!values.mdpclient) {
//         errors.mdpclient = "Veuillez remplir le mot de passe";
//     }
//     return errors;
// }

// on met l'action createPost dans les props, et il appel son reducer
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createClient}, dispatch),
});

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(ClientForm));
