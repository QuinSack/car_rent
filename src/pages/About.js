import React from 'react'
import '../styles/aboutpage.css'
import abimage from '../assets/allimages/aboutpage.jpg'
import rain from '../assets/allimages/rain.jpg'
import sunset from '../assets/allimages/sunset.jpg'

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
    </div>
  )
}

export default About