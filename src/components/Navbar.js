import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';
import { FaHome } from 'react-icons/fa'
import { FaRegCompass } from 'react-icons/fa'

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const fillColor = (route) => {
        if (route === location.pathname){
            return true;
        }
    }

  return (
    <header className='navbar'>
        <nav className='navbar-nav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem' onClick={() => navigate('/')}>
                    <ExploreIcon fill={fillColor('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={fillColor('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}><strong>Explore</strong></p>
                </li>
                <li className='navbarListItem' onClick={() => navigate('/offers')}>
                    <OfferIcon fill={fillColor('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={fillColor('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}><strong>Offers</strong></p>
                </li>
                <li className='navbarListItem' onClick={() => navigate('/profile')}>
                    <PersonOutlineIcon fill={fillColor('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                    <p className={fillColor('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}><strong>Profile</strong></p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar