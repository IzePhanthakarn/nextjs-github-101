import SlideHead from "@/components/deck/slide-head";
import PlatformCard from "@/components/deck/platform-card";

export default function Platforms() {
  return (
    <>
      <SlideHead index="07" title="แพลตฟอร์ม Git ยอดนิยม" />
      <p className="lede">
        git คือตัวเครื่องมือ ส่วนแพลตฟอร์มพวกนี้คือที่ที่เอา repo ไปฝากไว้ให้ทีมทำงานร่วมกัน
      </p>
      <div className="slide-body">
        <div className="grid-4">
          <PlatformCard name="GitHub" bestFor="open source / เริ่มต้นเร็ว">
            ชุมชนใหญ่ที่สุดในโลก, Actions สำหรับ CI/CD, มี Copilot ในตัว
          </PlatformCard>
          <PlatformCard name="GitLab" bestFor="pipeline ซับซ้อน / on-prem">
            DevOps platform ครบวงจร CI/CD ในตัวแข็งแรงมาก self-host ได้ฟรี
          </PlatformCard>
          <PlatformCard name="Bitbucket" bestFor="ทีมที่ใช้ Jira อยู่แล้ว">
            ผูกกับ Atlassian suite (Jira, Confluence, Trello) เข้ากับ workflow เดิม
          </PlatformCard>
          <PlatformCard name="Azure DevOps" bestFor="องค์กรสาย Microsoft">
            รวม Boards, Repos, Pipelines เข้ากับ Microsoft/enterprise stack
          </PlatformCard>
        </div>
      </div>
    </>
  );
}
