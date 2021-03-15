import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import one from './image/bluewarm3.jpg'
import two from './image/jojo2.jpg'
import three from './image/before3.jpg'
import four from './image/requiem3.jpg'
import five from './image/her3.jpg'
import six from './image/dev3.jpg'
import seven from './image/perfect3.jpg'
import eight from './image/rhap3.jpg'
import nine from './image/ship3.jpg'
import ten from './image/liberal2.jpg'
import eleven from './image/list.jpg'
import twelve from './image/vicky.jpg'

const Slideshow = () => {
    const properties = {
        duration: 2000,
        autoplay: true,
        transitionDuration: 1000,
        arrows: true,
        infinite: true,
        // indicators: true,
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
              <p class="cap">
              <p style={{color:'greenyellow'}}>Ship of Theseus</p>
              </p>
          
          </div>
          <div className="each-slide">
  
              <img src={one} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Blue is the warmest color</p>
              Tale of Adele and her discovery of love with another girl called Emma depicts the beauty of lesbian relationships.
              
              Despite of consisting some very sensual scenes, in the end it feels really heavy in your heart.
              This film does an astounding job exploring the color blue as the color of lesbian love and the intricacies of it. 
              it gives you a totally different perception of relationship and love as we imagine. 
              It's always intreguing to experience something very different that who we are, and blue is the warmest color totally nails it there.
              </p>
              </div>
              
          <div className="each-slide">
              <img src={two} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Jojo Rabbit</p>

              </p>
          </div>
          <div className="each-slide">
           
              <img src={three} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Before Sunrise</p>While travelling on a train in Europe, 
              Jesse, an American man, meets Celine, a French woman. 
              On his last day in Europe before returning to the US,
               he decides to spend his remaining hours with her.</p>
          </div>
          <div className="each-slide">
        
              <img src={four} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Requiem for a dream </p>
              A disturbing masterpiece! Anatomy of obsession. 
              Revolving around the lives of four people being eaten by their addictions yet unable to pose any resistance.
              Each one of them is struggling with their own obsessions and insecurities. Each having their own delicate moments which is what makes them so real.
              Though it's a story of drugs on the surface, beneath it, it's a metaphor that symbolizes man's helplessness over his obsessions.
              This film takes this dreamlike experience to a whole nother level with its peculiar directions techniques and recurring montages.

               </p>  
          </div>
          <div className="each-slide">
        
              <img src={twelve} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Vicky Christina Barcelona</p>
              If you ever feel like you're out of your tribe and a sense of loneliness dwells inside of you, 
              the movie proves to be an excellent gateway.
              It revolves around Vicky and christia two best friends with completely different viewpoints towards life and their short trip to Barcelona,
              they're conflicted about right and wrong and we find many of the things relatable during the process of viewing this witty inspection of love.
              It dwells upon certain questions of existentialism, how we as a society function and hovers over potential answers, never really pointing at anything, just raising the possibilities


              </p>  
          </div>
          <div className="each-slide">
        
              <img src={five} class="sld" alt="Radja" />
              <p class="cap">Her</p>  
          </div>
          <div className="each-slide">
        
              <img src={six} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Dev D</p>
              Filled with immense cinematic beauty, Dev D recreates tragedy of Dev Das in a modern world.
              The tragedy of love and its unfulfillment. Dev trying to fill this void of of lonliness with intoxication, 
              wondering places to drown his sorrows after realising he lost his love(Paro). 
              His journey gives a very surreal experience to the viewers immesring them deeper and deeper into Dev's mind.
              Paro and Chanda both trying to save him from destroying himself develope their own tangles. 
              The striking songs, colorful shos along with edgy characters takes this film to a whole nother level.
              </p>  
          </div>
          <div className="each-slide">
        
              <img src={eleven} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Schindler's List</p>
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
              <p class="cap">
              <p style={{color:'greenyellow'}}>Perfect Blue</p>
              A nightmarish look at the duality between the person and the avatar. This film takes the concept of duality to next level.
              The film ties viewers with the characters and drag them along with the character's kafkaesque experiences.
              It pushes the viewers deeper and deeper into confusion as it proceeds.
              The line between real and dreams in blurred so much that it creates a sense of abstraction. 
              In the end when you you encounter how far someone can go in face of delution.
              Satoshi Kon makes a phenomenal dreamlike psychedilic masterpiece in a way you would never expect.
              </p>  
          </div>
          <div className="each-slide">
        
              <img src={eight} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Bohemian Rhapsody</p>
              Absolute brilliant film depicting the charisma of Freddie Mercury and Queen.
              The mindblowing visual experience of the film pulls you right in the world of Freddie.
              Rammy Malek takes method acting to the absolute peak. 
              We get a closer look of the good, the bad and ugly side of the Fredie Mercury. His sexuality and the controversies related to it.
              The glory and tregedy of the vintage rockstar's life leaves you with goosebumps and tears in eyes.
              </p>  
          </div>
          <div className="each-slide">
        
              <img src={ten} class="sld" alt="Radja" />
              <p class="cap">
              <p style={{color:'greenyellow'}}>Liberal Arts</p>
              One of the few film which makes you feel what does it mean to have a real connection. 
              Even the most mismatched people have some beautiful some things in common which makes their bond magical.
              {/* The beauty of relationships, the beauty of music and literature, this film gives all.  */}
              The tragedy of youth and not doing enough, the tragedy of old and missed opportunities goes hand in hand.
              Those who lie in between those have their own devastating experiences. 
              But eventually the characters can find some cure for their complications and probably that's the most realistic notion of happy endings.
              </p>  
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;