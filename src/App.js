import { useState } from "react";
import Podcasts from "./Podcasts"
import People from "./People"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import twitter from './images/iconmonstr-twitter-3.svg';
import instagram from './images/iconmonstr-instagram-13.svg';
import youtube from './images/iconmonstr-youtube-8.svg';
import spotify from './images/iconmonstr-spotify-3.svg';
import soundcloud from './images/iconmonstr-soundcloud-3.svg';
import logo_inplace from './images/environhealthpodlogo.png';
// require('dotenv').config({path: '../.env'});

function App() {

  const [view, setView] = useState(0);

  const socialArray = [
    {
      icon: twitter,
      url: "https://twitter.com/PodcastEnviro"
    }, {
      icon: instagram,
      url: "https://www.instagram.com/envirohealthpod/"
    },
    // {
    //   icon: youtube, 
    //   url: ""
    // }
    , {
      icon: spotify,
      url: "https://open.spotify.com/show/3fObeaoKI7wcnaaDEn4dNp?si=50946e17aa4a4003"
    }
    // ,
    // {
    //   icon: soundcloud, 
    //   url: ""
    // }
  ]

  const socialLinks = socialArray.map((link) => (
    <a href={link.url}>
      <img src={link.icon} />

    </a>
  ))

  return (
    <>
      <div class='col-md-6 col-lg-8 text-sm-center text-lg-left p-2' className='menu'>
        <div className='links-wrapper'>
          <div className='logo'>
            < a onClick={() => setView(0)}>
              <img
                src={logo_inplace}
                width="80%"
                height="80%"
                alt="React Bootstrap logo"
              />
            </a>
          </div>
          <div className='about'>Examining associations of the environment on human health</div>
          <div className='blurb'>Have you ever wondered how scientists go about understanding environmental health? From measurement to mathematics, data to diagrams, publication to policy. Join us as we sit down with researchers to explore the causes and effects that the environment can have on our health. </div>
          <div className='link-list'>
            <Nav.Link onClick={() => setView(0)}>Podcasts</Nav.Link>
            <Nav.Link onClick={() => setView(1)}>Meet the Team</Nav.Link>
            {/* <Nav.Link onClick={() => {  setView(2)}}>Images</Nav.Link> */}
          </div>
          <div className='social-wrapper'>
            {socialLinks}
          </div>

        </div>
      </div>



      {view === 0 ? <Podcasts /> : null}
      {view === 1 ? <People /> : null}


    </>
  );
}

export default App;
