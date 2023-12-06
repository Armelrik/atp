import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to="/categories?cat=design">
        <div className='catcard'>
            <img src={item.img} alt='' />
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
    </Link>
  )
}

export default CatCard