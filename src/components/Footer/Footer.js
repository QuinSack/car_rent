import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
  {
    path: '/comments',
    display: 'Comments'
  }
]

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='logo'><h1><Link to='/home' className='d-flex align-items-center gap-3'><i class="ri-car-line"></i><span>Rent Car <br /> Service</span></Link></h1></div>
            <p className='footer__logo-content'>Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.</p>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item,index) => (
                  <ListGroupItem key={index} className='p-0 mt-3'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div> 
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Head Office</h5>
              <p className='office__info'>113 Airport West, Dzorwulu, Accra-Ghana</p>
              <p className='office__info'>Phone: 0300256342</p>
              <p className='office__info'>Email: eddywhillsrentals@gmail.com</p>
              <p className='office__info'>Working Hours: 9am - 7pm</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer