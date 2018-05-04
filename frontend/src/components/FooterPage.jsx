import React from 'react';
import {Col, Container, Row, Footer} from 'mdbreact';
import {Link} from 'react-router-dom';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue-grey lighten-2" className="font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="6">
                            <h5 className="title">Castellane Auto</h5>
                            <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Obtenez votre permis chez Castellane Auto.</p>
                        </Col>
                        <Col sm="6">
                            <h6 className="text-uppercase font-weight-bold"><strong>Liens utiles</strong></h6>
                            <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>

                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Qui sommes-nous ?</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Infos pratiques</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <Link to={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid="fluid">
                        &copy; {(new Date().getFullYear())}
                        &nbsp;Copyright :&nbsp;
                        <a href="#!">WebAppLab</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
