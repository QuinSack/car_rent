import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/contactus.css'

const ContactUs = () => {
    const workingTime = "09:00am - 07:00pm"
    const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <Container>
        <Row style={{marginTop: '60px'}}>
            <Col style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{fontSize: '2rem', color: 'lightgreen'}}><strong>Reach Out To Our Support Team</strong></h4>
                <p style={{fontSize: '1rem'}}>
                Let’s Make Your Journey Exceptional! We’d love to hear from you. Share your questions, feedback, or special requests, and our dedicated team will be delighted to assist you. Complete the form, and let’s start a conversation that will take your car rental experience to new heights.
                </p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faLocationDot} style={{color: 'lightgreen'}}></FontAwesomeIcon>
                        <h5>113 Airport West, Dzorwulu, Accra-Ghana</h5>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faPhone} style={{color: 'lightgreen'}}></FontAwesomeIcon>
                        <h5>+233 0300000000</h5>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faPhone} style={{color: 'lightgreen'}}></FontAwesomeIcon>
                        <h5>+233 0300000001</h5>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: 'lightgreen'}}></FontAwesomeIcon>
                        <h5>eddywhillsrentalssupport@gmail.com</h5>
                    </div>
                </div>
                <h4 style={{fontSize: '2rem', color: 'lightgreen', marginTop: '20px'}}><strong>Operating Hours</strong></h4>
                <p style={{fontSize: '1rem'}}>
                We are open Monday through Saturday every week except public Ghana holidays.
                </p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {workingDays.map((workingDay) => (
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '5px', transition: '0.3s'}} className='workingdays'> 
                            <p>{workingDay}</p>
                            <p>{workingDay === "Sunday" ? "Closed" : workingTime}</p>
                        </div>
                    ))}
                </div>
            </Col>
            <Col style={{display: 'flex', justifyContent: 'center', backgroundColor: 'lightgreen'}}>
                <h4>Hi</h4>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs