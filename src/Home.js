import React from 'react'

import Chead from './Chead'
import bg from './image/2001.jpg'
import Slideshow from './Slide2'
const Home = () => {
    return(
        <>
        <div id="back" style={{backgroundImage:"url(" + bg + ")"}}>
            
        <Chead/>
        <div id="intro">
            
                In the world of Cinema, we are mere watchers who seek some deeper meanings, some greater perspectives in cinema. 
                But first, what is Cinematography? Defining the Art and Craft
                Making films isn’t just an art. It takes years of practice to cultivate a consistent craft and keen eye for filmmaking. 
                It’s what separates great cinematography from cliche movie making. You’ve probably heard the term a million times, 
                but what is cinematography? Before honing a craft, a deep knowledge of what it entails is critical.
        
        </div>
        <br/><br/>
        <Slideshow/>
            <div class="card">
                <h2 style={{textAlign:'center'}}>Film of the day</h2> 
            </div>
        </div>

        

        </>
    )
}
export default Home;