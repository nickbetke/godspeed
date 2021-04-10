import React, {useEffect, useState} from 'react'
import Chead from './Chead'
import pnt2 from './image/brick4.jpg'
import fdb from './firebase'
import MovieCard from "./Moviescard";
import Footer from './footer'
const Movies = () =>{
    
    const [films, setFilms] = useState([]);

    useEffect(() => {
        // const qr = fdb.child('films').orderByChild('year').get()
        // qr.on('value', f2 => {
        //     if(f2.val() != null){
        //         setFilms(f2.val())
        //     }
        // })
        fdb.child('films').get().then(function(snapshot) {
            if(snapshot.exists()){
                setFilms(snapshot.val())
            }
        })
        // fdb.child('films').on('value', fetchfilms => {
        //     if(fetchfilms.val() != null){
        //         setFilms(fetchfilms.val());
        //     }
        // })
    })
    return(
        <>
            <Chead bg='rgba(38, 38, 38, 1)'/>
            <h1 id='qh1' style={{background: 'linear-gradient(to right, cyan, yellow)'
                
	}}>Movies</h1>
            <div style={{width:'100%' , background:'URL(' + pnt2 + ')', backgroundSize:'400px', padding:'20px 90px'}}>
                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Time</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(films).map(id =>{
                                return <tr>
                                    <td> {films[id].name} </td>
                                    <td> {films[id].year} </td>
                                    <td> {films[id].director} </td>
                                    <td> {films[id].time} </td>
                                    <td> {films[id].rating} </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> */}
                {
                    Object.keys(films).map(id => {
                        return (
                            <MovieCard name={films[id].name} year={films[id].year} director={films[id].director} time={films[id].time} rating={films[id].rating}/>
                        )
                    })
                }
            </div>
            <Footer/>
        </>
    )
}
export default Movies;