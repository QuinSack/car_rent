import React, { useState } from 'react'
import '../styles/faq.css'
import { Col, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question: '1. Can you rent a car with cash?',
      answer: 'Yes, you can rent a car with cash at our rental agency.'
    },
    {
      question: '2. What do you need to rent a car at QuinSack Car Rentals?',
      answer: 'To rent a car, you will need a valid driver\'s license and a credit card.'
    },
    {
      question: '3. How can I obtain a receipt or proof of payment?',
      answer: 'You can obtain a receipt or proof of payment from our customer service desk after returning the rental car.'
    },
    {
      question: '4. What forms of payment are available to rent a car?',
      answer: 'We accept credit cards, debit cards, and cash as forms of payment for renting a car.'
    },
    {
      question: '5. How do I cancel my booking?',
      answer: 'Directly online with your booking confirmation number or reach us via any of our contact channels'
    },
    {
      question: '6. Do I pay a fee for returning a rented car late?',
      answer: 'Late returning of your ride attracts an extra 10% fee of the total rented cost unless a time extension is requested by rider.'
    },
    {
      question: '7. What are the business days & hours of work',
      answer: 'Business days are from Mondays to Saturdays. Working hours are 9:00am – 7:00pm each working day. We do not operate on Sundays'
    },
    {
      question: '8. Can I have my car delivered to me?',
      answer: 'Yes you can request for your ride to be delivered directly to your home at a flat fee of GHS70'
    },
    {
      question: '9. How do I contact QuinSack Car Rentals to make enquiries?',
      answer: 'Online on our support page at www.quinsackcarrentals.com. On social media via instagram, facebook & twitter. Call us on +233 0300000000. Email to eddywhillsrentalssupport@gmail.com'
    },
    {
      question: '11. What do I do if I have an accident?',
      answer: 'Contact our customer support number directly for assistance. Do not attempt to fix any damages to the car on your own. All cars are comprehensively insured as a requirement but damages such as small dents, scratches, flat tires caused by rider will need to be covered by rider.'
    },
    {
      question: '12. What are the cleaning and safety policies on QuinSack Car Rentals?',
      answer: 'All cars are delivered clean and disinfected by QuinSack Car Rentals. Riders returning cars are required to return their booked cars completely clean'
    },
    {
      question: '13. What do I do about fuel?',
      answer: 'Cars are delivered fully fuelled to riders Cars must be returned in the same condition i.e. fully fuelled Riders must report and obtain evidence of the fuel level before and after booked trip'
    }
  ];

  const toggleDropdown = (index) => {
    if (expanded === index) {
      setExpanded(null); 
    } else {
      setExpanded(index); 
    }
  };

  return (
    <div>
      <h4 style={{color: '#f9a826', fontSize: '2rem', marginTop: '40px'}} className='text-center'><strong>General Enquiries</strong></h4>
      <Container>
        <Row>
          <Col xs={6}>
              <ul>
                {faqs.map((faq, index) => (
                  <li key={index} onClick={() => toggleDropdown(index)}>
                    <h5><strong>{faq.question} <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></strong></h5>
                    {expanded === index && <p>{faq.answer}</p>}
                  </li>
                ))}
              </ul>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FAQ