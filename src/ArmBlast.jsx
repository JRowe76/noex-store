import { useState } from "react";

const weeks = [
  {
    week: 1,
    label: "Establish",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Close-Grip Push-Up",
            sets: 2,
            reps: "3 sec lower · 1 sec pause · 15 reps",
            rest: "20 sec",
            cue: "Hands directly under shoulders, thumbs nearly touching. 3 seconds down, 1-second dead stop at the bottom. Elbows flare — your chest is doing the work. Lock them in.",
            easier: "Hands slightly wider than close grip. Build the tricep pattern before going full close-grip.",
            harder: "Load a backpack or wear a vest. Even 15 lbs changes this completely.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "3 sec lower · 12 reps",
            rest: "20 sec",
            cue: "Hips high, inverted V shape. Lower your head toward the floor — crown first, not face first. 3 seconds down. Hips drop during descent — set is over.",
            easier: "Reduce the hip height. Less vertical angle means less shoulder demand.",
            harder: "Elevate your feet on a chair or box. The higher your feet, the more shoulder dominant it becomes.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 15 reps",
            rest: "20 sec",
            cue: "4 seconds down, 2-second pause at the bottom. Stay upright — leaning forward brings your chest in. Elbows track straight back.",
            easier: "Bend your knees and keep feet flat on the floor. Reduces the load significantly.",
            harder: "Weight plate in your lap. A loaded dip with this tempo is one of the most effective tricep exercises possible.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "3 sec lower · max reps",
            rest: "25 sec",
            cue: "Hands form a diamond under your sternum. Elbows tight to your body the entire time. 3-second lower. Set ends when form breaks — not when it burns.",
            easier: "Hands slightly closer than shoulder width. Full diamond is the goal — build up to it.",
            harder: "Elevated feet or loaded backpack. Diamonds with feet on a box shift even more load onto the triceps.",
          },
        ],
      },
      {
        session: "B",
        focus: "Biceps + Upper Back",
        exercises: [
          {
            name: "Chin-Up",
            sets: 2,
            reps: "3 sec lower · 1 sec hang · 8 reps",
            rest: "25 sec",
            cue: "Palms face you. Pull chest to the bar — not chin over it. 3-second descent to dead hang, 1 second hanging before next rep. The hang is not rest.",
            easier: "Use a resistance band for assistance. Focus on the pulling pattern and full range.",
            harder: "Add a weight belt or hold a dumbbell between your feet.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "3 sec lower · 1 sec hold at top · 15 reps",
            rest: "20 sec",
            cue: "Body straight head to heel. Pull chest to the bar — not chin. 1-second hold at the top, shoulder blades squeezed hard. 3 seconds down.",
            easier: "Higher bar position — more upright body angle means less load.",
            harder: "Feet elevated on a box or chair. The more horizontal your body, the harder the row.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "4 sec lower · 1 sec hold at top · 12 reps each arm",
            rest: "15 sec",
            cue: "Neutral grip — thumbs up. Curl to shoulder, hold 1 second, lower for 4 full seconds. 4-second lower is where thickness is built.",
            easier: "Lighter weight. If the lower gets faster than 4 seconds, drop down.",
            harder: "Heaviest dumbbells you can control through the full 4-second eccentric.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec squeeze at top · 10 reps each arm",
            rest: "15 sec",
            cue: "Elbow locked against inner thigh. Curl up, squeeze hard 2 seconds, lower for 5. Zero momentum — every inch is your bicep doing pure work.",
            easier: "Lighter weight, reduce squeeze to 1 second. Build up the tempo before adding load.",
            harder: "Heavier dumbbell, 3-second squeeze. A peak contraction hold with heavy weight will make your bicep cramp.",
          },
        ],
      },
      {
        session: "C",
        focus: "Full Arm Burnout",
        exercises: [
          {
            name: "21s Curl",
            sets: 2,
            reps: "7 bottom half · 7 top half · 7 full · no rest between",
            rest: "30 sec",
            cue: "7 reps bottom half only, 7 top half only, 7 full — no stopping. Partial ranges isolate peak contraction and bottom stretch separately before combining. By rep 21 you're spent.",
            easier: "Lighter weight. The partial ranges are more demanding than they look — start conservative.",
            harder: "Heavier weight for the bottom partials, slightly less for the top.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps — stop at form failure",
            rest: "25 sec",
            cue: "Close grip, elbows tight, full range. Go until form breaks — not until it burns. Elbows flare, back arches, or descent uncontrolled — set is done.",
            easier: "From your knees. Same form requirements, less bodyweight to manage.",
            harder: "Loaded backpack, max reps to failure. Even 10 lbs will cut your rep count in half.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "4 sec lower · 1 sec stretch · 12 reps",
            rest: "20 sec",
            cue: "Both hands on one dumbbell overhead, arms fully extended. Lower behind head for 4 seconds — full stretch at the bottom, hold 1 second. Hits the long head most exercises miss.",
            easier: "Lighter weight and reduce range slightly. Find where you can hold the stretch position without discomfort.",
            harder: "Heavier dumbbell with a 2-second stretch pause.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 30 sec hold",
            rest: "20 sec",
            cue: "Raise to parallel, hold 10 seconds. Lower. Repeat 10 times. Then hold parallel for 30 continuous seconds. Do not let the arms drop.",
            easier: "Lighter dumbbells. Reduce the hold to 5 seconds per rep, then build up.",
            harder: "Heavier dumbbells for the holds.",
          },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "New Angles",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Bench Dip",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 15 reps",
            rest: "20 sec",
            cue: "Hands on bench behind you, legs extended straight. 4 seconds down until upper arms are parallel — no further. 2-second pause. Keep back close to the bench.",
            easier: "Bend your knees at 90 degrees. Reduces the load significantly.",
            harder: "Elevate your feet on another bench. Maximizes the tricep load, removes all leg assistance.",
          },
          {
            name: "Wall Handstand Hold",
            sets: 2,
            reps: "Max hold — target 30 sec",
            rest: "25 sec",
            cue: "Kick up to a handstand against the wall. Full lockout — arms completely straight, core tight, glutes squeezed. Hold until form breaks.",
            easier: "Pike hold with hands on the floor and feet on a chair. Similar shoulder loading, much more accessible.",
            harder: "Handstand push-up negative — lower your head toward the floor for 5 seconds.",
          },
          {
            name: "Overhead Tricep Extension — Single Arm",
            sets: 2,
            reps: "4 sec lower · 2 sec stretch · 12 reps each arm",
            rest: "15 sec",
            cue: "One arm overhead, lower behind head for 4 seconds, hold the stretch 2 seconds. Single arm — you can't compensate with the stronger side.",
            easier: "Reduce range of motion. Only go as deep as you can hold the stretch without pain.",
            harder: "Heavier dumbbell than you'd use two-handed. Push the weight on the single arm version.",
          },
          {
            name: "Arnold Press",
            sets: 2,
            reps: "3 sec lower · 1 sec pause at bottom · 12 reps",
            rest: "20 sec",
            cue: "Palms facing you at shoulder height, press up while rotating so palms face forward at the top. 3-second lower reversing the rotation. Don't rush the rotation — it's the whole point.",
            easier: "Lighter weight. Focus on the rotation quality before adding load.",
            harder: "Heavier dumbbells with a 2-second pause at the bottom.",
          },
        ],
      },
      {
        session: "B",
        focus: "Biceps + Upper Back",
        exercises: [
          {
            name: "Neutral Grip Pull-Up",
            sets: 2,
            reps: "3 sec lower · 1 sec hang · 8 reps",
            rest: "25 sec",
            cue: "Palms facing each other on parallel handles. Pull chest between the handles — full range. 3-second descent to dead hang.",
            easier: "Resistance band for assistance. Full range of motion is the priority.",
            harder: "Weighted with a belt or backpack.",
          },
          {
            name: "TRX or Ring Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at chest · 12 reps",
            rest: "20 sec",
            cue: "Rings or TRX, body at an angle. 2-second hold at chest with shoulder blades fully retracted. 4-second lower. Hips sag — set is over.",
            easier: "More upright body position. Less horizontal means less load.",
            harder: "More horizontal body position and add a turn-out at the top — rotate palms to face the ceiling at full contraction.",
          },
          {
            name: "Zottman Curl",
            sets: 2,
            reps: "Curl supinated · lower pronated · 4 sec lower · 12 reps each arm",
            rest: "15 sec",
            cue: "Curl up with palms facing up. At the top, rotate grip so palms face down, then lower for 4 seconds. Two muscle groups in one rep.",
            easier: "Slower rotation at the top — take your time flipping the grip before lowering.",
            harder: "Heavier weight than your standard curl. Both the bicep and brachioradialis get pushed.",
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec squeeze · 10 reps each arm",
            rest: "15 sec",
            cue: "On an incline bench, arm hanging straight down. Curl up, 2-second squeeze at the top, lower for 5 seconds back to full stretch. Most complete bicep stretch without a cable.",
            easier: "Less steep incline. Reduces the stretch at the bottom.",
            harder: "Steeper incline — more vertical means deeper stretch under load.",
          },
        ],
      },
      {
        session: "C",
        focus: "Full Arm Burnout",
        exercises: [
          {
            name: "Spider Curl",
            sets: 2,
            reps: "4 sec lower · 2 sec squeeze · 12 reps each arm",
            rest: "25 sec",
            cue: "Lying face down on an incline bench, arm hanging straight down. Curl up — arm stays perpendicular to the floor the entire time. 4-second lower to full stretch, 2-second squeeze at the top.",
            easier: "Lighter weight. Shoulder is eliminated from this movement so your bicep does everything — start conservative.",
            harder: "Heavier dumbbell. With the shoulder out, your bicep is the only thing working — push the load.",
          },
          {
            name: "Diamond Push-Up Burnout",
            sets: 2,
            reps: "Max reps · then 10 pulse reps",
            rest: "20 sec",
            cue: "Go to form failure on diamonds — then immediately do 10 small pulse reps at the bottom half of the range. Those 10 pulses are harder than any full rep before them.",
            easier: "From your knees to failure, then 10 pulses from your knees.",
            harder: "Loaded backpack to failure, drop the pack, full reps to failure again, then 10 pulses.",
          },
          {
            name: "Skull Crusher",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at forehead · 12 reps",
            rest: "20 sec",
            cue: "Lying on your back, dumbbells in each hand. Lower toward your forehead for 4 seconds — elbows point straight up the entire time. 1-second pause at the forehead. Drive back up.",
            easier: "Lighter weight. The pause at the forehead exposes any weakness — reduce load before reducing range.",
            harder: "Heavier weight, 2-second pause at the forehead.",
          },
          {
            name: "Arnold Press Hold",
            sets: 2,
            reps: "10 full Arnolds · then 30 sec isometric hold at parallel",
            rest: "15 sec",
            cue: "10 full Arnold press reps, then lower to arms at 90 degrees and hold for 30 seconds. Anterior and lateral deltoids pre-exhausted then held at their hardest position.",
            easier: "Lighter dumbbells for both the Arnolds and the hold.",
            harder: "Heavier dumbbells for the Arnolds, same weight for the hold.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Raise the Bar",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Close-Grip Push-Up",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 20 reps",
            rest: "15 sec",
            cue: "Back from week 1 — 4-second lower, 2-second pause, 20 reps. More volume, longer tempo. Beat your week 1 numbers.",
            easier: "Keep the 3-second lower from week 1. Add the extra second only when you can complete all 20 reps cleanly.",
            harder: "More weight than week 1. The 4-second lower with load and a 2-second pause is a different exercise.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 15 reps",
            rest: "15 sec",
            cue: "15 reps with a pause at the bottom. Head near the floor, 1 full second — no bouncing. Shoulder generates force from a dead stop.",
            easier: "Reduce pause to a brief touch. Build up to the full 1-second hold.",
            harder: "Feet elevated higher than week 1. Work toward wall handstand push-ups progressively.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "15 sec",
            cue: "5-second lower this week. 7 seconds of loading per rep combined with the pause. Your triceps will be completely done.",
            easier: "Keep 4-second lower from week 1. Add the extra second when you can complete all reps without losing tempo.",
            harder: "Heavier load than week 1. 5-second lower with load is advanced.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause · max reps",
            rest: "20 sec",
            cue: "Add a 1-second pause at the bottom this week. Dead stop, no momentum, then press. Max reps will be lower than week 1 — that's correct.",
            easier: "Remove the pause. Match week 1 reps before adding the pause.",
            harder: "Elevated feet and loaded backpack with pause reps.",
          },
        ],
      },
      {
        session: "B",
        focus: "Biceps + Upper Back",
        exercises: [
          {
            name: "Chin-Up",
            sets: 2,
            reps: "4 sec lower · 2 sec hang · 10 reps",
            rest: "20 sec",
            cue: "Back from week 1 — 4-second eccentric, 2-second hang, 10 reps. By rep 8 you'll be fighting the descent. Do not drop faster.",
            easier: "Keep the 3-second lower from week 1. Add the extra second when 8 reps feels controlled.",
            harder: "More weight than week 1. 10 reps of weighted chin-ups at this tempo is elite.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at top · 18 reps",
            rest: "15 sec",
            cue: "18 reps this week — 3 more than week 1. 2-second hold, shoulder blades fully retracted. 4-second lower. Maintain hold quality on every single rep.",
            easier: "Keep 15 reps from week 1. Add reps only when the hold quality stays consistent throughout.",
            harder: "Feet elevated higher than week 1. More horizontal, more load.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec hold at top · 12 reps each arm",
            rest: "10 sec",
            cue: "5-second eccentric this week. 2-second hold at the top. Arm thickness gets built here — not just bicep peak.",
            easier: "Keep 4-second lower from week 1. Extend the eccentric only when the previous tempo is locked in.",
            harder: "Heaviest weight you can lower for exactly 5 seconds per rep.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec squeeze · 10 reps each arm",
            rest: "10 sec",
            cue: "3-second squeeze at the top this week. Peak contraction under load for 3 full seconds — you cannot replicate this with any tempo shortcut.",
            easier: "Keep 2-second squeeze from week 1. Add the extra second when the bicep is ready.",
            harder: "Heavier weight, 3-second squeeze. Peak contraction hold with heavy weight is the most effective bicep isolation in the program.",
          },
        ],
      },
      {
        session: "C",
        focus: "Full Arm Burnout",
        exercises: [
          {
            name: "21s Curl",
            sets: 2,
            reps: "7 bottom · 7 top · 7 full · 2 sec squeeze every rep",
            rest: "20 sec",
            cue: "Back from week 1 — with a 2-second squeeze on every single rep. 21 squeezes. Your biceps will be cramping by set 2.",
            easier: "Keep week 1 protocol — no squeeze. Add the squeeze once the 21 reps themselves feel manageable.",
            harder: "Heavier weight than week 1 with the 2-second squeeze.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps · then 10 more after failure",
            rest: "15 sec",
            cue: "Hit your max reps — where form breaks. Take 3 seconds. Do 10 more. Those 10 after failure are where the adaptation lives.",
            easier: "From your knees to failure, then 5 more from your knees.",
            harder: "Loaded backpack to failure, then drop the pack and do 10 more.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "5 sec lower · 2 sec stretch · 12 reps",
            rest: "15 sec",
            cue: "2-second stretch at the bottom this week. Tricep long head fully stretched and loaded for 2 seconds per rep. This is where arm thickness gets built.",
            easier: "Keep 1-second stretch from week 1. Add the extra second when the position feels comfortable.",
            harder: "Heavier weight than week 1, 2-second stretch.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 45 sec hold",
            rest: "15 sec",
            cue: "45-second final hold this week — 15 more than week 1. When your delts fail before 45 seconds is up — hold harder.",
            easier: "Keep 30-second hold from week 1. Build up 5 seconds at a time.",
            harder: "Heavier dumbbells than week 1. The 45-second hold with increased load is a shoulder event.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "Total Destruction",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Bench Dip",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 15 reps",
            rest: "15 sec",
            cue: "Back from week 2 — with a 3-second pause at the bottom. 5-second lower into a 3-second hold at the lowest point. Your lateral tricep head will be completely destroyed.",
            easier: "Keep 2-second pause from week 2. Add the extra second when you can complete all 15 reps.",
            harder: "Feet elevated, max load. The 3-second pause with elevation and load is the peak of this movement.",
          },
          {
            name: "Wall Handstand Hold",
            sets: 2,
            reps: "Max hold · then 3 negatives",
            rest: "25 sec",
            cue: "Hold until failure, then immediately do 3 handstand push-up negatives — lower your head to the floor as slowly as possible on each.",
            easier: "Hold only — no negatives. Build the isometric strength before adding the eccentric.",
            harder: "8-second descent on each negative. The slower, the stronger.",
          },
          {
            name: "Overhead Tricep Extension — Single Arm",
            sets: 2,
            reps: "5 sec lower · 3 sec stretch · 12 reps each arm",
            rest: "15 sec",
            cue: "Back from week 2 — 3-second stretch at the bottom. Tricep long head under sustained load at full stretch for 3 seconds per rep.",
            easier: "Keep 2-second stretch from week 2. Add the extra second when the position is fully comfortable.",
            harder: "Heaviest single-arm weight yet. This is the ceiling of overhead tricep loading.",
          },
          {
            name: "Arnold Press",
            sets: 2,
            reps: "4 sec lower · 2 sec pause at bottom · 15 reps",
            rest: "15 sec",
            cue: "15 reps this week — 3 more than week 2. 4-second lower with the rotation. 2-second pause at the bottom. Most demanding shoulder session of the program.",
            easier: "Keep 12 reps from week 2. Add reps only when the 4-second lower and pause feel controlled.",
            harder: "Heaviest dumbbells yet with the 2-second pause.",
          },
        ],
      },
      {
        session: "B",
        focus: "Biceps + Upper Back",
        exercises: [
          {
            name: "Neutral Grip Pull-Up",
            sets: 2,
            reps: "5 sec lower · 2 sec hang · max reps",
            rest: "15 sec",
            cue: "Max reps this week. 5-second lower, 2-second hang. Every rep is 7 seconds of work. Rep 1 tempo must match your last rep — if it doesn't, the set is over.",
            easier: "Keep 8 reps from week 2 with the same tempo. Hit max reps only when the tempo is consistent throughout.",
            harder: "Heaviest weight possible for max reps with full tempo.",
          },
          {
            name: "TRX or Ring Row",
            sets: 2,
            reps: "5 sec lower · 2 sec hold · turn-out · max reps",
            rest: "15 sec",
            cue: "Add the turn-out at the top — rotate palms to ceiling at full contraction for 1 second before lowering. Max reps with 5-second lower, 2-second hold, and turn-out.",
            easier: "Remove the turn-out. Add it back once max reps at the 5-second lower and 2-second hold is consistent.",
            harder: "Maximum horizontal body position with the turn-out and full tempo.",
          },
          {
            name: "Zottman Curl",
            sets: 2,
            reps: "Supinated up · pronated down · 5 sec lower · 15 reps each arm",
            rest: "10 sec",
            cue: "15 reps this week — 3 more than week 2. 5-second pronated descent. Brachioradialis loaded for 5 full seconds on every rep.",
            easier: "Keep 12 reps from week 2. Add reps only when the 5-second lower feels fully controlled.",
            harder: "Heaviest weight yet. 15 Zottman reps at this tempo is one of the most complete arm exercises possible.",
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 2,
            reps: "6 sec lower · 3 sec squeeze · 10 reps each arm",
            rest: "10 sec",
            cue: "6-second eccentric this week. Deepest loaded stretch of the program. 3-second squeeze at the top. Most complete bicep stimulus in the program.",
            easier: "Keep 5-second lower from week 2. Add the extra second when the full range feels comfortable.",
            harder: "Steeper incline and heavier weight. 6-second lower from a steep incline under maximum load is the ceiling.",
          },
        ],
      },
      {
        session: "C",
        focus: "Final Arm Destruction",
        exercises: [
          {
            name: "Spider Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec squeeze · 15 reps each arm",
            rest: "20 sec",
            cue: "Back from week 2 — heavier, more reps, longer squeeze. 15 reps, 5-second lower, 3-second squeeze. Peak of isolated bicep work in the program.",
            easier: "Keep 12 reps from week 2. Add reps only when the full tempo is locked in.",
            harder: "Absolute max weight for 15 reps with full tempo. This is the hardest isolated bicep protocol in the program.",
          },
          {
            name: "Diamond Push-Up Burnout",
            sets: 2,
            reps: "Max reps · 15 pulse reps · no rest",
            rest: "10 sec",
            cue: "Max reps to failure, then 15 pulse reps at the bottom. 5 more pulses than week 2. The last 5 pulses of a destroyed tricep are where the final adaptation happens.",
            easier: "10 pulses instead of 15. Build up to the full protocol.",
            harder: "Max load to failure, drop pack, full reps to failure, 15 pulses.",
          },
          {
            name: "Skull Crusher",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "15 sec",
            cue: "Back from week 2 — 15 reps with a 2-second pause at the forehead. Dead stop at the most loaded position. 5-second lower, 2-second pause, 15 reps.",
            easier: "Keep 12 reps from week 2. Add reps only when the 2-second pause feels controlled.",
            harder: "Heavier weight, 2-second pause. 15 reps at this tempo under maximum load is the ceiling.",
          },
          {
            name: "Arnold Press Hold",
            sets: 2,
            reps: "12 full Arnolds · then 45 sec isometric hold",
            rest: "10 sec",
            cue: "12 Arnold reps — 2 more than week 2 — then 45 seconds at parallel. More pre-exhausted, longer hold. The final 10 seconds is everything. Do not drop.",
            easier: "Keep 10 reps from week 2 and 30-second hold. Build up gradually.",
            harder: "Heaviest dumbbells of the program. The 45-second hold after 12 heavy Arnolds is the peak of shoulder isolation. This is the last set. Leave it all.",
          },
        ],
      },
    ],
  },
];

export default function ArmBlast() {
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

        .week-btn { flex:1; padding:10px 4px; background:none; border:none; border-bottom:2px solid transparent; font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#999; cursor:pointer; transition:all 0.2s; }
        .week-btn.active { color:#111; border-bottom-color:#7a9e7e; }

        .session-btn { flex:1; padding:10px 6px; background:#fff; border:1px solid #e0e0e0; font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#888; cursor:pointer; transition:all 0.2s; text-align:center; }
        .session-btn:first-child { border-radius:6px 0 0 6px; }
        .session-btn:last-child { border-radius:0 6px 6px 0; }
        .session-btn.active { background:#2b2e2b; color:#fff; border-color:#2b2e2b; }

        .exercise-card { background:#fff; border:1px solid #e8e8e8; border-radius:10px; overflow:hidden; margin-bottom:12px; transition:box-shadow 0.2s; }
        .exercise-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.08); }

        .exercise-header { display:flex; align-items:center; justify-content:space-between; padding:16px 18px; cursor:pointer; }
        .exercise-body { border-top:1px solid #f0f0f0; padding:20px 18px; background:#fafafa; }

        .stat-box { text-align:center; padding:10px 14px; background:#f0f0f0; border-radius:6px; min-width:60px; }
        .stat-label { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#888; font-weight:600; margin-bottom:4px; }
        .stat-value { font-family:'Barlow Condensed',sans-serif; font-size:15px; font-weight:700; color:#111; line-height:1; }

        .cue-box { background:#f0f5f1; border-left:3px solid #7a9e7e; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; font-weight:400; margin-top:12px; }
        .easier-box { background:#f5f9f5; border-left:3px solid #4a7a50; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; font-weight:400; margin-top:8px; }
        .harder-box { background:#1a1a1a; border-left:3px solid #c0392b; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#ccc; line-height:1.6; font-weight:400; margin-top:8px; }

        .chevron { transition:transform 0.25s ease; color:#bbb; font-size:18px; flex-shrink:0; }
        .chevron.open { transform:rotate(180deg); }

        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .exercise-body { animation:fadeIn 0.25s ease; }
      `}</style>

      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Arm Blast</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>4 Weeks · 3x/Week · Under 20 Min · Arms & Shoulders · Athlete Level</div>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #eee", display: "flex", padding: "0 8px" }}>
        {weeks.map((w, i) => (
          <button key={i} className={`week-btn ${activeWeek === i ? "active" : ""}`}
            onClick={() => { setActiveWeek(i); setActiveSession(0); setExpandedEx(null); }}>
            <div>Wk {w.week}</div>
            <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: 1, color: activeWeek === i ? "#7a9e7e" : "#bbb" }}>{w.label}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
          {currentWeek.sessions.map((s, i) => (
            <button key={i} className={`session-btn ${activeSession === i ? "active" : ""}`}
              onClick={() => { setActiveSession(i); setExpandedEx(null); }}>
              <div>Session {s.session}</div>
              <div style={{ fontSize: 9, opacity: 0.7, marginTop: 2 }}>{s.focus}</div>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: -0.5 }}>
            Week {currentWeek.week} — {currentWeek.label}
          </div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1 }}>{currentSession.exercises.length} exercises</div>
        </div>

        {currentSession.exercises.map((ex, i) => (
          <div key={i} className="exercise-card">
            <div className="exercise-header" onClick={() => setExpandedEx(expandedEx === i ? null : i)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f0f5f1", border: "1.5px solid #7a9e7e", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, color: "#7a9e7e", flexShrink: 0 }}>{i + 1}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 700, textTransform: "uppercase", letterSpacing: -0.5 }}>{ex.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{ex.sets} sets · {ex.reps}</div>
                </div>
              </div>
              <span className={`chevron ${expandedEx === i ? "open" : ""}`}>▾</span>
            </div>

            {expandedEx === i && (
              <div className="exercise-body">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <div className="stat-box">
                    <div className="stat-label">Sets</div>
                    <div className="stat-value">{ex.sets}</div>
                  </div>
                  <div className="stat-box" style={{ flex: 1, minWidth: 120 }}>
                    <div className="stat-label">Work</div>
                    <div className="stat-value" style={{ fontSize: 11 }}>{ex.reps}</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Rest</div>
                    <div className="stat-value" style={{ fontSize: 11 }}>{ex.rest}</div>
                  </div>
                </div>

                <div className="cue-box">
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a9e7e", fontWeight: 700, marginBottom: 5 }}>Coach Cue</div>
                  {ex.cue}
                </div>

                <div className="easier-box">
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4a7a50", fontWeight: 700, marginBottom: 5 }}>↓ Make It Easier</div>
                  {ex.easier}
                </div>

                <div className="harder-box">
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#c0392b", fontWeight: 700, marginBottom: 5 }}>↑ Make It Harder</div>
                  {ex.harder}
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
