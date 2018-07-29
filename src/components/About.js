import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

class About extends Component {
    render(){
        return (
            <div>
                <Image src="assets/p3.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/spyder.jpg" className="about-profile-pic" rounded />
                    <h3>Porsche 918 baby</h3>
                    <p>The Porsche 918 Spyder is a mid-engined plug-in hybrid sports car manufactured by German automobile manufacturer Porsche.[3] The Spyder is powered by a naturally aspirated 4.6-litre V8 engine, developing 608 PS (447 kW; 600 bhp), with two electric motors delivering an additional 210 kW (286 PS; 282 bhp) for a combined output of 887 PS (652 kW; 875 bhp).[4] The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range of 19 km (12 mi) under the US Environmental Protection Agency's five-cycle tests.[1]</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default About;