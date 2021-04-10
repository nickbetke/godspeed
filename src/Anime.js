import React, { useEffect, useState } from 'react'
import fdb from './firebase'
import { async } from 'q'
const Anime = () => {
        const [flist, setFlist]= useState([])
        const [fz, setFz] = useState(true)
        const fr = () =>{
            setFz(true)
            flist.sort((a,b)=>a.year>b.year?1:-1)
        }
        const fr2 = () =>{
            setFz(true)
            flist.sort((a,b)=>a.name>b.name?1:-1)
        }
        const fr3 = () =>{
            setFz(true)
            flist.sort((a,b)=>a.time>b.time?1:-1)
        }
        const ff = async() => {
            await fdb.child('films').get().then(fx => {
                if(fx.exists()){
                    try{
                        let fl = []
                        fx.forEach(f =>{
                            let tmp = f.val()
                            fl.push(tmp)
                        })
                        // fl.sort((x,y)=>x.name>y.name?1:-1)
                        setFlist(fl)
                    }
                    catch{
                        console.log('didn\'t work')
                    }
                }
            }).catch(err => console.log(err))
        }
        useEffect(() => {
                // fdb.child('films').orderByChild('year').on('value',function(sn){
                //     setFlist([])
                //     if(sn.val()){
                //         sn.forEach( (snc) =>{
                //             let tmp = snc.val()
                //             flist.push(tmp)
                //         })
                //         setFlist(flist)
                //         console.log(flist)
                //     }
                // })

                

                if(fz){
                    ff()
                    setFz(false)  
                }
                console.log('end')
                
        },[flist])
        return(
            <>
                <div class="bdy">
                    <section>
                        <button onClick={()=>{fr()}}>Sort by Year</button>
                        <button onClick={()=>{fr2()}}>Sort by Name</button>
                        <button onClick={()=>{fr3()}}>Sort by Time</button>
                        <h1>Sorted Movies </h1>
                        <div class="content">
                    <table style={{padding:'15px', margin:'0 auto'}}>
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
                        {  flist &&                       
                            flist.map(fl =>{
                                return <tr>
                                    <td> {fl.name} </td>
                                    <td> {fl.year} </td>
                                    <td> {fl.director} </td>
                                    <td> {parseInt(fl.time /60) }h {fl.time % 60 }m </td>
                                    <td> {fl.rating} </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>          
                        </div>
                    </section>
                </div>
                
            </>
        )
    }
export default Anime