import {useState} from "react";
import React from 'react';
import "./Podcasts.css";
// import twitter from './images/iconmonstr-twitter-3.svg';
// import instagram from './images/iconmonstr-instagram-13.svg';
// import youtube from './images/iconmonstr-youtube-8.svg';
// import spotify from './images/iconmonstr-spotify-3.svg';
// import soundcloud from './images/iconmonstr-soundcloud-3.svg';
import { Container, Row, Col, Button } from 'react-bootstrap';


import Select from "react-select";

function Podcasts(props) {
  const [eptags, setEptags] = useState({ep1: ['CH', 'QUAL', 'AP', 'epi', 'PM', 'PH', 'ENG'], 
                                        ep2: ['QUAL', 'PM', 'PH', 'ENG'],
                                        ep3: ['GIS'],
                                        ep4: ['NLP', 'GM'],
                                        ep5: ['GIS', 'GM']});

  const [tag, setTag] = useState('Choose Topic...')

  const handleChange = (e) => {
    setTag({id:e.id, name:e.label});
   };
 
  const visible = (ep, tag) => {
    if (tag == topic) {
      return "100%"
    } else {
    if (eptags[ep].includes(tag.id)) {
      return "100%"
    } else {
      return "0%"
    }
  }
  };

  const [topic, setTopic] = useState('Choose Topic...');

  const customStyles = {
    control: (base, state) => ({
      ...base,
    //   background: "#023950",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      textAlign: "center",
      // Overwrittes the different states of border
    //   borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "red" : "blue"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 0,
      textAlign: "center",
      // prevent menu to scroll y
      wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };


var options = [
    {
        "label": "Air Pollution",
        "id": "AP",
    },
    {
        "label": "Epidemiology",
        "id": "epi",
    },
    {
        "label": 'Machine Learning',
        "id": "ML",
    },
    {
      "label": 'Public Health',
      "id": "PH",
    },
    {
      "label": 'Generative models',
      "id": "GM",
    },
    {
      "label": 'Open source',
      "id": "OS",
    },
    {
      "label": 'Engagement',
      "id": "ENG",
    },
    {
      "label": 'GIS',
      "id": "GIS",
    },
    {
      "label": 'Childrens Health',
      "id": "CH",
    },
    {
      "label": 'Qualitative',
      "id": "QUAL",
    },
    {
      "label": 'Participatory Methods',
      "id": "PM",
    }
  ];



  return (
    <div className='body'>
      <Col>
      <Row>
        <div className='drop-down'>
            <Select className='select'
              options = {options}
              getOptionValue={option=>option.label}
              styles={customStyles}
              placeholder={topic}
              onChange = {handleChange}
              />
        </div>
        </Row>

          {/* <Row> */}
          <iframe src="https://open.spotify.com/embed/episode/3GSJZLswJ3Ss8Pdn4o6mRK?utm_source=generator" title='ep1' width={visible('ep1', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/episode/51QZZyXGhgnZTQH6p9mPWO?utm_source=generator" title='ep2' width={visible('ep2', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>
          {/* <iframe src="https://open.spotify.com/embed/episode/4ddGgt2aZsy9ZucECvTm4s?theme=0" title='ep2'width={visible('ep2', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       

          <iframe src="https://open.spotify.com/embed/episode/1hbBqzu0Xd8DHvnmNAMnao?theme=0" title='ep3'width={visible('ep3', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       

          <iframe src="https://open.spotify.com/embed/episode/2uo464GQ27uq3EXybKSBm6?theme=0" title='ep4'width={visible('ep4', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       

          <iframe src="https://open.spotify.com/embed/episode/0yiI2wJDk3xLUY61Y6mIrT?theme=0" title='ep5' width={visible('ep5', tag)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>        */}

          {/* <iframe class="iframe-placeholder" title='int' width="50%" height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media">Launch</iframe>        */}
          {/* </Row> */}
      </Col>
</div>
);
}

export default Podcasts;

