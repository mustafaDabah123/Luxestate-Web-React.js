import React , { useState, useEffect} from 'react';
import axios from 'axios';
import './About.css';

/* -----About-Component----*/
function About () {
    
    const [info , setInfo] = useState([]);
    const [client , setClient] = useState([]);
    /*---get data from json---*/
    useEffect(()=>{
        axios.get('js/data.json').then((res)=>{
             setInfo(res.data.aboutInfo);
        });
        axios.get('js/data.json').then((res)=>{
             setClient(res.data.aboutClient)
        });
        
    } , [])
    /*-----aboutInfo-combonent-----*/           
    const aboutInfo = info.map(el=>{
        return(
            <div key={el.id}>
                    <p>{el.Pone}</p>
                    <p>{el.ptwo}</p>
            
            </div>
            
            )});
    /*----aboutClient-combonet----*/
    const aboutClient=client.map(el=>{
        return (        
                <div className="client-info" key={el.id}>
                    <h3>{el.number}</h3>
                    <h4>{el.text}</h4>
                </div>        
        )
    })
 
    return (
     <div>
        <section className="about">
              <div className="container">
                    <div className="row">
                        <div className="col-md-6 info-about">
                            <h2>Our’s Company </h2>
                            <h2>Statis</h2>
                            {/*-----aboutInfo-combonent----*/} 
                              {aboutInfo}
                        </div>
                        <div className="col-md-6 d-flex justify-content-around align-items-center flex-wrap align-content-center">
                        {/*----aboutClient-combonet----*/}
                              {aboutClient}
                        </div>
                   </div>
              </div>
        </section>
    </div>
    
    )
}
export default About ;