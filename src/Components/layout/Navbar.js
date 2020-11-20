import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
/* -----Navbar-Component----*/
function Navbar () {
    /*------data--------*/
    const [click , setClick] = useState(false);
    const [active , setActive] = useState(false);
    /*-----handleActive--*/
    const handleActive = () => {
        setActive(!active);
        setClick(!click)
    }
        return (
        <>
          <nav>
                <div className="container d-flex justify-content-between align-items-lg-center">
                    {/*-------logo and toggle-------*/}
                      <div className='logo d-flex justify-content-between align-items-start'>
                            <Link to='/'>luxestate</Link>
                            <div className='menu-icon'  onClick={handleActive}>
                                    <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
                            </div>
                      </div>
                     {/*-------list items -------*/}
                      <ul className={active ? 'active d-flex list-unstyled ': 'd-flex list-unstyled' } >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Appartments">Appartments</Link></li>
                            <li><Link to="/Agents">Agents</Link></li>
                            <li><Link to="/ContactUs">Contact Us</Link></li>
                      </ul>
                      {/*-------sign up -------*/}  
                      <div className='contact-nav d-flex'>
                            <div className="join-us"><Link to='/'>Join Us</Link></div>
                            <button>Getting Started </button>
                      </div>
                </div>   
          </nav>
        </>    
        )
}
export default Navbar;