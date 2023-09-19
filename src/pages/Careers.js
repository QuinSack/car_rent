import React from 'react'
import '../styles/careers.css'

const Careers = () => {
  const openRoles = [
    {title: "Finance Assistant",
     comment: "We're looking for a finance assistant to join our team",
     experience: "1 - 4 years in a related field"
    },
    {title: "Business Development And Sales Associate",
     comment: "We're looking for an experienced business development and sales associate to join our team",
     experience: "3+ years in a related field"
    },
    {title: "Fleet Manager",
     comment: "We're looking for a fleet manager to join our team",
     experience: "2+ years in a related field"
    },
    {title: "Customer Support Specialist",
     comment: "We're looking for a customer support specialist to join our team",
     experience: "1 year minimum in a related field"
    },
    {title: "Digital Marketing Specialist",
     comment: "We're looking for a digital marketing specialist to join our team",
     experience: "2+ years in a related field"
    },
    {title: "Intern",
     comment: "We're looking for an intern to join our team",
     experience: "Little to no working experience"
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
            <button>Apply</button>
          </div>
        ))}
    </div>
  )
}

export default Careers