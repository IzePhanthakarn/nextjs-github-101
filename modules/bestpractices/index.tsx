import SlideHead from "@/components/deck/slide-head";
import Checklist from "@/components/deck/checklist";

export default function BestPractices() {
  return (
    <>
      <SlideHead index="09" title="Best Practices" />
      <p className="lede">นิสัยเล็กๆ ที่ทำให้ history อ่านง่าย และลดโอกาสงานพังทั้งทีม</p>
      <div className="slide-body">
        <Checklist
          items={[
            {
              title: "เขียน commit message ให้สื่อความหมาย",
              description: (
                <>
                  ลองใช้ Conventional Commits: <code>feat:</code> <code>fix:</code>{" "}
                  <code>docs:</code> <code>refactor:</code> ตามด้วยคำอธิบายสั้นๆ ว่าทำอะไร
                </>
              ),
            },
            {
              title: "commit เล็กๆ บ่อยๆ",
              description: "ดีกว่า commit ก้อนใหญ่ทีเดียว ทำให้ review ง่ายและ revert เฉพาะจุดได้",
            },
            {
              title: "ตั้งชื่อ branch ให้เป็นระบบ",
              description: (
                <>
                  เช่น <code>feature/xxx</code>, <code>bugfix/xxx</code>, <code>hotfix/xxx</code>{" "}
                  เพื่อรู้ทันทีว่า branch นี้ทำอะไร
                </>
              ),
            },
            {
              title: ".gitignore ให้ครบ",
              description: "อย่า commit secret, .env, node_modules หรือไฟล์ที่ generate ได้",
            },
            {
              title: "PR เล็กไว้ก่อน",
              description: "ยิ่ง diff เล็ก ยิ่ง review ไว และ bug หลุดน้อยกว่า",
            },
            {
              title: "อย่า force push บน shared branch",
              description: (
                <>
                  ถ้าจำเป็นจริงๆ ใช้ <code>--force-with-lease</code> แทน <code>--force</code>{" "}
                  เพื่อกันเผลอทับ commit คนอื่น
                </>
              ),
            },
            {
              title: "stash ก่อนสลับงานกะทันหัน",
              description: "ไม่ต้อง commit งานที่ยังไม่เสร็จแค่เพื่อสลับ branch ไปทำอย่างอื่น",
            },
          ]}
        />
      </div>
    </>
  );
}
