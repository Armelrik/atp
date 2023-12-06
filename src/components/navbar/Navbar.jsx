import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {


    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "Arcade Dan",
        isSeller: true
    }

  return (
    <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link className="link" to="/">
                    <span className="text">Atoutprix</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>French</span>
                <span>Sign in</span>
                {!currentUser ?.isSeller && <span>Become a supplier</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={() => setOpen(!open)}>
                        <img src="img/bg.jpg" alt="" />
                        <span>{currentUser?.username}</span>
                        { open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to="/mycategories">Categories</Link>
                                        <Link className='link' to="/add">Add a new</Link>
                                    </>
                                )
                            }
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to="/messages">Messages</Link>
                            <Link className='link' to="/">Log out</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        { (active || pathname!=="/") && (
        <>
            <hr />
            <div className="menu">
                <Link className='link menuLink' to="/">Graphics & Design</Link>
                <Link className='link' to="/">Video & Animatiom</Link>
                <Link className='link' to="/">Writting & Translation</Link>
                <Link className='link' to="/">AI Services</Link>
                <Link className='link' to="/">Digital Marketing</Link>
                <Link className='link' to="/">Music & Audio</Link>
                <Link className='link' to="/">Programming & Tech</Link>
                <Link className='link' to="/">Business</Link>
                <Link className='link' to="/">Lifestyle</Link>
                {/* <Link className='link' to="/">Others</Link> */}
            </div>
        </>
        )}
    </div>
  )
}

export default Navbar