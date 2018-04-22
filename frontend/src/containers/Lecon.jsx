// Contenu d'une leçon
import React, {Component} from 'react';
import LeconContent from '../components/LeconContent';

class Lecon extends Component {

    render() {
        return (
            <div>
                Lecon numéro : {this.props.params.id}
                <LeconContent />
            </div>
        )
    }
}

export default Lecon;
