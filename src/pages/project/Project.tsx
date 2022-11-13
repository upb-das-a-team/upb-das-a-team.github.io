import React from "react";

import './Project.scss';

import GanttChart from "../../components/gantt-chart/GanttChart";
import TimelineDevelopment from "../../components/timeline-development/TimelineDevelopment";

function Project() {

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
      </div>
    </>
  )
}

export default Project;
