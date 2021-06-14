import React from "react"
import content from "../content"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const Header = () => {
  return (
    <div
      className='min-h-screen flex items-center justify-center'
      style={{
        background: "#091c29",
      }}>
      <div>
        {/* Header Image */}
        <div>
          <LazyLoadImage src={content.header.img} effect='blur' />
        </div>

        {/* Header Text */}
        <div className='text-white'>
          <h2>
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>

          <h1>{content.header.text[2]}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
