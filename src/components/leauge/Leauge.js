import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./leauge.css"
import {BsBoxArrowInRight} from "react-icons/bs";
const Leauge = (props) => {
    const {strLeague,idLeague,strSport} = props.league
    const [leagueDetails,setleagueDetails] = useState([])

   useEffect(()=>{
     fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
     .then(resp => resp.json())
     .then(data=>setleagueDetails(data.leagues[0]))
   },[idLeague])
   const {strBadge}=leagueDetails
  // console.log(strBadge)

    return (
        <div className="col-md-4 col-sm-12 ">
        <Link style={{ textDecoration: 'inherit',color: 'white'}} to={`/leaguedetails/${idLeague}`}>
        <div className=" league-container">
        <div className="img-div">
        <img  src={strBadge} alt=""/>
        </div>
        
            <h3>{strLeague}</h3>
            <p>Sports Type: {strSport} </p>
            <button className="btn btn-primary btn-explore">Explore  <BsBoxArrowInRight/></button>
        </div>
        </Link>
        </div>
    );
};

export default Leauge;