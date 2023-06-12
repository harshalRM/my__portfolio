import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
      <div className="skills__container py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>My Skills</h1>
            </div>
          </div>
        </div>
        <div className="container py-4 mt-4">
          <div className="row justify-content-between mb-5">
            <div className="col-md-3 col-sm-12">
              <div id='skill__card' className="card" style={{ width: "18rem" }} data-aos="flip-right">
                <div className="image">
                  <img src="images/html.avif" className="card-img-top" alt="..." />
                </div>            
                <div className="card-body">
                  <h5 className="card-title">HTML</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/css.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">CSS</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/react.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
                <div className="image">
                  <img src="images/figma.avif" className="card-img-top" alt="..." />
                </div>             
                <div className="card-body">
                  <h5 className="card-title">Figma</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/photoshop.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Adobe Photoshop</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/python.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
                <div className="image">
                  <img src="images/canva.avif" className="card-img-top" alt="..." />
                </div>             
                <div className="card-body">
                  <h5 className="card-title">Canva</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/aftereffects.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Adobe AfterEffects</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }} data-aos="flip-right">
              <div className="image">
                  <img src="images/blender.avif" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Blender</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills