import React from 'react'
import "../css/Landing.css"

const Landing = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-landing">Hello, My name is</h2>
                <h1 className="i-name">Alex Stovall</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Web Designer</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Graphic Designer</div>
                    </div>
                </div>
                <div className="i-desc">
                    FrontEnd developer with a passion for designing sleek and modern web applications and user experiences.
                </div>
            </div>
        </div>
        <div className="i-right">Right</div>
    </div>
  )
}

export default Landing