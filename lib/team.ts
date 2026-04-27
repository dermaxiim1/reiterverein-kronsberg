export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    id: "marc",
    name: "Marc Münkel",
    role: "Inhaber & Betriebsleitung",
    bio: "Marc führt die Anlage seit über zwei Jahrzehnten. Wer ein Pferd hier einstellt, hat einen direkten Draht — am Telefon, am Boxengitter, oder beim morgendlichen Mistgang.",
  },
  {
    id: "team-stall",
    name: "Stall-Team",
    role: "Pflege & Versorgung",
    bio: "Drei feste Hände, die jeden Morgen vor Sonnenaufgang im Stall stehen — füttern, misten, Pferde rauslassen, Plätze pflegen. Sie kennen jedes Pferd beim Namen.",
  },
  {
    id: "vfv",
    name: "VfV e.V.",
    role: "Verein für Vielseitigkeitsreiterei",
    bio: "Beheimatet auf unserer Anlage. Vorstand und aktive Mitglieder organisieren Lehrgänge, Trainings und Vereinsturniere — offen auch für Einsteller von außerhalb.",
  },
];
