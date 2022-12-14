import React from "react";

import './timeline-card.scss';

function TimelineCard(props: any) {
  var cardAlignment = ''

  if (props.alignment === 'left') {
    cardAlignment = 'card-left'
  } else if (props.alignment === 'right') {
    cardAlignment = 'card-right'
  } else {
    cardAlignment = ''
  }

  return (
    <div className={"card " + cardAlignment}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.text.trim()}</p>
      </div>
    </div>
  );
}

export default TimelineCard;
