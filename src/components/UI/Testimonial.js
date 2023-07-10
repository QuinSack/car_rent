import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/allimages/ava-1.jpg'
import ava02 from '../../assets/allimages/ava-2.jpg'
import ava03 from '../../assets/allimages/ava-3.jpg'
import ava04 from '../../assets/allimages/ava-4.jpg'
 
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
                Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.
            </p>
            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava01} alt='' className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className='mb-0 mt-3'>David Opoku</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
                Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.
            </p>
            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava02} alt='' className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Rosemond Dei</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
                Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.
            </p>
            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava03} alt='' className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Stephen Ofori</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p className='section__description'>
                Lorem ipsum dolor sit amet, temporibus complectitur et vim, per nominati euripidis ullamcorper ea, an omnis feugait delicatissimi eum. Pri brute utroque senserit ea. Cu quo saperet fastidii tincidunt. Prima convenire has at. Has quem aliquam et, pro nullam libris vituperatoribus et.
            </p>
            <div className='mt-3 d-flex align-items-center gap-4'>
                <img src={ava04} alt='' className='w-25 h-25 rounded-2' />
                <div>
                    <h6 className='mb-0 mt-3'>Saraphine Nicole</h6>
                    <p className='section__description'>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial