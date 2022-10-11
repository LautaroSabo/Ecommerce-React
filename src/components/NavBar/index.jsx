import './style.css'
import React from 'react'




const NavBarContainer = () => {
    return (
        <div className='NavBar'>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Cotact">Contact</a></li>
                <li><a href="#New">New</a></li>
                <li><a href="#About">About</a></li>
            </ul>
        </div>
    )
}

export default NavBarContainer