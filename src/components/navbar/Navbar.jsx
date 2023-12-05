// import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <span className="text">Atoutprix</span>
                </Link>
                
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>French</span>
                <span>Sign in</span>
                <span>Become a supplier</span>
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar