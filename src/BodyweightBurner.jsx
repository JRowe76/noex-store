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
            figure: "jumpSquat",
            sets: 2,
            reps: "3 sec down · explode up · 20 reps",
            rest: "20 sec",
            cue: "3 seconds down — feel every fiber loading. Then detonate. If rep 15 looks like rep 1, you're not going hard enough. This is not cardio. This is power.",
            harder: "Hold a weight plate or backpack loaded with books at your chest. The load amplifies every landing. Your legs will know the difference immediately.",
          },
          {
            name: "Explosive Clapping Push-Up",
            figure: "pushup",
            sets: 2,
            reps: "3 sec lower · explode · clap · 12 reps",
            rest: "20 sec",
            cue: "Lower for 3 full seconds — chest nearly grazing the floor. Then launch. Clap at the top. If you can't clap, you didn't explode hard enough. Reset. Go again.",
            harder: "Wear a loaded backpack. Even 10 lbs changes everything. Your chest will be screaming by set 3.",
          },
          {
            name: "Alternating Jump Lunge",
            figure: "lunge",
            sets: 2,
            reps: "2 sec pause at bottom · switch · 24 reps",
            rest: "20 sec",
            cue: "Sink into that lunge and hold for 2 seconds before switching. Your quads are going to beg you to skip the pause. Don't. That's exactly when it's working.",
            harder: "Hold dumbbells or a loaded bag at your sides. The weight drives you deeper and makes the pause even more brutal. That's the point.",
          },
        ],
      },
      {
        session: 2,
        exercises: [
          {
            name: "Max Tension Plank",
            figure: "plank",
            sets: 2,
            reps: "60 sec — squeeze every muscle",
            rest: "15 sec",
            cue: "This is not a rest position. Flex your abs, crush your glutes, squeeze your quads — simultaneously. If it doesn't hurt, you're holding a plank wrong. Breathe through it.",
            harder: "Have someone place a weight plate on your lower back. Your body now has to fight gravity AND load. Welcome to real core work.",
          },
          {
            name: "Single-Leg Glute Bridge",
            figure: "gluteBridge",
            sets: 2,
            reps: "2 sec up · 3 sec down · 20 reps each leg",
            rest: "10 sec between legs · 20 sec between sets",
            cue: "Drive up in 2 seconds — violent hip extension. Lower in 3. If your hips rotate even slightly, you're done for that rep. Start over. Precision is the whole point.",
            harder: "Rest a dumbbell or weight plate on your hip. The load forces true glute activation. No cheating with your lower back now.",
          },
          {
            name: "Sprint Mountain Climber",
            figure: "mountainClimber",
            sets: 2,
            reps: "50 sec all-out · 10 sec dead stop",
            rest: "10 sec",
            cue: "All-out for 50 seconds. Not jogging. Not warming up. Sprinting. Then stop dead for 10 seconds without breaking position. That stop is part of the work. Own it.",
            harder: "Elevate your hands on a step or box. The angle increases shoulder load and forces your core to work harder to stabilize. You'll feel it in seconds.",
          },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "Accelerate",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Tempo Jump Squat",
            figure: "jumpSquat",
            sets: 2,
            reps: "4 sec down · explode · 25 reps",
            rest: "15 sec",
            cue: "4 seconds down this week. Slower descent, same violence on the way up. Your nervous system is adapting — don't let it get comfortable. 25 reps. No exceptions.",
            harder: "Loaded vest or backpack. Add more weight than last week. Your landing mechanics will be tested. Control them.",
          },
          {
            name: "Explosive Clapping Push-Up",
            figure: "pushup",
            sets: 2,
            reps: "3 sec lower · double clap · 15 reps",
            rest: "15 sec",
            cue: "Double clap this week. You have to generate more force to get the hands off the ground long enough. If you miss the second clap, you didn't push hard enough. Harder next rep.",
            harder: "Loaded backpack, more weight than week 1. 15 reps with load and a double clap is a different exercise entirely. Treat it that way.",
          },
          {
            name: "Alternating Jump Lunge",
            figure: "lunge",
            sets: 2,
            reps: "3 sec pause at bottom · switch · 28 reps",
            rest: "15 sec",
            cue: "3-second pause this week. You are sitting in your weakness. That discomfort is not a sign to stop — it's the signal that it's working. Switch and go immediately.",
            harder: "Dumbbells or loaded bag. More weight than week 1. The pause with load is a completely different level of difficulty. Don't sandbag the weight.",
          },
        ],
      },
      {
        session: 2,
        exercises: [
          {
            name: "Max Tension Plank",
            figure: "plank",
            sets: 2,
            reps: "75 sec — flex everything",
            rest: "10 sec",
            cue: "75 seconds of total-body tension. Not one muscle gets a break. Your abs are on fire? Good. Your glutes are cramping? Good. That means you're actually doing it.",
            harder: "Heavier plate on the back. More weight, more time. If it feels manageable, you're not squeezing hard enough.",
          },
          {
            name: "Single-Leg Glute Bridge",
            figure: "gluteBridge",
            sets: 2,
            reps: "2 sec up · 4 sec down · 25 reps each leg",
            rest: "10 sec between legs · 15 sec between sets",
            cue: "Slower descent this week. 4 full seconds down. You will want to drop faster. Refuse. The eccentric is where strength is built. Own every single millimeter of that range.",
            harder: "More weight on the hip. Heavier than week 1. 25 reps with a 4-second eccentric and load is not a glute exercise — it's a war.",
          },
          {
            name: "Sprint Mountain Climber",
            figure: "mountainClimber",
            sets: 2,
            reps: "55 sec all-out · 5 sec dead stop",
            rest: "10 sec",
            cue: "2 sets. 5-second stop instead of 10. You barely have time to breathe before going again. That's by design. Stay tight during the stop — core doesn't get to rest.",
            harder: "Elevated hands, higher surface than week 1. The steeper the angle, the harder the shoulder stabilization. Your whole body is working now.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Unleash",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Tempo Jump Squat",
            figure: "jumpSquat",
            sets: 2,
            reps: "5 sec down · explode · 25 reps",
            rest: "10 sec",
            cue: "5 seconds down. 10 seconds rest. You will be in a near-permanent squat for this set. Your legs will be shaking. Your lungs will be burning. Do not stop. Athletes finish sets.",
            harder: "Max load you can handle with full control. If the jump is compromised, drop 5 lbs. The jump has to be explosive — that's non-negotiable.",
          },
          {
            name: "Explosive Clapping Push-Up",
            figure: "pushup",
            sets: 2,
            reps: "4 sec lower · triple clap · 15 reps",
            rest: "10 sec",
            cue: "Triple clap. 4-second lower. 2 sets. This is elite-level upper body power work. If you miss a clap, rest 3 seconds and finish the rep. Never drop the rep count.",
            harder: "Loaded backpack, max safe weight. Triple clap with load and a 4-second eccentric will humble anyone. Earn every single rep.",
          },
          {
            name: "Alternating Jump Lunge",
            figure: "lunge",
            sets: 2,
            reps: "3 sec pause · 1 sec hold at top · 30 reps",
            rest: "15 sec",
            cue: "Pause at the bottom for 3, then explode up and hold the top position for 1 second — fully locked out, single leg. Then go straight into the next rep. Zero wasted motion.",
            harder: "Heaviest load yet. The top hold with weight challenges your balance and hip stability in ways flat ground never will. This is where athletes separate.",
          },
          {
            name: "Weighted Tricep Dip",
            figure: "tricepDip",
            sets: 2,
            reps: "3 sec lower · 1 sec pause at bottom · 20 reps",
            rest: "15 sec",
            cue: "Slow it way down. 3 seconds to the bottom, pause, then drive up hard. Your triceps are fully loaded at the bottom — that pause is where the growth happens. Don't skip it.",
            harder: "Plate in your lap or loaded backpack across your thighs. The weight eliminates any momentum. Every inch of that rep is earned.",
          },
        ],
      },
      {
        session: 2,
        exercises: [
          {
            name: "Max Tension Plank",
            figure: "plank",
            sets: 2,
            reps: "90 sec — total body war",
            rest: "10 sec",
            cue: "90 seconds. You will want to quit at 60. That's when the set actually starts. Your body is lying to you. Your mind decides. Stay in it.",
            harder: "Heaviest plate you've used. 90 seconds with load is a full-body isometric strength event. Not everyone can do this. You can.",
          },
          {
            name: "Single-Leg Glute Bridge",
            figure: "gluteBridge",
            sets: 2,
            reps: "2 sec up · 5 sec down · 25 reps each leg",
            rest: "5 sec between legs · 15 sec between sets",
            cue: "5-second eccentric. Your glute is under tension for the entire descent. This is not comfortable. It is not supposed to be. Control every millimeter. No crashing down.",
            harder: "Max weight on the hip. 5-second eccentric with load is one of the most intense glute exercises possible without a gym. You will feel this for 2 days.",
          },
          {
            name: "Sprint Mountain Climber",
            figure: "mountainClimber",
            sets: 2,
            reps: "60 sec all-out · 3 sec dead stop",
            rest: "10 sec",
            cue: "60 seconds flat out. 3-second stop. You have almost no recovery. Your cardiovascular system is being pushed to its absolute limit. Stay tight during the stop. Core never quits.",
            harder: "Highest elevation yet. Hands on a chair or couch. The angle maxes out shoulder and core demand. Combined with 60-second sprints, this is elite conditioning.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "No Mercy",
    sessions: [
      {
        session: 1,
        exercises: [
          {
            name: "Tempo Jump Squat",
            figure: "jumpSquat",
            sets: 2,
            reps: "5 sec down · 1 sec pause · explode · 30 reps",
            rest: "10 sec",
            cue: "5 down, 1 pause at the bottom, then detonate. 30 reps. This is the hardest set in the program. You trained 3 weeks for this moment. Every rep is proof of what you built. Don't waste it.",
            harder: "Every pound you can manage with a perfect jump. If the landing breaks down, you are done for the set. Form is non-negotiable at max load.",
          },
          {
            name: "Explosive Clapping Push-Up",
            figure: "pushup",
            sets: 2,
            reps: "5 sec lower · max claps · 20 reps",
            rest: "10 sec",
            cue: "5-second lower, then generate maximum force. Max claps. No target — as many as you can physically get. Every rep is a test of how much power you've built over 4 weeks. Show it.",
            harder: "Heaviest load yet. 20 reps with a 5-second eccentric and max claps under weight. There is no version of this that is easy. That's the entire point.",
          },
          {
            name: "Alternating Jump Lunge",
            figure: "lunge",
            sets: 2,
            reps: "3 sec pause · 2 sec hold at top · 32 reps",
            rest: "10 sec",
            cue: "32 reps. 3-second pause at the bottom. 2-second hold at the top on one leg. 2 sets. 10 seconds rest. This will break athletes who didn't earn it. You earned it.",
            harder: "Max load. The 2-second single-leg top hold with weight is balance, strength, and mental fortitude combined. This is the most demanding lunge variation in the program.",
          },
          {
            name: "Weighted Tricep Dip",
            figure: "tricepDip",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · explode up · 20 reps",
            rest: "15 sec",
            cue: "4 seconds down. 2 second dead stop at the bottom. Then drive up as fast as possible. This is contrast training for your triceps. The pause kills momentum. Every rep has to be earned.",
            harder: "Max weight in your lap. The combination of tempo, pause, and load makes this one of the hardest bodyweight-adjacent upper body exercises you can do. Own it.",
          },
        ],
      },
      {
        session: 2,
        exercises: [
          {
            name: "Max Tension Plank",
            figure: "plank",
            sets: 2,
            reps: "2 min — squeeze or quit",
            rest: "10 sec",
            cue: "2 minutes. 2 times. 10 seconds between. This is not fitness — this is identity. Who are you when your body is screaming and quitting is an option? Answer that question every single set.",
            harder: "Heaviest plate. 2 minutes of total-body tension with load on your back. This is the final test. Pass it.",
          },
          {
            name: "Single-Leg Glute Bridge",
            figure: "gluteBridge",
            sets: 2,
            reps: "2 sec up · 5 sec down · 30 reps each leg",
            rest: "5 sec between legs · 10 sec between sets",
            cue: "30 reps. 5-second eccentrics. 2 sets. 5 seconds rest between legs. This is the last session of the program. Every rep matters. Your glutes have never worked this hard. Finish what you started.",
            harder: "Everything you've got on that hip. 30 reps with a 5-second eccentric under max load is elite-level posterior chain work. No excuses. No shortcuts. Final day.",
          },
          {
            name: "Sprint Mountain Climber",
            figure: "mountainClimber",
            sets: 2,
            reps: "75 sec all-out · 3 sec dead stop",
            rest: "10 sec",
            cue: "75 seconds. All-out. 2 times. This is the last thing standing between you and finishing the program. You do not pace this. You do not survive this. You dominate it. Go.",
            harder: "Highest elevation. Max incline. 75-second all-out sprint intervals with full shoulder and core loading. This is what 4 weeks of work built you for. Leave it all on the floor.",
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
