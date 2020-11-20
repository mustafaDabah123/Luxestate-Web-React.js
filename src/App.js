import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom' ;
import './App.css';
import Navbar from './Components/layout/Navbar.js';
import Footer from './Components/layout/Footer.js';
import Home from './Components/Pages/Home/Home.js'


class App extends React.Component {
     render () {
         
          return (
              
            <Router>
              {/*----navebar-component----*/}
               <Navbar />
                   <Switch>
                    {/*----Home-component----*/}
                     <Route path='/' exact component={Home} />
                   </Switch>
              {/*----Footer-component----*/}
                <Footer />
            </Router>
              
              
              
              
                );
            }
        }
export default App;
