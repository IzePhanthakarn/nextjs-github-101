import SlideHead from "@/components/deck/slide-head";
import DefList from "@/components/deck/def-list";
import CompareTable from "@/components/deck/compare-table";

const REMOTE_TERMS = [
  { term: "origin", desc: "ชื่อเรียก remote หลักที่ clone มา (ค่า default)" },
  { term: "upstream", desc: "remote ต้นทางของ repo ที่ fork มา" },
  { term: "fetch", desc: "ดึงข้อมูลใหม่จาก remote มาเก็บไว้ ยังไม่ merge เข้า branch เรา" },
  { term: "pull", desc: "fetch + merge (หรือ rebase) เข้า branch ปัจจุบันทันที" },
  { term: "push", desc: "ส่ง commit ในเครื่องขึ้น remote" },
];

export default function Remote() {
  return (
    <>
      <SlideHead index="06" title="ทำงานร่วมกับ Remote" />
      <p className="lede">พอมีคนอื่นเข้ามาร่วม ก็ต้องมีที่กลางให้ sync กัน</p>
      <div className="slide-body">
        <div className="grid-2">
          <div>
            <p className="eyebrow" style={{ marginBottom: ".8rem" }}>
              คำศัพท์พื้นฐาน
            </p>
            <DefList items={REMOTE_TERMS} />
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: ".8rem" }}>
              Merge vs Rebase
            </p>
            <CompareTable
              columns={["merge", "rebase"]}
              rows={[
                {
                  label: "History",
                  cells: [
                    { content: "เก็บทุกอย่างจริง มี branch แตก" },
                    { content: "เรียงเป็นเส้นตรง อ่านง่ายกว่า" },
                  ],
                },
                {
                  label: "Commit ใหม่",
                  cells: [
                    { content: "สร้าง merge commit เพิ่ม" },
                    { content: "ไม่มี commit ใหม่", tone: "good" },
                  ],
                },
                {
                  label: "ใช้บน shared branch",
                  cells: [
                    { content: "ปลอดภัย", tone: "good" },
                    { content: "อันตราย ห้ามทำถ้าคนอื่น pull ไปแล้ว", tone: "bad" },
                  ],
                },
              ]}
            />
            <p style={{ marginTop: "1rem", color: "var(--ink-soft)", fontSize: ".9rem" }}>
              Pull Request / Merge Request คือจุดที่ให้ทีม{" "}
              <b style={{ color: "var(--ink)" }}>code review</b> ก่อน merge เข้า branch หลัก
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
