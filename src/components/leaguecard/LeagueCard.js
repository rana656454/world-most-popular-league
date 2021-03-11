import React from 'react';
import './leaguecard.css'
import maleImg from '../../image/Photo/male.png'
import femaleImg from '../../image/Photo/female.png'
import noImg from '../../image/Photo/noimage.png'
import malefemaleImg from '../../image/Photo/malefemale.jpg'

const LeagueCard = (props) => {
   
    
    console.log(props.information)
    const {strLeague,dateFirstEvent,strCountry,strSport,strGender} = props.information
     let img
    if(strGender==="Male"){
      img=<img src={maleImg} alt ="" />
    }
    else if(strGender==="Female"){
        img=<img src={femaleImg} alt ="" />
    }

    else if(strGender==="Mixed"){
        img=<img src={malefemaleImg} alt ="" />
    }

    else{
        img=<img src={noImg} alt ="" />
    }

    return (
        <div className="container league-card">
        <div className="row">
        <div className="col-md-7 col-sm-12">
           <div className="detail-info">
                <h2> {strLeague}</h2>  
                <br/>
                <h4>Founded: {dateFirstEvent}</h4>
                <h4>Country: {strCountry}</h4>
                <h4>Sports Type: {strSport}</h4>
                <h4>Gender: {strGender}</h4>
           </div>
        </div>
        <div className="col-md-5 col-sm-12">
              <div className="iconic-image">
                {img}
              </div>
       </div>
        </div>
            
        </div>
    );
};

export default LeagueCard;