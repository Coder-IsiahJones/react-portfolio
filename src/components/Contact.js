import React, { useEffect, useState } from "react"
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
        className='w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center'>
        <LazyLoadImage
          effect='blur'
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt='profile'
          width='300px'
          className='mt-10 transtion duration-2000 ease-in-out mx-auto'
        />
        <div className='font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000'>
          <h1 className='transform transition duration-3000 text-white text-5xl font-bold'>
            {content.contact.title}
          </h1>
          <p className='transform transition duration-3000 text-white text-2xl'>
            {content.contact.desc}
          </p>
          <div className='transform transition duration-3000'>
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
