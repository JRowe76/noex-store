import { useState } from "react";

// --- PROGRAM DATA ---
const weeks = [
  {
    week: 1,
    label: "Ignite",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Tempo Jump Squat",
            sets: 2,
            reps: "3 sec down · explode up · 20 reps",
            rest: "20 sec",
            cue: "3 full seconds down, then detonate. Land soft, absorb through the hips. Every rep maximum intent.",
            easier: "Remove the jump — slow squat down 3 seconds, stand up fast. Build the tempo before adding the explosion.",
            harder: "Hold a weight plate at your chest. The load amplifies every landing and forces more power on the way up.",
          },
          {
            name: "Explosive Clapping Push-Up",
            sets: 2,
            reps: "3 sec lower · explode · clap · 12 reps",
            rest: "20 sec",
            cue: "3 seconds down, chest near the floor. Launch hard enough to clap. If you can't clap, you didn't push hard enough.",
            easier: "Standard push-up with an explosive press at the top — no clap required. Focus on the speed of the press.",
            harder: "Wear a loaded backpack. Even 10 lbs changes this completely.",
          },
          {
            name: "Alternating Jump Lunge",
            sets: 2,
            reps: "2 sec pause at bottom · switch · 24 reps",
            rest: "20 sec",
            cue: "Pause 2 seconds at the bottom before switching. Don't skip the pause — that's the whole point.",
            easier: "Step switch instead of jump switch. Pause at the bottom, step to standing, step into the other lunge. Same pause, no jump.",
            harder: "Hold dumbbells at your sides. Weight drives you deeper and makes the pause harder.",
          },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "New Stimulus",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Prisoner Squat",
            sets: 2,
            reps: "4 sec down · 2 sec pause · 20 reps",
            rest: "20 sec",
            cue: "Hands behind your head, elbows wide. 4 seconds down, 2-second pause. Your quads do everything — no arm assistance.",
            easier: "Reduce to a 2-second lower and 1-second pause. Build the tempo tolerance before extending it.",
            harder: "Add a resistance band above the knees to force glute activation throughout the entire movement.",
          },
          {
            name: "Archer Push-Up",
            sets: 2,
            reps: "3 sec lower · 12 reps each side",
            rest: "20 sec",
            cue: "Lower toward one hand while the other arm extends straight. 3 seconds down. That extended arm gives almost no help.",
            easier: "Allow a slight bend in the extended arm. Reduce how far you lower until you build the strength for full range.",
            harder: "Elevate the working hand on a push-up handle for a deeper range of motion on the working side.",
          },
          {
            name: "Reverse Lunge with Knee Drive",
            sets: 2,
            reps: "2 sec down · drive knee up · 15 reps each leg",
            rest: "20 sec",
            cue: "Step back 2 seconds into the lunge, then drive the back knee up explosively as you return. One fluid movement.",
            easier: "Step back into the lunge, return to standing, pause — then lift the knee slowly. Break the movement into two parts until you have the balance.",
            harder: "Hold dumbbells at your sides during the knee drive. Challenges balance and hip flexor strength simultaneously.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Push Further",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Tempo Jump Squat",
            sets: 2,
            reps: "4 sec down · 1 sec pause · explode · 25 reps",
            rest: "15 sec",
            cue: "4 seconds down, 1-second pause, then explode. The pause kills all elastic energy. Every jump is pure muscle. 25 reps.",
            easier: "Remove the jump or reduce to 20 reps. Maintain the 4-second lower and pause — the tempo is what matters most.",
            harder: "More load than week 1. The pause with weight at the bottom is brutal.",
          },
          {
            name: "Explosive Clapping Push-Up",
            sets: 2,
            reps: "4 sec lower · double clap · 15 reps",
            rest: "15 sec",
            cue: "Double clap this week. More air time required. If you miss the second clap, push harder next rep.",
            easier: "Single clap or no clap — just focus on explosive press with a 4-second lower. Build the power before adding the second clap.",
            harder: "Loaded backpack, double clap. 15 reps at that standard is elite upper body power.",
          },
          {
            name: "Alternating Jump Lunge",
            sets: 2,
            reps: "3 sec pause · switch · 28 reps",
            rest: "15 sec",
            cue: "3-second pause this week. One more second than week 1. That extra second is harder than any additional rep.",
            easier: "Drop to a 2-second pause or reduce to 20 reps. Never skip the pause entirely.",
            harder: "Dumbbells or loaded bag, more weight than week 1.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "New Heights",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Bulgarian Split Squat Jump",
            sets: 2,
            reps: "3 sec down · explode off floor · 12 reps each leg",
            rest: "20 sec",
            cue: "Rear foot elevated, drop 3 seconds, then explode upward — front foot leaving the floor. Land soft, absorb, go again.",
            easier: "Remove the jump. Bulgarian split squat with a 3-second lower only. Build single-leg confidence before adding the explosive element.",
            harder: "Hold a dumbbell in each hand. Single-leg jump squats with load are advanced — even light dumbbells change the landing demand.",
          },
          {
            name: "Decline Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause · 15 reps",
            rest: "20 sec",
            cue: "Feet elevated on a box, 4-second lower, 1-second pause at the bottom. Hits upper chest and shoulders in a way flat push-ups can't.",
            easier: "Lower the elevation — less height means less shoulder load. A small step is fine to start.",
            harder: "Higher elevation plus a loaded backpack. Maximum upper pressing demand.",
          },
          {
            name: "Skater Jump",
            sets: 2,
            reps: "30 sec continuous · max distance",
            rest: "20 sec",
            cue: "Lateral explosive jumps landing on one leg. Brief stick, then back. Maximum distance per jump. Your glute medius is doing everything on each landing.",
            easier: "Step instead of jump — lateral step and balance on one leg before stepping back. Build the single-leg landing mechanics first.",
            harder: "Increase distance and add a 1-second stick on every landing. Controlled landings at maximum distance are a serious reactive stability challenge.",
          },
        ],
      },
    ],
  },
];

export default function BodyweightBurner() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeSession, setActiveSession] = useState(0);
  const [expandedEx, setExpandedEx] = useState(null);

  const currentWeek = weeks[activeWeek];
  const currentSession = currentWeek.sessions[activeSession];

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .week-btn {
          flex: 1;
          padding: 10px 4px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #999;
          cursor: pointer;
          transition: all 0.2s;
        }
        .week-btn.active { color: #111; border-bottom-color: #7a9e7e; }

        .session-btn {
          flex: 1;
          padding: 10px;
          background: #fff;
          border: 1px solid #e0e0e0;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        .session-btn:first-child { border-radius: 6px 0 0 6px; }
        .session-btn:last-child { border-radius: 0 6px 6px 0; }
        .session-btn.active { background: #2b2e2b; color: #fff; border-color: #2b2e2b; }

        .exercise-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
          transition: box-shadow 0.2s;
        }
        .exercise-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

        .exercise-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          cursor: pointer;
        }

        .exercise-body {
          border-top: 1px solid #f0f0f0;
          padding: 20px 18px;
          display: flex;
          gap: 20px;
          align-items: center;
          background: #fafafa;
        }

        .stat-box {
          text-align: center;
          padding: 10px 14px;
          background: #f0f0f0;
          border-radius: 6px;
          min-width: 64px;
        }
        .stat-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #888; font-weight: 600; margin-bottom: 4px; }
        .stat-value { font-family: 'Barlow Condensed', sans-serif; font-size: 17px; font-weight: 700; color: #111; line-height: 1; }

        .cue-box {
          background: #f0f5f1;
          border-left: 3px solid #7a9e7e;
          padding: 10px 14px;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          color: #444;
          line-height: 1.6;
          font-weight: 400;
          flex: 1;
        }

        .chevron {
          transition: transform 0.25s ease;
          color: #bbb;
          font-size: 18px;
        }
        .chevron.open { transform: rotate(180deg); }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .exercise-body { animation: fadeIn 0.25s ease; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Bodyweight Burner</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>4 Weeks · 2x/Week · Under 20 Min · Athlete Level</div>
      </div>

      {/* Week selector */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", display: "flex", padding: "0 8px" }}>
        {weeks.map((w, i) => (
          <button key={i} className={`week-btn ${activeWeek === i ? "active" : ""}`} onClick={() => { setActiveWeek(i); setActiveSession(0); setExpandedEx(null); }}>
            <div>Wk {w.week}</div>
            <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: 1, color: activeWeek === i ? "#7a9e7e" : "#bbb" }}>{w.label}</div>
          </button>
        ))}
      </div>

      {/* Session selector */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
          {currentWeek.sessions.map((s, i) => (
            <button key={i} className={`session-btn ${activeSession === i ? "active" : ""}`} onClick={() => { setActiveSession(i); setExpandedEx(null); }}>
              Session {s.session}
            </button>
          ))}
        </div>

        {/* Week label */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: -0.5 }}>
            Week {currentWeek.week} — {currentWeek.label}
          </div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1 }}>{currentSession.exercises.length} exercises</div>
        </div>

        {/* Exercises */}
        {currentSession.exercises.map((ex, i) => (
          <div key={i} className="exercise-card">
            <div className="exercise-header" onClick={() => setExpandedEx(expandedEx === i ? null : i)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f0f5f1", border: "1.5px solid #7a9e7e", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, color: "#7a9e7e", flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 700, textTransform: "uppercase", letterSpacing: -0.5 }}>{ex.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{ex.sets} sets · {ex.reps}</div>
                </div>
              </div>
              <span className={`chevron ${expandedEx === i ? "open" : ""}`}>▾</span>
            </div>

            {expandedEx === i && (
              <div className="exercise-body">
                <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
                  {/* Video placeholder */}
                  <div style={{ width: "100%", background: "#1a1a1a", borderRadius: 8, aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 12, gap: 8 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #7a9e7e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid #7a9e7e", marginLeft: 4 }} />
                    </div>
                    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#555", fontWeight: 600 }}>Video Coming Soon</div>
                  </div>
                  {/* Stats */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <div className="stat-box">
                      <div className="stat-label">Sets</div>
                      <div className="stat-value">{ex.sets}</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-label">Work</div>
                      <div className="stat-value" style={{ fontSize: 13 }}>{ex.reps}</div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-label">Rest</div>
                      <div className="stat-value" style={{ fontSize: 13 }}>{ex.rest}</div>
                    </div>
                  </div>
                  {/* Cue */}
                  <div className="cue-box">
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a9e7e", fontWeight: 700, marginBottom: 5 }}>Coach Cue</div>
                    {ex.cue}
                  </div>
                  {/* Make it easier */}
                  {ex.easier && (
                    <div style={{ background: "#f0f5f1", borderLeft: "3px solid #7a9e7e", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: 8 }}>
                      <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4a7a50", fontWeight: 700, marginBottom: 5 }}>↓ Make It Easier</div>
                      <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, fontWeight: 400 }}>{ex.easier}</div>
                    </div>
                  )}
                  {/* Make it harder */}
                  <div style={{ background: "#1a1a1a", borderLeft: "3px solid #c0392b", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: 8 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#c0392b", fontWeight: 700, marginBottom: 5 }}>↑ Make It Harder</div>
                    <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.6, fontWeight: 400 }}>{ex.harder}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
