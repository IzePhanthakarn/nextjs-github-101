import SlideHead from "@/components/deck/slide-head";
import FlowDiagram from "@/components/deck/flow-diagram";
import DefList from "@/components/deck/def-list";
import ObjectGraph, { type ObjectNode } from "@/components/deck/object-graph";

const OBJECT_GRAPH_ROOT: ObjectNode = {
  type: "commit",
  name: '"fix bug"',
  children: [
    {
      type: "tree",
      name: "(root)",
      children: [
        { type: "blob", name: "README.md" },
        {
          type: "tree",
          name: "src/",
          children: [
            { type: "blob", name: "index.js" },
            { type: "blob", name: "utils.js" },
          ],
        },
        { type: "blob", name: "package.json" },
      ],
    },
  ],
};

const OBJECT_MODEL = [
  { term: "blob", desc: "เนื้อหาไฟล์หนึ่งไฟล์ ณ เวลานั้น" },
  { term: "tree", desc: "โครงสร้างโฟลเดอร์ ชี้ไปยัง blob/tree ย่อย" },
  {
    term: "commit",
    desc: "snapshot + metadata (ผู้เขียน, เวลา, ข้อความ, parent commit)",
  },
  {
    term: "branch",
    desc: "แค่ pointer ที่ชี้ไปที่ commit ล่าสุด — นี่คือเหตุผลที่สร้าง/สลับ branch ใน git เร็วมาก",
  },
  { term: "HEAD", desc: "pointer ที่ชี้ว่าตอนนี้อยู่ branch ไหน / commit ไหน" },
];

export default function CoreConcepts() {
  return (
    <>
      <SlideHead index="03" title="แนวคิดหลักของ Git" />
      <p className="lede">
        พื้นที่ทำงาน 3 ระดับ และ object model เบื้องหลังที่ทำให้คำสั่งพวกนี้ทำงานได้เร็วมาก
      </p>
      <div className="slide-body">
        <FlowDiagram
          boxes={[
            { name: "Working Directory", sub: "ไฟล์ที่แก้อยู่" },
            { name: "Staging Area", sub: "index — รอ commit" },
            { name: "Repository", sub: ".git — commit ถาวร" },
          ]}
          arrowCommands={["git add", "git commit"]}
        />
        <div className="grid-2">
          <DefList items={OBJECT_MODEL} />
          <div>
            <p className="eyebrow" style={{ marginBottom: ".4rem" }}>
              ตัวอย่างจริง
            </p>
            <p style={{ fontSize: ".86rem", color: "var(--ink-soft)", marginBottom: ".8rem" }}>
              หนึ่ง commit ประกอบด้วยอะไรบ้าง
            </p>
            <ObjectGraph root={OBJECT_GRAPH_ROOT} meta="parent → commit ก่อนหน้า" />
          </div>
        </div>
      </div>
    </>
  );
}
