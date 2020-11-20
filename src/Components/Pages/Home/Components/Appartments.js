import React , { useState, useEffect} from 'react';
import AppartmentsItems from './AppartmentsItems.js'
import './Appartments.css';

/* -----Appartments-Component----*/
function Appartments () {
    return (
    
        <section className="Appartments">
            <div className="container">
                <div className="info">
                    <h2>More Then 500+</h2>
                    <h2>Appartments For Rent </h2>
                </div>
                <div className="row"> 
                    {/*-----agentsItem-combonent----*/}
                      <AppartmentsItems />
                      <div className="last-info d-flex justify-content-around flex-wrap align-content-left">
                            <form className='d-flex main-form'>
                                <input type='text' placeholder='search location '/>
                                <span><i className="fas fa-search"></i></span>
                            </form>
                            <p>view all Appartments</p>
                      </div>
                </div>
            </div>
        </section>
        
    )
}
export default Appartments