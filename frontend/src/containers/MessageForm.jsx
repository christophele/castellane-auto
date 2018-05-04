import React, {Component} from 'react';
import {Input} from 'mdbreact';
import Button from '../components/Button';
import {reduxForm, Field} from 'redux-form';
import {createMessage} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import AccueilPage from '../components/pages/AccueilPage';

const formConfig = {
    form: 'createMessageForm',
    fields: ['prenom', 'nom', 'email', 'sujet', 'message'],
    validate: validate
}

class MessageForm extends Component {
    render() {
        const {fields, handleSubmit, errors} = this.props;
        // console.log(errors);
        return (
            <div>
                <div className="container">
                    <form className="contact-form" onSubmit={handleSubmit(this.createMessage.bind(this))}>
                        <p className="h3 text-center mb-4">Nous contacter</p>
                        <div className="form-group">
                            <Field
                                name="prenom"
                                component="input"
                                type="text"
                                placeholder="Prénom"
                                {...fields.prenom}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="nom"
                                component="input"
                                type="text"
                                placeholder="Nom"
                                {...fields.nom}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="email"
                                component="input"
                                type="text"
                                placeholder="Email"
                                {...fields.email}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="sujet"
                                component="input"
                                type="text"
                                placeholder="Sujet"
                                {...fields.sujet}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Field
                                name="message"
                                component="input"
                                type="text"
                                placeholder="Message"
                                {...fields.message}
                            />
                        </div>
                        {/* <Input label="Ton prénom" icon="user" group="group" validate="validate" error="wrong" success="right" {...fields.prenom} />
                        <Input label="Ton nom" icon="user" group="group" validate="validate" error="wrong" success="right" {...fields.nom} />
                        <Input label="Ton e-mail" icon="envelope" group="group" type="email" validate="validate" error="wrong" success="right" {...fields.email} />
                        <Input label="Sujet" icon="tag" group="group" validate="validate" error="wrong" success="right" {...fields.sujet} />
                        <Input type="textarea" label="Ton message" icon="pencil-alt"  {...fields.message} /> */}
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

    createMessage(message) {
        this.props.createMessage(message);
        this.props.history.push('/');
    }
}

// values = valeurs des champs
// tant que ça retourne des erreurs, ne retourne pas le formulaire
function validate(values){
    const errors = {};
    if(!values.prenom) {
        errors.prenom = "Veuillez remplir le prenom";
    }
    if(!values.nom) {
        errors.nom = "Veuillez remplir le nom";
    }
    if(!values.email) {
        errors.email = "Veuillez remplir le email";
    }
    if(!values.sujet) {
        errors.sujet = "Veuillez remplir le sujet";
    }
    if(!values.message) {
        errors.message = "Veuillez remplir le message";
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createMessage}, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(reduxForm(formConfig)(MessageForm)));
