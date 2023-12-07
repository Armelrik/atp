/* eslint-disable no-unused-vars */
import React from 'react'
import './Slide.scss'
import Slider from 'react-slick'


const Slide = ({children,slidesToShow,arrowsScroll}) => {
  
  return (
    <div className='slide'>
        <div className="container">
            <Slider slidesToShow={slidesToShow} 
              slidesToScroll={arrowsScroll} dots={true} arrows={true} >
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide;