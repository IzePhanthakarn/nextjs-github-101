import AgendaGrid from "@/components/deck/agenda-grid";

export default function Home() {
  return (
    <div className="home-wrap">
      <div>
        <p className="eyebrow" style={{ marginBottom: ".9rem" }}>
          Dev Meeting — Tech Sharing
        </p>
        <h1 className="home-title">
          Git <span className="lead-word">101</span>
        </h1>
        <p className="home-sub" style={{ marginTop: "1rem" }}>
          ทบทวน Git ตั้งแต่แนวคิดเบื้องหลังไปจนถึง workflow และคำสั่งที่ใช้จริงในทีม —
          ไม่ใช่แค่ &quot;รู้วิธีใช้&quot; แต่เข้าใจว่าทำไมมันทำงานแบบนี้
        </p>
      </div>
      <AgendaGrid />
    </div>
  );
}
