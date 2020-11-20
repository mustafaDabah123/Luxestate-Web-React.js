import React  from 'react';
import AgentsItems from './AgentsItem.js'
import './Agents.css';

/* -----Agents-Component----*/
function Agents () {
    return (
        <section className="agents">
            <div className='container'>
                <div className="info">
                    <h2>Meet Our Agents</h2>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a first agile at the end of the day. </p>
                </div>
                <div className="row">
                    {/*-----agentsItem-combonent----*/}        
                    <AgentsItems/>
                </div>
            </div>
        </section>
    )
}
export default Agents