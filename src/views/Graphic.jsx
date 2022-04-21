import React from 'react'
import '../css/Git.css'
import Portfolio from '../components/Portfolio';
import { portItemsGraphic } from '../components/portData';
import Line from '../components/Line';

const Git = () => {
    return (
        <div className="g">
          <div className="g-texts">
            <h1 className="g-title">Design Projects</h1>
            <Line/>
            <p className="g-desc">
              My Behance portfolio shows off a few skills in different areas: Illustrations, UI Design, 
              Graphic design, Photography, Logos and Social Media Content.
            </p>
          </div>
          <div className="g-list">
                {portItemsGraphic.map((item) => (
                <Portfolio key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
        </div>
      );
};

export default Git