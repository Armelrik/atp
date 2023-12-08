/* eslint-disable react/prop-types */
import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom';

const CatCard = ({item}) => {
  return (
    <Link to="/category?id=123" className='link'>
        <div className='catcard'>
            <img src={item.img} alt="" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    {/* <img src="img/star.png" alt="" /> */}
                    <span>{item.star}</span>
                </div>
            </div>
            <hr />
            <div className="details">
                <i className="fa-solid fa-heart"></i>
                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
                
            </div>
    </div>
    </Link>
  )
}

export default CatCard;
