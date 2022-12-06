import React, { useState } from "react";

import './Project.scss';

import GanttChart from "../../components/gantt-chart/GanttChart";
import TimelineDevelopment from "../../components/timeline-development/TimelineDevelopment";
import { Link } from "react-router-dom";
import { ImSection } from "react-icons/im";
import { AiOutlineCopyrightCircle, AiOutlineGitlab } from "react-icons/ai";

function Project() {
  const [currentDate, setCurrentDate] = useState(new Date())

  return(
    <>
      <div className="projectpage">
        <div className="container">
          <div className="row projectpage-header">
            <h1 className="title">Das Verrückte Labyrinth</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Nostrum quos modi repellat ipsum accusamus amet minima iure dolore autem, 
              aspernatur pariatur mollitia quis fuga explicabo assumenda atque voluptates! Aperiam, magnam!

              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Nostrum quos modi repellat ipsum accusamus amet minima iure dolore autem, 
              aspernatur pariatur mollitia quis fuga explicabo assumenda atque voluptates! Aperiam, magnam!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row projectpage-timeline">
            <h2 className="title">Projekt Zeitplan</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Eveniet aspernatur autem quidem. Laboriosam harum amet tenetur deleniti maiores ut dolor, 
              aliquid quos nihil soluta aperiam ab ad nostrum omnis? Ipsam?
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row project-gantt-chart">
            <GanttChart />
          </div>
        </div>

        <div className="container">
          <div className="row projectpage-development">
            <h2 className="title">Projekt Entwicklung</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Eveniet aspernatur autem quidem. Laboriosam harum amet tenetur deleniti maiores ut dolor, 
              aliquid quos nihil soluta aperiam ab ad nostrum omnis? Ipsam?
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row project-sprint-timeline">
            <TimelineDevelopment />
          </div>
        </div>

        <div className="projectpage-footer">
        <div className="projectpage-footer-left">
          <Link className="custom-link section-symbol" to={'/impressum'}>
            <ImSection />
          </Link>
        </div>
        <div className="projectpage-footer-center">
          <div className="footer-copyright-icon"><AiOutlineCopyrightCircle /></div>
          <div className="footer-current-year">{currentDate.getFullYear()}</div>
          <div className="footer-team-name">Das A Team</div>
        </div>
        <div className="projectpage-footer-right">
          <a className= "custom-link" href="https://git.cs.uni-paderborn.de/swtpra2223/gruppe11/" target={'_blank'}>
            <div className="footer-gitlab-icon">
              <AiOutlineGitlab />
            </div>
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Project;
