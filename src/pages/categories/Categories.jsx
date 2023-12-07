// import React from 'react'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="container">
        <span className="breadcrumbs">ATOUTPRIX - GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Earum cum optio ex harum veniam autem quibusdam excepturi.
        </p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">Best Selling</span>
            <i className="fa-solid fa-angle-down"></i>
            <div className="rightMenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories