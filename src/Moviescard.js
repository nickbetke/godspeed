import React, { Component } from 'react'

export default class MovieCard extends Component{
    render(){
        return(
            
                <div class='grid-item'>
                    <h4> {this.props.name} </h4>
                    <h5>Year: { this.props.year}</h5>
                    <h5>Director: { this.props.director}</h5>
                    <h5>Time: {parseInt(this.props.time /60) }h {this.props.time %60 }m</h5>
                    <h5>Rating: { this.props.rating}</h5>
                </div>
            
        )
    }
    
}