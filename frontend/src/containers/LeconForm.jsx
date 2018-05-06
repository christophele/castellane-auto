import React, {Component} from 'react';
import Button from '../components/Button';
import {reduxForm, Field} from 'redux-form';
import {createLecon} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

const formConfig = {
    form: 'createLeconForm',
    fields: ['datelecon', 'heurelecon', 'tarifheure', 'id_demande']
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
                            <Field
                                name="datelecon"
                                component="input"
                                type="text"
                                placeholder="Date de leçon (AAAA-MM-JJ)"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="heurelecon"
                                component="input"
                                type="text"
                                placeholder="Heure de leçon"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="tarifheure"
                                component="input"
                                type="number"
                                placeholder="Tarif de l'heure"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="id_demande"
                                component="input"
                                type="number"
                                placeholder="Numéro de la demande"
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

    createLecon(lecon) {
        this.props.createLecon(lecon);
        this.props.history.push('/lecons');
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createLecon}, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(reduxForm(formConfig)(MessageForm)));
