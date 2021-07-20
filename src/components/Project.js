import React from "react"
import content from "../content"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Project = () => {
  return (
    <div
      style={{
        background: "#EEEEEE",
      }}
      className='p-5'
      data-aos='fade-right'
      id='myprojects'>
      {/* Title */}
      <div className='flex flex-col items-center justify-center font-dosis'>
        <h1 className='text-5xl font-bold'>Projects</h1>
      </div>

      {/* Projects */}

      {/* Card */}
      <div>
        <div className='content'>
          <div className='grid mt-8  gap-8 grid-cols-1 md:grid-cols-2  xl:grid-cols-3'>
            {content.project.projects.map((projects, index) => {
              return (
                <div
                  data-aos={`${index % 2 === 0 ? "fade-down" : "fade-up"}`}
                  className='flex flex-col'>
                  <div className='bg-white shadow-md  rounded-3xl p-4'>
                    <div className='flex-none lg:none'>
                      <div className=' h-full w-full  lg:mb-0 mb-3 '>
                        <LazyLoadImage
                          src={projects.img}
                          alt={projects.title}
                          className={projects.class}
                        />
                      </div>
                      <div className='flex-auto ml-3 justify-evenly py-2'>
                        <div className='flex flex-wrap '>
                          <div className='w-full flex-none text-xs text-blue-700 font-medium '>
                            {projects.job}
                          </div>
                          <h2 className='flex-auto text-lg font-medium'>
                            {projects.title}
                          </h2>
                        </div>
                        <p className='mt-3'></p>
                        <div className='flex py-4  text-sm text-gray-600'>
                          <div className='flex-1 inline-flex items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-3'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                            </svg>
                            <p className=''>{projects.location}</p>
                          </div>
                          <div className='flex-1 inline-flex items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                            </svg>
                            <p className=''>{projects.date}</p>
                          </div>
                        </div>
                        <div className='flex p-4 pb-2 border-t border-gray-200 '></div>
                        <div className='flex space-x-3 text-sm font-medium'>
                          <div className='flex-auto flex space-x-3'>
                            <button className='mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 '>
                              <span className='text-green-400 hover:text-green-500 rounded-lg'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  class='h-6 w-6'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'>
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                                  />
                                </svg>
                              </span>
                              <span>{projects.code}</span>
                            </button>
                          </div>
                          <a href={projects.website}>
                            <button
                              className='mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800'
                              type='button'
                              aria-label='like'>
                              Website
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Project
