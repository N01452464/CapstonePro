import React from 'react'
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import home2 from '../styles/home2.jpg';
import home1 from '../styles/home1.png';
import home3 from '../styles/home3.jpg';
import Form1 from '../shared/Form1.jsx';

const Home = () => {
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <h3 className='quote'>Bussiness Consulting Firm </h3>
                            <p className='quote1'>A Boutique Consulting Firm that combines high ethical values with an enterpreneurial approach
                            to craft bold solutions. Our Strength is in our Experience, Expertise and Ethics</p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={home1} alt="image1"/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-4" >
                            <img src={home2} alt="image2"/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={home3} alt="image3"/>
                        </div>
                    </Col>
                    <Form1/>
                </Row>
            </Container>
        </section>
    </>;
    
};

export default Home;