import React, {Component} from 'react';
import Button from '../components/Button';
import {reduxForm, Field} from 'redux-form';
import {createLecon} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link} from 'react-router-dom';

const formConfig = {
    form: 'createLeconForm',
    fields: ['datelecon', 'heurelecon', 'tarifheure', 'id_demande'],
    validate: validate
}

class MessageForm extends Component {
    render() {
        const {fields, handleSubmit, errors} = this.props;
        // console.log(errors);
        return (
            <div>
                <div className="container">
                    <form className="form" onSubmit={handleSubmit(this.createLecon.bind(this))}>
                        <p className="h3 text-center mb-4">Ajouter une leçon</p>
                        <div className="form-group">
                            <label>Date de leçon</label>
                            <Field
                                name="datelecon"
                                component="input"
                                type="date"
                            />
                        </div>
                        <div className="form-group">
                            <label>Heure de leçon</label>
                            <Field
                                name="heurelecon"
                                component="input"
                                type="time"
                            />
                        </div>
                        <div className="form-group">
                            <label>Tarif de l'heure</label>
                            <Field
                                name="tarifheure"
                                component="input"
                                type="number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Numéro de la demande</label>
                            <Field
                                name="id_demande"
                                component="input"
                                type="number"
                            />
                        </div>
                        <Link to={'/lecons'}>
                            <Button color="danger">Retour</Button>
                        </Link>
                        <Button type="submit" color="primary" disabled={this.props.invalid}>Créer</Button>
                    </form>
                </div>
            </div>
        )
    }

    createLecon(lecon) {
        this.props.createLecon(lecon);
        this.props.history.push('/create-lecon');
    }
}

function validate(values){
    const errors = {};
    if(!values.datelecon) {
        errors.datelecon = "Veuillez remplir la date";
    }
    if(!values.heurelecon) {
        errors.heurelecon = "Veuillez remplir l'heure de leçon";
    }
    if(!values.tarifheure) {
        errors.tarifheure = "Veuillez remplir le tarif";
    }
    if(!values.id_demande) {
        errors.id_demande = "Veuillez remplir le numéro de la demande";
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createLecon}, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(reduxForm(formConfig)(MessageForm)));
