import React, { Component } from 'react'

export default class Tmp extends Component{
    render(){
        function xd(){
            document.getElementById('tmp').classList.add('plus')
        }
        function xd2(){
            document.getElementById('tmp').classList.remove('plus')
        }
        return(
            <>
            <button onClick={xd}>flip</button>
            <button onClick={xd2}>flip2</button>
            <h2>Tmp</h2>
                <div id='tmp' class='t' style={{width:'100px', height:'100px', border:'1px pink solid'}}></div>
            </>
        )
    }
}