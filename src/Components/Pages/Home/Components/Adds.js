import React  from 'react';
import AddsItem from './AddsItem.js'
import './Adds.css';
/* -----Adds-Component----*/
function Adds () {
    return (
    
        <section className="adds">
            <div className='container'>
                    {/*------AddsItem-------*/}
                    <AddsItem />
            </div>
        </section>
        
    )
}
export default Adds