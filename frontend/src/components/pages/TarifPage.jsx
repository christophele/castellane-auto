import React, {Component} from 'react';
import NavbarPage from '../NavbarPage';
import FooterPage from '../FooterPage';
import {Card, CardImage, CardBody, CardTitle, CardText, Button, Table} from 'mdbreact';
import Img1 from '../../img/permis-page-amg_1.jpg';

class TarifPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <div>
                    <Card reverse>
                        <CardImage className="img-fluid" src={Img1} />
                        <CardBody>
                            <CardTitle>Tarifs</CardTitle>
                            <Table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Heure de conduite supplémentaire</th>
                                        <th>Présensentation supplémentaire code ou conduite</th>
                                        <th>Pack web</th>
                                        <th>Reprise de dossier</th>
                                    </tr>
                                </thead>
                                <tbody class="mt-4">
                                    <tr>
                                        <td>Permis B, BE</td>
                                        <td>1100 €</td>
                                        <td>3100 €</td>
                                        <td>700 €</td>
                                        <td>3500 €</td>
                                    </tr>
                                    <tr>
                                        <td>Permis A, A2, A1</td>
                                        <td>1000 €</td>
                                        <td>3000 €</td>
                                        <td>700 €</td>
                                        <td>3500 €</td>
                                    </tr>
                                    <tr>
                                        <td>Conduite Accompagnée</td>
                                        <td>1100 €</td>
                                        <td>3100 €</td>
                                        <td>700 €</td>
                                        <td>3500 €</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardTitle className="pt-4">Autres tarifs</CardTitle>
                            <Table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Prix</th>
                                    </tr>
                                </thead>
                                <tbody class="mt-4">
                                    <tr>
                                        <td>BSR</td>
                                        <td>5000 €</td>
                                    </tr>
                                    <tr>
                                        <td>Code de la Route</td>
                                        <td>2000 €</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
                <FooterPage />
            </div>
        )
    }
}

export default TarifPage;
