import SlideHead from "@/components/deck/slide-head";
import FactCard from "@/components/deck/fact-card";

export default function WhatIsGit() {
  return (
    <>
      <SlideHead index="02" title="Git คืออะไร" />
      <p className="lede">
        ทวนของพื้นฐานที่ทุกคนใช้อยู่ทุกวัน แต่บางส่วนอาจไม่เคยตั้งคำถามว่า
        &quot;ทำไมมันทำงานแบบนี้&quot;
      </p>
      <div className="slide-body">
        <p className="statement">
          Git คือ <em>Distributed Version Control System</em> — ระบบที่เก็บ &quot;snapshot&quot;
          ของทั้งโปรเจกต์ในแต่ละ commit ไม่ใช่การเก็บ diff ทีละไฟล์แบบระบบรุ่นก่อน
        </p>
        <div className="facts">
          <FactCard kicker="Distributed" title="ทุกเครื่องมี full history">
            ไม่ต้องพึ่ง server กลางตลอดเวลาแบบ SVN/CVS — clone มาแล้วมีประวัติทั้งหมดอยู่ในเครื่อง
            ทำงาน offline ได้
          </FactCard>
          <FactCard kicker="Snapshot, not diff" title="เก็บภาพรวมทั้งโปรเจกต์">
            แต่ละ commit คือภาพรวม ณ เวลานั้น ไฟล์ที่ไม่เปลี่ยนจะแค่ชี้กลับไปไฟล์เดิม
            ทำให้เปรียบเทียบ/ย้อนกลับได้เร็ว
          </FactCard>
          <FactCard kicker="History" title="Linus Torvalds, 2005">
            สร้างขึ้นเพื่อดูแลซอร์สโค้ด Linux kernel ที่มีคนแก้พร้อมกันหลักพันคน
            ต้องการความเร็วและ branch ที่ถูกและง่าย
          </FactCard>
        </div>
      </div>
    </>
  );
}
