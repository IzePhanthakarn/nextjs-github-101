import SlideHead from "@/components/deck/slide-head";
import StepsList from "@/components/deck/steps-list";
import DefList from "@/components/deck/def-list";

const STEPS = [
  {
    no: "1",
    label: "เริ่มโปรเจกต์ใหม่ หรือดึงโปรเจกต์ที่มีอยู่มาไว้ในเครื่อง",
    cmd: "git init / git clone",
  },
  { no: "2", label: "แก้ไฟล์ตามปกติใน working directory", cmd: "แก้ไฟล์" },
  { no: "3", label: "เลือกไฟล์ที่จะรวมใน commit ถัดไป", cmd: "git add" },
  { no: "4", label: "บันทึก snapshot พร้อมข้อความอธิบาย", cmd: "git commit" },
  { no: "5", label: "ตรวจสถานะและดูประวัติย้อนหลัง", cmd: "git status / git log" },
];

const NOTES = [
  { term: "git diff", desc: "ดูว่าแก้อะไรไปบ้างก่อน add/commit" },
  { term: "git log --oneline", desc: "ดูประวัติ commit แบบย่อ เหมาะเช็คเร็วๆ" },
];

export default function Workflow() {
  return (
    <>
      <SlideHead index="04" title="Local Workflow เบื้องต้น" />
      <p className="lede">ลำดับการทำงานบนเครื่องตัวเอง ก่อนจะไปแตะ remote</p>
      <div className="slide-body">
        <StepsList steps={STEPS} />
        <DefList items={NOTES} />
      </div>
    </>
  );
}
