import React, { useState } from 'react'
import '../styles/careers.css'
import FinanceAssistant from '../components/JobDescriptions/FinanceAssistant'
import BusDevAssociate from '../components/JobDescriptions/BusDevAssociate'
import FleetManager from '../components/JobDescriptions/FleetManager'
import CustomerSupport from '../components/JobDescriptions/CustomerSupport'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import DigitalMarketing from '../components/JobDescriptions/DigitalMarketing'
import Intern from '../components/JobDescriptions/Intern'

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job)
    setIsModalOpen(true);
    };

  const closeModal = () => {
    setIsModalOpen(false);
    };

  const openRoles = [
    {title: "Finance Assistant",
     comment: "We're looking for a finance assistant to join our team",
     experience: "1 - 4 years in a related field",
     description: <FinanceAssistant />
    },
    {title: "Business Development And Sales Associate",
     comment: "We're looking for an experienced business development and sales associate to join our team",
     experience: "3+ years in a related field",
     description: <BusDevAssociate />
    },
    {title: "Fleet Manager",
     comment: "We're looking for a fleet manager to join our team",
     experience: "2+ years in a related field",
     description: <FleetManager />
    },
    {title: "Customer Support Specialist",
     comment: "We're looking for a customer support specialist to join our team",
     experience: "1 year minimum in a related field",
     description: <CustomerSupport />
    },
    {title: "Digital Marketing Specialist",
     comment: "We're looking for a digital marketing specialist to join our team",
     experience: "2+ years in a related field",
     description: <DigitalMarketing />
    },
    {title: "Intern",
     comment: "We're looking for an intern to join our team",
     experience: "Little to no working experience",
     description: <Intern />
    }
  ]
  return (
    <div className='careerscontainer'>
        <div className='hiring'>
          <p><strong>We're hiring!</strong></p>
        </div>
        <div className='joinus'>
          <h1><b>Be part of our mission</b></h1>
          <p>We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
        </div>
        <h1 style={{color: '#f9a826'}}><strong>Available Positions</strong></h1>
        {openRoles.map((openRole) => (
          <div className='roles'>
            <h5><strong>{openRole.title}</strong></h5>
            <p>{openRole.comment}</p>
            <p style={{color: '#676767'}}>Experience Level: {openRole.experience}</p>
            <button onClick={() => openModal(openRole)}>Apply</button>
          </div>
        ))}
        {isModalOpen && selectedJob && (
          <Modal isOpen={isModalOpen} toggle={closeModal}>
          <ModalHeader toggle={closeModal}>Application for {selectedJob.title} Role</ModalHeader>
          <ModalBody>
              <p>{selectedJob.description}</p>
          </ModalBody>
          </Modal>
        )
        }
    </div>
  )
}

export default Careers