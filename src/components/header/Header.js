import React from 'react';
import './header.css'
const Header = (props) => {
    return (
        <div className="header">
           <img src={props.img} alt=""/>
           <h1>{props.heading}</h1>
        </div>
    );
};

export default Header;