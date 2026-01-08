// lib/agendaData.ts

export interface Speaker {
  name: string;
  company: string;
  role: string;
  image: string;
}

export interface AgendaItem {
  time: string;          // "10:00 AM"
  duration: string;      // "30 MINS"
  type: string;          // "PANEL" | "PRESENTATION"
  title: string;
  speakers: Speaker[];
}

export const agendaData: AgendaItem[] = [
  {
    time: "10:00 AM",
    duration: "30 MINS",
    type: "PANEL",
    title: "The Future of DeFi",
    speakers: [
      {
        name: "Sandeep Nailwal",
        company: "Polygon",
        role: "Co-Founder",
        image: "/assets/conference/agenda/agenda-1.png"
      },
      {
        name: "Sandeep Nailwal",
        company: "Polygon",
        role: "Co-Founder",
        image: "/assets/conference/agenda/agenda-1.png"
      },
      {
        name: "Sandeep Nailwal",
        company: "Polygon",
        role: "Co-Founder",
        image: "/assets/conference/agenda/agenda-1.png"
      }
    ]
  },
  {
    time: "11:00 AM",
    duration: "15 MINS",
    type: "PRESENTATION",
    title: "Stitching off-chain and on-chain data to make sense of web3",
    speakers: [
      {
        name: "Sandeep Nailwal",
        company: "Polygon",
        role: "Co-Founder",
        image: "/assets/conference/agenda/agenda-1.png"
      }
    ]
  },
  // duplicate more as needed
];
