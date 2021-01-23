import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import one from './image/bluewarm3.jpg'
import two from './image/jojo2.jpg'
import three from './image/before3.jpg'
import four from './image/requiem1.jpg'
import five from './image/her3.jpg'
import six from './image/devd3.jpg'
import seven from './image/perfect2.png'
import eight from './image/rhap.jpg'
import nine from './image/ship2.jpg'
import ten from './image/liberal2.jpg'
import eleven from './image/list.jpg'

const Slideshow = () => {
    const properties = {
        duration: 2000,
        autoplay: true,
        transitionDuration: 1000,
        arrows: true,
        infinite: true,
        indicators: true,
        indicators: i => (<div className="indicator"></div>),
        // indicators: i => (<p><i id="ind" class="fas fa-circle"/></p>),
        prevArrow: <div id='ar'><i class="fas fa-angle-left fa-5x"></i></div>,
        nextArrow: <div id='ar2'><i class="fas fa-angle-right fa-5x"></i></div>
  
        // indicators: (i) => <div className="indicator">{i + 1}</div>
      }

    return (
      <div className="slide-container">
          <br/><br/><br/>
        <Slide easing="ease" {...properties}>
          <div className="each-slide">
  
              <img src={nine} class="sld" alt="Radja" />
              <p class="cap">Ship of Theseus</p>
          
          </div>
          <div className="each-slide">
  
              <img src={one} class="sld" alt="Radja" />
              <p class="cap">Blue is the warmest color<br/>
              Tale of Adele and her discovery of love with another girl called Emma depicts the beauty of lesbian relationships.
              {/* The film shows the physical and emotional sides of love story in both subtle and rough ways. */}
              Despite of consisting some very sensual scenes, in the end it feels really heavy in your heart.
              This film does an astounding job exploring the color blue as the color of lesbian love and the intricacies of it. 
              it gives you a totally different perception of relationship and love as we imagine. 
              It's always intreguing to experience something very different that who we are, and blue is the warmest color totally nails it there.
              </p>
          
          </div>
          <div className="each-slide">
              <img src={two} class="sld" alt="Radja" />
              <p class="cap">Jojo Rabbit<br/>

              </p>
          </div>
          <div className="each-slide">
           
              <img src={three} class="sld" alt="Radja" />
              <p class="cap">Before Sunrise<br/>While travelling on a train in Europe, 
              Jesse, an American man, meets Celine, a French woman. 
              On his last day in Europe before returning to the US,
               he decides to spend his remaining hours with her.</p>
          </div>
          <div className="each-slide">
        
              <img src={four} class="sld" alt="Radja" />
              <p class="cap">Requiem for a dream</p>  
          </div>
          <div className="each-slide">
        
              <img src={five} class="sld" alt="Radja" />
              <p class="cap">Her</p>  
          </div>
          <div className="each-slide">
        
              <img src={six} class="sld" alt="Radja" />
              <p class="cap">Dev D</p>  
          </div>
          <div className="each-slide">
        
              <img src={eleven} class="sld" alt="Radja" />
              <p class="cap">Schindler's List<br/>
              The tale of a man devoting his life to save Jews from the tyranni of Nazism. 
              Jaxtrapostion of cruelty and compassion which blends in feelings of dread and solace at the same time. 
              The film depicts violence in a very transient way yet it scars deep enough to scuff your soul.
              Behind a man recklessly trying to save people from death we see regret of not doing enough.
              The eventual feeling of regret that he could have done more. The ring on his finger, 
              {/* the car he drove he could have given the gift of life to few more. */}
              The value of human life and what is means to save it are the questions explored by this film to unfathomable depth.
              </p>  
              
          </div>
          <div className="each-slide">
        
              <img src={seven} class="sld" alt="Radja" />
              <p class="cap">Perfect Blue</p>  
          </div>
          <div className="each-slide">
        
              <img src={eight} class="sld" alt="Radja" />
              <p class="cap">Bohemian Rhapsody</p>  
          </div>
          <div className="each-slide">
        
              <img src={ten} class="sld" alt="Radja" />
              <p class="cap">Liberal Arts</p>  
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;