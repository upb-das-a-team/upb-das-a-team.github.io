import React from "react";

import './timeline-card.scss';

function TimelineCard(props: any) {
  return (
    <div className="card">
      {props.alignment}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default TimelineCard;
