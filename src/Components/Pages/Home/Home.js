import React from 'react';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Appartments from './Components/Appartments.js';
import HowItWork from './Components/HowItWorks.js';
import Service from './Components/Service.js';
import Agents from './Components/Agents.js';
import Adds from './Components/Adds.js';

{/*-------Home page components-------*/}
function Home () {
    return (
            <>
        {/*--Header-Component--*/}
                <Header/>
        {/*--About-Component--*/}
                <About />
        {/*--Appartments-Component--*/}
                <Appartments />
        {/*--HowItWork-Component--*/}
                <HowItWork />
        {/*--Service-Component--*/}
                <Service />
        {/*--Agents-Component--*/}
                <Agents />
        {/*--Adds-Component--*/}
                <Adds />
            </>
    )
}
export default Home;