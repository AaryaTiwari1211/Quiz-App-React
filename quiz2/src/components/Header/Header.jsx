import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <Link to='/' className='title'>
                Intuitive <b id='dark'>Quiz</b> Hub
                <hr />
            </Link>
        </div>

    )
}

export default Header