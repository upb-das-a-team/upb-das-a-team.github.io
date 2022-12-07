import React, { useState, useEffect } from "react";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import TimelineCard from "./timeline-card";

import './TimelineDevelopment.scss';
import { render } from "react-dom";

interface Size {
  width: number;
  height: number;
}

function TimelineDevelopment() {
  const size: Size = useWindowSize();

  function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return windowSize;
  }
  

  const sprints = [
    {
      sprintNr: 1,
      startDate: '27. October 22',
      endDate: '09. November 22',
      alignment: 'right',
      title: 'Sprint 01',
      subtitle: 'Anfertigung sämtliche Dokumente für den Auftraggeber',
      text: `
      Ziel des Sprints ist die Erstellung und Fertigung 
      sämtlicher Dokumente, wie Produkt Angebot 
      (Nach Kundenanforderungen), QA Dokument und GUI Entwurf.
      `
    },
    {
      sprintNr: 2,
      startDate: '10. November 22',
      endDate: '23. November 22',
      alignment: 'left',
      title: 'Sprint 02',
      subtitle: 'Anfertigung der interne Dokumente',
      text: `
      Nach diesem Sprint erwarten wir eine entwickelte 
      Version des Smartphone-Beobachters GUI, und Spiellogik (Server). 
      Zusätzlich werden Dokumente angefertigt wie Produkt Backlog und 
      Interface Dokument
      `
    },
    {
      sprintNr: 3,
      startDate: '24. November 22',
      endDate: '07. December 22',
      alignment: 'right',
      title: 'Sprint 03',
      subtitle: 'Anlieferung der Applikationskomponenten',
      text: `
      Nach dem drittem Sprint wird sowohl ein Smartphone-Beobachter, 
      Controller als auch ein Spielserver angeliefert. 
      Parallel erwarten wir die Anfertigung des DevOps-Dokuments.
      `
    },
    {
      sprintNr: 4,
      startDate: '08. December 22',
      endDate: '21. December 22',
      alignment: 'left',
      title: 'Sprint 04',
      subtitle: 'Erschaffung der Messeversion der Applikation',
      text: `
      Ziel des Sprints ist die Entwicklung und Implementierung der 
      Messeversion der Applikation. Im Rahmen dieser Version sind 
      natürlich der PC-Teilnehmer und Server GUI enthalten.
      `
    },
    {
      sprintNr: 5,
      startDate: '22. December 22',
      endDate: '04. January 23',
      alignment: 'right',
      title: 'Sprint 05',
      subtitle: 'Entwicklung der KI und Abgabe des PC-Teilnehmer',
      text: `
      Nach diesem Sprint ist die Abgabe des PC-Teilnehmer Controller 
      und die erste Version des künslichen Intelligenz zu erwarten.
      `
    },
    {
      sprintNr: 6,
      startDate: '05. January 23',
      endDate: '18. January 23',
      alignment: 'left',
      title: 'Sprint 06',
      subtitle: 'Anlieferung der Internetseite für die Präsentation',
      text: `
      Ziel dieses Sprints ist die Entwicklung und Anfertigung der 
      Internetseit für eine vollständige Präsentation des Produkts, 
      und die letzte Implementierungen/Tests des der Applikation.
      `
    },
    {
      sprintNr: 7,
      startDate: '19. January 23',
      endDate: '01. February 23',
      alignment: 'right',
      title: 'Sprint 07',
      subtitle: 'Abgabe der Turnierversion',
      text: `
      Mit Abschluss dieses Sprints erfolgt die Implementierung der 
      Turnierversion der Applikation, und die Abschlusspräsentation.
      `
    }
  ];

  return (
    <Timeline position={(size.width < 576) ? "right" : "alternate"}>
      {sprints.map((sprint) => {
        return (
          <TimelineItem key={sprint.sprintNr}>
            <TimelineOppositeContent color="text.secondary">
              <div className={"timeline-date "}>
                <div className={"timeline-date-startDate-" + sprint.alignment}>{sprint.startDate}</div>
                <div className={"timeline-date-divider-" + sprint.alignment}> - </div>
                <div className={"timeline-date-endDate-" + sprint.alignment}>{sprint.endDate}</div>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="primary" />
              <TimelineConnector className="primary lg-timeline-connector" />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard
                alignment={(size.width < 576) ? "" : sprint.alignment}
                title={sprint.title}
                subtitle={sprint.subtitle}
                text={sprint.text}
                />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export default TimelineDevelopment;
