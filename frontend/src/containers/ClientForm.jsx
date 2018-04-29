// formulaire d'ajout d'un client
import React, {Component} from 'react';
import {Link} from 'react-router';
/* pour créer un redux form, il faut les noms des champs du formulaire, son nom, et appeler sa fonction handleSubmit, et il faut l'associer à un component */
import {reduxForm} from 'redux-form';
import {createClient} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import NavbarPage from '../components/NavbarPage';
import Button from '../components/Button';

// configuration du formulaire
const formConfig = {
    form: 'createClientForm', // nom du form
    fields: ['nomclient', 'prenomclient', 'adresseclient', 'datedenaissanceclient', 'telephoneclient', 'mailclient', 'dateinscriptionclient', 'typeclient', 'mdpclient'] // champs du formulaire
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
                        <div className="form-group">
                            <label>Nom</label>
                            <input className="form-control" type="text" {...fields.nomclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Prénom</label>
                            <input className="form-control" type="text" {...fields.prenomclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Adresse</label>
                            <input className="form-control" type="text" {...fields.adresseclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Date de naissance</label>
                            <input className="form-control" type="text" {...fields.datedenaissanceclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Téléphone</label>
                            <input className="form-control" type="text" {...fields.telephoneclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Mail</label>
                            <input className="form-control" type="text" {...fields.mailclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Date d'inscription</label>
                            <input className="form-control" type="text" {...fields.dateinscriptionclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Statut</label>
                            <input className="form-control" type="text" {...fields.typeclient} />
                            <div></div>
                        </div>
                        <div className="form-group">
                            <label>Mot de passe</label>
                            <input className="form-control" type="text" {...fields.mdpclient} />
                            <div></div>
                        </div>
                        <Link to={'/clients'}>
                            <Button color="danger">Retour</Button>
                        </Link>
                        <Button type="submit" color="primary">Créer</Button>
                    </form>
                 </div>
            </div>
        )
    }
    // creation du client
    createClient(client){
        this.props.createClient(client); // appelle l'action createClient
        // après la création du client, retourne à la page /clients
        browserHistory.push('/clients');
    }
}

// on met l'action createPost dans les props, et il appel son reducer
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createClient}, dispatch),
});

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(ClientForm));
