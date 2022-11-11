import React from "react";
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import {
  AiOutlineCopyrightCircle,
  AiOutlineGitlab
} from '../../../node_modules/react-icons/ai';

import { ImSection } from '../../../node_modules/react-icons/im';

import './Home.scss';

function Home() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight - 60);
  const [currentDate, setCurrentDate] = useState(new Date())

  return(
    <div className="homepage" style={{minHeight: windowHeight}}>
      <div className="homepage-content">
        <div className="homepage-content-left">
          <h1 className="title">Das A Team</h1>
          <span className="motto">Innovate, Connect, Inspire</span>
          <br />
          <div className="description">
            <p className="description-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea temporibus, accusantium, tempore recusandae atque quae molestiae voluptatum eius voluptatibus totam ad, expedita ut placeat facilis commodi! Dolores, vitae. Ea, cupiditate!
            </p>
            <div className="button-group">
              <Link to={'/project'}>
                <div className="btn btn-primary-custom btn-project">PROJECT</div>
              </Link>
              <Link to={'/team'}>
                <div className="btn btn-secondary-custom btn-team">TEAM</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage-content-right">
          <div className="homepage-content-image"></div>
        </div>
      </div>
      <div className="homepage-footer">
        <div className="homepage-footer-left">
          <Link className="custom-link section-symbol" to={'/impressum'}>
            <ImSection />
          </Link>
        </div>
        <div className="homepage-footer-center">
          <div className="footer-copyright-icon"><AiOutlineCopyrightCircle /></div>
          <div className="footer-current-year">{currentDate.getFullYear()}</div>
          <div className="footer-team-name">Das A Team</div>
        </div>
        <div className="homepage-footer-right">
          <a className= "custom-link" href="https://git.cs.uni-paderborn.de/swtpra2223/gruppe11/" target={'_blank'}>
            <div className="footer-gitlab-icon">
              <AiOutlineGitlab />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
