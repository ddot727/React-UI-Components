import React from 'react';
import './Card.css';

const CardContent = () =>{
    return (
        <div className = 'card-content'>
            <h3>Get Started With React</h3>
            <p>React makes it painless to creat interactive UIs. Design simple views for each state in you application.</p>
            <p className = 'link'>reactjs.org</p>
        </div>
    )
}

export default CardContent;