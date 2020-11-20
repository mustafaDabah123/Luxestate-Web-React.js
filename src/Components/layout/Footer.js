import React from 'react';
import './Footer.css'
/* -----Adds-Component----*/
function Footer () {
    return(
        <footer className="footer">
            <div className="container">
                <div className="info-footer d-flex justify-content-between align-items-center flex-wrap align-content-center">
                {/*------title and form ------*/}
                    <div className="title">
                        <h2>luxestate</h2>
                        <h2>Explore Real Estate</h2>
                    </div>
                    <form className="d-flex">
                        <input type='text' placeholder='subscribe to our newslettet'/>
                        <span><i className='fas fa-long-arrow-alt-right'></i></span>
                    </form>
                </div>
                {/*-------section-of-item------*/}
                    <div className='row'>
                        <div className='col-md-3'>
                            <h3>luxestate</h3>
                            <ul>
                                <li>Agents</li>
                                <li>Hunters</li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h3>company</h3>
                            <ul>
                                <li>about</li>
                                <li>FAQ</li>
                                <li>contact</li>
                                <li>Social</li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h3>producr</h3>
                            <ul>
                                <li>Appartments</li>
                                <li>How it Works</li>
                            </ul>
                        </div>
                        <div className='col-md-3 bottom'>
                            <h3>services</h3>
                            <ul>
                                <li>renting</li>
                                <li>selling</li>
                                <li>building</li>
                            </ul>
                        </div>
                    </div>
                    <p className="copy-right">© 2020 mustafa dabah</p>
                </div>
        </footer>
    )
}
export default Footer;