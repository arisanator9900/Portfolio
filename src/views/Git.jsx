import React from 'react'
import '../css/Git.css'
import Portfolio from '../components/Portfolio';
import { portItemsCode } from '../components/portData';
import Line from '../components/Line';

const Git = () => {
    return (
        <div className="g">
          <div className="g-texts">
            <h1 className="g-title">GitHub Projects</h1>
            <Line/>
            <p className="g-desc">
              Check out what I've been up to recently on my Github! From React applications to
               Vanilla JavaScript to just plain HTML and CSS web Designs.
            </p>
          </div>
          <div className="g-list">
                {portItemsCode.map((item) => (
                <Portfolio key={item.id} img={item.img} link={item.link}/> 
            ))}
          </div>
        </div>
      );
};

export default Git