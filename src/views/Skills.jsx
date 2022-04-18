import React from 'react'
import '../css/Skills.css'
import Line from '../components/Line'

const Skills = () => {
  return (
    <div class='s'>
    <div className="s-left">
        <div className="s-left-wrapper">
            <h2 className="s-title">Proficiency</h2>
            <Line />
            <div class="s-chart">
            <ul>
                <li class="html">HTML</li>
                <li class="css">CSS</li>
                <li class="ui">UX/UI</li>
                <li class="js">JavaScript</li>
                <li class="re">React</li>
            </ul>
            </div>
        </div>
    </div> 
    <div className="s-right">
        <div className="s-right-wrapper">
        <h2 className="s-title">Graphics</h2>
            <Line />
          <div class="s-chart">
            <ul>
              <li class="html">HTML</li>
              <li class="css">CSS</li>
              <li class="ui">UX/UI</li>
              <li class="js">JavaScript</li>
              <li class="re">React</li>
            </ul>
          </div>
        </div>
    </div>
    </div> 
  )
}

export default Skills