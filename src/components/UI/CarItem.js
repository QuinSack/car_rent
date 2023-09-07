import React, { useState } from 'react'
import { Col, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/caritem.css'


const CarItem = (props) => {
    const {imgUrl, model, carName, automatic, speed, price} = props.item;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };
    

  return (
    <Col lg='4' md='4' sm='6' className='mb-5'>
        <div className='car__item'>
            <div className='car__img'>
                <img src={imgUrl} alt='' className='w-100' />
            </div>
            <div className='car__item-content mt-4'>
                <h4 className='section__title text-center'>{carName}</h4>
                <h6 className='rent__price text-center mt-4'>{price}.00 <span> / Day</span></h6>
                <div className='car__item-info d-flex align-items-center justify-content-between mt-3 mb-4'>
                    <span className='d-flex align-items-center gap-1'><i class="ri-car-line"></i>{model}</span>
                    <span className='d-flex align-items-center gap-1'><i class="ri-settings-2-line"></i>{automatic}</span>
                    <span className='d-flex align-items-center gap-1'><i class="ri-timer-flash-line"></i>{speed}</span>
                </div>
                <button className='w-50 car__item-btn car__btn-rent'>
                    <Link to={`/cars/${carName}`}>Rent</Link>
                </button>
                <button className='w-50 car__item-btn car__btn-details' onClick={openModal}>
                Details
                </button>
            </div>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} toggle={closeModal}>
                    <ModalHeader toggle={closeModal}>Car Details</ModalHeader>
                    <ModalBody>
                        <h5>Car Name: {carName}</h5>
                        <h5>Rent Cost per Day: {price}</h5>
                        <h5>Top Speed: {speed}</h5>
                    </ModalBody>
                </Modal>
      )}
        </div>
    </Col>
  )
}

export default CarItem