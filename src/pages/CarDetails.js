import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/cardetails.css';
import carData from '../assets/data/carData';

const CarDetails = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const {id} = useParams();

  const carInfo = React.useMemo(() => {
    return carData.find((car) => car.id === parseInt(id))
  },[id])

  if (!carInfo){
    return <p>Car not found</p>
  }

  const handleDropoffDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= pickupDate){
      setDropoffDate(selectedDate);
    }
  };

  const pickupDateObject = new Date(pickupDate);
  const dropoffDateObject = new Date(dropoffDate);

  const timeDifference = dropoffDateObject - pickupDateObject;

  const totalCost = (timeDifference / (1000 * 60 * 60 * 24)) * carInfo.price;

  return (
    <div className='cardetailscontainer'>
      <div className='carinfo'>
        <h4><b>About {carInfo.carName}</b></h4>
        <h3>Car Details for {carInfo.carName}</h3>
      </div>
      <div className='carbooking'>
        <div>
          <p>From: GHS <b>{carInfo.price}</b>/day</p>
        </div>
        <div className='pickup'>
          <div className='pickupblock'>
            <h6>Location</h6>
            <h6>Greater Accra</h6>
          </div>
          <div className='pickupblock'>
            <h6>Pick-up</h6>
            <input type='datetime-local' value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)} />
          </div>
          <div className='pickupblocklast'>
            <h6>Drop-off</h6>
            <input type='datetime-local' value={dropoffDate} onChange={handleDropoffDateChange} min={pickupDate} />
          </div>
        </div>
        <div>
          <h6><b>Total Cost:</b> GHS {totalCost.toFixed(2)}</h6>
        </div>
        <div>
          <button style={{borderRadius: '15px', padding: '1px', width: '30%'}}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
