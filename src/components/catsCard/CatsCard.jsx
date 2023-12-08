/* eslint-disable react/prop-types */
import React from 'react'
import './CatsCard.scss'
import { Link } from 'react-router-dom'

const CatsCard = ({item}) => {
  return (
    <Link to="/categories?cat=design">
        <div className='catscard'>
            <img src={item.img} alt='' />
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
    </Link>
  )
}

export default CatsCard