import React, { useEffect, useState } from 'react'
import Chead from './Chead'
import fdb from './firebase'
import Footer from './footer'
import footer from './footer'
const Random = () =>{
    const [films, setFilms] = useState([]);
    const [load, setLoad] = useState(true)
    const [a, setA] = useState('King');
    const [b, setB] = useState('Queen');
    const [c, setC] = useState('Jack');
    const [f, setF] = useState(false);
   
    const handle1 = async () =>{
        document.getElementById('randn1').classList.add('plus')
        document.getElementById('randn2').classList.add('plus')
        document.getElementById('randn3').classList.add('plus')
        await fdb.child('films').get().then(  
            function(snapshot) {
                if(snapshot.exists()){
                    setFilms(snapshot.val())
                    try{
                        setA(films[Object.keys(films)[Math.floor(Math.random() * 242)]].name)
                        setB(films[Object.keys(films)[Math.floor(Math.random() * 242)]].name)
                        setC(films[Object.keys(films)[Math.floor(Math.random() * 242)]].name)
                    }
                    catch{
                        console.log('undefined !')
                    }
                    
                }
                else{
                    console.log('errorXD')
                }
            }
        ).catch(function(error) {
            console.error(error);
        })
        setTimeout(() => {  
            document.getElementById('randn1').classList.remove('plus')
            document.getElementById('randn2').classList.remove('plus')
            document.getElementById('randn3').classList.remove('plus')
        }, 3000);
        
    }
    useEffect(() =>{
        }
    )
    return(
        <>
        <div style={{background:'rgba(242, 242, 242,0.8)', height:'49vmax'}}>
            <Chead bg='rgba(38, 38, 38, 1)'/>
            <h1 id='qh1'>Random suggestions for Movies
    
            </h1>
        
            <button id='addf' onClick={handle1} style={{display:'flex', border:'3px cobaltblue solid', margin:'10px auto',background:'white', padding:'10px', borderRadius:'10px', color:'#00cccc'}}>Generate Random Movies</button>
            <div className='container' style={{border:'5px cornflowerblue dashed', padding:'25px', background:'white', width:'800px', display:'flex'}}>
                <div class='randm' id='randn1'>
                    <p>{a}</p>
                </div>
                <div className='randm' id='randn2'>
                    <p>{b}</p>
                </div>
                <div className='randm' id='randn3'>
                    <p>{c}</p> 
                </div>
               
            </div>

        </div>
        <Footer/>
        </>
    )
}
export default Random