import React from 'react'
import one from './image/Bluewarm2.jpg'
import two from './image/bluewarm3.jpg'
import three from './image/before.jpg'

const Slide = () =>{
    return(
        <>
            <h3>Slide</h3>
            <div class="slidecon">
                {/* <div class="slidebox"> */}
               <input type="radio" name="rad" id="r1"/>
                <input type="radio" name="rad" id="r2"/>
                <input type="radio" name="rad" id="r3"/>
                
                {/* <br/> */}
                <div class="slide first">
                    <img src={one} class="sld" alt="Radja" />
                    <p class="cap">caption 1</p>
                
                </div>
                
                <div class="slide">
                    <img src={two} class="sld" alt="Radja" />
                    <p class="cap">caption 2</p>
                </div>
                <div class="slide">
                    <img src={three} class="sld" alt="Radja" />
                    <p class="cap">caption 3</p>
                </div>
                
                {/* </div> */}
                {/* <div class="nav">
                    <label for="r1" class="mbtn"/>
                    <label for="r2" class="mbtn"/>
                    <label for="r3" class="mbtn"/>
                </div> */}
            </div>
            
        </>
    )
}
export default Slide;