import React from 'react'
import '../styles/eligibilty.css'

const EligibilityRequirements = () => {
  return (
    <div className='eligibilitycontainer'>
        <div className='eligibility1'>
            <h5><strong>Eligibility Requirements</strong></h5>
            <p>To book and drive a car from QuinSack Car Rentals, you must meet all of the following:</p>
            <li>Be at least 21 years old. Any use of the services by anyone that does not meet this age requirement is expressly prohibited.</li>
            <li>Have a valid driver's license.</li>
            <li>International drivers should have an international licence or a temporary licence from DVLA.</li>
            <li>Have a valid national ID.</li>
            <li>Must provide proof of residence(utility bills) / confirmed hotel reservation or receipts and companies registration details where applicable.</li>
        </div>
        <div className='eligibility2'>
            <h5><strong>Rider Eligibility Continued Monitoring</strong></h5>
            <ul>1. Periodically monitor any rider driving record to ensure that such rider continues to qualify for membership under these Rider Eligibility Requirements.</ul>
            <ul>2. In addition, rider reviews can be triggered by the following:</ul>
            <ul>(i) External notification by any QuinSack Car Rental user</ul>
            <ul>(ii) Internal notification by the QuinSack Car Rental system functionality that we may establish and maintain from time to time and at our sole discretion</ul>
        </div>
        <div className='eligibility3'>
            <h5><strong>Vehicle Eligibility Requirements</strong></h5>
            <p>For your vehicle to be eligible, it must meet all of the following:</p>
            <ul>1. Be well maintained:</ul>
            <li style={{paddingLeft: '60px'}}>Upon applying to sign up to QuinSack Car Rentals, partners may be required to submit documented proof of the last major service performed.</li>
            <li style={{paddingLeft: '60px'}}>Partners are expected to properly schedule and record maintenance of the vehicles using the applicable manufacturer’s maintenance schedule as a guide.</li>
            <ul>2. List only eligible passenger vehicles that are registered to you or to an owner who’s authorized you to list.</ul>
            <ul>3. List vehicles which are located within Ghana and other countries at QuinSack Car Rentals' discretion</ul>
            <ul>4. Vehicles must be 2013 and above, it should not be over 10 years.</ul>
            <ul>5. Subject to the mileage restrictions, vehicles must be able to operate both within and outside the region. Exceptions will be given to vehicles with lesser mileage.</ul>
            <ul>6. Vehicles may require vetting to ensure vehicles are in the best condition for riders.</ul>
            <ul>7. Have not been altered for greater performance and/or physical appearance modification that materially changes the performance or purpose of the vehicle as determined by QuinSack Car Rentals in its sole discretion.</ul>
            <li style={{paddingLeft: '60px'}}>Vehicles whose engines have been altered in the aftermarket for greater performance and/or vehicles whose physical appearances have been modified in a manner that materially changes the performance or purpose of the vehicle are ineligible if Wopecar identifies a liability concern.</li>
            <ul>8. Be a private passenger vehicle with at least four wheels.</ul>
            <ul>9. Have photos of all four sides and four internal views of the vehicle uploaded to the Wopecar website to confirm no prior damage or any existing damage.</ul>
            <ul>10. Have not been issued a salvage/repair title.</ul>
            <ul>11. Vehicles must be comprehensively insured with Hire Comprehensive Insurance Policy.</ul>
        </div>
    </div>
  )
}

export default EligibilityRequirements