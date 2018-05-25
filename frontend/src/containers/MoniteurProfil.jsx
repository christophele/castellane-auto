import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MoniteurProfilContent from '../components/MoniteurProfilContent';
import {getMoniteurById} from '../actions/index';

class MoniteurProfil extends Component {
    componentWillMount() {
        this.props.getMoniteurById(this.props.param.id);
    }

    renderMoniteurProfilContent() {
        const {moniteur} = this.props;
        if(moniteur) {
            return <MoniteurProfilContent moniteur={moniteur}/>
        }
    }

    render() {
        return (
            <div>
                <h1>Description du moniteur connecté</h1>
                {this.renderMoniteurProfilContent()}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        moniteur : state.activeMoniteur
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getMoniteurById}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoniteurProfil);
