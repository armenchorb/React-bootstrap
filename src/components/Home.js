import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to the Porsche 918 Fan Page</h2>
                    <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
                    <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/p1.jpg" circle className="profile-pic" />
                    <h3>Awesome Car</h3>
                    <p>This car is fucking tight</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/p2.jpg" circle className="profile-pic" />
                    <h3>Sick ass Car</h3>
                    <p>This car is sick as fuck</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/p3.jpg" circle className="profile-pic" />
                    <h3>Amazing Car</h3>
                    <p>This car is mindblowing</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home;