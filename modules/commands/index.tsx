import SlideHead from "@/components/deck/slide-head";
import CommandGroup from "@/components/deck/command-group";

export default function Commands() {
  return (
    <>
      <SlideHead index="08" title="คำสั่งเบื้องต้น" />
      <p className="lede">cheat sheet เร็วๆ แยกตามกลุ่มการใช้งาน</p>
      <div className="slide-body">
        <div className="grid-2">
          <div>
            <CommandGroup
              name="Setup"
              rows={[
                { cmd: "git init", desc: "สร้าง repo ใหม่ในโฟลเดอร์ปัจจุบัน" },
                { cmd: <>git clone {"<url>"}</>, desc: "ดึง repo จาก remote มาไว้ในเครื่อง" },
              ]}
            />
            <CommandGroup
              name="Snapshot"
              rows={[
                { cmd: "git status", desc: "ดูว่ามีไฟล์ไหนเปลี่ยน / staged อยู่" },
                { cmd: <>git add {"<file>"}</>, desc: "ย้ายไฟล์ไปยัง staging area" },
                { cmd: 'git commit -m "..."', desc: "บันทึก snapshot พร้อมข้อความ" },
                { cmd: "git diff", desc: "ดูความต่างที่ยังไม่ได้ add" },
                { cmd: "git log", desc: "ดูประวัติ commit" },
              ]}
            />
          </div>
          <div>
            <CommandGroup
              name="Branch & Merge"
              rows={[
                { cmd: "git branch", desc: "ดูรายการ branch" },
                { cmd: <>git switch {"<name>"}</>, desc: "สลับไป branch อื่น" },
                { cmd: <>git merge {"<name>"}</>, desc: "รวม branch เข้ามา" },
                { cmd: <>git rebase {"<name>"}</>, desc: "ย้าย commit ไปต่อท้าย branch อื่น" },
              ]}
            />
            <CommandGroup
              name="Remote & Undo"
              rows={[
                { cmd: "git push / pull", desc: "ส่ง / ดึง commit กับ remote" },
                { cmd: "git stash", desc: "เก็บงานที่ยังไม่เสร็จไว้ชั่วคราว" },
                {
                  cmd: <>git revert {"<hash>"}</>,
                  desc: "ยกเลิก commit แบบสร้าง commit ใหม่ (ปลอดภัยบน shared branch)",
                },
                {
                  cmd: <>git reset {"<hash>"}</>,
                  desc: "ย้อน branch กลับไปที่ commit นั้น (ระวังโค้ดหาย)",
                },
                {
                  cmd: <>git cherry-pick {"<hash>"}</>,
                  desc: "หยิบ commit เดียวจาก branch อื่นมาใช้",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
