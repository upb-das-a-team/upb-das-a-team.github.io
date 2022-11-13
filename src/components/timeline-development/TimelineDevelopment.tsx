import React from "react";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import TimelineCard from "./timeline-card";

import './TimelineDevelopment.scss';

function TimelineDevelopment() {
  return (
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        dd-mm-yyyy - dd-mm-yyyy
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="primary" />
        <TimelineConnector className="primary lg-timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineCard
          alignment='right'
          title='Sprint [Nr]'
          subtitle='Sprint Result'
          text='Sprint Goals'/>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        dd-mm-yyyy - dd-mm-yyyy
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="primary" />
        <TimelineConnector className="primary lg-timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineCard
          alignment='left'
          title='Sprint [Nr]'
          subtitle='Sprint Result'
          text='Sprint Goals'/>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        dd-mm-yyyy - dd-mm-yyyy
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="primary" />
        <TimelineConnector className="primary lg-timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineCard
          alignment='right'
          title='Sprint [Nr]'
          subtitle='Sprint Result'
          text='Sprint Goals'/>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        dd-mm-yyyy - dd-mm-yyyy
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className="primary" />
        <TimelineConnector className="primary lg-timeline-connector" />
      </TimelineSeparator>
      <TimelineContent>
        <TimelineCard
          alignment='left'
          title='Sprint [Nr]'
          subtitle='Sprint Result'
          text='Sprint Goals'/>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  );
}

export default TimelineDevelopment;
