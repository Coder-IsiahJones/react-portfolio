import React from "react"
import content from "../content"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Stack = () => {
  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center font-dosis'
      id='stack'>
      <h1 className='text-5xl font-bold' data-aos='fade-right'>
        Tech Stack
      </h1>

      <div className='flex flex-wrap justify-center mt-10' data-aos='fade-up'>
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={` ${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-4 overflow-hidden`}>
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          )
        })}
      </div>

      <p
        className='w-11/12 md:max-w-xl mx-auto text-xl text-center mt-10'
        data-aos='fade-down'>
        {content.stack.desc}
      </p>
    </div>
  )
}

export default Stack
