import { useState } from "react";

// --- PROGRAM DATA ---
// 4 Weeks · 3x per week · Arms & Shoulders · Athlete Level
// Sessions A (Push/Triceps/Shoulders) & B (Pull/Biceps) & C (Full Arm Burnout) rotate
const weeks = [
  {
    week: 1,
    label: "Establish the Load",
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
            harder: "Elevate your feet on a chair or box. The higher your feet, the more vertical the press, the more shoulder dominant it becomes. Work toward a wall handstand push-up.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 15 reps",
            rest: "20 sec",
            cue: "4 seconds down — that's 4 full seconds of eccentric tricep loading. 2 second pause at the bottom. Drive up fast. If you're leaning forward, your chest is involved. Stay upright. Elbows track straight back. This is a tricep movement.",
            harder: "Weight plate in your lap. A loaded dip with a 4-second eccentric and 2-second pause is one of the most effective tricep exercises possible. Stack the plates as you get stronger.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "3 sec lower · max reps",
            rest: "25 sec",
            cue: "Hands form a diamond under your sternum. Elbows must stay tight to your body — this is where most people fail. Lower for 3 full seconds. Max reps means the set ends when your form breaks, not when it burns. Note your number. Beat it every session.",
            harder: "Elevated feet or loaded backpack. Diamonds with your feet on a box shift even more load onto the triceps. With load added, your rep count will drop significantly. That's correct.",
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
            cue: "Body straight as a board from head to heel. Pull your chest to the bar — not your chin. Hold for 1 second at the top, squeezing your shoulder blades together hard. 3 seconds down. If your hips sag, the movement is over. Elevate your feet to make this harder immediately.",
            harder: "Feet elevated on a box or chair. The more horizontal your body, the harder the row. At full horizontal with feet elevated, this is approaching bodyweight row territory that rivals cable rows.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "4 sec lower · 1 sec hold at top · 12 reps each arm",
            rest: "15 sec",
            cue: "Neutral grip — thumbs up. Curl to your shoulder, hold for 1 second squeezing the brachialis hard, then lower for 4 full seconds. Your brachialis sits underneath your bicep — training it adds thickness and pushes the bicep up. That 4-second lower is where it's built.",
            harder: "Heaviest dumbbells you can control through the full 4-second eccentric. If the lower gets faster than 4 seconds, drop the weight. The tempo is the workout.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec squeeze at top · 10 reps each arm",
            rest: "15 sec",
            cue: "Elbow locked against your inner thigh. Curl all the way up, squeeze hard for 2 seconds at peak contraction, then lower for 5 full seconds. This eliminates every bit of momentum. Every inch of that movement is your bicep doing pure work.",
            harder: "Heavier dumbbell, longer squeeze. A 3-second squeeze at the peak of a concentration curl with heavy weight will make your bicep cramp in the best way possible.",
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
            cue: "7 reps bottom half of the curl only, 7 reps top half only, 7 full reps — all without stopping. The partial ranges isolate the peak contraction and bottom stretch separately before combining them. By rep 21 your biceps are completely spent. That's the point of this exercise.",
            harder: "Heavier weight for the bottom partials, drop slightly for the top. The bottom range handles more load. Use it. Your arms will be pumped beyond anything you've felt.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps — stop at form failure",
            rest: "25 sec",
            cue: "Close grip, elbows tight, full range. This is a burnout set — you go until your form breaks, not until it burns. The moment your elbows flare, your back arches, or you can't control the descent, the set is done. Record your number. It should climb every week.",
            harder: "Loaded backpack, max reps to failure. Weighted burnout sets are a completely different stimulus. Even 10 lbs will cut your rep count in half. Work back up over the 4 weeks.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "4 sec lower · 1 sec stretch · 12 reps",
            rest: "20 sec",
            cue: "Both hands on one dumbbell overhead, arms fully extended. Lower behind your head for 4 seconds — full stretch at the bottom, hold 1 second in the stretch. The long head of the tricep is only fully stretched when the arms are overhead. This hits the part of your tricep most exercises miss.",
            harder: "Heavier dumbbell with a longer stretch pause. 2 seconds in the stretched position with heavy weight will create significant tension in the long head. This is where arm thickness comes from.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 sec hold at parallel · 10 reps · then 30 sec hold",
            rest: "20 sec",
            cue: "Raise to parallel, hold for 10 seconds. Lower. Repeat 10 times. Then hold at parallel for 30 continuous seconds. Your lateral deltoid will be on fire within 3 reps. The 30-second hold at the end is the finisher — do not let the arms drop. Not even slightly.",
            harder: "Heavier dumbbells for the holds. Lateral raises are notoriously hard to load because the leverage at parallel is extreme. Even small weight increases make a massive difference.",
          },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "Increase the Demand",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Close-Grip Push-Up",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 15 reps",
            rest: "15 sec",
            cue: "4-second lower this week. 2-second pause. 2 sets. 15 seconds rest. You are under tension for almost the entire session. The rest is not enough to recover — that's intentional. Your triceps are being trained to work while fatigued. That's real strength.",
            harder: "More weight in the backpack than week 1. 4-second lower with added load and a 2-second pause at the bottom is a completely different movement. Your triceps will know.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "4 sec lower · 15 reps",
            rest: "15 sec",
            cue: "15 reps this week, 4-second lower. Your shoulders will hit failure faster than you expect at this tempo. When that happens — good. That's muscle damage that leads to growth. Don't rush the descent to get more reps. The tempo is the work.",
            harder: "Feet elevated higher than week 1. Higher elevation = more vertical press = more shoulder load. Work toward wall handstand push-ups progressively each week.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "4 sec lower · 3 sec pause · 15 reps",
            rest: "15 sec",
            cue: "3-second pause this week. You are sitting at the bottom of a dip — fully loaded — for 3 seconds. Your triceps are stretched under maximum tension. This pause will be the hardest part of the set. It's supposed to be.",
            harder: "More weight in the lap than week 1. The 3-second pause with added load is brutal. If you can't maintain the pause with load, drop the weight slightly. The pause is mandatory.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "4 sec lower · max reps",
            rest: "20 sec",
            cue: "4-second lower, max reps. Your rep count will drop from week 1 — that's expected. The slower tempo means more time under tension per rep. Fewer reps with a 4-second lower is more work than more reps with no tempo. Trust the numbers.",
            harder: "Elevated feet and loaded backpack. Combined elevation and load with a 4-second lower will test the ceiling of your tricep strength. Record your reps — this is your benchmark.",
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
            reps: "4 sec lower · 1 sec hang · 10 reps",
            rest: "20 sec",
            cue: "10 reps this week. 4-second eccentric. Every additional second of lowering means more time your bicep is loaded eccentrically — which is where the most growth stimulus comes from. By rep 8 you'll be fighting the descent. Fight it. Do not drop faster.",
            harder: "More weight than week 1. 10 reps of weighted chin-ups with a 4-second eccentric is a standard that most gym athletes can't match. Set the standard.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at top · 15 reps",
            rest: "15 sec",
            cue: "2-second hold at the top — squeeze everything. Shoulder blades fully retracted, chest to the bar. 4-second lower. 2 sets. 15 seconds rest. Your upper back and biceps will be completely loaded by set 3. Maintain the hold quality on every single rep.",
            harder: "Feet elevated higher. More horizontal = more load. Combine elevation with the 4-second lower and 2-second hold — this approaches the difficulty of an actual barbell row.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec hold at top · 12 reps each arm",
            rest: "10 sec",
            cue: "5-second eccentric this week. Your brachialis is loaded for 5 full seconds on the way down. This is the movement that builds arm thickness — not just bicep peak. Control every centimeter of the descent. Do not drop the dumbbell faster than 5 seconds.",
            harder: "Heaviest weight you can lower for exactly 5 seconds per rep. If you can do it faster than 5 seconds, the weight is too light. Find the load where 5 seconds is a fight.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec squeeze · 10 reps each arm",
            rest: "10 sec",
            cue: "3-second squeeze at the top. Your bicep is at peak contraction, under load, for 3 full seconds. This creates a level of localized tension you cannot replicate with any tempo shortcut. Own the squeeze. Then lower for 5 seconds. Every rep.",
            harder: "Heavier weight, 3-second squeeze. The combination of peak contraction hold and slow eccentric with heavy weight is the most effective bicep isolation technique in the program.",
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
            rest: "25 sec",
            cue: "Add a 2-second squeeze at the top of every rep this week. That's 21 squeezes per set. Your biceps will cramp. That's correct. The squeeze is the stimulus. Don't rush through it to finish — that defeats the entire purpose of 21s.",
            harder: "Heavier weight than week 1 with the 2-second squeeze. The combination of partial ranges, full range, and held contractions with heavy weight is the most complete bicep stimulus possible.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps — beat last week's number",
            rest: "20 sec",
            cue: "Beat your week 1 number on every set. If you don't, you didn't push hard enough in week 1 or you're not pushing hard enough now. There is no in between. Your form ceiling is the only thing that stops a set.",
            harder: "Loaded backpack, more weight than week 1. Progressive overload on burnout sets. Your max rep count will initially drop with more weight — work it back up over the final weeks.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "5 sec lower · 2 sec stretch · 12 reps",
            rest: "15 sec",
            cue: "2-second stretch at the bottom this week. Your tricep long head is fully stretched and loaded for 2 seconds on every rep. This is where the most mechanical tension in the muscle occurs. It will be uncomfortable. Stay in the stretch.",
            harder: "Heavier weight, 2-second stretch. More load in the stretched position means more mechanical tension on the long head. This is the fastest way to add size to the back of the arm.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 45 sec hold",
            rest: "15 sec",
            cue: "10 reps with 10-second holds, then 45 continuous seconds at parallel. Your lateral delts will hit failure before the 45 seconds is up. When they do — hold harder. The fight against failure is the stimulus. Do not drop the arms until the time is up.",
            harder: "Heavier dumbbells than week 1. The 45-second hold with increased load is a shoulder event. Your lateral delts will be completely exhausted. Good. That's the adaptation target.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Overload",
    sessions: [
      {
        session: "A",
        focus: "Triceps + Shoulders",
        exercises: [
          {
            name: "Close-Grip Push-Up",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 20 reps",
            rest: "10 sec",
            cue: "20 reps. 2 sets. 10 seconds rest. You are doing more volume than your triceps have ever handled at this tempo. By set 4 the rest will feel like nothing. That's the overload phase — your muscles are forced to work in a state of fatigue. That's when they grow.",
            harder: "Max load you can sustain through all 2 setss for 20 reps. If you drop below 20 reps, the load is too heavy. Find the weight where 20 is a fight but achievable every set.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 15 reps",
            rest: "10 sec",
            cue: "Pause at the bottom this week. Head close to the floor, 1 full second — no bouncing, no momentum. Your anterior deltoid is loaded at the bottom. The pause eliminates the stretch reflex and forces your shoulder to generate force from a dead stop.",
            harder: "Feet elevated to maximum height. 15 reps with a 4-second lower and 1-second bottom pause with feet elevated is approaching handstand push-up difficulty. This is advanced.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "10 sec",
            cue: "5-second lower this week. The longest eccentric of the program. Your tricep is under tension for 5 full seconds on every descent. 2 sets of 15 reps at this tempo. This is serious volume. Your triceps will be completely broken by the end. That's the goal.",
            harder: "Heaviest weight yet in the lap. 5-second lower with load is an advanced movement. If you lose the tempo, reduce the weight. The 5-second lower is the workout — not the load.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause · max reps",
            rest: "15 sec",
            cue: "Add a 1-second pause at the bottom this week. Dead stop, no momentum. Then press. Your max reps will be lower than week 2 — that's correct. A pause rep is harder than a touch-and-go rep. Account for it. Record your numbers.",
            harder: "Elevated feet and loaded backpack with pause reps. This is the most demanding diamond push-up variation in the program. Your triceps are being destroyed in the best possible way.",
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
            reps: "5 sec lower · 2 sec hang · 10 reps",
            rest: "15 sec",
            cue: "5-second lower. 2-second hang at the bottom. 2 sets. 15 seconds rest. You are spending 7 seconds in the stretched position of every rep. Your bicep is loaded eccentrically and then in a loaded stretch before every rep. This is where real arm strength is built.",
            harder: "Heaviest weight yet. 10 reps of weighted chin-ups with a 5-second lower and 2-second hang is one of the most demanding upper body pulling protocols possible. This builds elite bicep and back strength simultaneously.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "4 sec lower · 2 sec hold at top · 20 reps",
            rest: "10 sec",
            cue: "20 reps this week. 2 sets. 10 seconds rest. At this volume with a 4-second lower, your upper back and biceps are being taken to true muscle failure. The 20th rep on set 6 should be a genuine struggle. If it isn't, you need more elevation.",
            harder: "Maximum elevation — feet as high as possible. At full elevation with a 4-second lower and 2-second top hold, this is a near-vertical pull. Your entire posterior chain is involved.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "5 sec lower · 2 sec hold · 15 reps each arm",
            rest: "10 sec",
            cue: "15 reps each arm, 2 sets. 5-second lower, 2-second top hold. Your brachialis and brachioradialis are under sustained tension for the entire set. These muscles are responsible for arm thickness that bicep training alone cannot achieve.",
            harder: "Heaviest weight you can control for 15 reps with perfect tempo. If the eccentric breaks down before 15 reps, drop 5 lbs. The tempo is sacred.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec squeeze · 12 reps each arm",
            rest: "10 sec",
            cue: "12 reps this week with a 3-second squeeze. 2 sets. Your bicep is spending 3 seconds at peak contraction on every rep. That's 36 seconds of peak bicep contraction per set. There is no better isolated bicep stimulus.",
            harder: "Heaviest weight for the squeeze. At peak contraction with heavy weight, your bicep will cramp. Work through it — that's the muscle being pushed beyond its comfortable range.",
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
            reps: "7 bottom · 7 top · 7 full · 3 sec squeeze every rep",
            rest: "20 sec",
            cue: "3-second squeeze on every single rep. 21 held contractions. 2 sets. Your biceps will be completely pumped after set 2. The pump is not the goal — it's a side effect of complete muscular loading. Keep the form tight through all 2 sets.",
            harder: "Heaviest weight you can do 21s with a 3-second squeeze on every rep. This combination of partials, full range, and held peak contractions with load is the absolute peak of bicep training.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps — then 10 more",
            rest: "15 sec",
            cue: "Hit your max reps — the point where form breaks. Then take 3 seconds, and do 10 more. Those 10 reps after failure are where the adaptation lives. They will be ugly. Do them anyway. This is the overload week.",
            harder: "Loaded backpack to failure, then drop the pack and do 10 more. Drop sets with bodyweight after loaded failure is one of the most effective burnout techniques. Your triceps will be done.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "5 sec lower · 3 sec stretch · 15 reps",
            rest: "15 sec",
            cue: "3-second stretch at the bottom. 15 reps. 2 sets. Your tricep long head is being loaded in its fully stretched position for 3 seconds on every rep. This creates mechanical tension that is impossible to replicate with any other exercise. Feel it. Own it.",
            harder: "Heaviest dumbbell yet. 3-second stretch with significant load will create a deep ache in the long head. That discomfort means you're loading the muscle where it's weakest — which is exactly where it needs to grow.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 60 sec hold",
            rest: "10 sec",
            cue: "60-second hold at the end of 10 held raises. Your shoulders will be completely loaded. At 40 seconds they'll be screaming. At 60 seconds you will have earned every second of the program. Do not drop. Not an inch.",
            harder: "Heavier dumbbells than week 2. The 60-second hold with increased load is a shoulder test that most athletes cannot pass. Build to it. This week is where you find out what you're made of.",
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
            name: "Close-Grip Push-Up",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · max reps",
            rest: "10 sec",
            cue: "5-second lower. 2-second pause. Max reps. 2 sets. 10 seconds rest. This is the final week — no rep target. You go until form fails. The pace is the load. Every rep at this tempo is the hardest version of this exercise. Leave nothing behind.",
            harder: "Maximum load, max reps. Your rep count will be low. That's fine. Fewer reps with a 5-second lower under load is more work than 20 reps unweighted. Trust the stimulus.",
          },
          {
            name: "Pike Push-Up",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 15 reps",
            rest: "10 sec",
            cue: "5-second lower. 2-second pause at the bottom with your head near the floor. 15 reps. 2 sets. This is the hardest shoulder pressing volume of the program. Your anterior and lateral delts are going to be completely exhausted. Own it — it's the final week.",
            harder: "Maximum foot elevation. Wall handstand push-ups if you've built to them. 15 reps of handstand push-ups with a 5-second lower is an elite standard. Chase it.",
          },
          {
            name: "Tricep Dip",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 20 reps",
            rest: "10 sec",
            cue: "20 reps. 3-second pause. 5-second lower. 2 sets. 10 seconds rest. This is the peak of the program. 20 reps at this tempo means your tricep is under tension for over 2 minutes per set. That is an extraordinary amount of work. You built to this over 4 weeks.",
            harder: "Heaviest weight yet. 20 reps with 5-second lowers and 3-second pauses under maximum load is the hardest tricep protocol in this program. There is no ceiling for the weight — go as heavy as the tempo allows.",
          },
          {
            name: "Diamond Push-Up",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · max reps",
            rest: "10 sec",
            cue: "Everything you have. 5-second lower, 2-second pause, max reps, 2 sets, 10 seconds rest. This is the final test of your tricep strength. Every rep you complete is proof of the 4 weeks you put in. Complete every set. No shortcuts on the final week.",
            harder: "Elevated feet, maximum load, max reps. The most demanding version of this exercise. 2 sets of that to failure is the peak of upper body pushing volume in this program.",
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
            reps: "5 sec lower · 2 sec hang · max reps",
            rest: "10 sec",
            cue: "Max reps. Final week. Every rep counts. Your 5-second lower and 2-second hang mean every rep is 7 seconds of work. Hit max reps every set with that standard. If your rep 1 tempo is different from your last rep tempo — you failed the set.",
            harder: "Heaviest weight possible for max reps with full tempo. This is the absolute peak of weighted pulling in the program. What you do this week tells you exactly where your upper body strength is.",
          },
          {
            name: "Inverted Row",
            sets: 2,
            reps: "5 sec lower · 3 sec hold at top · max reps",
            rest: "10 sec",
            cue: "3-second hold at the top. Max reps. Your upper back is being taken to absolute failure at this volume and tempo. By set 4 the 3-second hold will feel impossible. Hold it anyway. That's the final week standard.",
            harder: "Maximum elevation, max reps. The most horizontal, most loaded version of this movement. 2 setss to failure at maximum difficulty. This is what 4 weeks was building toward.",
          },
          {
            name: "Hammer Curl",
            sets: 2,
            reps: "5 sec lower · 3 sec hold · 15 reps each arm",
            rest: "10 sec",
            cue: "3-second hold at the top this week. Your brachialis and bicep are both at peak contraction for 3 seconds before a 5-second descent. 15 reps each arm, 2 sets. Your arms will be completely pumped and fatigued. Keep going.",
            harder: "Heaviest weight for all 15 reps with full tempo. Every rep is 8 seconds of work. 15 reps means 2 minutes of arm loading per set. There is no harder hammer curl protocol.",
          },
          {
            name: "Concentration Curl",
            sets: 2,
            reps: "5 sec lower · 4 sec squeeze · 12 reps each arm",
            rest: "10 sec",
            cue: "4-second squeeze. Final week. Your bicep is at peak contraction under load for 4 full seconds. 12 reps means 48 seconds of peak bicep contraction per set, plus 60 seconds of 5-second eccentrics. This is complete bicep destruction. It's the last week — leave nothing.",
            harder: "Absolute max weight for 12 reps with a 4-second squeeze and 5-second lower. This is the hardest isolated bicep protocol possible without cables or machines. You built to this.",
          },
        ],
      },
      {
        session: "C",
        focus: "Final Arm Destruction",
        exercises: [
          {
            name: "21s Curl",
            sets: 2,
            reps: "7 bottom · 7 top · 7 full · 4 sec squeeze · no rest between",
            rest: "15 sec",
            cue: "4-second squeeze on every single rep. 21 squeezes. 2 sets. 15 seconds rest. This is the last session of the program. Your biceps have never worked this hard. They will never forget this. Every rep of every set is the culmination of 4 weeks of arm work.",
            harder: "Absolute max weight with a 4-second squeeze on all 21 reps. The combination of partial ranges, full range, and 4-second held peak contractions under maximum load is the hardest isolated bicep work you can do without a machine. This is it.",
          },
          {
            name: "Tricep Push-Up Burnout",
            sets: 2,
            reps: "Max reps · then 15 more · no excuses",
            rest: "10 sec",
            cue: "Max reps to form failure. Then 15 more. Every session you've been doing 10 after failure — now it's 15. Your triceps are destroyed. Do the 15 anyway. This is the final burnout of the program. There are no more sessions after this. Leave everything on the floor.",
            harder: "Max load to failure, drop the pack, 15 more. The drop set after loaded failure is the most demanding tricep finisher possible. Your arms should be unable to straighten when you're done. That's the goal.",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 2,
            reps: "5 sec lower · 4 sec stretch · 15 reps",
            rest: "10 sec",
            cue: "4-second stretch at the bottom. The longest loaded stretch of the long head in the program. 15 reps. 2 sets. 10 seconds rest. Your tricep long head will be under sustained mechanical tension for 9 seconds of every rep. This is the highest stimulus tricep session of the program.",
            harder: "Heaviest weight yet. 4-second stretch with maximum load creates extreme mechanical tension in the long head. This is the exercise that adds the most size to the back of the arm. Max it out on the final week.",
          },
          {
            name: "Lateral Raise Hold",
            sets: 2,
            reps: "10 reps with 10 sec holds · then 75 sec hold",
            rest: "10 sec",
            cue: "75-second final hold. Your shoulders have been building to this for 4 weeks. The 10 held raises pre-exhaust them. The 75-second hold finishes them completely. When your arms start to shake, squeeze harder. When you want to lower, raise them a centimeter instead. This is the last hold of the program. Make it count.",
            harder: "Heaviest dumbbells for the holds and the 75-second finisher. The 75-second hold with maximum load is the hardest shoulder isolation finisher in the program. If you complete it perfectly, your lateral delts have been completely transformed over 4 weeks.",
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
