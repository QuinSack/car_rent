import React from 'react'
import '../styles/aboutpage.css'
import rain from '../assets/allimages/rain.jpg'
import { Col, Row } from 'reactstrap'
import carpark from '../assets/allimages/carpark.jpg'
import cardealer from '../assets/allimages/cardealer4.avif'
import spoton from '../assets/allimages/spoton.png'
import acre from '../assets/allimages/acre.png'
import cloudport from '../assets/allimages/cloudport.png'

const About = () => {
  return (
    <div className='aboutcontainer'>
      <section className='aboutimage'>
        <img src={rain} style={{width: '100%', height: '100%', objectFit: 'fill'}} />
      </section>
      <section className='whoweare'>
        <h3 style={{fontSize: '5rem', color: '#f9a826'}}><strong>Who We Are</strong></h3>
        <h5>Welcome to Quinsack Rentals, your trusted online car rental platform. At Quinsack Rentals, we believe that renting a car should be easy, convenient, and enjoyable. We strive to provide you with a seamless and personalized car rental experience that puts you in the driver's seat of your journey.</h5>
      </section>
      <section>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '50px'}}>
            <h5 style={{fontSize: '3rem', color: '#f9a826'}}><strong>Our Journey From</strong></h5>
            <h5 style={{fontSize: '3rem', color: '#f9a826'}}><strong>Vision to Reality</strong></h5>
            <p>
            Discover the story behind QuinSack Car Rentals, how it all started, and the vision that drives us forward. We are a team of passionate individuals who saw an opportunity to revolutionize the car rental industry by combining innovative technology with exceptional service. Learn more about our mission to transform the way people rent cars and the milestones we've achieved along the way.
            </p>
          </Col>
          <Col style={{display: 'flex', justifyContent: 'center'}}>
            <img src={carpark} alt='' style={{width: '100%', height: '100%', objectFit: 'fill'}} />
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}>
            <img src={cardealer} alt='' style={{width: '100%', height: '100%', objectFit: 'fill'}} />
          </Col>
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h5 style={{fontSize: '3rem', color: '#f9a826'}}><strong>Our Commitment to You</strong></h5>
            <p>
            At QuinSack Car Rentals, our values guide everything we do. We are committed to providing outstanding customer service, fostering trust and transparency and disrupting the car rental industry by embracing innovation. Find out how these core values shape our business practices and ensure that you receive the highest level of service and satisfaction
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <h3 className='text-center' style={{fontSize: '3rem', color: '#f9a826'}}><strong>Meet Our Partners</strong></h3>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={spoton} alt='' />
            <p>
              Spoton Insurance Broker is located in the heart of East Legon & aims to be the leading Insurance Broker in its markets by providing quality & world-class insurance broking services meeting the needs and expectations of our cherished clients.
            </p>
            <h5><strong>Spoton Insurance Broker</strong></h5>
            <button style={{padding: '7px', backgroundColor: 'darkgreen', color: 'white', borderRadius: '3px'}}>Learn More</button>
          </Col>
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={acre} alt='' />
            <p>
              ACRE Logistics GH LTD is the parent company of QuinSack Car Rentals, a leading online car rental platform. With a strong focus on efficient and reliable transportation solutions, ACRE Logistics GH oversees the operations of QuinSack Car Rentals, ensuring exceptional service and seamless experiences for customers.
            </p>
            <h5><strong>ACRE Logistics Ghana</strong></h5>
            <button style={{padding: '7px', backgroundColor: 'darkgreen', color: 'white', borderRadius: '3px'}}>Learn More</button>
          </Col>
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={cloudport} alt='' />
            <p>
              We aim to provide you with simple, easy-to-adopt cloud solutions and applications to integrate into your day to day operations. We have tested these services and stand by them. And you can too.
            </p>
            <h5><strong>Cloudport</strong></h5>
            <button style={{padding: '7px', backgroundColor: 'darkgreen', color: 'white', borderRadius: '3px'}}>Learn More</button>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default About