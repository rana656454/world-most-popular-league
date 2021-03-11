import React,{useState,useEffect} from 'react';
import './leaguedetails.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
import {FaTwitterSquare } from "react-icons/fa";
import {FcHome } from "react-icons/fc";
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import LeagueCard from '../leaguecard/LeagueCard';
import Paragraph from '../paragraph/Paragraph';



const Leaguedetails = () => {
    let { id } = useParams();
    const [leagueDetails,setleagueDetails] = useState([])
   useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
    .then(resp => resp.json())
    .then(data=>setleagueDetails(data.leagues[0]))
  },[id])
  const {strBadge,strLeague,strDescriptionEN,strDescriptionFR,strFacebook,strTwitter,strYoutube}=leagueDetails
  const dd="https://"
  let linkfb = dd.concat(strFacebook)
  let linkTwitter = dd.concat(strTwitter)
  let linkYoutube = dd.concat(strYoutube)

  if(strFacebook===""){
    linkfb ="https://www.facebook.com/"
  }

  if(strTwitter===""){
    linkTwitter ="https://twitter.com/"
  }

  if(strYoutube===""){
    linkYoutube ="https://www.youtube.com/"
  }
  

    return (
        <div className="details-main-container">
        <Header heading={strLeague} img={strBadge}></Header>
        <LeagueCard information={leagueDetails}></LeagueCard>
        <Paragraph content={strDescriptionEN} headertitle="About"></Paragraph>
        <Paragraph content={strDescriptionFR} headertitle="More Information"></Paragraph>
        <div className="home-link col-sm-12">
        <Link to="/home">
           <h1><FcHome/> HOME PAGE</h1>
        </Link>
        </div>
      
        <div className="footer">
        <a href ={linkfb} target="_blank" rel="noreferrer"><button className="icon-btn fbook"><FaFacebookF/></button></a> 
        <a href ={linkYoutube} target="_blank" rel="noreferrer"><button className="icon-btn ytube"><FaYoutube/></button></a>
        <a href ={linkTwitter} target="_blank" rel="noreferrer"><button className="icon-btn twitter"><FaTwitterSquare/></button></a>
        </div>
        </div>
    );
};

export default Leaguedetails;