import { useState } from "react";

// 8 Weeks · 3x/Week · Under 20 Min · Pure Lower Body
// Session A = Strength (hip, glute, hamstring, quad)
// Session B = Tendon Health + Calf (Achilles, tibialis, Nordic)
// Session C = Explosive Power (box, jumps, reactive)

const weeks = [
  {
    week: 1,
    label: "Build the Base",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "4 sec lower · 1 sec pause · 10 reps each leg",
            rest: "20 sec",
            cue: "One leg, flat back, hinge at the hip. 4 seconds down, 1-second pause. Your hamstring is the spring — load it slowly.",
            easier: "Use a wall or chair for light balance support. Focus on the hinge pattern before going unsupported.",
            harder: "Hold a dumbbell in the opposite hand. Contralateral load forces your hip stabilizers to work harder on every rep.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 12 reps each leg",
            rest: "20 sec",
            cue: "Rear foot elevated, front shin vertical. 4 seconds down, 2-second pause at the bottom. Quad, glute, hip flexor — all loaded.",
            easier: "Reduce elevation height or bring the pause to 1 second. Build the position before extending the hold.",
            harder: "Hold dumbbells at your sides. Load amplifies quad and glute demand on every rep.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "20 steps each direction · stay low",
            rest: "15 sec",
            cue: "Band around ankles, slight squat the entire time. Every step fires your glute medius — the muscle that controls hip drop when you run.",
            easier: "Move the band above the knees. Less resistance, same activation pattern. Build up to ankle level.",
            harder: "Heavier resistance band plus a squat pulse between every step.",
          },
          {
            name: "Glute Bridge March",
            sets: 2,
            reps: "2 sec hold each leg · 20 reps total",
            rest: "15 sec",
            cue: "Hips up, hold that height. March by lifting one foot — hold 2 seconds each. Resist the rotation every single time.",
            easier: "Keep both feet on the floor and do a standard glute bridge hold. Add the march once you can maintain height consistently.",
            harder: "Resistance band above the knees. Forces your glutes to work harder against the caving pressure.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise",
            sets: 2,
            reps: "3 sec up · 4 sec down · 15 reps each leg",
            rest: "20 sec",
            cue: "On a step, full range — heel below edge on the way down. 3 seconds up, 4 seconds down. Slow eccentrics protect your Achilles. This is non-negotiable for runners.",
            easier: "Do both legs simultaneously on the step. Build single-leg strength before going fully unilateral.",
            harder: "Hold a dumbbell in the same-side hand. Weighted with a 4-second eccentric is a clinical tendon-loading protocol.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "As slow as possible · 6 reps",
            rest: "30 sec",
            cue: "Feet anchored, lower as slowly as possible — hands catch you at the bottom. This reduces hamstring injury risk by over 50% in runners. 6 reps. Make them count.",
            easier: "Use your hands more aggressively on the way down to assist. Gradually use less help as your hamstrings get stronger.",
            harder: "Aim for a 10-second descent without hands. That's the elite standard.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "3 sec up · 3 sec down · 20 reps",
            rest: "15 sec",
            cue: "Back against a wall, heels 12 inches out. Raise toes as high as possible — 3 seconds each way. Trains the muscle that prevents shin splints.",
            easier: "Reduce to a 2-second tempo. Same movement, less time under tension — build from here.",
            harder: "Resistance band around the top of your foot anchored low. Direct resistance against your dorsiflexion.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "10 reps · 3 sec hold at top",
            rest: "20 sec",
            cue: "Deep wall sit, thighs parallel. Raise both heels and hold 3 seconds at the top. Loads your soleus — the deep calf muscle that carries you through long miles.",
            easier: "Reduce wall sit depth — a higher angle means less quad demand and lets you focus on the calf raise itself.",
            harder: "Resistance band across your thighs pressing down. Dramatically increases soleus tension.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Box Jump",
            sets: 2,
            reps: "5 reps · full reset between reps",
            rest: "30 sec",
            cue: "Step off, reset fully, then jump. No bounce. Maximum height, soft landing, absorb through the hips. Every rep is independent.",
            easier: "Step up onto the box instead of jumping. Focus on landing mechanics before adding the explosive element.",
            harder: "Higher box. Go up 4 inches when you can land 5 perfect reps without wobble.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "8 hops each leg · 2 sec stick",
            rest: "20 sec",
            cue: "Hop forward, land on one leg, hold completely still for 2 seconds. Wobble means the rep doesn't count. Single-leg landing is what running actually is.",
            easier: "Smaller hops, closer distance. Focus on the stick quality before increasing distance.",
            harder: "Hop laterally instead of forward. Frontal plane stability is the next challenge.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "20 meters · max effort",
            rest: "30 sec",
            cue: "Exaggerated running strides — knee up, push off hard, maximize distance per stride. Builds the elastic energy that makes you faster.",
            easier: "Shorter strides with more emphasis on the knee drive than distance. Build the pattern before maxing the power.",
            harder: "Uphill bounds. More hip extension demand on every stride.",
          },
          {
            name: "Pogo Jumps",
            sets: 2,
            reps: "30 sec · minimal ground contact",
            rest: "20 sec",
            cue: "Small, fast, continuous jumps — land and go immediately. Training your Achilles to store and return energy rapidly. Stiff and quick.",
            easier: "Slow the frequency — bigger jumps with more air time. Reduce the speed until you can maintain stiffness on landing.",
            harder: "Single-leg pogos, 20 seconds each. One Achilles absorbing everything.",
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
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Step-Up with Knee Drive",
            sets: 2,
            reps: "3 sec up · drive knee · 12 reps each leg",
            rest: "20 sec",
            cue: "Step up controlled — 3 seconds — drive the opposite knee up at the top, pause 1 second. Lower slowly. Mimics push-off mechanics in running.",
            easier: "Lower box height. Reduce the height until you can complete the step-up without the front knee caving inward.",
            harder: "Hold dumbbells at your sides. The loaded step-up with knee drive is one of the most running-specific strength movements possible.",
          },
          {
            name: "Reverse Lunge to Balance",
            sets: 2,
            reps: "3 sec down · 2 sec balance hold at top · 12 reps each leg",
            rest: "20 sec",
            cue: "Step back into lunge for 3 seconds, return to standing and hold single-leg balance for 2 seconds. Trains the stability your leg needs at mid-stance.",
            easier: "Touch your toe to the floor briefly during the balance hold. Reduce the hold time as needed.",
            harder: "Hold a dumbbell in the opposite hand during the balance hold. Forces your hip stabilizers to work against the lateral load.",
          },
          {
            name: "Sumo Squat with Pause",
            sets: 2,
            reps: "4 sec down · 3 sec pause · 15 reps",
            rest: "20 sec",
            cue: "Wide stance, toes out 45 degrees. 4 seconds down, 3-second pause. Hits your inner hip, glutes, and hip rotators — all underworked in runners.",
            easier: "Reduce the pause to 1 second. Same position, less time under tension.",
            harder: "Hold a dumbbell or kettlebell at your chest. Goblet sumo with a 3-second pause is a complete hip loading protocol.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 4 sec down · 15 reps each leg",
            rest: "15 sec",
            cue: "One leg extended, drive the hip up in 2 seconds, lower for 4. Glute max and hamstring working together — exactly like push-off when you run.",
            easier: "Both feet on the floor first. Build a strong double-leg bridge before going single-leg.",
            harder: "Weight plate on the working hip. Loaded single-leg bridges with a 4-second eccentric are serious posterior chain work.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise — Bent Knee",
            sets: 2,
            reps: "3 sec up · 4 sec down · 15 reps each leg",
            rest: "20 sec",
            cue: "Slight bend in the knee — this loads your soleus, not your gastrocnemius. The soleus takes the most load during distance running. Most calf work misses it entirely. This doesn't.",
            easier: "Do both legs with a bent knee simultaneously. Build single-leg strength before going unilateral.",
            harder: "Hold a dumbbell. Weighted bent-knee calf raises directly load the most important running calf muscle.",
          },
          {
            name: "Hamstring Walkout",
            sets: 2,
            reps: "5 steps out · 5 steps back · 8 reps",
            rest: "25 sec",
            cue: "Bridge position, walk feet away one step at a time — 5 steps out, 5 back. Hamstrings load through a huge range. Further out = harder.",
            easier: "Reduce to 3 steps each direction. Build the range gradually.",
            harder: "Single-leg walkouts. One leg doing all the work multiplies the hamstring demand entirely.",
          },
          {
            name: "Tibialis Raise — Single Leg",
            sets: 2,
            reps: "3 sec up · 3 sec down · 15 reps each leg",
            rest: "15 sec",
            cue: "One foot raised, all the load on one tibialis. Reveals side-to-side shin imbalances immediately. Fix the weaker side before it becomes a shin splint.",
            easier: "Return to the bilateral version. Build strength before splitting the load.",
            harder: "Resistance band on the single-leg version. Most targeted anterior shin loading possible.",
          },
          {
            name: "Ankle Alphabet",
            sets: 2,
            reps: "Full alphabet each direction · each ankle",
            rest: "15 sec",
            cue: "Seated, one foot elevated. Draw every letter with your foot — full range in every direction. Trains ankle stabilizers in all planes simultaneously.",
            easier: "Just draw A through M first. Full alphabet is the goal — build the range before going the distance.",
            harder: "Light ankle weight. Resistance through the full range forces stabilizers to work harder in every direction.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Broad Jump",
            sets: 2,
            reps: "6 reps · max distance · full reset",
            rest: "25 sec",
            cue: "Two-leg horizontal jump for maximum distance. Stick 2 seconds, then reset. Trains the forward propulsive power that directly translates to running speed.",
            easier: "Reduce jump distance intentionally. Focus on the 2-second stick quality before maximizing distance.",
            harder: "Single-leg broad jump. One-leg horizontal power is elite running-specific training.",
          },
          {
            name: "Lateral Bound",
            sets: 2,
            reps: "10 each direction · 1 sec stick",
            rest: "20 sec",
            cue: "Explosive lateral jump from one leg to the other — stick for 1 second. Builds the frontal plane stability your knee and hip need on every running stride.",
            easier: "Lateral step instead of jump. Step out, balance, step back. Build the mechanics before adding the explosion.",
            harder: "Increase distance and add a 2-second stick. More distance = more force to absorb on landing.",
          },
          {
            name: "Hill Sprint",
            sets: 2,
            reps: "6 x 10 sec · walk back down",
            rest: "30 sec between efforts",
            cue: "Any incline — stairs, hill, treadmill. 10-second max effort, walk back, repeat. Builds more glute and hip flexor power per second than almost anything else.",
            easier: "Reduce to 4 efforts. Same intensity, less total volume. Build up to 6 over time.",
            harder: "Steeper incline, same effort. More grade means more glute and hip flexor demand.",
          },
          {
            name: "Jump Rope — Double Under",
            sets: 2,
            reps: "30 sec continuous",
            rest: "20 sec",
            cue: "Fast rope, two rotations per jump. Maximum speed, minimum ground contact. Direct Achilles tendon conditioning.",
            easier: "Single unders as fast as possible. Speed matters more than the double — build the foot speed first.",
            harder: "Triple unders or a weighted jump rope. Heavier rope multiplies the demand on your calves and Achilles.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Deepen the Load",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 12 reps each leg",
            rest: "15 sec",
            cue: "Back from week 1 — 5-second lower now, 2-second pause. More time under tension on every rep. 12 reps. Don't rush the descent.",
            easier: "Keep the 4-second lower from week 1. Add the extra second only when the pattern feels fully controlled.",
            harder: "Heavier dumbbell than week 1. Progress the load every time this exercise returns.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 12 reps each leg",
            rest: "15 sec",
            cue: "Back from week 1 — 3-second pause this time. One more second sitting in the hardest position. That second matters more than extra reps.",
            easier: "Reduce the pause to 2 seconds. Never eliminate the pause entirely.",
            harder: "Heavier dumbbells than week 1. Progressive load every time this comes back.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "25 steps each direction · pulse every 5 steps",
            rest: "15 sec",
            cue: "25 steps with a squat pulse every 5. The pulses drive your glute medius through full range mid-walk. No rest for your lateral hip.",
            easier: "Reduce to 20 steps, pulse every 10. Build the volume before adding pulse frequency.",
            harder: "Heaviest band you have. At high resistance every step is a genuine challenge.",
          },
          {
            name: "Glute Bridge March",
            sets: 2,
            reps: "3 sec hold each leg · 20 reps total",
            rest: "15 sec",
            cue: "3-second hold this week — one more second than week 1. That extra second is where the additional adaptation comes from. Hip height stays constant.",
            easier: "Return to 2-second holds. Maintain height perfectly before extending the time.",
            harder: "Resistance band above the knees, heavier than week 1.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise",
            sets: 2,
            reps: "3 sec up · 5 sec down · 20 reps each leg",
            rest: "15 sec",
            cue: "Back from week 1 — 5-second eccentric, 20 reps. More tendon loading volume. Your Achilles is adapting. Every controlled descent builds the resilience.",
            easier: "Keep 4-second eccentric from week 1. Add the extra second when you can complete all 20 reps without form breaking.",
            harder: "Heavier dumbbell than week 1. Progressive load every session.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "8 reps · slower than week 1",
            rest: "25 sec",
            cue: "8 reps, every one slower than last week. Your hamstring brakes knee extension — when it can't, it tears. Nordics fix that. Slower is always better here.",
            easier: "Use your hands more to assist. Gradually reduce the help as your eccentrics get stronger.",
            harder: "Target a 9 to 10-second descent. That's the clinical elite standard.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "3 sec up · 3 sec down · 25 reps",
            rest: "15 sec",
            cue: "25 reps this week. More volume builds the endurance your tibialis needs to protect you through the back half of a long run.",
            easier: "Return to 20 reps. Hit 25 with clean form before progressing.",
            harder: "Resistance band, heavier than week 1.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "12 reps · 4 sec hold at top",
            rest: "15 sec",
            cue: "4-second hold at the top this week. Sustained soleus contraction at peak plantar flexion. Builds the deep calf endurance that prevents cramping in long miles.",
            easier: "Reduce to 3-second holds. Same movement, less time under sustained contraction.",
            harder: "Resistance band across the thighs — heavier than week 1.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Box Jump",
            sets: 2,
            reps: "6 reps · 3 sec hold at top",
            rest: "25 sec",
            cue: "Land on the box, hold for 3 full seconds before stepping down. The hold trains your stabilizers to lock in under impact — exactly what foot strike demands.",
            easier: "Reduce hold to 1 second. Build the landing stability before extending the hold time.",
            harder: "Higher box than week 1, same 3-second hold.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "10 hops each leg · directional changes",
            rest: "15 sec",
            cue: "Mix forward, lateral, and diagonal hops. Stick every landing for 2 seconds. All-direction training builds stability for turns, trails, and uneven ground.",
            easier: "Stick to forward hops only. Add directions when the forward stick is consistently solid.",
            harder: "Add rotation on landing — face a different direction than you took off. Complete lower limb control required.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "30 meters · max drive",
            rest: "20 sec",
            cue: "30 meters. Focus on push-off — drive from the back foot, extend the hip, feel the glute fire. Every bound improves your running economy.",
            easier: "20 meters, same maximum effort. Reduce distance until you can maintain full power throughout.",
            harder: "Uphill bounds, 30 meters. Pure glute and hip flexor power.",
          },
          {
            name: "Pogo Jumps",
            sets: 2,
            reps: "40 sec · minimal ground contact",
            rest: "15 sec",
            cue: "40 seconds this week. Keep the contact time short throughout — the moment you start landing heavy, you've lost the stimulus.",
            easier: "30 seconds if 40 feels unmanageable. Maintain the fast, stiff landing quality above all else.",
            harder: "Single-leg pogos, 20 seconds each leg.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "Stress the System",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Step-Up with Knee Drive",
            sets: 2,
            reps: "4 sec up · 2 sec hold at top · 15 reps each leg",
            rest: "15 sec",
            cue: "Slower ascent this week — 4 seconds — and a 2-second hold at the top with knee up. The controlled ascent plus extended hold is the most demanding step-up variation so far.",
            easier: "Keep 3-second ascent from week 2. Add the extra second when you can complete 15 reps without losing the knee drive position.",
            harder: "Heavier dumbbells than week 2.",
          },
          {
            name: "Reverse Lunge to Balance",
            sets: 2,
            reps: "3 sec down · 3 sec balance hold · 15 reps each leg",
            rest: "15 sec",
            cue: "3-second balance hold this week. Your ankle and hip stabilizers work for longer at the hardest part of the movement. 15 reps means your stabilizers are under sustained load throughout.",
            easier: "Reduce hold to 2 seconds. Build up to 3 seconds over multiple sessions.",
            harder: "Heavier dumbbell than week 2. Contralateral load with a 3-second balance hold directly builds running hip stability.",
          },
          {
            name: "Sumo Squat with Pause",
            sets: 2,
            reps: "5 sec down · 3 sec pause · 15 reps",
            rest: "15 sec",
            cue: "5-second descent this week. One more second than week 2. More total time under tension per rep. Your inner hip and glutes are worked harder than ever.",
            easier: "Keep 4-second lower from week 2. Add the fifth second when the pattern feels solid.",
            harder: "Heavier goblet weight than week 2.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 5 sec down · 15 reps each leg",
            rest: "10 sec",
            cue: "5-second eccentric this week. Your glute and hamstring brake your bodyweight for 5 full seconds. 15 reps = 75 seconds of eccentric loading per leg.",
            easier: "Keep 4-second eccentric from week 2. Progress the tempo only when form stays perfect.",
            harder: "Maximum hip load yet.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise — Bent Knee",
            sets: 2,
            reps: "3 sec up · 5 sec down · 20 reps each leg",
            rest: "15 sec",
            cue: "Back from week 2 — 5-second eccentric now. Your soleus is loaded for one more second per rep. 20 reps at this tempo is the most demanding soleus session of the program so far.",
            easier: "Keep 4-second eccentric from week 2. Build to 5 seconds when you can complete all 20 reps cleanly.",
            harder: "Heavier dumbbell than week 2.",
          },
          {
            name: "Hamstring Walkout",
            sets: 2,
            reps: "6 steps out · 6 steps back · 10 reps",
            rest: "20 sec",
            cue: "6 steps out this week — further than week 2. Your hamstrings are challenged closer to full extension. 10 reps. More range, more volume.",
            easier: "5 steps each direction. Never sacrifice the bridge height to reach further.",
            harder: "Single-leg walkouts at 6 steps. Extreme hamstring eccentric challenge.",
          },
          {
            name: "Tibialis Raise — Single Leg",
            sets: 2,
            reps: "4 sec up · 4 sec down · 20 reps each leg",
            rest: "10 sec",
            cue: "Back from week 2 — 4-second tempo both ways. Slower means more time under tension. 20 reps each leg at this tempo is significantly more work than week 2.",
            easier: "Keep 3-second tempo from week 2. Add the fourth second gradually.",
            harder: "Resistance band, heavier than week 2.",
          },
          {
            name: "Ankle Alphabet",
            sets: 2,
            reps: "Full alphabet · ankle weight · each ankle",
            rest: "10 sec",
            cue: "Back from week 2 — with a light ankle weight. The resistance through every direction forces your stabilizers to work harder at every letter. Side-to-side differences will be obvious.",
            easier: "Remove the ankle weight if the weighted version compromises your range of motion.",
            harder: "Heavier ankle weight. More resistance through the full range is the most complete ankle stability loading possible.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Broad Jump",
            sets: 2,
            reps: "8 reps · max distance · immediate rebound",
            rest: "20 sec",
            cue: "8 continuous broad jumps — land and immediately jump again. Trains reactive horizontal power. Absorb and redirect forward without a full stop.",
            easier: "Full reset between reps. Build the landing quality before removing the reset.",
            harder: "Single-leg broad jump, immediate rebound.",
          },
          {
            name: "Lateral Bound",
            sets: 2,
            reps: "12 each direction · 2 sec stick",
            rest: "15 sec",
            cue: "12 bounds each direction, 2-second stick. More volume and longer holds than week 2. Maximum distance per bound. Your glute medius and lateral hip are at their highest demand so far.",
            easier: "Reduce to 8 bounds. Same 2-second stick quality. Volume comes after stability.",
            harder: "Maximum distance, add a small squat at each landing. Increases hip and quad demand on absorption.",
          },
          {
            name: "Hill Sprint",
            sets: 2,
            reps: "8 x 10 sec · walk back",
            rest: "25 sec between efforts",
            cue: "8 efforts this week — 2 more than week 2. 80 seconds of maximum uphill work. Training power under fatigue. Every effort is 100%.",
            easier: "6 efforts. Same maximum output. Build volume before pushing to 8.",
            harder: "Steeper incline than week 2.",
          },
          {
            name: "Jump Rope — Double Under",
            sets: 2,
            reps: "45 sec continuous",
            rest: "15 sec",
            cue: "45 seconds this week. 15 more seconds of Achilles conditioning at maximum speed. Do not let the landing get heavy as you fatigue.",
            easier: "30 seconds if 45 is too demanding. Maintain quality above all else.",
            harder: "Weighted rope or triple unders.",
          },
        ],
      },
    ],
  },
  {
    week: 5,
    label: "Peak Strength",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 14 reps each leg",
            rest: "10 sec",
            cue: "3-second pause at the bottom this week. Hamstring fully loaded at its longest range for 3 full seconds before you drive back up. Force produced from a dead stop.",
            easier: "Reduce the pause to 2 seconds. Build up to 3 seconds over multiple attempts.",
            harder: "Heaviest dumbbell yet. The bottom pause with maximum load is the hamstring ceiling of this program.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps each leg",
            rest: "10 sec",
            cue: "6-second lower this week. Longest eccentric of the program. Quad and glute under load for 6 full seconds down, 3 held at the bottom. 15 reps. Your legs will feel this.",
            easier: "Reduce to 5-second lower. Never reduce the pause — it's the most important part.",
            harder: "Maximum load. Longest eccentric plus maximum weight is the ceiling of this exercise.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "30 steps · continuous pulses · forward lean",
            rest: "10 sec",
            cue: "30 steps, continuous pulses, slight forward lean. The lean trains your glute medius in the exact position it works during running. No rest for your lateral hip.",
            easier: "Remove the forward lean. Add it back once you can complete 30 steps with continuous pulses cleanly.",
            harder: "Maximum resistance band, forward lean throughout.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps each leg",
            rest: "10 sec",
            cue: "6-second eccentric. The longest of the program. Your glute and hamstring are braking your full bodyweight for 6 seconds on every rep. 20 reps = 120 seconds of loading per leg.",
            easier: "Reduce to 5-second lower. Add the sixth second when you can complete all 20 reps without your form breaking.",
            harder: "Maximum hip load. The absolute ceiling of posterior chain training here.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise",
            sets: 2,
            reps: "3 sec up · 6 sec down · 20 reps each leg",
            rest: "10 sec",
            cue: "6-second eccentric. Longest Achilles loading of the program. 20 reps at 6 seconds = 2 full minutes of calf and Achilles work per leg per set.",
            easier: "Keep 5-second eccentric. Add the sixth second when 20 reps at 5 seconds feels fully controlled.",
            harder: "Heaviest load yet. Elite tendon loading.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "10 reps · 10 sec descent",
            rest: "20 sec",
            cue: "10 reps, 10-second descent target. Clinical gold standard. At 10 seconds under full bodyweight, your hamstring eccentric strength is elite. Every rep is a fight.",
            easier: "8-second descent. Build from week 3 toward the 10-second target gradually.",
            harder: "Plate at your chest, 10-second descent.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 30 reps",
            rest: "10 sec",
            cue: "30 reps at 4-second tempo. Highest tibialis volume of the program. The burn at rep 25 is the endurance buffer being built.",
            easier: "25 reps at 4-second tempo. Build to 30 when you can complete all reps without the tempo breaking.",
            harder: "Maximum resistance band, 30 reps.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "15 reps · 5 sec hold · alternating hip extension",
            rest: "10 sec",
            cue: "5-second hold, alternating glute squeeze at the top. Soleus and glute firing together — exactly like push-off. Training the chain, not just the muscle.",
            easier: "Remove the hip extension. Just the calf raise with 5-second hold first.",
            harder: "Maximum resistance band plus load across thighs.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Box Jump",
            sets: 2,
            reps: "8 reps · maximum height · immediate rebound",
            rest: "15 sec",
            cue: "Maximum height, immediate rebounds. Land and go. Your tendons are loading and releasing at peak capacity. This is where the most running-specific power is built.",
            easier: "Full reset between reps. Maximum height with control before adding the continuous rebound.",
            harder: "Highest box available, 8 immediate rebounds.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "12 hops each leg · max distance · all directions",
            rest: "10 sec",
            cue: "Maximum distance, every direction, 12 hops per leg. Perfect sticks at max distance in all directions is the peak of your reactive stability training.",
            easier: "Reduce to 8 hops per leg. Maintain the directional variety but lower the volume.",
            harder: "Maximum distance onto raised surfaces in all directions.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "40 meters · maximum flight time",
            rest: "20 sec",
            cue: "40 meters. Focus on time in the air between bounds. Maximum flight time = maximum power per stride. This is what separates efficient runners from inefficient ones.",
            easier: "30 meters. Never sacrifice flight time for distance. Power comes before volume.",
            harder: "Uphill bounds, 40 meters.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "10 reps each leg · 3 sec stick",
            rest: "20 sec",
            cue: "Step off a box, land on one leg, hold completely still for 3 seconds. Training your neuromuscular system to absorb and stabilize impact. Fix the landing before the road demands it.",
            easier: "Lower box height. Focus on landing mechanics before adding drop distance.",
            harder: "Higher box. More drop height = more force to absorb and stabilize.",
          },
        ],
      },
    ],
  },
  {
    week: 6,
    label: "Resilience",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Step-Up with Knee Drive",
            sets: 2,
            reps: "4 sec up · 3 sec hold at top · 15 reps each leg",
            rest: "10 sec",
            cue: "3-second hold at the top this week — the longest of the program. Controlled ascent into an extended single-leg hold. The most demanding step-up variation so far.",
            easier: "Reduce hold to 2 seconds. Build up to 3 seconds.",
            harder: "Maximum load, 3-second hold. Elite running-specific strength.",
          },
          {
            name: "Reverse Lunge to Balance",
            sets: 2,
            reps: "4 sec down · 3 sec balance hold · 15 reps · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed during the hold this week. No visual input — your proprioceptive system manages everything. Same conditions as trail running or late-race fatigue.",
            easier: "Keep eyes open. Eyes closed comes after the 3-second hold is fully consistent.",
            harder: "Heavier dumbbell, eyes closed, 3-second hold.",
          },
          {
            name: "Sumo Squat with Pulse",
            sets: 2,
            reps: "4 sec down · 3 pulses at bottom · 15 reps",
            rest: "10 sec",
            cue: "3 pulses at the deepest position before driving up. Pulses force your inner hip and glutes to generate force repeatedly at their longest range — where they're weakest.",
            easier: "1 pulse at the bottom instead of 3. Same position, less repeated loading.",
            harder: "Heaviest goblet weight yet with 3 pulses.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · abduction at top",
            rest: "10 sec",
            cue: "At the top of each bridge, abduct the working leg slightly outward. Glute max and glute medius firing simultaneously — exactly like push-off when you run.",
            easier: "Remove the abduction. Add it back once the 6-second lower is fully controlled.",
            harder: "Maximum load with abduction at the top. The most complete glute stimulus in the program.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise — Bent Knee",
            sets: 2,
            reps: "3 sec up · 6 sec down · 20 reps · bottom pause",
            rest: "10 sec",
            cue: "Add a 1-second pause at the full bottom stretch. Your soleus loaded at maximum length for 1 full second. Every rep now has three positions of peak tension.",
            easier: "Remove the bottom pause. Keep the 6-second eccentric and add the pause back next session.",
            harder: "Maximum load with the bottom pause.",
          },
          {
            name: "Hamstring Walkout",
            sets: 2,
            reps: "8 steps out · 8 steps back · 10 reps · single leg",
            rest: "20 sec",
            cue: "Single-leg walkouts at 8 steps — the furthest range on one leg. Maximum hamstring eccentric loading. This is the hardest hamstring exercise in the program.",
            easier: "6 steps each direction. Build the range before extending to 8.",
            harder: "2 seconds per step. More time under tension at maximum hamstring length.",
          },
          {
            name: "Tibialis Raise — Single Leg",
            sets: 2,
            reps: "4 sec up · 4 sec down · 25 reps each leg",
            rest: "10 sec",
            cue: "25 reps at 4-second tempo on each leg. The burn at rep 20 is the protective buffer being built. Finish every rep.",
            easier: "20 reps per leg. Build to 25 before increasing the volume.",
            harder: "Maximum resistance band, 25 reps.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "20 reps · 5 sec hold · simultaneous hip extensions",
            rest: "10 sec",
            cue: "Both hip extensions simultaneously at the top — full glute squeeze while holding the calf raise. Soleus, glutes, and hip extensors all firing together. The most integrated position in the program.",
            easier: "Alternate hip extensions rather than both at once. Build the coordination before doing both simultaneously.",
            harder: "Maximum resistance, simultaneous extensions. Peak integrated loading.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Broad Jump",
            sets: 2,
            reps: "10 reps · max distance · immediate rebound · sprint finish",
            rest: "15 sec",
            cue: "10 continuous broad jumps then immediately sprint 10 meters. Converts elastic horizontal power into running speed. Bound to sprint without slowing down.",
            easier: "Full reset between jumps, then sprint at the end. Remove the continuous rebound until the landing quality is there.",
            harder: "Single-leg broad jumps into sprint.",
          },
          {
            name: "Lateral Bound",
            sets: 2,
            reps: "15 each direction · max distance · 2 sec stick",
            rest: "10 sec",
            cue: "15 bounds each direction at maximum distance. By bound 12 you will be fatigued. Bounds 13 through 15 must be just as controlled as bound 1. That's the standard.",
            easier: "12 bounds. Same maximum distance and 2-second stick. Build volume before pushing to 15.",
            harder: "Maximum distance onto a step — landing on a raised surface increases stabilization demand.",
          },
          {
            name: "Hill Sprint",
            sets: 2,
            reps: "10 x 10 sec · walk back",
            rest: "20 sec between efforts",
            cue: "10 efforts — highest volume of the program. 100 seconds of maximum uphill work. Every effort is 100%. No compromising on efforts 9 and 10.",
            easier: "8 efforts. Build from week 4 toward 10 progressively.",
            harder: "Steepest incline available, 10 efforts at absolute maximum output.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound forward",
            rest: "15 sec",
            cue: "Drop, stick, then bound forward as far as possible. Absorption into propulsion — the exact pattern of running. 12 reps at maximum height with a forward bound.",
            easier: "Lower box, no bound after the stick. Add the bound back once the landing is consistently controlled.",
            harder: "Maximum height, maximum forward bound, add a second stick.",
          },
        ],
      },
    ],
  },
  {
    week: 7,
    label: "Final Push",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 15 reps · rotation",
            rest: "10 sec",
            cue: "Add rotation at the bottom — torso slightly toward the floor leg, reverse before driving up. Posterior chain plus rotational stability. Running demands both.",
            easier: "Remove the rotation. Add it back once 15 reps at full tempo is consistent.",
            harder: "Maximum load with rotation. The most demanding version of this exercise.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps · 3 bottom pulses",
            rest: "10 sec",
            cue: "6-second lower, 3-second pause, 3 bottom pulses, 15 reps. The most demanding single-leg session of the program. Your quad and glute are at their absolute ceiling.",
            easier: "Remove the bottom pulses. Add them back when you can consistently complete 15 reps with full tempo.",
            harder: "Maximum load with all elements. No harder version of this exercise exists.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "40 steps · continuous pulses · overhead reach · 2 sec per step",
            rest: "10 sec",
            cue: "Slow every step to 2 seconds. Continuous pulses. Overhead reach. 40 steps at this pace eliminates all momentum — pure glute medius work.",
            easier: "Remove the overhead reach. Add it back once the 2-second tempo and continuous pulses are manageable.",
            harder: "Maximum band, 2 seconds per step, overhead reach.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · abduction · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed, abduction at the top, 6-second lower, 20 reps. All three demands simultaneously. This is what your glutes do on every stride — train it that way.",
            easier: "Keep eyes open. Eyes closed comes after the abduction at the top is fully controlled.",
            harder: "Maximum load, eyes closed, abduction. The final posterior chain peak.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health + Calf Strength",
        exercises: [
          {
            name: "Single-Leg Calf Raise",
            sets: 2,
            reps: "3 sec up · 6 sec down · 25 reps · bottom pause · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed this week. Your ankle manages everything without visual input — same conditions as trail running and late-race fatigue. 25 reps, 6-second eccentric, bottom pause.",
            easier: "Keep eyes open. Eyes closed is an advanced proprioceptive challenge — add it only when the full tempo at 25 reps is consistent.",
            harder: "Maximum load, eyes closed.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "12 reps · 10 sec descent · pause at 90 degrees",
            rest: "15 sec",
            cue: "2-second pause at 90 degrees mid-descent. This is where hamstrings tear in sprinters. Load it here, strengthen it here.",
            easier: "Remove the pause at 90 degrees. Keep the 10-second descent. Add the pause back when it feels controlled.",
            harder: "Plate at chest, 10-second descent with 90-degree pause.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 35 reps · single leg",
            rest: "10 sec",
            cue: "Single-leg, 35 reps at 4-second tempo. Most demanding tibialis session of the program. The burn at rep 28 is what you came for.",
            easier: "25 reps per leg. Build to 35 progressively.",
            harder: "Resistance band, single leg, 35 reps.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "20 reps · 5 sec hold · integrated extensions · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed, all integrated positions. Ankle, knee, and hip all managed without visual input — exactly the challenge of trail running in the dark.",
            easier: "Keep eyes open. Eyes closed is the final progression.",
            harder: "Maximum resistance, eyes closed.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Box Jump",
            sets: 2,
            reps: "10 reps · rebound · fatigued start",
            rest: "15 sec",
            cue: "20 bodyweight squats immediately before — no rest. Then 10 continuous rebounds. Explosive power under fatigue. This is what the final miles demand.",
            easier: "Do 10 squats instead of 20 before starting. Reduce the pre-fatigue while keeping the rebound demand.",
            harder: "Maximum height box, 10 rebounds, fatigued start.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "15 hops each leg · max distance · all directions",
            rest: "10 sec",
            cue: "Maximum distance, every direction, 15 hops per leg. Hops 13 through 15 through fatigue must match hops 1 through 3. That's the test.",
            easier: "12 hops per leg. Maintain the directional variety and maximum distance.",
            harder: "Maximum distance onto raised surfaces in all directions.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "50 meters · max flight · sprint finish",
            rest: "15 sec",
            cue: "50 meters of maximum bounds, then sprint. The longest bounding distance of the program. Every stride is maximum power, maximum flight. Bound to sprint — don't slow down in the transition.",
            easier: "40 meters with a sprint finish. Build to 50 over the final weeks.",
            harder: "Uphill bounds, 50 meters, sprint to flat at the end.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound · sprint",
            rest: "15 sec",
            cue: "Drop, stick, bound, sprint 10 meters. The full reactive chain — absorption, propulsion, speed. Do not slow down on the sprint. Every rep.",
            easier: "Remove the sprint. Drop, stick, bound, stop. Add the sprint back when the sequence feels fully controlled.",
            harder: "Maximum drop height, maximum bound, maximum sprint.",
          },
        ],
      },
    ],
  },
  {
    week: 8,
    label: "Unbreakable",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength — Final Test",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 15 reps · rotation · eyes closed",
            rest: "10 sec",
            cue: "Everything — eyes closed. 15 reps. All the work of 8 weeks tested simultaneously without visual input. This is what strong legs feel like in the dark miles of a race.",
            easier: "Keep eyes open. Eyes closed is the final test — complete it when the full protocol is ready.",
            harder: "Maximum load, eyes closed, rotation, 15 reps. The ceiling.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps · pulses · drop set",
            rest: "10 sec",
            cue: "Full protocol for 15 reps — then drop the weights and go to failure with bodyweight. The drop set after loaded reps at this tempo will take you completely to the limit.",
            easier: "Skip the drop set. Full protocol for 15 reps is the goal.",
            harder: "Maximum load, full protocol, drop set, add resistance band above knees.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "45 steps · 2 sec per step · continuous pulses · overhead",
            rest: "10 sec",
            cue: "45 steps. The highest volume of the program. 2 seconds per step, continuous pulses, overhead reach. 90 seconds of continuous glute medius loading per direction.",
            easier: "40 steps. Never reduce the tempo or pulse frequency — only the distance.",
            harder: "Maximum band, 45 steps, full protocol. Your glute medius will fail before step 45. Push through.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · abduction · eyes closed · uneven surface",
            rest: "10 sec",
            cue: "Folded towel under your working foot. Eyes closed. Abduction at the top. 6-second lower. 20 reps. Every system being tested simultaneously. This is what 8 weeks built.",
            easier: "Remove the uneven surface. Eyes closed on stable ground first.",
            harder: "Maximum load, all variables. The final proof of everything built.",
          },
        ],
      },
      {
        session: "B",
        focus: "Tendon Health — Final Test",
        exercises: [
          {
            name: "Single-Leg Calf Raise",
            sets: 2,
            reps: "3 sec up · 6 sec down · 25 reps · bottom pause · uneven surface",
            rest: "10 sec",
            cue: "Folded towel under your foot, eyes open. Soleus and ankle stabilizers managing maximum tendon load plus proprioceptive challenge simultaneously. Trail running conditions.",
            easier: "Stable surface first. Add the uneven surface when eyes-closed at full tempo is consistent.",
            harder: "Maximum load, uneven surface. The final calf and tendon test.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "12 reps · 10 sec descent · 90 degree pause · weighted",
            rest: "15 sec",
            cue: "The final Nordic session — everything. 10-second descent, 90-degree pause, plate at chest. If you complete 12 reps cleanly, your hamstrings are bulletproof.",
            easier: "Remove the weight. Bodyweight Nordics at full tempo and pause is still elite.",
            harder: "Heavier plate, full protocol, 12 reps.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 35 reps · single leg · uneven surface",
            rest: "10 sec",
            cue: "Single-leg on a folded towel. Tibialis managing dorsiflexion force and ankle stability simultaneously. The most functional tibialis training in the program.",
            easier: "Stable surface. Add the uneven challenge when 35 reps at full tempo per leg is consistent.",
            harder: "Resistance band, single leg, uneven surface.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "25 reps · 5 sec hold · integrated extensions · eyes closed · uneven surface",
            rest: "10 sec",
            cue: "The final session. 25 reps, 5-second holds, integrated glute extensions, eyes closed, on a folded towel. Every system. This is what 8 weeks built. Finish it.",
            easier: "Remove the uneven surface. Complete the full session on stable ground first.",
            harder: "Maximum resistance, all variables. The final test.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power — Final Test",
        exercises: [
          {
            name: "Broad Jump",
            sets: 2,
            reps: "10 reps · immediate rebound · sprint · fatigued start",
            rest: "10 sec",
            cue: "20 bodyweight squats, then 10 continuous broad jumps, then sprint 15 meters. Pre-fatigued horizontal power into speed. This is what racing a strong final mile requires.",
            easier: "10 squats instead of 20. Reduce pre-fatigue while keeping the full sequence.",
            harder: "Single-leg broad jumps into sprint, fatigued start.",
          },
          {
            name: "Lateral Bound",
            sets: 2,
            reps: "15 each direction · max distance · 2 sec stick · raised surface",
            rest: "10 sec",
            cue: "Land onto a step or box. 15 bounds each direction. Maximum distance. The raised surface increases every stabilization demand. Perfect sticks. No wobble.",
            easier: "Flat landing surface. Add the raised surface once flat-ground 15 bounds are consistently solid.",
            harder: "Maximum distance onto the highest step available.",
          },
          {
            name: "Hill Sprint",
            sets: 2,
            reps: "10 x 10 sec · steepest incline · walk down",
            rest: "15 sec between efforts",
            cue: "Steepest incline available. 10 efforts at maximum output. What you do on effort 9 and 10 when you're exhausted tells you everything about what 8 weeks built.",
            easier: "8 efforts. Build from week 6 toward 10 progressively.",
            harder: "Maximum grade, 10 efforts, no compromise.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound · sprint · stick",
            rest: "10 sec",
            cue: "Drop, stick, bound, sprint, stick. The complete reactive chain at maximum capacity. The final movement of the program. Use everything you built. Finish strong.",
            easier: "Remove the final stick after the sprint. Add it back when the full sequence feels controlled.",
            harder: "Maximum height, maximum bound, maximum sprint. Every variable at its peak.",
          },
        ],
      },
    ],
  },
];

export default function StrengthForRunners() {
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
        .week-btn { flex:1; padding:10px 2px; background:none; border:none; border-bottom:2px solid transparent; font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#999; cursor:pointer; transition:all 0.2s; }
        .week-btn.active { color:#111; border-bottom-color:#7a9e7e; }
        .session-btn { flex:1; padding:10px 6px; background:#fff; border:1px solid #e0e0e0; font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#888; cursor:pointer; transition:all 0.2s; text-align:center; }
        .session-btn:first-child { border-radius:6px 0 0 6px; }
        .session-btn:last-child { border-radius:0 6px 6px 0; }
        .session-btn.active { background:#2b2e2b; color:#fff; border-color:#2b2e2b; }
        .exercise-card { background:#fff; border:1px solid #e8e8e8; border-radius:10px; overflow:hidden; margin-bottom:12px; transition:box-shadow 0.2s; }
        .exercise-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.08); }
        .exercise-header { display:flex; align-items:center; justify-content:space-between; padding:16px 18px; cursor:pointer; }
        .exercise-body { border-top:1px solid #f0f0f0; padding:20px 18px; background:#fafafa; }
        .stat-box { text-align:center; padding:10px 10px; background:#f0f0f0; border-radius:6px; min-width:56px; }
        .stat-label { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#888; font-weight:600; margin-bottom:4px; }
        .stat-value { font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:700; color:#111; line-height:1; }
        .cue-box { background:#f0f5f1; border-left:3px solid #7a9e7e; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; font-weight:400; margin-top:12px; }
        .harder-box { background:#1a1a1a; border-left:3px solid #c0392b; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#ccc; line-height:1.6; font-weight:400; margin-top:8px; }
        .chevron { transition:transform 0.25s ease; color:#bbb; font-size:18px; flex-shrink:0; }
        .chevron.open { transform:rotate(180deg); }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .exercise-body { animation:fadeIn 0.25s ease; }
      `}</style>

      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Strength For Runners</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>8 Weeks · 3x/Week · Under 20 Min · Lower Body Only · Athlete Level</div>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #eee", display: "flex", padding: "0 4px" }}>
        {weeks.map((w, i) => (
          <button key={i} className={`week-btn ${activeWeek === i ? "active" : ""}`}
            onClick={() => { setActiveWeek(i); setActiveSession(0); setExpandedEx(null); }}>
            <div>W{w.week}</div>
            <div style={{ fontSize: 8, fontWeight: 400, color: activeWeek === i ? "#7a9e7e" : "#bbb" }}>{w.label.split(" ")[0]}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
          {currentWeek.sessions.map((s, i) => (
            <button key={i} className={`session-btn ${activeSession === i ? "active" : ""}`}
              onClick={() => { setActiveSession(i); setExpandedEx(null); }}>
              <div>Session {s.session}</div>
              <div style={{ fontSize: 9, opacity: 0.7, marginTop: 2 }}>{s.focus.split(" ")[0]}</div>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: -0.5 }}>
            Week {currentWeek.week} — {currentWeek.label}
          </div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 1 }}>{currentSession.exercises.length} exercises</div>
        </div>

        <div style={{ fontSize: 11, color: "#7a9e7e", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{currentSession.focus}</div>

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
                {ex.easier && (
                  <div style={{ background: "#f0f5f1", borderLeft: "3px solid #7a9e7e", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginTop: 8 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4a7a50", fontWeight: 700, marginBottom: 5 }}>↓ Make It Easier</div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, fontWeight: 400 }}>{ex.easier}</div>
                  </div>
                )}
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
