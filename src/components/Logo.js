import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/logo.png';

function Logo({navReload}) {
  return (
    <Link to="/" onClick={navReload} className="navbar-brand">
        <img data-testid="logo" src={LOGO} className=" h-11  sm:h-14 sm:w-12" alt="logo image" />
    </Link>
  )
}

export default Logo