import React from 'react'
import './GigCard.scss'
import { Link } from 'react-router-dom';

const GigCard = (item) => {
  return (
    <Link to="/cat/123">
        <div className='gigcard'>
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

export default GigCard;
