import React from "react"
import content from "../content"
import { Link as ScrollLink } from "react-scroll"

const Nav = () => {
  return (
    <div
      style={{
        background: "#091c29",
      }}
      className='font-dosis fixed top-0 w-screen z-40'>
      <div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white '>
        <h1 className='text-3xl font-bold' data-aos='fade-right'>
          {content.nav.logo}
        </h1>
        <div data-aos='fade-down'>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <button className=' focus:outline-none '>
                  <span className='text-xl mr-4'>
                    <span style={{ color: "#04D5FD" }}>{"< "}</span>
                    {link.text}
                    <span style={{ color: "#04D5FD" }}>{" />"}</span>
                  </span>
                </button>
              </ScrollLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
