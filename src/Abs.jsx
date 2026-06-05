
import { useState } from "react";

const weeks = [
  {
    week: 1,
    label: "Load the Core",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Dead Bug",
            sets: 2,
            reps: "5 sec hold per rep · 10 reps each side",
            rest: "20 sec",
            cue: "Lower back PINNED to the floor. Extend opposite arm and leg, hold 5 seconds. The moment your spine lifts, the rep is over.",
            easier: "Bend the knee on the extending leg. Less leverage, same back position requirement.",
            harder: "Hold a weight plate overhead while extending. The load pulls your back up — fight it.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "45 sec hold",
            rest: "15 sec",
            cue: "Arms overhead, legs low, lower back flat. One rigid curved line. If your back arches, raise your legs until it flattens.",
            easier: "Bend your knees and tuck them toward your chest. Same position, less leverage.",
            harder: "Hold a weight plate with arms extended overhead.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "3 sec lower · 20 reps",
            rest: "20 sec",
            cue: "Explode up, touch your feet, lower for 3 full seconds. Do not drop fast — the eccentric is where abs are built.",
            easier: "Tuck your knees instead of keeping legs straight. Reduces the lever significantly.",
            harder: "Hold a plate in both hands overhead. 20 reps with weight and a 3-second lower is advanced.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "3 sec out · 2 sec pause · 10 reps",
            rest: "25 sec",
            cue: "Roll out for 3 seconds, pause 2 seconds fully extended. If your lower back sags, you went too far — pull back.",
            easier: "Reduce range of motion. Only roll to the point where you can hold the pause perfectly.",
            harder: "From your feet instead of knees. Standing rollouts are one of the hardest core exercises possible.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability",
        exercises: [
          {
            name: "Hanging Knee Raise",
            sets: 2,
            reps: "2 sec up · 3 sec down · 15 reps",
            rest: "20 sec",
            cue: "Dead hang. Drive knees up with your abs — not momentum. 2 seconds up, 3 seconds down. If you swing, start over.",
            easier: "From a seated position on a bench, drive knees to chest. Same pattern, no hanging required.",
            harder: "Straighten the legs. Hanging straight-leg raises with a 3-second eccentric are far harder.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "40 sec each side",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "Top leg on bench, bottom leg hanging. Obliques and adductors do everything. Hips drop even a millimeter — set is over.",
            easier: "Bottom knee on the floor instead of hanging. Reduces the lateral load significantly.",
            harder: "Add a hip dip — lower toward the floor and drive back up.",
          },
          {
            name: "Pallof Press Hold",
            sets: 2,
            reps: "5 sec hold per rep · 10 reps each side",
            rest: "20 sec",
            cue: "Band anchored to your side. Press out, hold 5 seconds. Your core fights rotation the whole time. No torso twist — if it twists, drop the weight.",
            easier: "Lighter band. Prioritize holding perfect position over resistance.",
            harder: "Heavier band or cable. Find the heaviest load where form stays perfect.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · full extension · 20 reps each side",
            rest: "20 sec",
            cue: "3 seconds to rotate and fully extend the opposite leg. Elbow reaches toward opposite knee with full trunk rotation. Not a speed exercise — control every rep.",
            easier: "Keep the non-working leg bent with foot on the floor. Focus on rotation quality.",
            harder: "Add a 2-second hold at full rotation before switching sides.",
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
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Tuck Crunch",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 20 reps",
            rest: "15 sec",
            cue: "Knees to chest, hands behind head elbows wide. Crunch chest toward knees, lower for 4 seconds. No neck pulling — hands just rest there.",
            easier: "Reduce to a 2-second lower. Same movement, less time under tension.",
            harder: "Hold a weight plate at your chest. 20 reps with a 4-second lower under load will destroy your upper abs.",
          },
          {
            name: "L-Sit Hold",
            sets: 2,
            reps: "Max hold — target 20 sec",
            rest: "20 sec",
            cue: "On parallel bars, press up and extend legs parallel to the floor. Hip flexors and abs working at maximum. Legs drop — set is over.",
            easier: "Tuck your knees instead of extending. Still very hard, much more achievable.",
            harder: "Target 30 seconds. Hold parallel longer each session.",
          },
          {
            name: "Jackknife",
            sets: 2,
            reps: "3 sec lower · 15 reps",
            rest: "20 sec",
            cue: "Flat on your back, arms overhead. Lift arms and legs simultaneously, meet in the middle, lower for 3 seconds. Do not bend your knees.",
            easier: "Bend your knees on the way up. Reduces the lever significantly.",
            harder: "Hold a light weight overhead. Even 5 lbs changes the demand completely.",
          },
          {
            name: "Dragon Flag Negative",
            sets: 2,
            reps: "5 sec lower · 6 reps",
            rest: "25 sec",
            cue: "On a bench, grip behind your head. Press body vertical — use a jump — then lower as one rigid unit for 5 seconds.",
            easier: "Bend your knees during the descent. Reduces the lever and makes each rep more manageable.",
            harder: "8-second descent with a completely rigid body.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability",
        exercises: [
          {
            name: "Side Plank with Thread",
            sets: 2,
            reps: "10 threads each side · 2 sec hold each",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "Full side plank. Thread top arm under your body, rotate, open back up and reach to ceiling. 2-second hold at both positions.",
            easier: "Drop the bottom knee to the floor. Same rotation pattern with more stability.",
            harder: "Hold a dumbbell in the threading hand. Even 5 lbs makes this dramatically harder.",
          },
          {
            name: "Windmill",
            sets: 2,
            reps: "8 reps each side · slow and controlled",
            rest: "20 sec",
            cue: "One arm overhead, feet wide. Hinge laterally, reach down your inner leg, keep the overhead arm vertical. Control every inch of the descent and return.",
            easier: "No weight overhead. Focus on the hinge pattern before adding load.",
            harder: "Hold a kettlebell or dumbbell overhead. Start light — technique breaks down fast.",
          },
          {
            name: "Russian Twist",
            sets: 2,
            reps: "3 sec rotation · 2 sec pause · 20 reps each side",
            rest: "20 sec",
            cue: "Seated, leaning back 45 degrees, feet elevated. Rotate fully for 3 seconds, hold for 2. Obliques loaded through full rotation with a held contraction.",
            easier: "Keep feet on the floor and reduce the lean. Builds the pattern before adding difficulty.",
            harder: "Hold a weight plate or medicine ball.",
          },
          {
            name: "Dead Bug with Rotation",
            sets: 2,
            reps: "5 sec hold · rotate toward extended arm · 10 reps each side",
            rest: "20 sec",
            cue: "Standard dead bug — at the extended position, rotate your torso slightly toward the extended arm before returning. Back stays flat. Non-negotiable.",
            easier: "Remove the rotation. Do standard dead bugs until the back position is locked in.",
            harder: "Hold a weight plate in both hands overhead with rotation.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Find the Edge",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Stir the Pot",
            sets: 2,
            reps: "10 circles each direction · slow",
            rest: "20 sec",
            cue: "Forearms on a stability ball, body in plank. Make slow circles — maintain total rigidity. Abs resist rotation, extension, and lateral movement simultaneously.",
            easier: "Forearms on a stable surface like a bench. Removes the instability element.",
            harder: "Larger, slower circles. Further your forearms travel, harder your abs fight.",
          },
          {
            name: "Hanging Knee Raise to Extension",
            sets: 2,
            reps: "2 sec up · 1 sec hold · 3 sec down · 12 reps",
            rest: "20 sec",
            cue: "Hang from a bar. Knees to chest, hold 1 second, extend legs to parallel, hold 1 second, lower for 3. Two peak positions per rep.",
            easier: "Skip the extension — just knee raises with the 3-second descent.",
            harder: "Extend straight to vertical — toes toward the ceiling.",
          },
          {
            name: "Reverse Crunch",
            sets: 2,
            reps: "3 sec lower · 1 sec pause at bottom · 20 reps",
            rest: "15 sec",
            cue: "Legs bent at 90 degrees. Drive hips off the floor with your lower abs — not your legs. 3 seconds down, 1-second pause with legs barely off the floor.",
            easier: "Keep feet closer to your body. Less lever, same muscle.",
            harder: "Extend legs fully during the lowering phase. Much longer lever for your lower abs.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "4 sec out · 3 sec pause · 10 reps",
            rest: "20 sec",
            cue: "4 seconds out, 3-second pause fully extended. If your lower back sags during the pause, you went too far.",
            easier: "Shorten the range. Only go as far as you can hold the pause perfectly.",
            harder: "Standing rollouts from your feet.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability",
        exercises: [
          {
            name: "Hanging Straight-Leg Raise",
            sets: 2,
            reps: "2 sec up · 5 sec down · 12 reps",
            rest: "20 sec",
            cue: "Straight legs from a dead hang. Raise to parallel or higher — abs only, no swing. 5-second descent. Bar swings — reset and start over.",
            easier: "Bend your knees. Hanging knee raises with the 5-second descent is still very demanding.",
            harder: "Add ankle weights. Even 2.5 lbs each changes the leverage dramatically.",
          },
          {
            name: "Copenhagen Plank with Hip Dip",
            sets: 2,
            reps: "10 hip dips each side · 3 sec lower · 2 sec hold at bottom",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "From Copenhagen plank, lower hip toward floor for 3 seconds, hold 2, drive back up. Full lateral flexion — not a static hold.",
            easier: "Reduce hip dip depth. Go halfway down before building to full range.",
            harder: "Hold a dumbbell on your hip during the dips.",
          },
          {
            name: "Pallof Press — Kneeling",
            sets: 2,
            reps: "7 sec hold per rep · 10 reps each side",
            rest: "15 sec",
            cue: "Kneeling position. Press the band out and hold for 7 seconds. Without your legs to stabilize, your obliques and deep core do everything.",
            easier: "Standing Pallof press. Add the kneeling position once standing is solid.",
            harder: "Single-knee kneeling — one knee up, one down.",
          },
          {
            name: "Toe Touch Crunch",
            sets: 2,
            reps: "3 sec up · 2 sec hold · 3 sec down · 15 reps",
            rest: "20 sec",
            cue: "Legs straight up. Reach hands toward toes for 3 seconds, hold 2 at the top, lower for 3. Upper abs under tension for 8 seconds per rep.",
            easier: "Bend your knees slightly. Reduces the demand on lower abs to hold the vertical position.",
            harder: "Hold a weight plate reaching toward your toes.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "Compound the Pain",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Pike to Plank",
            sets: 2,
            reps: "2 sec pike · 2 sec plank · 12 reps",
            rest: "20 sec",
            cue: "From high plank, drive hips up into pike, hold 2 seconds. Return to plank, hold 2. Two completely different core stimuli per rep. Keep it slow.",
            easier: "Reduce hold times to 1 second each. Build up to the 2-second holds.",
            harder: "Feet elevated on a box. Increases range and bodyweight your abs must control.",
          },
          {
            name: "Seated Knee Tuck",
            sets: 2,
            reps: "3 sec extend · 1 sec pause at extension · 20 reps",
            rest: "15 sec",
            cue: "On a bench edge, lean back slightly, hands gripping sides. Knees to chest, extend to parallel for 3 seconds, 1-second pause with legs barely off the floor.",
            easier: "Keep the legs bent during the extension. Shorter lever for your lower abs.",
            harder: "Ankle weights during the extensions.",
          },
          {
            name: "Weighted Sit-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 15 reps",
            rest: "20 sec",
            cue: "Weight plate at your chest. Lower for 4 seconds, 1-second pause fully extended at the bottom. Drive up with your abs — not your hip flexors.",
            easier: "No weight. Bodyweight sit-up with the 4-second lower is still significant time under tension.",
            harder: "Extend the weight overhead instead of at your chest. Much longer lever.",
          },
          {
            name: "Dragon Flag Negative",
            sets: 2,
            reps: "6 sec lower · 5 reps",
            rest: "25 sec",
            cue: "6-second descent. Rigid body, entire anterior chain braking your bodyweight. By rep 4 you will be shaking. That is the point.",
            easier: "Bend knees slightly during descent. Makes completion more achievable.",
            harder: "8-second descent with a completely rigid body.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability",
        exercises: [
          {
            name: "Side Plank with Row",
            sets: 2,
            reps: "12 rows each side · 1 sec hold at top",
            rest: "15 sec between sides · 15 sec between sets",
            cue: "Side plank with band or cable anchored in front. Row with top arm, hold 1 second at full row. Obliques hold the plank while back and bicep row.",
            easier: "Do the side plank hold without the row first. Add the row when the hold is rock solid.",
            harder: "Heavier band resistance. Find the weight where the plank is genuinely threatened by the row.",
          },
          {
            name: "Windmill",
            sets: 2,
            reps: "3 sec lower · 2 sec hold at bottom · 10 reps each side",
            rest: "20 sec",
            cue: "3-second descent, 2-second hold at the bottom. The held bottom is where the oblique is fully lengthened under load. Stay in that stretch.",
            easier: "No weight overhead. Master the hinge pattern before adding load.",
            harder: "Heavier weight overhead with the 2-second hold.",
          },
          {
            name: "Pallof Press — Walking",
            sets: 2,
            reps: "10 steps each direction · 3 sets each side",
            rest: "15 sec",
            cue: "Press out, hold, walk laterally 10 steps with arms fully extended. Resisting rotation while moving. Arms do not come in during the walk.",
            easier: "Reduce to 5 steps. Build up as your anti-rotation strength improves.",
            harder: "Heavier band or cable.",
          },
          {
            name: "Bicycle Crunch — Weighted",
            sets: 2,
            reps: "3 sec rotation · 3 sec hold · 20 reps each side",
            rest: "15 sec",
            cue: "Light weight behind your head — resting against your skull, not pulling your neck. 3-second rotation, 3-second hold at full trunk rotation.",
            easier: "Remove the weight. Bodyweight bicycle with the 3-second hold first.",
            harder: "Heavier weight, 4-second hold.",
          },
        ],
      },
    ],
  },
  {
    week: 5,
    label: "Breaking Ground",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Hollow Body Rocks",
            sets: 2,
            reps: "30 sec continuous rocking",
            rest: "15 sec",
            cue: "From hollow body hold, rock forward and backward without breaking the shape. If it collapses, pause, reset, continue. Never break the hollow.",
            easier: "Tuck your knees. Same rocking motion, less lever on your abs.",
            harder: "Hold a weight plate overhead during the rocks.",
          },
          {
            name: "Toes to Bar",
            sets: 2,
            reps: "2 sec up · 4 sec down · 10 reps",
            rest: "20 sec",
            cue: "Dead hang. Raise straight legs until toes touch the bar. 4-second descent. Zero swing — if the bar moves, reset.",
            easier: "Knees to chest instead of toes to bar. Still a demanding hanging movement.",
            harder: "6-second descent.",
          },
          {
            name: "V-Up to Tuck",
            sets: 2,
            reps: "Alternate V-Up and Tuck Crunch · 3 sec lower each · 20 reps total",
            rest: "15 sec",
            cue: "Alternate between a full V-Up and a Tuck Crunch. 3-second lower on every rep — no exceptions. Two different lengths, one set.",
            easier: "Do all tuck crunches instead of alternating. Add the V-ups once you can control the lower.",
            harder: "Hold a weight plate for the V-Ups only.",
          },
          {
            name: "Ab Wheel — Standing",
            sets: 2,
            reps: "5 sec out · 4 sec pause · 8 reps",
            rest: "25 sec",
            cue: "Standing rollouts. Roll until body is nearly parallel, hold 4 seconds. Entire body rigid, supported only by the wheel and toes. If you can't hold the pause, you went too far.",
            easier: "From your knees with the same tempo. Build up to standing over several weeks.",
            harder: "6-second pause at full extension.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability",
        exercises: [
          {
            name: "Copenhagen Plank — Full Protocol",
            sets: 2,
            reps: "30 sec hold · 8 hip dips · no rest between",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "30-second hold straight into 8 hip dips — no break. Hold pre-exhausts obliques, dips demand more from an already-fatigued lateral core.",
            easier: "20-second hold into 5 hip dips. Build up to the full protocol.",
            harder: "Dumbbell on hip during both the hold and dips.",
          },
          {
            name: "Half-Kneeling Cable Chop",
            sets: 2,
            reps: "3 sec chop · 1 sec hold · 12 reps each side",
            rest: "20 sec",
            cue: "Half-kneeling, cable anchored high. Chop diagonally from high to low for 3 seconds, hold at the bottom for 1. No leg assistance — core does everything.",
            easier: "Standing chop. Add the kneeling position once you've built the rotational pattern.",
            harder: "Heavier cable weight.",
          },
          {
            name: "Pallof Press — Single Leg",
            sets: 2,
            reps: "8 sec hold per rep · 8 reps each side",
            rest: "20 sec",
            cue: "Standing on one leg, press the band out and hold for 8 seconds. Resisting rotation AND managing single-leg balance simultaneously.",
            easier: "Both feet on the floor. Add single-leg once the standing version is solid.",
            harder: "Eyes closed, single leg, 8-second hold.",
          },
          {
            name: "Russian Twist — Weighted",
            sets: 2,
            reps: "3 sec rotation · 3 sec hold · 25 reps each side",
            rest: "15 sec",
            cue: "Weight plate, 45-degree lean, feet elevated. 3-second rotation to full range, 3-second hold at the furthest point. 25 reps each side.",
            easier: "Feet on the floor, no weight. Build up the volume before adding load.",
            harder: "Heavier weight, 4-second hold.",
          },
        ],
      },
    ],
  },
  {
    week: 6,
    label: "Final Form",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior — Peak Circuit",
        exercises: [
          {
            name: "Toes to Bar",
            sets: 2,
            reps: "2 sec up · 5 sec down · 12 reps",
            rest: "15 sec",
            cue: "12 reps, 5-second descent. Your abs control your entire bodyweight for 5 seconds every rep. Form does not drop on the final week.",
            easier: "Knees to chest with the 5-second descent. Same tempo, more achievable.",
            harder: "Ankle weights with the 5-second descent.",
          },
          {
            name: "Dragon Flag",
            sets: 2,
            reps: "Full rep — up and down · 6 sec lower · 5 reps",
            rest: "25 sec",
            cue: "Press up to vertical, lower for 6 full seconds. Not just the negative — full rep. Generate the strength to press up AND control the descent.",
            easier: "Jump to the top position instead of pressing. Focus on the controlled descent.",
            harder: "8-second descent on the full rep.",
          },
          {
            name: "Hollow Body Rocks to V-Up",
            sets: 2,
            reps: "15 sec rocking · straight into 10 V-Ups · no rest",
            rest: "20 sec",
            cue: "15 seconds of rocks directly into 10 V-Ups. No stopping. Abs pre-exhausted from the rocks before the V-Ups begin.",
            easier: "10 seconds of rocks into 6 V-Ups. Build up to the full protocol.",
            harder: "Hold a weight plate for both.",
          },
          {
            name: "Ab Wheel — Standing · Max Protocol",
            sets: 2,
            reps: "6 sec out · 5 sec pause · 10 reps",
            rest: "20 sec",
            cue: "6 seconds out, 5-second pause fully extended, 10 reps. 11 seconds of loading per rep at the hardest position possible. This is what 6 weeks built.",
            easier: "From knees with the same tempo. Still very demanding at this tempo.",
            harder: "Add a weight vest at full extension.",
          },
        ],
      },
      {
        session: "B",
        focus: "Rotation + Stability — Peak Circuit",
        exercises: [
          {
            name: "Toes to Bar with Rotation",
            sets: 2,
            reps: "Rotate hips at top · 5 sec down · 10 reps each side",
            rest: "20 sec",
            cue: "Toes to bar — at the top, rotate hips to one side before descending. Alternate sides. Obliques working at peak range simultaneously with the anterior chain.",
            easier: "Standard toes to bar with no rotation. Add the rotation once you can hit 10 clean reps.",
            harder: "Ankle weights with the 5-second rotational descent.",
          },
          {
            name: "Copenhagen Plank — Full Destruction",
            sets: 2,
            reps: "45 sec hold · 12 hip dips · no rest",
            rest: "10 sec between sides · 15 sec between sets",
            cue: "45-second hold into 12 hip dips. Highest Copenhagen volume of the program. When you cannot do another dip, do one more.",
            easier: "30-second hold into 8 hip dips. Build up to the full protocol.",
            harder: "Dumbbell on hip for the full protocol.",
          },
          {
            name: "Half-Kneeling Cable Chop — Heavy",
            sets: 2,
            reps: "3 sec chop · 2 sec hold · 15 reps each side",
            rest: "15 sec",
            cue: "Maximum weight you can control for 15 reps with a 2-second hold at the bottom. Highest rotational loading of the program. No compromises.",
            easier: "Lighter weight, reduce to 10 reps. Build back to 15 over multiple sessions.",
            harder: "Add a rotation at the bottom hold — twist an extra inch for 1 second before returning.",
          },
          {
            name: "Russian Twist — Final Protocol",
            sets: 2,
            reps: "3 sec rotation · 4 sec hold · 30 reps each side",
            rest: "10 sec",
            cue: "30 reps each side. 4-second holds. Maximum weight. This is the last movement. Leave everything on the floor.",
            easier: "20 reps each side with a 3-second hold. Work up to 30.",
            harder: "Heaviest weight you've used all program. Empty the tank completely.",
          },
        ],
      },
    ],
  },
];

export default function AbsProgram() {
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

        .week-btn { flex:1; padding:10px 4px; background:none; border:none; border-bottom:2px solid transparent; font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#999; cursor:pointer; transition:all 0.2s; }
        .week-btn.active { color:#111; border-bottom-color:#7a9e7e; }

        .session-btn { flex:1; padding:10px; background:#fff; border:1px solid #e0e0e0; font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#888; cursor:pointer; transition:all 0.2s; }
        .session-btn:first-child { border-radius:6px 0 0 6px; }
        .session-btn:last-child { border-radius:0 6px 6px 0; }
        .session-btn.active { background:#2b2e2b; color:#fff; border-color:#2b2e2b; }

        .exercise-card { background:#fff; border:1px solid #e8e8e8; border-radius:10px; overflow:hidden; margin-bottom:12px; transition:box-shadow 0.2s; }
        .exercise-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.08); }

        .exercise-header { display:flex; align-items:center; justify-content:space-between; padding:16px 18px; cursor:pointer; }
        .exercise-body { border-top:1px solid #f0f0f0; padding:20px 18px; background:#fafafa; }

        .stat-box { text-align:center; padding:10px 14px; background:#f0f0f0; border-radius:6px; min-width:64px; }
        .stat-label { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#888; font-weight:600; margin-bottom:4px; }
        .stat-value { font-family:'Barlow Condensed',sans-serif; font-size:15px; font-weight:700; color:#111; line-height:1; }

        .cue-box { background:#f0f5f1; border-left:3px solid #7a9e7e; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; font-weight:400; margin-top:12px; }
        .easier-box { background:#f5f9f5; border-left:3px solid #4a7a50; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; font-weight:400; margin-top:8px; }
        .harder-box { background:#1a1a1a; border-left:3px solid #c0392b; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#ccc; line-height:1.6; font-weight:400; margin-top:8px; }

        .chevron { transition:transform 0.25s ease; color:#bbb; font-size:18px; }
        .chevron.open { transform:rotate(180deg); }

        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .exercise-body { animation:fadeIn 0.25s ease; }
      `}</style>

      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Abs</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>6 Weeks · 4x/Week · Under 20 Min · Pure Core · Floor + Hanging</div>
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
              Session {s.session} — {s.focus}
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
                <div style={{ width: "100%", background: "#1a1a1a", borderRadius: 8, aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 14, gap: 8 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #7a9e7e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid #7a9e7e", marginLeft: 4 }} />
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#555", fontWeight: 600 }}>Video Coming Soon</div>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <div className="stat-box">
                    <div className="stat-label">Sets</div>
                    <div className="stat-value">{ex.sets}</div>
                  </div>
                  <div className="stat-box" style={{ flex: 1, minWidth: 120 }}>
                    <div className="stat-label">Work</div>
                    <div className="stat-value" style={{ fontSize: 12 }}>{ex.reps}</div>
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
