import React from 'react';
import './Header.css'
/* -----Header-Component----*/
function Header () {
    return (
      <div className="header">
            <div className='container'>
                <div className="hero-text d-flex flex-column justify-content-center align-items-start ">
                    <h1>Find Your New  Moder</h1>
                    <form className='d-flex main-form'>
                       <input type='text' placeholder='search location '/>
                       <span><i className="fas fa-search"></i></span>
                    </form>
                    <p className='arrow-text'><i className="fas fa-long-arrow-alt-left"></i> Scroll Down</p>
                    <div className='info-header d-none d-md-flex'>
                        <p><i className='fas fa-phone'></i> : +555 555 555 </p>
                        <p><i className="fas fa-map-marker"></i> : Melbourne,Australia</p>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default Header;