import React from "react"
import content from "../content"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import Typical from "react-typical"

const Header = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center'
      style={{
        background: "#091c29",
      }}>
      <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
        {/* Header Image */}
        <div className='w-full md:w-2/5'>
          <LazyLoadImage
            src={content.header.img}
            effect='blur'
            // placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
          />
        </div>

        {/* Header Title Section */}
        <div className='text-white font-dosis text-center md:text-left'>
          {/* Title */}
          <h2 className='text-3x md:text-5xl font-bold '>
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>

          {/* Title Animation */}
          <h1 className='font-bold text-2xl text-gray-500'>
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className='inline-block'
            />
          </h1>

          {/* Button */}
          <button className='animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg'>
            {content.header.btnText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
