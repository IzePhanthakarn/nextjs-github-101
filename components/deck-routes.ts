export type DeckRoute = {
  path: string;
  section: string;
  topic: string;
  subtitle: string;
};

export const DECK_ROUTES: DeckRoute[] = [
  { path: "/", section: "HOME", topic: "Agenda", subtitle: "เริ่มที่นี่" },
  {
    path: "/painpoint",
    section: "WHY THIS TALK",
    topic: "Pain Points",
    subtitle: "ก่อนจะมี Git",
  },
  {
    path: "/whatisgit",
    section: "CONCEPTS",
    topic: "Git คืออะไร",
    subtitle: "what is git",
  },
  {
    path: "/coreconcepts",
    section: "CONCEPTS",
    topic: "แนวคิดหลักของ Git",
    subtitle: "core model",
  },
  {
    path: "/workflow",
    section: "WORKFLOW",
    topic: "Local Workflow",
    subtitle: "การใช้งานเบื้องต้น",
  },
  {
    path: "/branching",
    section: "WORKFLOW",
    topic: "Branching Strategy",
    subtitle: "git workflow",
  },
  {
    path: "/remote",
    section: "WORKFLOW",
    topic: "ทำงานร่วมกับ Remote",
    subtitle: "collaboration",
  },
  {
    path: "/platforms",
    section: "ECOSYSTEM",
    topic: "แพลตฟอร์ม Git ยอดนิยม",
    subtitle: "platforms",
  },
  {
    path: "/commands",
    section: "REFERENCE",
    topic: "คำสั่งเบื้องต้น",
    subtitle: "cheat sheet",
  },
  {
    path: "/bestpractices",
    section: "REFERENCE",
    topic: "Best Practices",
    subtitle: "tips",
  },
  {
    path: "/summary",
    section: "CLOSE",
    topic: "สรุป & Q&A",
    subtitle: "wrap up",
  },
];
