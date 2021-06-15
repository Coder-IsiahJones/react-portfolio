import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import content from "../content"

export default function Contact() {
  return (
    <div
      className=' min-h-screen  flex justify-center items-center  '
      id='mycontact'>
      <div
        style={{
          minHeight: "50vh",
          background: "#091C29",
        }}
        data-aos='fade-right'
        className='w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'>
        <LazyLoadImage
          effect='blur'
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt='profile'
          width='300px'
          className='mt-10 mx-auto'
        />
        <div className='font-dosis w-4/5 md:w-2/5 mt-5 '>
          <h1 className=' text-white text-5xl font-bold'>
            {content.contact.title}
          </h1>
          <p className='text-white text-2xl'>{content.contact.desc}</p>
          <div>
            {content.contact.socials.map((social, index) => {
              return (
                <LazyLoadImage
                  effect='blur'
                  className='m-2'
                  width='50px'
                  key={index}
                  src={social.img}
                  alt={social.alt}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
