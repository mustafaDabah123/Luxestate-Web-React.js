import React , { useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'

/* -----HowItWorksItems-Component----*/
function HowItWorksItems () {
    const [item , setItem ] = useState([]);
    /*---get data from json---*/
    useEffect(()=>{
        axios.get('js/data.json').then(res => {
            setItem(res.data.HowItWork);
        })
    } , [])
    /*-----cardItem-combonent-----*/
    const cardItem = item.map(el =>{
        return (
              <div className="col-md-4 Items" key={el.id}>
                        <div className="card-how-work">
                            <div className="number">
                                <h2>{el.number}</h2>
                            </div>
                            <div className="info-how-work">
                                <h3>{el.title}</h3>
                                <p>{el.pargraph}</p>
                                <Link to='/'>{el.link}</Link>
                            </div>
                        </div>
                    </div>            
            )
    })
    return (    
        <>
        {/*-----cardItem-combonent-----*/}
           {cardItem}
        </>  
    )
    
}
export default HowItWorksItems ;