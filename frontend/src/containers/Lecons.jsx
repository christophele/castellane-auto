import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLecons} from '../actions/index';

class Lecons extends Component {
    componentWillMount() {
        this.props.getLecons()
    }

    render() {
        return (
            <div>
                <p>test</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lecons : state.lecons
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getLecons}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Lecons);
