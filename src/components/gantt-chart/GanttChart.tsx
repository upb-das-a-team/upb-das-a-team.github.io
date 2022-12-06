import React from "react";

import { Chart } from 'react-google-charts';

function GanttChart() {
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const rows = [
    [
      "TeamSitzung",
      "Erste Team Sitzung",
      "organisational",
      new Date(2022, 9, 20),
      new Date(2022, 9, 21),
      null,
      100,
      null
    ],
    [
      "ErstellungDesAngebots",
      "Erstellung des Angebots",
      "organisational",
      new Date(2022, 9, 23),
      new Date(2022, 9, 25),
      null,
      100,
      "TeamSitzung"
    ],
    [
      "ErstellungDesBacklogs",
      "Erstellung des Backlogs",
      "organisational",
      new Date(2022, 9, 24),
      new Date(2022, 9, 25),
      null,
      100,
      "TeamSitzung"
    ],
    [
      "ErstellungQADokument",
      "Erstellung QA Dokument",
      "organisational",
      new Date(2022, 9, 27),
      new Date(2022, 10, 2),
      null,
      100,
      "TeamSitzung"
    ],
    [
      "AnfangMitDesign/GUI",
      "Anfang mit Design / GUI",
      "UIDevelopment",
      new Date(2022, 9, 27),
      new Date(2022, 10, 4),
      null,
      100,
      "ErstellungDesBacklogs"
    ],
    [
      "SmartphoneBeobachterGUI",
      "Smartphone Beobachter GUI",
      "SmartphoneDevelopment",
      new Date(2022, 10, 10),
      new Date(2022, 10, 23),
      null,
      100,
      "ErstellungDesBacklogs"
    ],
    [
      "Spiellogik(Server)",
      "Spiellogik (Server)",
      "ServerDevelopment",
      new Date(2022, 10, 10),
      new Date(2022, 10, 23),
      null,
      100,
      "ErstellungDesBacklogs"
    ],
    [
      "SmartphoneBeobachterController",
      "Smartphone Beobachter Controller",
      "SmartphoneDevelopment",
      new Date(2022, 10, 24),
      new Date(2022, 11, 6),
      null,
      100,
      "SmartphoneBeobachterGUI"
    ],
    [
      "DevOpsDokumentAnfertigen",
      "DevOps Dokument Anfertigen",
      "organisational",
      new Date(2022, 10, 24),
      new Date(2022, 11, 12),
      null,
      100,
      "ErstellungQADokument"
    ],
    [
      "Spielserver",
      "Spielserver",
      "ServerDevelopment",
      new Date(2022, 10, 24),
      new Date(2022, 11, 5),
      null,
      100,
      null
    ],
    [
      "PCTeilnehmerGUI",
      "PC Teilnehmer GUI",
      "PCDevelopment",
      new Date(2022, 11, 8),
      new Date(2022, 11, 15),
      null,
      100,
      null
    ],
    [
      "ServerGUI",
      "Server GUI",
      "ServerDevelopment",
      new Date(2022, 11, 8),
      new Date(2022, 11, 15),
      null,
      100,
      "Spielserver"
    ],
    [
      "Messe",
      "Messe",
      "organisational",
      new Date(2022, 11, 21),
      new Date(2022, 11, 22),
      null,
      100,
      "Spielserver"
    ],
    [
      "PCTeilnehmerController",
      "PC Teilnehmer Controller",
      "PCDevelopment",
      new Date(2022, 11, 22),
      new Date(2023, 0, 4),
      null,
      100,
      "PCTeilnehmerGUI"
    ],
    [
      "EngineTeilnehmerKI",
      "Engine Teilnehmer KI",
      "AIDevelopment",
      new Date(2022, 11, 22),
      new Date(2023, 0, 4),
      null,
      100,
      null
    ],
    [
      "Webseite",
      "Webseite",
      "WebsiteDevelopment",
      new Date(2023, 0, 6),
      new Date(2023, 0, 13),
      null,
      100,
      null
    ],
    [
      "Abschlusspraesentation",
      "Abschlusspräsentation",
      "organisational",
      new Date(2023, 1, 6),
      new Date(2023, 1, 8),
      null,
      100,
      'Webseite'
    ],
    [
      "AbgabeImplementierung",
      "Abgabe Implementierung",
      "organisational",
      new Date(2023, 1, 8),
      new Date(2023, 1, 9),
      null,
      100,
      'Webseite'
    ],
  ];

  const data = [columns, ...rows];

  const options = {
    height: 600,
    gantt: {
      trackHeight: 30,
    },
  };

  return(
    <Chart
      chartType="Gantt"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}

export default GanttChart;
