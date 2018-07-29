import React, { Component } from 'react';
import './News.css'
import { Grid, Row, Col, Image } from 'react-bootstrap';

class News extends Component {
    render(){
        return (
            <div>
                <Image src="assets/9182.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>Production began on September 18, 2013, with deliveries initially scheduled to begin in December 2013, and a starting price of ~ €611,000 (US$845,000 or GB£511,000).[5][6][7] The 918 Spyder was sold out in December 2014 and production ended in June 2015.[8]</p>
                        <p>The 918 Spyder was first shown as a concept at the 80th Geneva Motor Show in March 2010.[5] On July 28, 2010, after 2,000 declarations of interest, the Supervisory Board of Dr. Ing. h.c. F. Porsche AG, Stuttgart, approved series development of the 918 Spyder.[9] The production version was unveiled at the September 2013 Frankfurt Motor Show.[10]</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/p3.jpg" />
                        <p>The 918 Spyder is powered by a 4,593 cc (280 cu in) naturally aspirated V8 engine built on the same architecture as the one used in the RS Spyder Le Mans Prototype racing car without any engine belts.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default News;