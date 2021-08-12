import './Logo.css'
import logo from '../../assets/images/wow.PNG'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" clLink toe="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>