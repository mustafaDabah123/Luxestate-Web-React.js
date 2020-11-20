import React , { useState, useEffect} from 'react';
import axios from "axios";
/* -----AgentsItems-Component----*/
function AgentsItems () {
    const [agents , setAgents] = useState([]);
    /*---get data from json---*/
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{
            setAgents(res.data.Agents)
        })
    },[])  ;
    /*-----agentsItem-combonent-----*/
    const agentsItem = agents.map(el=>{
        return (
                <div className='col-md-4' key={el.id}>
                        <div className='card'>
                            <img src={el.img} className='img-card'/>
                            <h3>{el.title}</h3>
                            <div className="details d-flex justify-content-around">
                                <h4>{el.name}</h4>
                                <div className="d-flex icons-social">
                                     <p><i className='fas fa-phone'></i>  </p>      
                                     <p><i className='fab fa-facebook'></i></p>      
                                     <p><i className='fab fa-twitter'></i></p>      
                                </div>
                            </div>
                        </div>
                    </div>            
        )
    })
    return (
        <>
            {/*-----agentsItem-combonent----*/}
            {agentsItem}
        </>
    )
}
export default AgentsItems