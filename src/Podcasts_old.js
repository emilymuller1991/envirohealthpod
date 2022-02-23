import {useState} from "react";
import React from 'react';
import "./Podcasts.css";
import twitter from './images/iconmonstr-twitter-3.svg';
import instagram from './images/iconmonstr-instagram-13.svg';
import youtube from './images/iconmonstr-youtube-8.svg';
import spotify from './images/iconmonstr-spotify-3.svg';
import soundcloud from './images/iconmonstr-soundcloud-3.svg';
import { Container, Row, Col, Button } from 'react-bootstrap';


import Select from "react-select";

function Podcasts(props) {
  var ReactDOM = require('react-dom');
  const [eptags, setEptags] = useState({ep1: ['VAE', 'GM'], 
                                        ep2: ['OS', 'API'],
                                        ep3: ['GIS'],
                                        ep4: ['NLP', 'GM'],
                                        ep5: ['GIS', 'GM']});
  const [topic, setTopic] = useState('Choose Topic...');

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
    "label": 'VAE',
    "id": "VAE",
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
    "label": 'API',
    "id": "API",
  },
  {
    "label": 'GIS',
    "id": "GIS",
  },
  {
    "label": 'NLP',
    "id": "NLP",
  }]

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

var createReactClass = require('create-react-class');

  
const Menu = createReactClass({
  
	getInitialState: function () {
  	return { open: true };
  },
  
  toggleMenu: function () {
  	this.setState({ open: !this.state.open });
  },
  
  render: function () {

    
    const title = [{ title: 'Enviro-Health Podcast'}]
  	const linksArray = [
    	{ name: "home", url: "#" },
      { name: "log in", url: "#" },
      { name: "photos", url: "#" },
      { name: "contact", url: "#" },
      { name: "download", url: "#" }
    ];
    const aboutArray = [
      {name: 'This is to describe'}
    ];
    const setView = props.setView;
    const socialArray = [
    	{
        icon: twitter, 
        url: "https://github.com/matthewvincent"
      },{
        icon: instagram, 
        url: "https://www.instagram.com/middlestates/"
      },{
        icon: youtube, 
        url: "http://matthewvincentphotography.com/"
      },{
        icon: spotify, 
        url: "http://matthewvincentphotography.com/"
      },{
        icon: soundcloud, 
        url: "http://matthewvincentphotography.com/"
      }
    ];
    
  	return (
      <div>        
        <Main
          />
       	<Panel 
          open={this.state.open} 
          title={title}
          about={aboutArray}
          links={linksArray} 
          socialLinks={socialArray}
          body={socialArray}
          setView={setView}
        />

        <Button 
          toggle={this.toggleMenu} 
          open={this.state.open} 
        />
      </div>
    );
  }
});

// const Button = createReactClass({
// 	render: function () {
//   	return (
//     	<button 
//         className={this.props.open 
//           ? "menu-toggle close-button" 
//           : "menu-toggle "}
//         onClick={this.props.toggle}
//       > <i className="fa fa-plus"></i>
//       </button>
//     );
//   }
// });

const Panel = createReactClass({
	render: function () {
  	return (
    	 <div 
         className={this.props.open 
           ? "menu-wrapper menu-open" 
           : "menu-wrapper"}
       >
          <Title 
           title={this.props.title} 
           open={this.props.open} 
         />
          <About
           about={this.props.aboutArray} 
           open={this.props.open}
           setView={this.props.setView}
         />
         {/* <Links 
           links={this.props.links} 
           open={this.props.open} 
         /> */}
         <Social 
           socialLinks={this.props.socialLinks} 
           open={this.props.open}
         />
       </div>
    );
  }
});

const Main = createReactClass({

  handleChange: function(e) {
    this.setState({id:e.id, name:e.label})
   },
 
  visible: function(ep, option) {
    if (!option) {
      return "50%"
    } else {
    if (eptags[ep].includes(option.id)) {
      return "50%"
    } else {
      return "0%"
    }}
  },

	render: function () {
    const topic = 'Choose topic';

  	return (
      
          <div className='main-body'>
            <Select className='select'

                            options = {options}
                            getOptionValue={option=>option.label}
                            styles={customStyles}
                            placeholder={topic}
                            onChange = {this.handleChange}
                        />

                <iframe src="https://open.spotify.com/embed/episode/2CvgIKL1zS6rSDMFRhnv9a?theme=0" title='ep1' width={this.visible('ep1', this.state)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>
         
                <iframe src="https://open.spotify.com/embed/episode/4ddGgt2aZsy9ZucECvTm4s?theme=0" title='ep2'width={this.visible('ep2', this.state)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       
                 
                <iframe src="https://open.spotify.com/embed/episode/1hbBqzu0Xd8DHvnmNAMnao?theme=0" title='ep3'width={this.visible('ep3', this.state)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       

                <iframe src="https://open.spotify.com/embed/episode/2uo464GQ27uq3EXybKSBm6?theme=0" title='ep4'width={this.visible('ep4', this.state)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       

                <iframe src="https://open.spotify.com/embed/episode/0yiI2wJDk3xLUY61Y6mIrT?theme=0" title='ep5' width={this.visible('ep5', this.state)} height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media"></iframe>       
                
                <iframe class="iframe-placeholder" title='int' width="50%" height="232" frameBorder="0" allowtransparency="true" style={{visibility: ''}} allow="encrypted-media">Launch</iframe>       

          </div>
    );
  }
});

const Title = createReactClass({
	render: function () {
  	// const linkList = this.props.links.map((link) => (
    //   <li className="link">
    //     <a href={link.url}>{link.name}</a>
    //   </li>
    // ));
   
    return (
   	  <div 
        className={this.props.open 
          ? "links-wrapper"
          : "links-wrapper links-wrapper-closed"}
      > <div className="title">
    		  {'Enviro-Health Podcast'}
        </div>
      </div>
    );
  }
});

const About = createReactClass({
	render: function () {
  	// const linkList = this.props.links.map((link) => (
    //   <li className="link">
    //     <a href={link.url}>{link.name}</a>
    //   </li>
    // ));
   
    return (
   	  <div 
        className={this.props.open 
          ? "links-wrapper"
          : "links-wrapper links-wrapper-closed"}
      > 
      <div className="link-list">
    		  {'Short introduction to the podcast'}<p>
          <Button onClick={()=>this.props.setView(1)}>Meet the Team</Button>
          {/* {console.log(props.view)} */}
          </p>
        </div>
      </div>
    );
  }
});

const Links = createReactClass({
	render: function () {
  	const linkList = this.props.links.map((link) => (
      <li className="link">
        <a href={link.url}>{link.name}</a>
      </li>
    ));
   
    return (
   	  <div 
        className={this.props.open 
          ? "links-wrapper"
          : "links-wrapper links-wrapper-closed"}
      > <ul className="link-list">
    		  {linkList}
        </ul>
      </div>
    );
  }
});  


const Social = createReactClass({
	render: function () {
  	const socialLinks = this.props.socialLinks.map((link) => (
      <a href={link.url}>
        <img src= {link.icon} />
        
      </a>
    ));
    
  	return (
    	<div 
        className={this.props.open 
          ? "social-wrapper social-open"
          : "social-wrapper social-closed"}
      > {socialLinks}
      </div>
    );
  }
});

// const Body = createReactClass({
// 	render: function () {
//   	// const socialLinks = this.props.socialLinks.map((link) => (
//     //   <a href={link.url}>
//     //     <img src= {link.icon} />
        
//     //   </a>
//     // ));
    
//   	return (
//     	<div 
//         className="App"
//       > <p>text</p>
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <Menu/>, 
  document.getElementById('root')
  // document.getElementById('menu')
);

  return (
    <div className="App">
      <div className="main-body"><p>perceptions</p></div>
      <div id="menu">
      </div>
      <div><p>body</p></div>
      <p>body</p>
      </div>
  );
}

export default Podcasts;

