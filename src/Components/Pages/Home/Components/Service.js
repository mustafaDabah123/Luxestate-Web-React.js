import React  from 'react';
import ServiceItem from './ServiceItem.js'
import './Service.css';

/* -----Service-Component----*/
function Service () {
    return (
       <section className="Service">
            <div className="container">
                <div className="info">
                    <h2 >Service</h2>
                    <p>In this space market-facing, yet UI work flows , or bake it in. Red flag we need a first agile at the end of the day. </p>
                </div>
                <div className='row'>
                    <div className="col-md-6"> 
                        <img src={'./images/service.jpg'} className='img-service'/>
                    </div>
                    <div className="col-md-6">
                        {/*-----ServiceItem-combonent-----*/}
                        <ServiceItem />
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Service ;