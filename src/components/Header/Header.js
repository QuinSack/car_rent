import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

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
                        <div className='header__top__right'>
                            <Link to='#'><i class="ri-login-circle-line"></i>Login</Link>
                            <Link to='#'><i class="ri-user-line"></i>Register</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </header>
  )
}

export default Header