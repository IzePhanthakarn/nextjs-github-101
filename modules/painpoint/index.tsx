import SlideHead from "@/components/deck/slide-head";
import PainPointCard from "@/components/deck/pain-point-card";

export default function PainPoints() {
  return (
    <>
      <SlideHead index="01" title="Pain Points" />
      <p className="lede">
        ก่อนจะมี Git ทีมพัฒนาซอฟต์แวร์ผ่านมาทั้งยุคที่ไม่มี version control เลย
        และยุคที่เริ่มมีแล้วอย่าง SVN/CVS แต่ก็ยังมีข้อจำกัดสำคัญ
      </p>
      <div className="slide-body">
        <div className="grid-2">
          <PainPointCard title="ตั้งชื่อไฟล์เป็นเวอร์ชันเอาเอง">
            report_final.doc, report_final_v2.doc, report_final_v2_จริง.doc — สุดท้ายไม่มีใครรู้ว่า
            อันไหนคือฉบับล่าสุดกันแน่
          </PainPointCard>
          <PainPointCard title="ส่งไฟล์กันทาง email / แชร์โฟลเดอร์">
            ต่างคนต่างแก้คนละเครื่อง พอเอามารวมกันทีหลัง งานของกันและกันทับกันโดยไม่รู้ตัว
          </PainPointCard>
          <PainPointCard title="ไม่มีประวัติย้อนหลัง">
            ไฟล์พังหรือลบผิด ก็ไม่มีทางย้อนกลับไปเวอร์ชันก่อนหน้าได้ และไม่รู้ว่าใครแก้อะไรตอนไหน
          </PainPointCard>
          <PainPointCard title="ทำงานพร้อมกันจริงๆ ไม่ได้">
            ต้องผลัดกันแก้ทีละคน ล็อกไฟล์รอคิวกัน ทำให้ทำงานคู่ขนานไม่ได้เลย
          </PainPointCard>
          <PainPointCard title="SVN/CVS: version control รุ่นก่อน Git ก็ยังพึ่ง server ตลอด">
            มี commit เหมือนกัน แต่เป็นระบบ centralized ทุกครั้งต้องต่อกับ server กลางเสมอ
            ถ้า server ล่ม ทั้งทีมหยุดทำงานทันที
          </PainPointCard>
          <PainPointCard title="ไม่มี backup ระหว่างทาง">
            เผลอเขียนทับของเดิม หรือลบไฟล์สำคัญ ก็ไม่มี snapshot ให้กู้คืนกลับมา
          </PainPointCard>
        </div>
      </div>
    </>
  );
}
