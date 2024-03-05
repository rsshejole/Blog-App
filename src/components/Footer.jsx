/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
    <div className='footer'>
        <img src={Logo}/>
        <span><Link to='/feedback'>Leave us a review</Link></span>
    </div>
    )
}

export default Footer