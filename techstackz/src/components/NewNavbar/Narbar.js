import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import './Narbar.css';

function Navbar() {
  // states
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  // set menu status by detecting if it was clicked or not
  const handleClick = () => setClick(!click);

  // set the menu close in mobile status
  const closeMobileMenu = () => setClick(false)

  // if the window inner width is less than 960, show the menu button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  // show the button
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={"navbar"}>
        {/* TechStackZ logo */}
        <div className={"navbar-container"}>
          <Link to={"/"} className={"navbar-logo"} onClick={closeMobileMenu}>
            TechStackZ
          </Link>
          {/* if show the navbar menu with the condition of window width */}
          <div className={"menu-icon"} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          {/* navbar items*/}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className={'nav-item'}>
              <Link to={'/'} className={'nav-links'} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link to={'/techSearch'} className={'nav-links'} onClick={closeMobileMenu}>
                Search
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link to={'/techComparison'} className={'nav-links'} onClick={closeMobileMenu}>
                Comparison
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link to={'/techRecommendation'} className={'nav-links'} onClick={closeMobileMenu}>
                Recommendation
              </Link>
            </li>

          </ul>
          {/* decide whether show the sign-up button depending on the window width*/}

        </div>
      </nav>
    </>
  )
}

export default Navbar