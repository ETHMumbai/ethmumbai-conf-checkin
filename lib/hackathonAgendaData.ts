// lib/agendaData.ts

export interface AgendaEntry {
  time: string;
  title: string;
  speaker?: string;
  subtitle?: string;
}

export interface AgendaDay {
  day: string; // "Day 1"
  items: AgendaEntry[];
}

export const hackathonAgenda: AgendaDay[] = [
  {
    day: "Day 1",
    items: [
      { time: "10 AM", title: "Check-in" },
      { time: "12 PM", title: "Lunch"},
      { time: "2 PM", title: "Opening Ceremony" },
      { time: "3 PM", title: "Hacking Begins" },
      { time: "4 PM", title: "Workshops" },
      { time: "8 PM", title: "Dinner" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { time: "1 AM", title: "Late Night Snack" },
      { time: "12 PM", title: "Lunch" },
      { time: "8 PM", title: "Dinner" },
    ],
  },
  {
    day: "Day 3",
    items: [
      { time: "1 AM", title: "Late Night Snack" },
      { time: "9 AM", title: "Hacking Ends" },
      { time: "10 AM", title: "Judging" },
      { time: "12 PM", title: "Lunch" },
      { time: "4 PM", title: "Closing Ceremony" },
    ],
  },
];
