import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/cardetails.css'

const CarDetails = () => {
  const {carName, price, model, speed, automatic, imgUrl} = useParams();
  return (
    <div className='cardetailscontainer'>
      <div>
        <h1>About This Car</h1>
        <h3>Car Details for {carName}</h3>
      </div>
      <div>
        <h4>Cry</h4>
      </div>
    </div>
  )
}

export default CarDetails