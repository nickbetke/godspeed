import React from 'react'
import { useEffect } from 'react'
import Chead from './Chead'
import bg from './image/2001.jpg'
import Slideshow from './Slide2'
import Quote from './Quote'
import Footer from './footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    window.addEventListener('scroll', reveal);
    function reveal(){
        try {
            
        const rev = document.querySelectorAll('.third');
        const wheight = window.innerHeight;
            const revtop = rev[0].getBoundingClientRect().top;
            if(revtop < wheight - 150){
                rev[0].classList.add("active");
                rev[1].classList.add("active");
            }
            else{
                rev[0].classList.remove("active");
                rev[1].classList.remove("active");
            } 
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <>
        <div id="back" style={{backgroundImage:"url(" + bg + ")"}}>
            
        <Chead bg='rgba(20, 20, 20, 0.4)'/>
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
        <h2 id="q">Quotes from the Great</h2>
         <Quote/>   
        <Footer/>
        </div>
        

        </>
    )
}
export default Home;