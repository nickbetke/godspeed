import React, { useEffect } from 'react'
import Chead from './Chead'
import pnt from './image/brick.jpeg'
import Footer from './footer'
const Quotefull = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return(
        <>
        <div style={{background:'URL(' + pnt + ')', backgroundSize:'130px'}}>
            <Chead bg='rgba(38, 38, 38, 1)'/>
            <h1 id='qh1' style={{background: 'linear-gradient(to right, cyan, #3f5efb)', borderBottom:'8px white solid'}}>Quotes from the Great</h1>

            <div class="d-flex justify-content-center" style={{ padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“A film is - or should be - more like music than like fiction. 
                It should be a progression of moods and feelings. 
                The theme, what's behind the emotion, the meaning, all that comes later.”
                </h5>
                <h4 class="capt"> Stanley Kubrick</h4>
            </div>
            <div class="text-card2">
                <h5>
                “Never try to convey your idea to the audience - it is a thankless and senseless task.
                 Show them life, and they’ll find within themselves the means to assess and appreciate it.”
                 </h5>
                <h4 class="capt"> Andrei Tarkovsky
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “No critic writing about a film could say more than the film itself,
                 although they do their best to make us think the oppposite.”
                 </h5>
                <h4 class="capt"> Federico Fellini
                </h4>
            </div>
            
            <div class="text-card2">
                <h5>
                “If you look at a dream overall, it's very difficult to discern the meaning. 
                However, as time goes on, there might be certain meanings in the background.”
                </h5>
                <h4 class="capt"> Satoshi Kon
                </h4>
            </div>
        </div>    
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“Most of my films deal with people who are stuck in certain routines and habits that don't make them happy. 
                    They want to change, but they need something to push them.
                     I think it's mostly love that causes them to break their routines and move on.”
                </h5>
                <h4 class="capt"> Wong Kar-Wai</h4>
            </div>
            <div class="text-card2">
                <h5>
                “For me, filmmaking combines everything. That’s the reason I’ve made cinema my life’s work. 
                In films, painting and literature, theatre and music come together. But a film is still a film.”
                 </h5>
                <h4 class="capt"> Akira Kurosawa
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “When violence is real and you flinch away from it. 
                Often, we shun the violence that makes us flinch, because it disturbs us. 
                And what makes us uncomfortable and disturbs us is not often bad. What disturbs us will not make us imitate that.”
                 </h5>
                <h4 class="capt"> Anurag Kashyap
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “I love the idea of thinking of cinema as not that far from music.
                 A lot of my favourite movie makers, the way they move their cameras or
                  the way they cut just feel very musical - even if the movies have no music in them at all.”
                </h5>
                <h4 class="capt"> Damien Chazelle
                </h4>
            </div>
        </div>    
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“Film as dream, film as music.
                     No art passes our conscience in the way film does, and goes directly to our feelings, 
                     deep down into the dark rooms of our souls.”
                </h5>
                <h4 class="capt">  Ingmar Bergman</h4>
            </div>
            <div class="text-card2">
                <h5>
                “I've always wanted to introduce hip-hop filmmaking to film. 
                There's hip-hop art, dance, music, but there really isn't hip-hop film. So I was trying to do that.
                ”
                 </h5>
                <h4 class="capt"> Darren Aronofsky
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “I have a complex feeling about genre. I love it, but I hate it at the same time.
                 I have the urge to make audiences thrill with the excitement of a genre,
                 but I also try to betray and destroy the expectations placed on that genre.”
                 </h5>
                <h4 class="capt"> Bong Joon-ho
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “Words are cheap. The biggest thing you can say is 'elephant'”
                 </h5>
                <h4 class="capt">Charlie Chaplin
                </h4>
            </div>
            
        </div> 
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“I think cinema, movies, and magic have always been closely associated.
                     The very earliest people who made film were magicians.”
                </h5>
                <h4 class="capt">  Francis Ford Coppola</h4>
            </div>
            <div class="text-card2">
                <h5>
                “The cinema is not a craft. It is an art. It does not mean teamwork. One is always alone on the set as before the blank page.
                 And to be alone... means to ask questions. And to make films means to answer them.”
                 </h5>
                <h4 class="capt"> Jean-Luc Godard
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “See. The whole concept of love is
                much more complex. Love’s like God
                or something: It’s everywhere...I
                see it, I feel it, but I don’t know
                if another person is going to hand
                it to me.”
                 </h5>
                <h4 class="capt"> Richard Linklater
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “The problem with the screenplay is that it's not literature, and it's not a film. It's a very weird, 
                technical kind of blueprint that will be absolutely transformed into something else that is not that, 
                you know? Honestly, a screenplay is no literature.”
                </h5>
                <h4 class="capt"> Alejandro Inarritu
                </h4>
            </div>
        </div> 
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“To me, a story can be both concrete and abstract, or a concrete story can hold abstractions. 
                    And abstractions are things that really can't be said so well with words.”
                </h5>
                <h4 class="capt">  David Lynch</h4>
            </div>
            <div class="text-card2">
                <h5>
                “All my films hinge on the fantastic. I'm not a documentarian; 
                a film is first and foremost a dream, and it's absurd to copy life
                 in an attempt to produce an exact recreation of it.
                 Transposition is more or less a reflex with me.”
                 </h5>
                <h4 class="capt"> Jean-Pierre Melville
                </h4>
            </div>
           
            <div class="text-card2">
                <h5>
                “Man as an individual is a genius. But men in the mass form the headless monster,
                 a great, brutish idiot that goes where prodded.”
                </h5>
                <h4 class="capt"> Charlie Chaplin
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “Dialogue should simply be a sound among other sounds,
                 just something that comes out of the mouths of people whose eyes tell the story in visual terms.”
                </h5>
                <h4 class="capt"> Alfred Hitchcock
                </h4>
            </div>
        </div> 
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“I think it is very important that films make people look at what they've forgotten.”
                </h5>
                <h4 class="capt"> Spike Lee
                </h4>
            </div>
            
            <div class="text-card2">
                <h5>
                “Every film should have its own world, a logic and feel to it that expands beyond
                 the exact image that the audience is seeing.”
                 </h5>
                <h4 class="capt"> Christopher Nolan
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “The artist is the medium between his fantasies and the rest of the world.”
                </h5>
                <h4 class="capt"> Federico Fellini
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “I demand that a film express either the joy of making cinema or the agony of making cinema. 
                I am not at all interested in anything in between; I am not interested in all those films that do not pulse.”
                </h5>
                <h4 class="capt"> François Truffaut
                </h4>
            </div>
        </div>
        <div class="d-flex justify-content-center" style={{padding:'20px 90px'}}>
            <div class="text-card2">
                <h5>“My characters are never heroic. They are mostly lost and trying to find the right door 
                    to open and they end up opening the wrong doors.”
                </h5>
                <h4 class="capt"> Gaspar Noe
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “Usually when I'm making a movie, what I have in mind first, for the visuals, 
                is how we can stage the scenes to bring them more to life in the most interesting way,
                and then how we can make a world for the story that the audience hasn't quite been in before.”
                 </h5>
                <h4 class="capt"> Wes Anderson
                </h4>
            </div>
           
            <div class="text-card2">
                <h5>
                “Cinema’s characteristic forte is its ability to capture and communicate the intimacies of the human mind.”
                </h5>
                <h4 class="capt"> Satyajit Ray
                </h4>
            </div>
            <div class="text-card2">
                <h5>
                “Now more than ever we need to talk to each other, 
                to listen to each other and understand how we see the world, and cinema is the best medium for doing this.”
                </h5>
                <h4 class="capt"> Martin Scorsese
                </h4>
            </div>
        </div> 
        </div>
        <Footer/>
        </>
    )
}
export default Quotefull;