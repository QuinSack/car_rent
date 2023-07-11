import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/aboutsection.css'
import aboutImg from '../../assets/allimages/cars-img/bmw-offer.png'

const AboutSection = () => {
  return (
    <section className='about__section'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='about__section-content'>
                        <h4 className='section__subtitle'>About Us</h4>
                        <h2 className='section__title'>Welcome to QuinSack Car Rent Services</h2>
                        <p className='section__description'>
                            Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.
                        </p>
                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.</p>
                            <p className='section__description d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.</p>
                            <p className='section__description d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='about__img'>
                        <img src={aboutImg} alt='' className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection