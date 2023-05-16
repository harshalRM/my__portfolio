import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
      <div className="projects__container">
        <div className="container  py-2">
          <div className="row">
          <div className="col-12 text-center">
            <h1 className='text-white mt-4'>My Figma Projects</h1>
          </div>
          </div>
        </div>
        <div className="container my-4 p-5 text-center">
          <div className="row justify-content-center ">
            <div className="col-md-5 mb-4">
              <div className="card" id='project__card' data-aos="fade-up">
              <a href="https://www.figma.com/file/FaM5CfzGDLloGV3yy8Kvn9/headphone-sale?type=design&node-id=0%3A1&t=OupJ69iiL2OOzOZV-1" className='link'>Headphones Sale JPG</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4" >
              <div className="card" data-aos="fade-up">
              <a href="https://www.figma.com/file/bF0ttS1Y4OA4Jw47NzyokR/Magazine-cover?type=design&node-id=0%3A1&t=5Men1lzk3RIS04F4-1" className='link'>Magazine Cover</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.figma.com/file/KeataS1xAXA68s4Y5jnamS/jeans?type=design&node-id=0%3A1&t=nBRyM6JMvvHh22fg-1" className='link'>Jeans Instagram Post</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.figma.com/file/3wYngS1a7OAX4uJVeZ7VhC/Hotel-menu?type=design&node-id=0%3A1&t=HoQHVJzQ4T4otqxw-1" className='link'>Hotel Menu</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.figma.com/proto/OncqGz73e3GTXmOmUmxLk3/photo-app-design?page-id=0%3A1&type=design&node-id=2-5&viewport=261%2C319%2C0.65&scaling=scale-down&starting-point-node-id=2%3A5" className='link'>Photogram app</a>
              </div>    
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.figma.com/proto/7bNCvmLembS2aC3s4Ux3P7/Pizza-Delivery-App?page-id=0%3A1&type=design&node-id=1-2&viewport=217%2C363%2C0.76&scaling=scale-down&starting-point-node-id=1%3A2" className='link'>Pizza Delivery app</a>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects