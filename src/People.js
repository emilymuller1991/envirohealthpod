import {useState} from "react";
import React from 'react';
import "./People.css";
import jl from './images/joseph.jpg';
import em from './images/em_small.jpg';
import carl from './images/carl.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import twitter from './images/iconmonstr-twitter-3.svg';
import linkedin from './images/iconmonstr-linkedin-3.svg';

import Select from "react-select";

function People(props) {
  const [active, setActive] = useState(-1);
  const getCardClassName = index => {
    if (active > -1 && index !== active) return "fadeOut";
    return "fadeIn";
  };
  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // If we embed video
  // const _onReady =(event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.playVideo();
  // };

  const Card1 = ({
    imageSrc = "https://source.unsplash.com/random/400x400",
    title = "Joseph Levermore",
    text = "I am a researcher in Microplastics in the Environmental Research Group at Imperial College London. I am passionate about sports, science (physics and chemistry), and philosophy. ",
    ...props
  }) => (
    <div {...props}>
      <div className="card cards">
        <img className="card-img-top" src={jl}  width="75%" height="64.5%" alt="Unsplash Random" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div className = 'social-wrapper'>
          {socialLinksJos}
          </div>
        </div>
      </div>
    </div>
  );

  const Card2 = ({
    imageSrc = "https://source.unsplash.com/random/400x400",
    title = "Emily Muller",
    text = "I'm a data scientist working on my PhD at Imperial College London. I make use of images taken from Google Street View and Machine Learning to understand neighbourhood quality and give citizens a tool for imagining their city. I enjoy all things data and getting to know the breadth of questions scientists are answering.",
    ...props
  }) => (
    <div {...props}>
      <div className="card cards">
        <img className="card-img-top" src={em}  width="75%" height="81%" alt="Unsplash Random" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div className = 'social-wrapper'>
          {socialLinksEm}
          </div>
        </div>
      </div>
    </div>
  );

  const Card3 = ({
    imageSrc = "https://source.unsplash.com/random/400x400",
    title = "Carl DeSouza",
    text = "I am a researcher at Imperial College London, at the Centre for Low Emission Construction. I am looking at ways the construction sector can reduce emissions and achieve net-zero carbon. I like learning new things and picking up new skills.",
    ...props
  }) => (
    <div className='card' {...props}>
      <div className="card cards">
        <img className="card-img-top" src={carl} width="75%" height="64%" alt="Unsplash Random" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" >{text}</p>
          <div className = 'social-wrapper'>
          {socialLinksCarl}
          </div>
        </div>
      </div>
    </div>
  );

  const socialArrayCarl = [
    {
      icon: linkedin, 
      url: "https://www.linkedin.com/in/carl-desouza-87115348/"
    },
    {
      icon: twitter, 
      url: "https://twitter.com/dr_carl_desouza"
    }
  ]

  const socialLinksCarl = socialArrayCarl.map((link) => (
    <a href={link.url}>
      <img src= {link.icon} />
      
    </a>
  ))

  const socialArrayEm = [
    {
      icon: linkedin, 
      url: "https://www.linkedin.com/in/emily-muller-6675571b6/"
    },
    {
      icon: twitter, 
      url: "https://twitter.com/mathwis_emily"
    }
  ]

  const socialLinksEm = socialArrayEm.map((link) => (
    <a href={link.url}>
      <img src= {link.icon} />
      
    </a>
  ))

  const socialArrayJos = [
    {
      icon: linkedin, 
      url: "https://www.linkedin.com/in/josephlevermore/"
    },
    {
      icon: twitter, 
      url: "https://twitter.com/JosephLevermore"
    }
  ]

  const socialLinksJos = socialArrayJos.map((link) => (
    <a href={link.url}>
      <img className ='icon' src= {link.icon} />
    </a>
  ))

  return (


    <div className='body-people'>
    <Col>
    <Row>
    {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} /> */}
    </Row>
    <Row className = 'td'>
    <Card1
            key={1}
            className={`col-md-4 col-12 mb-5 ${getCardClassName(1)}`}
            onMouseOver={() => {
              setActive(1);
            }}
            onMouseOut={() => {
              setActive(1);
            }}
          />
    <Card2
            key={2}
            className={`col-md-4 col-12 mb-5 ${getCardClassName(4)}`}
            onMouseOver={() => {
              setActive(1);
            }}
            onMouseOut={() => {
              setActive(2);
            }}
          />
    <Card3
            key={3}
            className={`col-md-4 col-12 mb-5 ${getCardClassName(3)}`}
            onMouseOver={() => {
              setActive(1);
            }}
            onMouseOut={() => {
              setActive(2);
            }}
          />
    </Row>
    </Col> 
    </div>
);
}

export default People;

