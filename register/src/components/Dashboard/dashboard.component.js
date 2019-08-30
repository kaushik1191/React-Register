import React, { Component  } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import '../../index.css';
import Slider from '../shared/carousel.component';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    tableData = () => (
        [
            { firstName: 'Mark', lastName: 'Otto', email: 'mark@otto.com' },
            { firstName: 'Jacob', lastName: 'Thornton', email: 'jacob@thornton.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
            { firstName: 'Larry', lastName: 'The Bird', email: 'larry@thebird.com' },
        ]
    );

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Welcome to React World!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slider />
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            <ListGroupItem>Salt here chair</ListGroupItem>
                            <ListGroupItem>Minute series safely</ListGroupItem>
                            <ListGroupItem>Stress shorts same</ListGroupItem>
                            <ListGroupItem>Twenty either though</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardHeader>About Us</CardHeader>
                            <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <CardText>A passphrase as a series of unrelated words that you can use as a password. Three words are much easier to remember than a series of random characters, letters and numbers, yet they are much harder to hack. Computer experts use passphrases whenever possible, and you should, too! </CardText>
                            </CardBody>
                            <CardFooter>
                                <Button>Read More</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardHeader>Our Team</CardHeader>
                            <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <CardText>A passphrase as a series of unrelated words that you can use as a password. Three words are much easier to remember than a series of random characters, letters and numbers, yet they are much harder to hack. Computer experts use passphrases whenever possible, and you should, too! </CardText>
                            </CardBody>
                            <CardFooter>
                                <Button>Read More</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;