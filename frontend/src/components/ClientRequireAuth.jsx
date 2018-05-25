import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (!this.props.clientAuthenticated) {
                this.props.history.push('/connexion-client');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.clientAuthenticated) {
                this.props.history.push('/connexion-client');
            }
        }

        PropTypes = {
            router: PropTypes.object
        }

        render() {
            return <ComposedComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return {clientAuthenticated: state.clientAuth.clientAuthenticated};
    }

    return connect(mapStateToProps)(Authentication);
}
