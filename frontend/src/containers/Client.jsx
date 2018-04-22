import React, {Component} from 'react';

class Client extends Component {
    render() {
        return (
            <div>
                 numéro du client : {this.props.params.id}
            </div>
        )
    }
}

export default Client;
