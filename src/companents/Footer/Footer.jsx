import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <section className="Footer">
        <div className="container">
            <div className="footer__h1">
                <h1>Let's work together.</h1>
                <h1 className='footer-h1'>Get in touch.</h1>
            </div>

            <div className="footer__wrapper">
              <div className='footer__1'>
                <img className='footer__img' src="https://brandeps.com/icon-download/F/Flower-icon-vector-03.svg" alt="" />
                <p>© Oli Harris 2023</p>
              </div>

              <div className='footer__2'>
                <a href="">Twitter</a>
                <a href="">Linkedin</a>
                <a href="">Mail</a>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
