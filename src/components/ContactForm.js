import React from "react"
import content from "../content"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import emailjs from "emailjs-com"

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_tzncxiq",
        "template_hoy6dxs",
        e.target,
        "user_oYN8n0cWsH03RL924IeC7"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div>
      <h1 className=' text-white text-5xl font-bold'>
        {content.contact.title}
      </h1>

      <div className=''>
        <form onSubmit={sendEmail}>
          <div className=''>
            {/*  */}
            <div className='mb-4'>
              <label
                for='name'
                className='mb-1 block text-sm font-medium text-white'>
                Name
              </label>
              <input
                type='text'
                className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                required
                placeholder='Name'
                name='name'
              />
            </div>

            {/*  */}
            <div className='mb-4'>
              <label
                for='email'
                className='mb-1 block text-sm font-medium text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                placeholder='you@example.com'
                required
                name='email'
              />
            </div>

            {/*  */}
            <div className='mb-4'>
              <label
                for='subject'
                className='mb-1 block text-sm font-medium text-white'>
                Subject
              </label>

              {/* Input */}
              <input
                type='text'
                className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                required
                placeholder='Subject'
                name='subject'
              />
            </div>

            {/* Message */}
            <div className='mb-4'>
              {/* Label */}
              <label
                for='message'
                className=' mb-1 block text-sm font-medium text-white'>
                Message
              </label>

              {/* Input */}
              <textarea
                className='w-full px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                rows='4'
                placeholder='Your message'
                required
                name='message'></textarea>
            </div>

            {/*  */}
            <div className='text-white'>
              <input
                type='submit'
                className=' bg-indigo-500 hover:bg-indigo-300 cursor-pointer px-6 py-3 text-md uppercase mb-4 rounded-lg  focus:outline-none'
                value='Send Message'></input>
            </div>
          </div>
        </form>
      </div>

      {/* <div>
        {content.contact.socials.map((social, index) => {
          return (
            <LazyLoadImage
              effect='blur'
              className='m-2 p-1'
              width='50px'
              key={index}
              src={social.img}
              alt={social.alt}
            />
          )
        })}
      </div> */}
    </div>
  )
}
