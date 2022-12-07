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
              Unser Team realisiert das Spiel <span className="emphasized">Das Verrückte Labyrinth</span> als Anwendung für Android 
              und PC. Im Rahmen der SWTPra der Uni Paderborn liefern wir eine funktionsfähige Client-Server Anwendung des Spiels, die aus 
              3 Komponente besteht. 
              
              Die Spieler, die ein PC-Endgerät besitzen, dürfen das Spiel auf dem Server sowohl starten als auch konfigurieren 
              und als Teilnehmer dem Spiel beitreten. Desweiteren dürfen die Beobachter mit einem Smartphone-Endgerät dem Spiel als Zuschauer
              beitreten. Ein Ausrichter ist dafür verantwortlich ein Spielserver in Spiel- bzw. Turniermodus zu starten.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row projectpage-timeline">
            <h2 className="title">Projekt Zeitplan</h2>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="description mb-1">
                Das Projekt ist in 3 große Phasen mit klar definierten Deadlines eingeteilt, 
                die jeweils durch das Erreichen der jeweiligen Meilensteine enden.
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <ul className="phases">
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-5">Plannungsphase</div>
                      <div className="col-sm-2 divider"> -- </div>
                      <div className="col-sm-5">21.November.2022</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-5">Entwicklungsphase</div>
                      <div className="col-sm-2 divider"> -- </div>
                      <div className="col-sm-5">09.Dezember.2022</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-5">Abschluss-/Turnierphase</div>
                      <div className="col-sm-2 divider"> -- </div>
                      <div className="col-sm-5">08.Februar.2022</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
              Projektentwicklung folgt die Sprintphasen, die in oben dargestelltem Diagramm anzusehen sind.
              In der Timelinedarstellung, die unten folgt, sind jeweilige Aufgaben der Sprints zu sehen und
              geplante Backlogs, die bei jedem Sprintende implimentiert werden.
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
