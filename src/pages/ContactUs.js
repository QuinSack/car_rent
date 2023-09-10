import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/contactus.css'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../configs/firebase'

const ContactUs = () => {
    const workingTime = "09:00am - 07:00pm"
    const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSupportForm = async (e) => {
        e.preventDefault();
        let contactcollection = collection(db, "contact_us");
        try{
            var submitSupportForm = await addDoc(contactcollection, {name, email, message, phone})
            console.log(submitSupportForm);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        }catch(err){
            console.error(err);
        }
    }

  return (
    <Container>
        <Row style={{marginTop: '60px'}}>
            <Col style={{display: 'flex', flexDirection: 'column'}}>
                <h4 style={{fontSize: '2rem', color: '#f9a826'}}><strong>Reach Out To Our Support Team</strong></h4>
                <p style={{fontSize: '1rem'}}>
                Let’s Make Your Journey Exceptional! We’d love to hear from you. Share your questions, feedback, or special requests, and our dedicated team will be delighted to assist you. Complete the form, and let’s start a conversation that will take your car rental experience to new heights.
                </p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faLocationDot} style={{color: '#f9a826'}}></FontAwesomeIcon>
                        <p>113 Airport West, Dzorwulu, Accra-Ghana</p>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faPhone} style={{color: '#f9a826'}}></FontAwesomeIcon>
                        <p>+233 0300000000</p>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faPhone} style={{color: '#f9a826'}}></FontAwesomeIcon>
                        <p>+233 0300000001</p>
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: '#f9a826'}}></FontAwesomeIcon>
                        <p>eddywhillsrentalssupport@gmail.com</p>
                    </div>
                </div>
                <h4 style={{fontSize: '2rem', color: '#f9a826', marginTop: '20px'}}><strong>Operating Hours</strong></h4>
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
            <Col style={{display: 'flex', backgroundColor: 'whitesmoke'}}>
                <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSupportForm}>
                    <h4 style={{fontSize: '2rem', color: '#f9a826'}}><strong>Send A Message</strong></h4>
                    <label>Name *</label>
                    <input type='text' placeholder='Name' style={{height: '50px', width: '600px', paddingLeft: '20px'}} value={name} onChange={(e) => setName(e.target.value)} required />
                    <label style={{marginTop: '30px'}}>Email *</label>
                    <input type='email' placeholder='Email' style={{height: '50px', width: '600px', paddingLeft: '20px'}} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label style={{marginTop: '30px'}}>Phone</label>
                    <input type='text' placeholder='Phone' style={{height: '50px', width: '600px', paddingLeft: '20px'}} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label style={{marginTop: '30px'}}>Message *</label>
                    <textarea rows='5' style={{paddingLeft: '20px'}} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type='submit' style={{width: '180px', marginTop: '30px', height: '50px', borderRadius: '25px', backgroundColor: '#f9a826', color: 'white'}}><strong>Submit Form</strong></button>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default ContactUs