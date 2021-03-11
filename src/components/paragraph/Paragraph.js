import React from 'react';
import './paragraph.css'
const Paragraph = (props) => {
    let content = props.content
    if(content===null || content===""){
       content = "No Details(Text) Found"  
    }
    return (
        <div className="container paragraph" >
            <h2>{props.headertitle}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Paragraph;