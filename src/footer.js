import React from 'react-dom'
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <>  
            <div  id='foot'>
                <div class='col' style={{paddingLeft:'30px'}}>

        
                <h4>
                    <Link to='/movies' class='lnk'>
                    <i class="fas fa-film"/> Movies
                    </Link>
                </h4>    
                <h4>
                    <Link to='/quotes' class='lnk'>
                    <i class="fas fa-quote-left"/> Directors
                    </Link>
                </h4>    
                <h4>
                    <Link to='/random' class='lnk'>
                    <i class="fas fa-dice"/> Random movies
                    </Link>
                </h4>
                <h4>
                    <Link to='/add' class='lnk'>
                    <i class="fas fa-file-upload"/> Add movies
                    </Link>
                </h4>
                    
                </div>
                <div class='col' style={{ textAlign:'center'}}>
                    <h3 style={{border: '3px white solid', padding:'25px', margin:'auto', margin:'15px'}}>Developed by Nikhil Betke</h3>
                    <h3>
                        <Link to='/' class='lnk'>
                                <i class="fas fa-home"/> Home
                        </Link>
                    </h3>
                </div>
                
                <div id='social' class='col'>
                    <i class="fab fa-facebook" style={{margin:'12px', cursor:'pointer'}}/>
                    <i class="fab fa-instagram" style={{margin:'12px', cursor:'pointer'}}/>
                    <i class="fab fa-discord" style={{margin:'12px', cursor:'pointer'}} />
                </div>
                
            </div>
            
        </>
    )   
}
export default Footer