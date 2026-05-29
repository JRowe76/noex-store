import { useState } from "react";

// --- PROGRAM DATA ---
// 4 Weeks · 3x per week · Arms & Shoulders · Athlete Level
// Sessions A (Push/Triceps/Shoulders) & B (Pull/Biceps) & C (Full Arm Burnout) rotate
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
            cue: "Hands directly under your shoulders, thumbs nearly touching. 3 seconds down, 1 second dead stop at the bottom — no bounce, no momentum. Your triceps are the only thing driving this. If your elbows flare out, your chest is doing the work. Lock them in.",
            harder: "Load a backpack or wear a vest. Even 15 lbs changes this completely. The pause at the bottom with load will expose every weakness in your tricep strength.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "3 sec lower · 12 reps",
            rest: "20 sec",
            cue: "Hips high, body in an inverted V. Lower your head toward the floor — crown first, not face first. 3 seconds down. You're loading your anterior deltoid in a way standard push-ups never will. If your hips drop during the descent, you've lost the movement.",
            harder: "Elevate your feet on a chair or box. The higher your feet, the more vertical the press, the more shoulder dominant it becomes.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 15 reps",
            rest: "20 sec",
            cue: "4 seconds down — 4 full seconds of eccentric tricep loading. 2 second pause at the bottom. Drive up fast. If you're leaning forward, your chest is involved. Stay upright. Elbows track straight back. This is a tricep movement.",
            harder: "Weight plate in your lap. A loaded dip with a 4-second eccentric and 2-second pause is one of the most effective tricep exercises possible.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "3 sec lower · max reps",
            rest: "25 sec",
            cue: "Hands form a diamond under your sternum. Elbows must stay tight to your body — this is where most people fail. Lower for 3 full seconds. Max reps means the set ends when your form breaks, not when it burns. Note your number. Beat it in week 3.",
            harder: "Elevated feet or loaded backpack. Diamonds with your feet on a box shift even more load onto the triceps.",
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
            cue: "Supinated grip — palms face you. Pull your chest to the bar, not your chin over it. 3-second descent back to a full dead hang, then 1 second hanging before the next rep. The hang is not rest — it's a loaded stretch. Your biceps are under tension the entire time.",
            harder: "Add a weight belt, loaded backpack, or hold a dumbbell between your feet. Weighted chin-ups with a 3-second eccentric are elite upper body pulling work.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "3 sec lower · 1 sec hold at top · 15 reps",
            rest: "20 sec",
            cue: "Body straight as a board from head to heel. Pull your chest to the bar — not your chin. Hold for 1 second at the top, squeezing your shoulder blades together hard. 3 seconds down. If your hips sag, the movement is over.",
            harder: "Feet elevated on a box or chair. The more horizontal your body, the harder the row.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "4 sec lower · 1 sec hold at top · 12 reps each arm",
            rest: "15 sec",
            cue: "Neutral grip — thumbs up. Curl to your shoulder, hold for 1 second squeezing the brachialis hard, then lower for 4 full seconds. Your brachialis sits underneath your bicep — training it adds thickness and pushes the bicep up. That 4-second lower is where it's built.",
            harder: "Heaviest dumbbells you can control through the full 4-second eccentric. If the lower gets faster than 4 seconds, drop the weight.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec squeeze at top · 10 reps each arm",
            rest: "15 sec",
            cue: "Elbow locked against your inner thigh. Curl all the way up, squeeze hard for 2 seconds at peak contraction, then lower for 5 full seconds. This eliminates every bit of momentum. Every inch of that movement is your bicep doing pure work.",
            harder: "Heavier dumbbell, longer squeeze. A 3-second squeeze at the peak of a concentration curl with heavy weight will make your bicep cramp in the best way.",
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
            cue: "7 reps bottom half of the curl only, 7 reps top half only, 7 full reps — all without stopping. The partial ranges isolate the peak contraction and bottom stretch separately before combining them. By rep 21 your biceps are completely spent.",
            harder: "Heavier weight for the bottom partials, drop slightly for the top. Your arms will be pumped beyond anything you've felt.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps — stop at form failure",
            rest: "25 sec",
            cue: "Close grip, elbows tight, full range. This is a burnout set — you go until your form breaks, not until it burns. The moment your elbows flare, your back arches, or you can't control the descent, the set is done. Record your number. Beat it in week 3.",
            harder: "Loaded backpack, max reps to failure. Even 10 lbs will cut your rep count in half. Work back up over the 4 weeks.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "4 sec lower · 1 sec stretch · 12 reps",
            rest: "20 sec",
            cue: "Both hands on one dumbbell overhead, arms fully extended. Lower behind your head for 4 seconds — full stretch at the bottom, hold 1 second in the stretch. The long head of the tricep is only fully stretched when the arms are overhead. This hits the part of your tricep most exercises miss.",
            harder: "Heavier dumbbell with a longer stretch pause. 2 seconds in the stretched position with heavy weight creates significant tension in the long head.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 30 sec hold",
            rest: "20 sec",
            cue: "Raise to parallel, hold for 10 seconds. Lower. Repeat 10 times. Then hold at parallel for 30 continuous seconds. Your lateral deltoid will be on fire within 3 reps. The 30-second hold at the end is the finisher — do not let the arms drop.",
            harder: "Heavier dumbbells for the holds. Lateral raises are notoriously hard to load because the leverage at parallel is extreme.",
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
            cue: "Hands on a bench behind you, legs extended straight out. 4 seconds down until your upper arms are parallel to the floor — no further. 2 second pause. Drive up. The difference from a regular dip is the angle loads the tricep differently — especially the lateral head. Keep your back close to the bench.",
            harder: "Elevate your feet on another bench. The flat body position with feet elevated maximizes the tricep load and removes any leg assistance entirely.",
          },
          {
            name: "Wall Handstand Hold",
            sets: 2,
            reps: "Max hold — target 30 sec",
            rest: "25 sec",
            cue: "Kick up to a handstand against the wall. Full lockout — arms completely straight, core tight, glutes squeezed. Your shoulders are under the full load of your bodyweight in the most demanding overhead position possible. Hold until your form breaks. Every second is shoulder strength being built.",
            harder: "Handstand push-up negative — lower your head toward the floor for 5 seconds. The eccentric handstand push-up builds shoulder strength faster than any other overhead movement.",
          },
          {
            name: "Overhead Tricep Extension — Single Arm",
            sets: 2,
            reps: "4 sec lower · 2 sec stretch · 12 reps each arm",
            rest: "15 sec",
            cue: "One arm overhead, lower behind your head for 4 seconds, hold the stretched position for 2 seconds. Single arm allows for a greater range of motion and isolates each tricep independently — you can't compensate with the stronger side. Feel the long head stretch completely at the bottom.",
            harder: "Heavier dumbbell than you'd use with both hands. The single arm version handles more load per tricep than the two-hand version. Push the weight.",
          },
          {
            name: "Arnold Press",
            sets: 2,
            reps: "3 sec lower · 1 sec pause at bottom · 12 reps",
            rest: "20 sec",
            cue: "Start with palms facing you at shoulder height, press up while rotating so palms face forward at the top. 3-second lower reversing the rotation. The rotation hits all three heads of the deltoid through the full range of motion — front, middle, and rear. Don't rush the rotation — it's the whole point.",
            harder: "Heavier dumbbells with a 2-second pause at the bottom. The pause at the bottom of the Arnold press with heavy weight creates extreme anterior deltoid tension.",
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
            cue: "Palms facing each other on parallel handles. This grip hits the brachialis and brachioradialis harder than any other pull-up variation. Pull your chest between the handles — full range. 3-second descent to dead hang. The neutral grip is also significantly easier on the wrists and elbows than supinated or pronated grips.",
            harder: "Weighted with a belt or backpack. Neutral grip weighted pull-ups are one of the most complete upper body pulling movements possible.",
          },
          {
            name: "TRX or Ring Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at chest · 12 reps",
            rest: "20 sec",
            cue: "Rings or TRX straps, body at an angle. The instability of the rings or straps means your stabilizers are working overtime compared to a fixed bar. 2-second hold at chest means your shoulder blades are fully retracted under load. 4-second lower. The ring row works your biceps and entire upper back in a way fixed-bar rows cannot replicate.",
            harder: "More horizontal body position and add a turn-out at the top — rotate your palms to face the ceiling at full contraction. The supination at the top maximally contracts the bicep at the peak of the row.",
          },
          {
            name: "Zottman Curl",
            sets: 2,
            reps: "Curl supinated · lower pronated · 4 sec lower · 12 reps each arm",
            rest: "15 sec",
            cue: "Curl up with palms facing up — bicep focus. At the top, rotate your grip so palms face down, then lower for 4 seconds — brachioradialis focus. You're training two completely different muscle groups in one rep. The 4-second pronated descent under load is where your forearm extensors get hit in a way no other curl achieves.",
            harder: "Heavier weight than your standard curl. The supinated up, pronated down pattern means your bicep handles the harder concentric and your brachioradialis handles the harder eccentric. Both improve with more load.",
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec squeeze · 10 reps each arm",
            rest: "15 sec",
            cue: "Lying on an incline bench, arm hanging straight down. The incline position stretches the bicep at the bottom beyond what a standing curl allows — creating more mechanical tension at the stretched position. 5-second lower back to full stretch. 2-second squeeze at the top. This is the most complete bicep stretch available without a cable.",
            harder: "Steeper incline — more vertical means deeper stretch. The deeper the stretch under load, the more mechanical tension on the bicep. Combined with the 5-second lower, this is an advanced bicep stimulus.",
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
            cue: "Lying face down on an incline bench, arm hanging straight down. Curl up — your arm stays perpendicular to the floor the entire time, which eliminates shoulder flexion from the movement entirely. Your bicep does 100% of the work. 4-second lower to full stretch, 2-second squeeze at the top. Pure bicep isolation.",
            harder: "Heavier dumbbell. With the shoulder completely eliminated from the movement, your bicep is the only thing working. Push the load.",
          },
          {
            name: "Diamond Push-Up Burnout",
            sets: 2,
            reps: "Max reps — then 10 pulse reps",
            rest: "20 sec",
            cue: "Go to form failure on diamonds — then immediately do 10 small pulse reps at the bottom half of the range. The pulses after failure keep tension on the tricep at its most loaded position when it's already completely exhausted. These 10 pulses are harder than any full rep you did before them.",
            harder: "Loaded backpack to failure, drop the pack, full reps to failure again, then 10 pulses. The triple drop set is the most demanding tricep burnout in the program.",
          },
          {
            name: "Skull Crusher",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at forehead · 12 reps",
            rest: "20 sec",
            cue: "Lying on your back, dumbbell in each hand or one heavy dumbbell. Lower the weight toward your forehead for 4 seconds — elbows point straight up the entire time. 1-second pause at the forehead. Drive back up. Your triceps are under eccentric load for 4 seconds at their fully stretched position. This is one of the most effective tricep exercises possible.",
            harder: "Heavier weight, 2-second pause. The skull crusher with a 2-second pause at the forehead creates extreme tension in all three tricep heads simultaneously.",
          },
          {
            name: "Arnold Press Hold",
            sets: 2,
            reps: "10 full Arnolds · then 30 sec isometric hold at parallel",
            rest: "15 sec",
            cue: "10 full Arnold press reps, then lower to the bottom position — arms at 90 degrees, parallel to the floor — and hold for 30 seconds. Your anterior and lateral deltoids are loaded isometrically at the hardest point in the range after being pre-exhausted by 10 full reps. Your shoulders will be on fire. Hold every second.",
            harder: "Heavier dumbbells for the Arnolds, same weight for the hold. The hold with heavier dumbbells at parallel is one of the most intense shoulder finishers possible.",
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
            cue: "Back from week 1 — but harder. 4-second lower this time, 2-second pause, 20 reps. More volume, longer tempo, less rest. Your triceps remember this movement. Now they're being asked to do significantly more work with it. Beat your week 1 numbers.",
            harder: "More weight than week 1. The 4-second lower with added load and a 2-second pause at the bottom is a completely different movement. Your triceps will know.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 15 reps",
            rest: "15 sec",
            cue: "15 reps this week with a pause at the bottom. Your head near the floor, 1 full second — no bouncing. Your anterior deltoid is loaded at the bottom with no stretch reflex. The pause forces your shoulder to generate force from a dead stop. Harder than week 1 in every way.",
            harder: "Feet elevated higher than week 1. Work toward wall handstand push-ups progressively.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "15 sec",
            cue: "5-second lower this week. The longest eccentric dip of the program. Your tricep is under tension for 5 full seconds on every descent. Combined with the 2-second pause, that's 7 seconds of loading per rep. 15 reps. Your triceps will be completely done. That's the goal.",
            harder: "Heavier load than week 1. 5-second lower with load is advanced. If you lose the tempo, reduce the weight. The 5-second lower is the workout.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause · max reps",
            rest: "20 sec",
            cue: "Add a 1-second pause at the bottom this week. Dead stop, no momentum, then press. Your max reps will be lower than week 1 — that's correct. A pause rep is harder than touch-and-go. Record your numbers. The goal is to match week 1 numbers by week 4.",
            harder: "Elevated feet and loaded backpack with pause reps. Most demanding diamond push-up in the program.",
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
            cue: "Back from week 1 — harder. 4-second eccentric, 2-second hang, 10 reps. Every additional second of lowering means more time your bicep is loaded eccentrically. By rep 8 you'll be fighting the descent. Fight it. Do not drop faster.",
            harder: "More weight than week 1. 10 reps of weighted chin-ups with a 4-second eccentric is a standard that most gym athletes can't match.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at top · 18 reps",
            rest: "15 sec",
            cue: "18 reps this week — 3 more than week 1. 2-second hold at the top, shoulder blades fully retracted. 4-second lower. Your upper back and biceps are being pushed to a higher volume than they've handled at this tempo. Maintain the hold quality on every single rep.",
            harder: "Feet elevated higher than week 1. More horizontal, more load, 4-second lower, 2-second hold.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec hold at top · 12 reps each arm",
            rest: "10 sec",
            cue: "5-second eccentric this week. Your brachialis is loaded for 5 full seconds on the way down. 2-second hold at the top. This is where arm thickness gets built — not just bicep peak. Control every centimeter of the descent.",
            harder: "Heaviest weight you can lower for exactly 5 seconds per rep. If you can do it faster than 5 seconds, the weight is too light.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec squeeze · 10 reps each arm",
            rest: "10 sec",
            cue: "3-second squeeze at the top this week. Your bicep is at peak contraction under load for 3 full seconds. This creates a level of localized tension you cannot replicate with any tempo shortcut. Own the squeeze. Then lower for 5 seconds. Every rep.",
            harder: "Heavier weight, 3-second squeeze. The combination of peak contraction hold and slow eccentric with heavy weight is the most effective bicep isolation in the program.",
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
            cue: "Back from week 1 — with a 2-second squeeze on every single rep. 21 squeezes. Your biceps will be cramping by set 2. The squeeze is the additional stimulus week 3 adds to this movement. Don't rush through it.",
            harder: "Heavier weight than week 1 with the 2-second squeeze. The combination of partial ranges and held contractions with heavier load is a step up from everything week 1 demanded.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps · then 10 more after failure",
            rest: "15 sec",
            cue: "Hit your max reps — the point where form breaks. Then take 3 seconds, and do 10 more. Those 10 reps after failure are where the adaptation lives. They will be ugly. Do them anyway. Beat your week 1 number before the failure point.",
            harder: "Loaded backpack to failure, then drop the pack and do 10 more. Drop sets with bodyweight after loaded failure is one of the most effective burnout techniques.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "5 sec lower · 2 sec stretch · 12 reps",
            rest: "15 sec",
            cue: "2-second stretch at the bottom this week — one more second than week 1. Your tricep long head is fully stretched and loaded for 2 seconds on every rep. This is the movement that builds arm thickness. Stay in the stretch.",
            harder: "Heavier weight than week 1, 2-second stretch. More load in the stretched position means more mechanical tension on the long head.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 45 sec hold",
            rest: "15 sec",
            cue: "45-second final hold this week — 15 more than week 1. Your lateral delts will hit failure before the 45 seconds is up. When they do — hold harder. The fight against failure is the stimulus. Do not drop the arms until the time is up.",
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
            cue: "Back from week 2 — with a 3-second pause at the bottom. You are sitting at the lowest point of the dip for 3 full seconds with your tricep fully loaded. 5-second lower. 15 reps. This is the hardest bench dip protocol in the program. Your lateral tricep head will be completely destroyed.",
            harder: "Feet elevated, max load. The 3-second pause with elevation and load is the peak of this movement. There is no harder version.",
          },
          {
            name: "Wall Handstand Hold",
            sets: 2,
            reps: "Max hold · then 3 negatives",
            rest: "25 sec",
            cue: "Hold until failure, then immediately do 3 handstand push-up negatives — lower your head to the floor as slowly as possible on each. The combination of isometric failure into eccentric loading is the most advanced shoulder stimulus in the program. Your deltoids will be shaking by the end.",
            harder: "Handstand push-up negative for 8 seconds each. The slower the descent, the more your shoulders are building strength at every angle of the overhead press.",
          },
          {
            name: "Overhead Tricep Extension — Single Arm",
            sets: 2,
            reps: "5 sec lower · 3 sec stretch · 12 reps each arm",
            rest: "15 sec",
            cue: "Back from week 2 — with a 3-second stretch at the bottom. Your tricep long head is under sustained load at full stretch for 3 seconds per rep. Single arm means no compensation. 12 reps at this tempo on each arm is the peak of overhead tricep loading in the program.",
            harder: "Heaviest single-arm weight yet. 12 reps with a 5-second lower and 3-second stretch under maximum load. This is the ceiling of overhead tricep training.",
          },
          {
            name: "Arnold Press",
            sets: 2,
            reps: "4 sec lower · 2 sec pause at bottom · 15 reps",
            rest: "15 sec",
            cue: "15 reps this week — 3 more than week 2. 4-second lower reversing the rotation. 2-second pause at the bottom. All three deltoid heads are working through the full rotation under load with a sustained pause at the most loaded position. This is the most demanding shoulder session of the program.",
            harder: "Heaviest dumbbells yet with the 2-second pause. The combination of increased volume, longer tempo, and maximum load is the peak of overhead shoulder work in the program.",
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
            cue: "Back from week 2 — max reps this week. 5-second lower, 2-second hang. Every rep is 7 seconds of work. Hit max reps with that standard. If your rep 1 tempo is different from your last rep — you failed the set. The neutral grip at max reps with this tempo is the peak of pulling volume in the program.",
            harder: "Heaviest weight possible for max reps with full tempo. What you do this week tells you exactly where your upper body strength is.",
          },
          {
            name: "TRX or Ring Row",
            sets: 2,
            reps: "5 sec lower · 2 sec hold · turn-out · max reps",
            rest: "15 sec",
            cue: "Add the turn-out at the top this week — rotate palms to the ceiling at full contraction for 1 second before lowering. Max reps with 5-second lower, 2-second hold, and turn-out. The combination of full contraction hold, supination, and slow eccentric is the most complete ring row protocol possible.",
            harder: "Maximum horizontal body position. The most horizontal you can get while maintaining full range. Combined with the turn-out and tempo, this is a demanding upper back and bicep event.",
          },
          {
            name: "Zottman Curl",
            sets: 2,
            reps: "Supinated up · pronated down · 5 sec lower · 15 reps each arm",
            rest: "10 sec",
            cue: "15 reps this week — 3 more than week 2. 5-second pronated descent. Your brachioradialis is under load for 5 full seconds on every rep. The higher volume combined with the longer eccentric is the most demanding forearm and bicep session of the program.",
            harder: "Heaviest weight yet. 15 Zottman reps with a 5-second pronated lower under maximum load is one of the most complete arm exercises possible.",
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 2,
            reps: "6 sec lower · 3 sec squeeze · 10 reps each arm",
            rest: "10 sec",
            cue: "6-second eccentric this week. The deepest loaded stretch of the program. Your bicep is under tension at its longest length for 6 full seconds. 3-second squeeze at the top. 10 reps each arm. The combination of maximum stretch time and peak contraction hold is the most complete bicep stimulus in the program.",
            harder: "Steeper incline and heavier weight. 6-second lower from a steep incline under maximum load creates extreme bicep stretch tension. This is the ceiling.",
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
            cue: "Back from week 2 — heavier, more reps, longer squeeze. 15 reps, 5-second lower, 3-second squeeze. Your bicep is doing 100% of the work with more load, more volume, and more time under tension than week 2. This is the peak of isolated bicep work in the program. Leave nothing.",
            harder: "Absolute max weight for 15 reps with full tempo. The spider curl at max load with 5-second eccentrics and 3-second squeezes is the hardest isolated bicep protocol in the program.",
          },
          {
            name: "Diamond Push-Up Burnout",
            sets: 2,
            reps: "Max reps · 15 pulse reps · no rest",
            rest: "10 sec",
            cue: "Max reps to failure, then 15 pulse reps at the bottom. 5 more pulses than week 2. Your triceps are completely exhausted and now they have to keep working through 15 more partial reps. The last 5 pulses of a destroyed tricep are where the final adaptation happens. Do all 15.",
            harder: "Max load to failure, drop pack, full reps to failure, 15 pulses. The complete drop set protocol is the hardest tricep burnout in the program.",
          },
          {
            name: "Skull Crusher",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "15 sec",
            cue: "Back from week 2 — 15 reps this week with a 2-second pause at the forehead. The pause eliminates the stretch reflex and forces your triceps to generate force from a dead stop at their most loaded position. 5-second lower, 2-second pause, 15 reps. This is the peak of skull crusher volume in the program.",
            harder: "Heavier weight, 2-second pause. 15 reps of skull crushers with a 5-second lower and 2-second pause under maximum load is the ceiling of this exercise.",
          },
          {
            name: "Arnold Press Hold",
            sets: 2,
            reps: "12 full Arnolds · then 45 sec isometric hold",
            rest: "10 sec",
            cue: "12 full Arnold reps — 2 more than week 2 — then 45 seconds at parallel. Your shoulders are more pre-exhausted than week 2 and then they have to hold for 15 additional seconds. This is the most demanding shoulder finisher of the entire program. The final 10 seconds of that hold is everything. Do not drop.",
            harder: "Heaviest dumbbells of the program. The 45-second hold at parallel with maximum load after 12 heavy Arnolds is the peak of shoulder isolation training. This is the last set of the program. Leave it all.",
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

        .week-btn {
          flex: 1;
          padding: 10px 4px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #999;
          cursor: pointer;
          transition: all 0.2s;
        }
        .week-btn.active { color: #111; border-bottom-color: #7a9e7e; }

        .session-btn {
          flex: 1;
          padding: 10px 6px;
          background: #fff;
          border: 1px solid #e0e0e0;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
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
          background: #fafafa;
        }

        .stat-box {
          text-align: center;
          padding: 10px 14px;
          background: #f0f0f0;
          border-radius: 6px;
          min-width: 60px;
        }
        .stat-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #888; font-weight: 600; margin-bottom: 4px; }
        .stat-value { font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700; color: #111; line-height: 1; }

        .cue-box {
          background: #f0f5f1;
          border-left: 3px solid #7a9e7e;
          padding: 10px 14px;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          color: #444;
          line-height: 1.6;
          font-weight: 400;
          margin-top: 12px;
        }

        .harder-box {
          background: #1a1a1a;
          border-left: 3px solid #c0392b;
          padding: 10px 14px;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          color: #ccc;
          line-height: 1.6;
          font-weight: 400;
          margin-top: 8px;
        }

        .chevron {
          transition: transform 0.25s ease;
          color: #bbb;
          font-size: 18px;
          flex-shrink: 0;
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
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Arm Blast</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>4 Weeks · 3x/Week · Under 20 Min · Arms & Shoulders · Athlete Level</div>
      </div>

      {/* Week tabs */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", display: "flex", padding: "0 8px" }}>
        {weeks.map((w, i) => (
          <button key={i} className={`week-btn ${activeWeek === i ? "active" : ""}`}
            onClick={() => { setActiveWeek(i); setActiveSession(0); setExpandedEx(null); }}>
            <div>Wk {w.week}</div>
            <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: 1, color: activeWeek === i ? "#7a9e7e" : "#bbb" }}>{w.label}</div>
          </button>
        ))}
      </div>

      {/* Session selector */}
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
                {/* Video placeholder */}
                <div style={{ width: "100%", background: "#1a1a1a", borderRadius: 8, aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: 14, gap: 8 }}>
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
                  <div className="stat-box" style={{ flex: 1, minWidth: 120 }}>
                    <div className="stat-label">Work</div>
                    <div className="stat-value" style={{ fontSize: 11 }}>{ex.reps}</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Rest</div>
                    <div className="stat-value" style={{ fontSize: 11 }}>{ex.rest}</div>
                  </div>
                </div>

                {/* Coach Cue */}
                <div className="cue-box">
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a9e7e", fontWeight: 700, marginBottom: 5 }}>Coach Cue</div>
                  {ex.cue}
                </div>

                {/* Make it harder */}
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
