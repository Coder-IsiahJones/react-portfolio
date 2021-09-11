import React, { useState } from "react"
import content from "../content"
import { Link as ScrollLink } from "react-scroll"
import "./Nav.css"

function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='navbar-logo' onClick={closeMobileMenu}>
            {content.nav.logo}
          </h1>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {content.nav.links.map((link, index) => {
              return (
                <li className='nav-item'>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    className='nav-links'
                    onClick={closeMobileMenu}>
                    <span className='pr-1' style={{ color: "#04D5FD" }}>
                      {"<"}
                    </span>
                    {link.text}
                    <span className='pl-1' style={{ color: "#04D5FD" }}>
                      {"/>"}
                    </span>
                  </ScrollLink>
                </li>
              )
            })}

            <li className='nav-item'>
              <a
                href={"https://github.com/Coder-IsiahJones"}
                target="_blank" 
                rel="noopener noreferrer"
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}>
                <span className='pr-1' style={{ color: "#04D5FD" }}>
                  {"<"}
                </span>
                Github
                <span className='pl-1' style={{ color: "#04D5FD" }}>
                  {"/>"}
                </span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                href={"https://www.linkedin.com/in/isiah-jones"} 
                target="_blank" 
                rel="noopener noreferrer"
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}>
                <span className='pr-1' style={{ color: "#04D5FD" }}>
                  {"<"}
                </span>
                Linkedin
                <span className='pl-1' style={{ color: "#04D5FD" }}>
                  {"/>"}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
