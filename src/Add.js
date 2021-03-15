import React from 'react'
import { useState, useEffect } from 'react'
import fdb from './firebase'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () =>{
    const f = {
        name:'',
        year:'',
        director:'',
        time:'',
        rating:''
    }
    toast.configure();
    const handleFilm = () => {
        f['name'] = document.getElementById('fname').value;
        f['year'] = document.getElementById('fyear').value;
        f['director'] = document.getElementById('fdir').value;
        f['time'] = document.getElementById('ftime').value;
        f['rating'] = document.getElementById('frate').value;
        console.log(f);
        fdb.child('films').push(
            f,
            err => {
                if(err){
                    console.log(err)
                }
            }
        );
        document.getElementById('fname').value = '';
        document.getElementById('fyear').value = '';
        document.getElementById('fdir').value = '';
        document.getElementById('ftime').value = '';
        document.getElementById('frate').value = '';
        toast('Saved ' + f['name']);
    }
    return( 
            <div class='addbox'>
            <br/>
            <div class='ad'>
                <br/>
                <h1 style={{fontWeight:'bold'}}>Add Movies</h1><br/>
                <input type="text" id="fname" placeholder="Name" autoFocus={true} /><br/>
                
                <input type="text" id="fyear" inputmode="numeric" placeholder="Year"/><br/>
                
                <input type="text" id="fdir" placeholder="Director"/><br/>
                
                <input type="text" id="frate" inputmode="numeric" placeholder="Rating"/><br/>
                
                <input type="text" id="ftime" inputmode="numeric" placeholder="Time in minutes"/><br/>
                
                <button id='addf'class='btn btn-primary' onClick={handleFilm} style={{display:'flex', margin:'auto'}}>Add film</button>
            </div>
        </div>
    )
}
export default Add;