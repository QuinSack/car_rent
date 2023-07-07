import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__top'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className='header__top__left'>
                            <span>Need help?</span>
                            <span className='header__top__help'>
                                <i class="ri-phone-fill"></i> 0300256342
                            </span>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className='header__top__right d-flex align-items-center justify-content-end gap-3'>
                            <Link to='#' className='d-flex align-items-center gap-1'><i class="ri-login-circle-line"></i>Login</Link>
                            <Link to='#' className='d-flex align-items-center gap-1'><i class="ri-user-line"></i>Register</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='header__middle'>
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4'>
                        <div className='logo'>
                            <h1><Link to='/home' className='d-flex align-items-center gap-3'><i class="ri-car-line"></i><span>Rent Car <br /> Service</span></Link></h1>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='4'>
                        <div className='header__location d-flex align-items-center gap-2'>
                            <span><i class="ri-earth-fill"></i></span>
                            <div className='header__location-content'>
                                <h4>Ghana</h4>
                                <h6>Accra, Ghana</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='4'>
                        <div className='header__location d-flex align-items-center gap-2'>
                            <span><i class="ri-time-line"></i></span>
                            <div className='header__location-content'>
                                <h4>Monday to Saturday</h4>
                                <h6>9am - 7pm</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='2' md='3' sm='0' className='text-end'>
                        <button className='header__btn btn'>
                            <Link to='/contact'><i class="ri-phone-line"></i>Request a call</Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    </header>
  )
}

export default Header