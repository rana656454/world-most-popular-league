import React from 'react';
import './paragraph.css'
const Paragraph = (props) => {
    return (
        <div className="container paragraph" >
            <h2>{props.headertitle}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default Paragraph;