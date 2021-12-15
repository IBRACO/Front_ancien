import React from "react";
// import "../App.css";
import HeroCard from "./HeroCard";
import "./css/HeroSection.css";
import Spin from "react-reveal/Spin";
import Roll from "react-reveal/Roll";


function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      {/* <div className="espace"></div> */}
      <Roll left>
        <h1 className="esthero">EAST AFRICA SPORT DE LILLE</h1>
      </Roll>
      
      
      <Spin>
        <p style={{margin:20}}>Qu'est-ce que tu attends ? Cliquez sur les photos pour visiter</p>
      </Spin>
      {/* <div className="esp"></div> */}
      <HeroCard />
   
     
    </div>
  );
}

export default HeroSection;
