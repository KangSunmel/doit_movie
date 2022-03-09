import React from 'react';
import './About.css';

function About(props){
console.log(props);
    return(
        <div className='about__container'>
            <span>
                "Freedom is the Freedom to say that two plus two make four. if that os granted, all else follows."
            </span>
            <br/>
            <span>-George Orwell, 1984</span>
        </div>
    );
}

export default About;