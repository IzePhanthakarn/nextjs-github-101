import SlideHead from "@/components/deck/slide-head";
import FactCard from "@/components/deck/fact-card";

export default function Summary() {
  return (
    <>
      <SlideHead index="10" title="สรุปทั้งหมด" />
      <p className="lede">ภาพรวมของทุกหัวข้อที่คุยกันวันนี้ ในหน้าเดียว</p>
      <div className="slide-body">
        <p className="statement">
          Git คือ <em>Distributed Version Control System</em> ที่ให้ทีมพัฒนา commit, branch
          และ sync งานร่วมกันได้อย่างปลอดภัย โดยไม่ต้องพึ่ง server กลางตลอดเวลา
        </p>
        <div className="grid-3">
          <FactCard kicker="Why" title="ทำไมต้องมี Git">
            แก้ปัญหายุคตั้งชื่อไฟล์เป็นเวอร์ชันเอง และระบบรุ่นก่อนที่ต้องพึ่ง server กลางตลอดเวลา
          </FactCard>
          <FactCard kicker="Core" title="แนวคิดหลัก">
            Working Directory → Staging → Repository — branch เป็นแค่ pointer จึงเบาและเร็วมาก
          </FactCard>
          <FactCard kicker="Workflow" title="Branching Strategy">
            เลือกให้เข้ากับจังหวะ release ของทีม ไม่มีสูตรเดียวที่ถูกเสมอ
          </FactCard>
          <FactCard kicker="Team" title="ทำงานร่วมกัน">
            PR / Merge Request คือจุดที่ให้ทีม code review ก่อน merge เข้า branch หลัก
          </FactCard>
          <FactCard kicker="Tools" title="แพลตฟอร์มที่ใช้กัน">
            GitHub, GitLab, Bitbucket, Azure DevOps — เลือกตามที่เข้ากับ stack ของทีม
          </FactCard>
          <FactCard kicker="Habits" title="นิสัยที่ดี">
            commit สื่อความหมาย, PR เล็ก, อย่า force push ทับ branch ที่ใช้ร่วมกัน
          </FactCard>
        </div>
        <h2 className="qa">คำถาม?</h2>
      </div>
    </>
  );
}
