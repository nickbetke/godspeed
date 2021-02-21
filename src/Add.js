import React from 'react'

const Add = () =>{
    return( 
            <div class='addbox'>
            <br/>
            <div class='ad'>
                <br/>
                <h1 style={{fontWeight:'bold'}}>Add Movies</h1><br/>
                <input type="text" id="fname" placeholder="Name"/><br/>
                
                <input type="text" id="fyear" inputmode="numeric" placeholder="Year"/><br/>
                
                <input type="text" id="fdir" placeholder="Director"/><br/>
                
                <input type="text" id="ftime" inputmode="numeric" placeholder="time in minutes"/><br/>
                
                <input type="text" id="frate" inputmode="numeric" placeholder="Rating"/><br/>
                <button class='btn btn-primary' style={{display:'flex', margin:'auto', fontWeight:'bold'}}>Add film</button>
            </div>
        </div>
    )
}
export default Add;