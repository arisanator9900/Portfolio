import React from 'react'
import Line from '../components/Line'
import Phone from '../components/phone-solid.svg'
import Email from '../components/envelope-solid.svg'
import Code from '../components/code-fork-solid.svg'
import '../css/Contact.css'

const Contact = () => {

  return (
    <div className='c'>
        <div className="c-left">
            <div className="c-left-wrapper">
                <h2 className="c-title">Connect With Me</h2>
                <Line />
                    <a className='link' href='443' target="_blank" alt="phone number" rel='noreferrer'><h3 className="c-list">4436407865</h3></a><img src={Phone} alt='icon' className='c-icon'/>
                    <a className='link' href='https://www.Alexrstovall@gmail.com' target="_blank" alt="email" rel='noreferrer'><h3 className="c-list">Alexrstovall@gmail.com</h3></a><img src={Email} alt='icon' className='c-icon'/>
                    <a className='link' href='https://arisanator9900.github.io' target="_blank" alt="github" rel='noreferrer'><h3 className="c-list">arisanator9900.github.io</h3></a><img src={Code} alt='icon' className='c-icon'/>
                    <h3 className="c-list">
                    {/*<Button class='button'/> adding button for resume*/}
                    </h3>
            </div>
        </div>
        <div className="c-right">
            <div className="c-right-wrapper">

            </div>
        </div>
    </div>
  )
}

export default Contact