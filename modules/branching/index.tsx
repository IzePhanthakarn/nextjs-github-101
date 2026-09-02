import SlideHead from "@/components/deck/slide-head";
import StrategyCard from "@/components/deck/strategy-card";

export default function Branching() {
  return (
    <>
      <SlideHead index="05" title="Branching Strategy" />
      <p className="lede">
        git workflow ที่ทีมส่วนใหญ่เลือกใช้ แต่ละแบบเหมาะกับจังหวะ release ที่ต่างกัน
      </p>
      <div className="slide-body">
        <div className="grid-2">
          <StrategyCard
            tag="FEATURE BRANCH"
            title="Feature Branch Workflow"
            bestFor={
              <>
                <b>ทีมเล็ก-กลาง</b> ที่ต้องการ review ก่อน merge
              </>
            }
          >
            แยก branch ต่อหนึ่งฟีเจอร์จาก main แล้ว merge กลับผ่าน PR เมื่อเสร็จ
          </StrategyCard>
          <StrategyCard
            tag="GIT FLOW"
            title="Git Flow"
            bestFor={
              <>
                <b>โปรเจกต์ release เป็นรอบ</b> versioned ชัดเจน
              </>
            }
          >
            มี branch หลักคงที่: <code>main</code>, <code>develop</code> และ branch ชั่วคราว{" "}
            <code>feature/</code>, <code>release/</code>, <code>hotfix/</code>
          </StrategyCard>
          <StrategyCard
            tag="GITHUB FLOW"
            title="GitHub Flow"
            bestFor={
              <>
                <b>deploy บ่อย</b> เช่นทุกวัน/ทุก PR
              </>
            }
          >
            <code>main</code> พร้อม deploy เสมอ สร้าง branch สั้นๆ ต่อ task เปิด PR
            แล้ว merge ทันทีที่ review ผ่าน
          </StrategyCard>
          <StrategyCard
            tag="TRUNK-BASED"
            title="Trunk-Based Development"
            bestFor={
              <>
                <b>ทีมที่ทำ CI/CD เข้ม</b>และมี automated test แข็งแรง
              </>
            }
          >
            ทุกคน commit เข้าใกล้ <code>main</code> ตลอดเวลา branch อายุสั้นมาก
            (ไม่กี่ชั่วโมง-วัน) ใช้ feature flag คุมของที่ยังไม่พร้อม
          </StrategyCard>
        </div>
      </div>
    </>
  );
}
