import React, { Component } from 'react';
import { Container, Row, Col,Media } from 'reactstrap';
import '../../index.css';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>About the React World!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <Media left href="#">
                                <Media object className="about-image" src="/images/about-us.jpg" alt="Generic placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    About Us
                                </Media>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                <p>A passphrase as a series of unrelated words that you can use as a password. Three words are much easier to remember than a series of random characters, letters and numbers, yet they are much harder to hack. Computer experts use passphrases whenever possible, and you should, too!</p>
                                <p>The best way to keep track of your passwords is with a password manager. I recommend 1Password. While you should never write your passphrase on a piece of paper, if someone did do that, a series random words is less obvious than a traditional password.</p>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;