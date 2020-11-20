import React , { useState, useEffect} from 'react';
import axios from "axios";

/* -----ServiceItem-Component----*/
function ServiceItem () {
    const [serviceItem , setserviceItem] = useState([]);
    /*---get data from json---*/
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{
            setserviceItem(res.data.Service)
        })
    },[])  ;
    /*---items---*/
    const items = serviceItem.map(el=>{
        return (
           <div className="info-service" key={el.id}>
               <h3>{el.title}</h3>
               <p>{el.pargraph}</p>    
           </div>
        )
    })    
    return (
        <>
           {/*---items---*/}
           {items}
        </>
    )
}
export default ServiceItem