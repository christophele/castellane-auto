// La liste de tous les messages

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMessages, deleteMessage} from '../actions/index';
import MessageListItem from '../components/MessageListItem';
import {Card, CardBody, Table} from 'mdbreact';

class MessageList extends Component {
    componentWillMount() {
        this.props.getMessages();
    }

    renderMessages() {
        const {messages} = this.props;
        if(messages) {
            return messages.map((message) => {
                return <MessageListItem key={message.nummess} message={message} deleteMessageCallBack={(message) => this.deleteMessageCallBack(message)}/>
            })
        }
    }

    // supprime le message en prenant l'id du message
    deleteMessageCallBack(message){
        this.props.deleteMessage(message.nummess);
    }

    render() {
        console.log(this.props.messages);
        return (
            <div>
                <div className="container-fluid">
                    <div className="row pb-3">
                        <div className="col-md-12">
                            <Card className="mt-4">
                                <CardBody>
                                    <h2 className="h2-responsive">Liste des messages</h2>
                                    <Table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Prenom</th>
                                                <th>Nom</th>
                                                <th>Mail</th>
                                                <th>Sujet</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderMessages()}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages : state.messages
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({getMessages, deleteMessage}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
