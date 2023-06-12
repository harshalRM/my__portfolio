import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Graphicprojects = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      })
  return (
    <>
                <div className="projects__container">
        <div className="container  py-2">
          <div className="row">
          <div className="col-12 text-center">
            <h1 className='text-white mt-4'>Graphic Design Projects</h1>
          </div>
          </div>
        </div>
        <div className="container my-4 p-5 text-center">
          <div className="row justify-content-center ">
            <div className="col-md-5 mb-4">
              <div className="card" id='project__card' data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFlafF9Y-o/rt7tzAr8K2sNnqTKZiv90g/watch?utm_content=DAFlafF9Y-o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Importance of Carbon Sinks</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4" >
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFlm_pvWxc/w3iktNDVmwJG7q7gXZmd_A/watch?utm_content=DAFlm_pvWxc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Muscle Madness logo</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFlnjdtS8o/AbJ2HMX1KEGSlKelx4M1rA/watch?utm_content=DAFlnjdtS8o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Brown Munde Barbershop logo</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFln1VvL28/CCltfxnyNNt26xLpAikFrg/watch?utm_content=DAFln1VvL28&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Aura logo</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFkMNWU0dU/svZxdXGFwsk9ZEaNc0jnuw/watch?utm_content=DAFkMNWU0dU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Travel to goa poster</a>
              </div>    
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFkMWfOT-Q/O8FD0ytB8jbor09q0DiyAw/watch?utm_content=DAFkMWfOT-Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Yoga classes poster</a>
              </div>    
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card" data-aos="fade-up">
              <a href="https://www.canva.com/design/DAFlVFp-zJs/JRWhl1wV-YrWdwrVyuz6RQ/watch?utm_content=DAFlVFp-zJs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='link'>Endangered species</a>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graphicprojects