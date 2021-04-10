import React from 'react'
import bgd from './image/directors.jpg'
import { Link } from "react-router-dom";
const Quote = () => {
    return(
        <>
    <div class="third" style={{backgroundImage:"url(" + bgd + ")", paddingBottom:'20px'}}>
            <div class="text-card">
                <h4>“A film is - or should be - more like music than like fiction. 
                It should be a progression of moods and feelings. 
                The theme, what's behind the emotion, the meaning, all that comes later.”
                <br/>― Stanley Kubrick</h4>
            </div>
            <div class="text-card">
                <h4>
                “Never try to convey your idea to the audience - it is a thankless and senseless task.
                 Show them life, and they’ll find within themselves the means to assess and appreciate it.”
                <br/>― Andrei Tarkovsky
                </h4>
            </div>
            <div class="text-card">
                <h4>
                “Every film should have its own world, a logic and feel to it that expands beyond
                 the exact image that the audience is seeing.”
                 <br/>― Christopher Nolan
                </h4>
            </div>
        </div>    
        <div class="third" style={{backgroundImage:"url(" + bgd + ")", paddingTop:'20px'}}>   
            <div class="text-card">
                <h4>
                “Filmmaking encompasses everything ... [from] being painfully honest,
                 unbelievably deceitful, and everything in between.”
                 <br/>― David Fincher
                </h4>
            </div>
            <div class="text-card">
                <h4>
                “Cinema’s characteristic forte is its ability to capture and communicate the intimacies of the human mind.”
                 <br/>― Satyajit Ray
                </h4>
            </div>
            <div class="text-card">
                <h4>
                “Movies touch our hearts and awaken our vision, and change the way we see things.
                 They take us to other places, open doors and minds. 
                 Movies are the memories of our life time.”
                 <br/>― Martin Scorsese
                </h4>
            </div>
            </div>
            <Link to="/quotes">
                <button id="more">More <i class="fas fa-chevron-circle-down"/></button>
            </Link>
    </>
    )
    
}
export default Quote;