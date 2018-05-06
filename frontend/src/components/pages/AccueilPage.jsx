import React, {Component} from 'react';
import {Carousel, CarouselInner, CarouselItem, CarouselCaption, CarouselControl, CardBody, CardTitle, Card, CardText} from 'mdbreact';
import Button from '../Button';
import CardImage from '../CardImage';
import FooterPage from '../FooterPage';
import NavbarPage from '../NavbarPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carousel1 from '../../img/amg_1.jpg';
import Carousel2 from '../../img/amg_2.jpg';
import Carousel3 from '../../img/h2r.jpg';
import Carousel4 from '../../img/tmax_1.jpg';
import Card1 from '../../img/amg_3.jpg';
import Card2 from '../../img/gp_1.jpg';
import Card3 from '../../img/tmax_2.jpg';

class AccueilPage extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            activeItem: 1,
            maxLength: 4
        };
    }

    next() {
        const nextItem = this.state.activeItem + 1;
        if (nextItem > this.state.maxLength) {
            this.setState({activeItem: 1});
        } else {
            this.setState({activeItem: nextItem});
        }
    }

    prev() {
        const prevItem = this.state.activeItem - 1;
        if (prevItem < 1) {
            this.setState({activeItem: this.state.maxLength});
        } else {
            this.setState({activeItem: prevItem});
        }
    }

    goToIndex(item) {
        if (this.state.activeItem !== item) {
            this.setState({activeItem: item});
        }
    }

    render() {
        return (
            <div>
                <NavbarPage />
                <Carousel activeItem={this.state.activeItem} next={this.next} className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <div className="view hm-black-light">
                                <img className="d-block w-100" src={Carousel1} alt={Carousel1} />
                                <div className="mask"></div>
                            </div>
                            <CarouselCaption>
                                <h3 className="h3-responsive">PERMIS DE VOITURE</h3>
                                <p>Votre permis à portée de main</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                            <div className="view hm-black-light">
                                <img className="d-block w-100" src={Carousel3} alt={Carousel3} />
                                <div className="mask"></div>
                            </div>
                            <CarouselCaption>
                                <h3 className="h3-responsive">PERMIS 2 ROUES</h3>
                                <p>Passer le permis moto avec nos célèbres Kawasaki H2R</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                            <div className="view hm-black-slight">
                                <img className="d-block w-100" src={Carousel2} alt={Carousel2} />
                                <div className="mask"></div>
                            </div>
                            <CarouselCaption>
                                <h3 className="h3-responsive">PERMIS VOITURE</h3>
                                <p>Passer le permis voiture avec nos différents modèles Mercedes-AMG</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                            <div className="view hm-black-light">
                                <img className="d-block w-100" src={Carousel4} alt={Carousel4} />
                                <div className="mask"></div>
                            </div>
                            <CarouselCaption>
                                <h3 className="h3-responsive">FORMATIONS & STAGES</h3>
                                <p>Passer le permis avec nos formations accélérées</p>
                            </CarouselCaption>
                        </CarouselItem>
                    </CarouselInner>
                    <CarouselControl direction="prev" role="button" onClick={() => {
                        this.prev();
                    }}/>
                    <CarouselControl direction="next" role="button" onClick={() => {
                        this.next();
                    }}/>
                </Carousel>

                <br/>
                <div className="container">
                    <div class="row">
                        <div class="offset-md-2 col-md-8">
                            <CardBody className="text-center">
                                <CardTitle>Permis de conduire</CardTitle>
                                <hr/>
                            </CardBody>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <Card>
                                <CardImage className="img-fluid" src={Card1} alt={Card1} />
                                <CardBody>
                                    <CardTitle>Permis Voiture</CardTitle>
                                    <hr/>
                                    <CardText>Castellane Auto forme aux permis de conduire depuis maintenant 3 ans. Plusieurs possibilités s'offrent à vous à Castellane Auto pour obtenir votre permis voiture.</CardText>
                                    <Button href="#">En savoir plus</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardImage className="img-fluid" src={Card2} alt={Card2} />
                                <CardBody>
                                    <CardTitle>Permis Moto</CardTitle>
                                    <hr/>
                                    <CardText>Que vous soyez fille ou viril, petite ou grand gabarit, nos formateurs moto sont là pour vous acueillir et vous former à l'obtention du permis moto.</CardText>
                                    <Button href="#">En savoir plus</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardImage className="img-fluid" src={Card3} alt={Card3} />
                                <CardBody>
                                    <CardTitle>Stage & Formation</CardTitle>
                                    <hr/>
                                    <CardText>Nous nous engageons à vous offrir les meilleures formations, stage de récupération de points, stage moto ou encore scooter 125, tenez vous prêt.</CardText>
                                    <Button href="#">En savoir plus</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class="row">
                        <div class="offset-md-2 col-md-8">
                            <CardBody className="text-center">
                                <CardTitle>Horaires</CardTitle>
                                <hr/>
                                <CardText>Lundi : 9h00 à 20h00</CardText>
                                <CardText>Mardi : 9h00 à 20h00</CardText>
                                <CardText>Mercredi : 9h00 à 20h00</CardText>
                                <CardText>Jeudi : 9h00 à 20h00</CardText>
                                <CardText>Vendredi : 9h00 à 17h00</CardText>
                                <CardText>Samedi : Fermé</CardText>
                                <CardText>Dimanche : Fermé</CardText>
                            </CardBody>
                        </div>
                    </div>

                    <br/>

                </div>
                <FooterPage />
            </div>
        )
    }
}

export default AccueilPage;
