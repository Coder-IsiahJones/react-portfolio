import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

// import content from "../content"
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <div
      className=' min-h-screen  flex justify-center items-center '
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
          src={process.env.PUBLIC_URL + "/assets/isiahjones.jpg"}
          alt='profile'
          width='320px'
          className='mt-10 mb-10 mx-auto rounded-xl'
        />

        <div className='font-dosis w-4/5 md:w-2/5 mt-5 '>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
