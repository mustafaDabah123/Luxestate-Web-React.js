import React , { useState, useEffect} from 'react';
import axios from "axios";
/* -----AppartmentsItems-Component----*/
function AppartmentsItems () {
    const [card , setCard ] = useState([]);
    /*---get data from json---*/    
    useEffect(() =>{
        axios.get('js/data.json').then((res)=>{
            setCard(res.data.appartmentsItems);
        })
        
    } , [])
    /*---cardItem---*/
    const cardItem = card.map(el =>{
        return (
              <div className="col-md-4" key={el.id}>
                 <div className="card">
                     <img src={el.img} className="img-card" />
                     <h3>{el.header}</h3>
                     <div className="details d-flex justify-content-around">
                         <h4>{el.price}</h4>
                         <div className="d-flex">
                             <p className="mr-2"><i className='fas fa-phone'></i> 2 BA </p>      
                             <p><i className='fas fa-phone'></i> 2 BD </p>      
                         </div>
                    </div>
                </div>
            </div>
        
        )
    })
    
    return (
        
        <>
          {/*---cardItem---*/}
          {cardItem}
        </>
       
    )
}

export default AppartmentsItems