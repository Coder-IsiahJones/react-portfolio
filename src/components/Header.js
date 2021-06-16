import React, { useEffect, useState } from "react"
import content from "../content"
// import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import Typical from "react-typical"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <div
      className='pt-20 overflow-hidden'
      style={{
        background: "#091c29",
        height: "calc(788px - 80px)",
      }}>
      <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
        {/* Header Image */}
        <div className='w-full md:w-2/5' data-aos='fade-up'>
          {/* <LazyLoadImage src={content.header.img} effect='blur' /> */}
        </div>

        {/* Header Title Section */}
        <div
          className='text-white font-dosis text-left  w-11/12			'
          style={{ height: "100px" }}>
          {/* Title */}
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out text-3x md:text-5xl font-bold `}>
            {content.header.text[0]}
          </h2>

          {/* Title Animation */}
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-outfont-bold text-2xl text-gray-500 `}>
            <span style={{ color: "#04D5FD" }}>{"<div> "}</span>

            {/*  */}
            <div className='pl-2'>
              <span style={{ color: "#04D5FD" }}>{"<h1> "}</span>
              {content.header.text[2]}{" "}
              <span style={{ color: "#04D5FD" }}>{"</h1> "}</span>
            </div>

            {/*  */}
            <div className='pl-6 '>
              <span style={{ color: "#04D5FD" }}>{"<p> "}</span>{" "}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className='inline-block'
              />
              <span style={{ color: "#04D5FD" }}>{"</p> "}</span>
            </div>

            <span style={{ color: "#04D5FD" }}>{" </div>"}</span>
          </h1>

          <ScrollLink to='mycontact' smooth={true}>
            {/* Button */}
            <button className='font-bold animate-float bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg  focus:outline-none'>
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Header
