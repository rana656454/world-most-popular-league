import React,{useState,useEffect} from 'react';
import Header from '../header/Header';
import Leauge from '../leauge/Leauge';
import logoImg from '../../image/Photo/logo.png'
import './home.css'

const Home = () => {
    const heading = "World Most Popular League Info"
    
    const [league,setleague] = useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(response => response.json())
        .then(data =>setleague(data.leagues))
        .catch(err=>console.log(err))
    },[])
    return (
      <div className="main-container">
      <Header heading={heading} img={logoImg}></Header>
     <div className="container">
        <div className="row">
      {
        league.map(lg => <Leauge league={lg}></Leauge>)       
      }
    
        </div>
        </div>
      </div>
        
    );
};

export default Home;