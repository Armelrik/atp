import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the best <i>price</i> for your office and business supplies</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="img/search.png" alt="" />
                        <input type="text" placeholder='Try "Books and furniture" ' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Offices</button>
                    <button>Appliances</button>
                    <button>Desks</button>
                    <button>Newspapers</button>
                    <button>AI generated</button>
                </div>
            </div>
            <div className="right">
                <img src="img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured