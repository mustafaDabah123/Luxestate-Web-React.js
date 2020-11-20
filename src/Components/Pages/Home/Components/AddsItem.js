import React , { useState, useEffect} from 'react';
import axios from "axios";
/* -----AddsItem-Component----*/
function AddsItem () {
    const [adds , setAdds] = useState([]);
    /*---get data from json---*/
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{
            setAdds(res.data.Adds)
        })
    },[])  ;
    /*---addsItem---*/
    const addsItem = adds.map(el=>{
        return (
            <div className="row justify-content-center align-items-center row-adds" key={el.id}>
                <div className="col-md-6" >
                    <img src={el.img} className='img-adds'/>
                </div>
                <div className="col-md-6 info-adds">
                    <h3>{el.title}</h3>
                    <p>{el.pargarph}</p>
                </div>
            </div>
        )
    });
    return (
        
    <>
        {/*------addsItem-------*/}
        {addsItem}
    </>
    
    )
    
}

export default AddsItem