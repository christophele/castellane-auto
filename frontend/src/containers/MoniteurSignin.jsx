import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {signInMoniteur} from '../actions/index';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {Card, CardBody} from 'mdbreact';
import {Link} from 'react-router-dom';

const formConfig = {
    form: 'signin'
}

class MoniteurSignin extends Component {
    submit = (values) => {
        console.log(values);
        this.props.signInMoniteur(values, this.props.history);
    }

    errorMessage() {
        if(this.props.errorMessage) {
            return (
                <div className="info-red">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render () {
        const {handleSubmit} = this.props;
        return (
            <div className="container">
                <div className="text-center">
                    <Card className="mt-4">
                        <CardBody>
                            <h2 className="h2-responsive text-center">Connexion à l'espace pro</h2>
                            <form onSubmit={handleSubmit(this.submit)}>
                                <div className="form-group">
                                    <Field
                                        className="mt-4"
                                        name="mailmoniteur"
                                        component="input"
                                        type="email"
                                        label="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <Field
                                        className="mt-4"
                                        name="mdpmoniteur"
                                        component="input"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <Button className="w-100" type="submit">Connexion</Button>
                                    <Link to={'/'}>
                                        <Button className="w-100" color="danger">Retour</Button>
                                    </Link>
                                </div>
                            </form>
                            {this.errorMessage()}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default connect(mapStateToProps, {signInMoniteur})(reduxForm(formConfig)(MoniteurSignin));
