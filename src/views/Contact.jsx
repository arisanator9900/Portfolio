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
                    <h3 className="c-list"><img src={Phone} alt='icon' className='c-icon'/>4436407865</h3>
                    <h3 className="c-list"><img src={Email} alt='icon' className='c-icon'/>Alexrstovall@gmail.com</h3>
                    <h3 className="c-list"><img src={Code} alt='icon' className='c-icon'/>arisanator9900.github.io</h3>
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