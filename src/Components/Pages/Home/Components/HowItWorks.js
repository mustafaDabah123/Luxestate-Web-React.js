import React  from 'react';
import './HowItWorks.css';
import HowItWorksItems from './HowItWorksItems.js'

/* -----HowItWork-Component----*/
function HowItWork () {
    return (
       <section className="HowItWork">
           <div className="container">
                <div className="info">
                    <h2 >How It Work ? </h2>
                    <p className="p-info">In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. </p>
                </div>
                <div className="row ">
                {/*-----HowItWorksItems-combonent-----*/}
                     <HowItWorksItems />
                </div>
           </div>
       </section>
    )
}

export default HowItWork