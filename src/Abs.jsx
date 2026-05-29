import { useState } from "react";

// --- PROGRAM DATA ---
// 6 Weeks · 4x per week · Pure Core · Mix of floor + hanging
// Sessions A & B alternate: A = anterior/flexion focus, B = rotation/stability focus
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
            cue: "Lower back PINNED to the floor — not almost pinned, actually pinned. The second your spine lifts, the rep is over. Extend opposite arm and leg simultaneously, hold 5 full seconds. This is a precision exercise. Treat it like one.",
            harder: "Hold a light weight plate overhead in both hands while extending. The load pulls your lower back off the floor. Fight it. That fight is the entire point.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "45 sec hold",
            rest: "15 sec",
            cue: "Arms overhead, legs low, lower back pressed flat. Your body makes one rigid curved line. If your lower back is arching, your legs are too low — raise them until the back flattens. Then lower them again. Find the limit and live there.",
            harder: "Hold a weight plate with arms fully extended overhead. The leverage makes this exponentially harder. Your abs will be shaking in 20 seconds. Hold anyway.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "3 sec lower · 20 reps",
            rest: "20 sec",
            cue: "Explode up, touch your feet, then lower for 3 full seconds. You will want to drop fast. Don't. The eccentric is where your abs are actually being built. Control every inch of that descent.",
            harder: "Hold a light dumbbell or plate in both hands overhead. The added lever arm doubles the demand on your abs. 20 reps with weight and a 3-second lower is not a beginner movement.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "3 sec out · 2 sec pause · 10 reps",
            rest: "25 sec",
            cue: "3 seconds rolling out — slow, controlled, spine in total neutral. Pause for 2 seconds fully extended. If your lower back sags at all during the pause, you rolled too far. Find the range where you can maintain position. Own that range first.",
            harder: "From your feet instead of your knees. Standing ab wheel rollouts are one of the hardest core exercises on the planet. Earn the floor version first, then stand up.",
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
            cue: "Dead hang. Drive both knees up using your abs — not your hip flexors, not momentum. 2 seconds up, 3 seconds down. If you're swinging, you've failed the movement. Start over. Stillness is the entire challenge here.",
            harder: "Straighten the legs. Hanging straight-leg raises with a 3-second eccentric are brutally hard. Your entire anterior chain is under load for every second of every rep.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "40 sec each side",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "Top leg on the bench, bottom leg hanging. Your obliques and adductors are doing everything right now. Don't let your hips drop even a millimeter. If they drop, the set is over. This is brutal for a reason — your lateral core is the most undertrained part of your midsection.",
            harder: "Add a hip dip. Lower the hip toward the floor and drive it back up — turns the static hold into a loaded lateral flexion. 40 seconds of those will test everything.",
          },
          {
            name: "Pallof Press Hold",
            sets: 2,
            reps: "5 sec hold per rep · 10 reps each side",
            rest: "20 sec",
            cue: "Cable or band anchored to your side. Press out and hold for 5 seconds. Your entire core is fighting rotation the whole time — that's anti-rotation training. Don't let your torso twist even slightly. If it does, the weight is too heavy. Drop it and hold the position perfectly.",
            harder: "Increase the band resistance or cable weight. The heavier the load, the harder your obliques have to work to resist it. Find the heaviest load where your form is perfect. Use that.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · full extension · 20 reps each side",
            rest: "20 sec",
            cue: "3 seconds to rotate and fully extend the opposite leg. Not a speed exercise — a control exercise. Your elbow has to reach toward the opposite knee with full trunk rotation. If your lower back comes off the floor, you're using your neck. Stop. Reset. Do it right.",
            harder: "Add a 2-second hold at full rotation before switching sides. The pause eliminates all momentum. Your obliques are completely loaded at that end range. Hold it.",
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
            cue: "Lying on your back, knees pulled to chest, hands behind head — elbows wide. Crunch up bringing your chest toward your knees simultaneously. 4-second lower back to the starting position. Your abs are loaded through the entire range of motion. No neck pulling — your hands are just resting there.",
            harder: "Add a weight plate held at your chest. The added load against your trunk flexion doubles the stimulus. 20 reps with a 4-second lower under load will destroy your upper abs.",
          },
          {
            name: "L-Sit Hold",
            sets: 2,
            reps: "Max hold — target 20 sec",
            rest: "20 sec",
            cue: "On parallel bars or two sturdy chairs, press yourself up and extend your legs parallel to the floor. Your hip flexors and abs are both working at maximum simultaneously. Every second is a fight. If your legs drop, the set is over. Work toward 20 continuous seconds.",
            harder: "Extend the hold — target 30 seconds. If you can't hold parallel yet, tuck your knees and build from there. The tucked version is still brutally hard.",
          },
          {
            name: "Jackknife",
            sets: 2,
            reps: "3 sec lower · 15 reps",
            rest: "20 sec",
            cue: "Lying flat, arms overhead, legs straight. In one movement, lift your arms and legs simultaneously and meet in the middle — reaching hands toward feet. 3 seconds back to the floor. Your entire anterior chain fires at once. Do not bend your knees to make it easier. Full extension, every rep.",
            harder: "Hold a light weight overhead. The lever arm of the weighted reach dramatically increases the demand on your lower abs and hip flexors. Even 5 lbs changes everything.",
          },
          {
            name: "Dragon Flag Negative",
            sets: 2,
            reps: "5 sec lower · 6 reps",
            rest: "25 sec",
            cue: "Lying on a bench, grip behind your head. Press your body up to a straight vertical position — use a jump if needed. Then lower your entire body as one rigid unit for 5 full seconds. Your abs and entire anterior chain are braking your bodyweight. This is the hardest anterior core exercise in the program. Earn every rep.",
            harder: "Slower descent — 8 seconds down. If you can lower for 8 seconds with a completely rigid body, your core strength is exceptional. That is the standard.",
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
            cue: "Full side plank — feet stacked, body straight. Thread your top arm under your body, rotating your torso, then open back up and reach to the ceiling. 2-second hold at both the closed and open position. Your obliques are working isometrically through the hold and dynamically through the rotation. Two stimuli in one.",
            harder: "Add a dumbbell in the threading hand. The weight forces a deeper rotation and loads the oblique through a greater range. Even 5 lbs makes this dramatically harder.",
          },
          {
            name: "Windmill",
            sets: 2,
            reps: "8 reps each side · slow and controlled",
            rest: "20 sec",
            cue: "One arm pressed overhead, feet wide. Hinge laterally and reach your other hand down your inner leg while keeping the overhead arm vertical. Your obliques, glutes, and shoulder stabilizers all work simultaneously. This is a full lateral chain movement. Control every inch of the descent and return.",
            harder: "Hold a kettlebell or dumbbell in the overhead hand. The loaded overhead position challenges your shoulder stability and oblique strength simultaneously. Start light — technique breaks down fast with too much weight.",
          },
          {
            name: "Russian Twist",
            sets: 2,
            reps: "3 sec rotation · 2 sec pause · 20 reps each side",
            rest: "20 sec",
            cue: "Seated, leaning back at 45 degrees, feet elevated. Rotate fully to one side for 3 seconds, hold for 2 — then rotate to the other. Your obliques are loaded through full rotation with a held contraction. The 45-degree lean keeps your abs continuously under tension throughout the entire set.",
            harder: "Hold a weight plate or medicine ball. The added load during rotation multiplies the oblique stimulus. Your rotational core will be completely spent after 2 sets with weight.",
          },
          {
            name: "Dead Bug with Rotation",
            sets: 2,
            reps: "5 sec hold · rotate toward extended arm · 10 reps each side",
            rest: "20 sec",
            cue: "Standard dead bug position — at the extended position, rotate your torso slightly toward the extended arm before returning. The rotation adds an oblique component to the anterior dead bug. Your core is now working in two planes simultaneously. Back stays flat. Non-negotiable.",
            harder: "Weight plate in both hands overhead with rotation. The combined anterior and rotational load is the most complete dead bug variation possible.",
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
            cue: "Forearms on a stability ball or bench, body in plank position. Make slow circles with your forearms — maintaining total body rigidity. Your abs are working to resist rotation, extension, and lateral movement simultaneously. The unstable surface means every circle is a different challenge. Smaller circles are harder. Start small.",
            harder: "Larger, slower circles. The further your forearms travel from center, the more your abs have to fight to keep your hips level. This should feel like your core is being pulled in every direction at once.",
          },
          {
            name: "Hanging Knee Raise to Extension",
            sets: 2,
            reps: "2 sec up · 1 sec hold · 3 sec down · 12 reps",
            rest: "20 sec",
            cue: "Hang from a bar. Drive knees up to chest — hold 1 second — then extend legs to parallel and hold 1 second — then lower for 3 seconds. Two peak positions per rep. Your abs have to generate force twice per rep and control the descent for 3 seconds. This is significantly harder than a standard knee raise.",
            harder: "Extend straight to vertical — toes pointing to the ceiling. The extended position from a dead hang to vertical is one of the hardest hanging core movements possible.",
          },
          {
            name: "Reverse Crunch",
            sets: 2,
            reps: "3 sec lower · 1 sec pause at bottom · 20 reps",
            rest: "15 sec",
            cue: "Lying on your back, legs bent at 90 degrees. Drive your hips off the floor by curling your lower abs — bring your knees toward your chest. 3 seconds back down. 1-second pause at the bottom with legs barely off the floor. Your lower abs are doing all the work. Do not swing your legs — drive with your abs.",
            harder: "Extend the legs fully during the lowering phase. The straight-leg reverse crunch with a 3-second eccentric is a dramatically harder version — your lower abs are controlling a much longer lever.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "4 sec out · 3 sec pause · 10 reps",
            rest: "20 sec",
            cue: "4 seconds out this week. 3-second pause fully extended. You are spending more time in the hardest position than any previous week. If your lower back sags during the pause, you went too far. Pull back slightly and find the position you can hold perfectly for 3 seconds. That position is your training range.",
            harder: "Standing rollouts. If you've been doing these from your knees, it's time. Standing ab wheel rollouts require full-body tension that floor variations cannot replicate.",
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
            cue: "Straight legs from a dead hang. Raise them to parallel or higher — abs only, no swing. 5-second descent. Your entire anterior chain is loaded for 5 seconds on the way down. If the bar is swinging, reset. Dead hang. Go again.",
            harder: "Add ankle weights. Even 2.5 lbs per ankle changes the leverage dramatically. 12 reps with a 5-second eccentric and ankle weights is elite core work.",
          },
          {
            name: "Copenhagen Plank with Hip Dip",
            sets: 2,
            reps: "10 hip dips each side · 3 sec lower · 2 sec hold at bottom",
            rest: "15 sec between sides · 20 sec between sets",
            cue: "From Copenhagen plank position, lower your hip toward the floor for 3 seconds, hold for 2, drive back up. This is not a static hold anymore — it's a loaded lateral flexion movement. Your obliques are working through full range under load. Every dip should feel heavier than the last.",
            harder: "Add a dumbbell resting on your hip during the dips. The load during lateral flexion is one of the most direct oblique strengthening stimuli possible.",
          },
          {
            name: "Pallof Press — Kneeling",
            sets: 2,
            reps: "7 sec hold per rep · 10 reps each side",
            rest: "15 sec",
            cue: "From a kneeling position — no base of support from your legs. Press the band out and hold for 7 seconds. Without your legs to help stabilize, your obliques and deep core have to do everything. This is significantly harder than standing. Your entire lateral core is engaged from hip to shoulder.",
            harder: "Single-knee kneeling — one knee up, one down. The reduced base forces even more anti-rotation effort. Find the heaviest band you can hold perfectly in this position.",
          },
          {
            name: "Toe Touch Crunch",
            sets: 2,
            reps: "3 sec up · 2 sec hold · 3 sec down · 15 reps",
            rest: "20 sec",
            cue: "Legs straight up toward the ceiling. Reach both hands toward your toes, crunching up for 3 seconds, hold at the top for 2, lower for 3. Your upper abs are under sustained tension for 8 seconds per rep. The straight-leg position means your lower abs are also working to maintain the vertical leg position throughout.",
            harder: "Hold a weight plate reaching toward your toes. The loaded reach with a 3-second up and down tempo is one of the most controlled upper ab stimuli in the program.",
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
            cue: "From a high plank, drive your hips up into a pike position — hold 2 seconds. Return to plank — hold 2 seconds. Your abs are transitioning between full extension loading in the plank and full compression loading in the pike. Two completely different core stimuli in one exercise. Keep the movement slow and deliberate.",
            harder: "Feet elevated on a box. The elevated position increases the range of motion and the amount of bodyweight your abs have to control through both transitions.",
          },
          {
            name: "Seated Knee Tuck",
            sets: 2,
            reps: "3 sec extend · 1 sec pause at extension · 20 reps",
            rest: "15 sec",
            cue: "Sitting on the edge of a bench, hands gripping the sides, lean back slightly. Drive knees to chest, then extend legs to parallel — 3 second extension, 1 second pause. Your lower abs are working at the hardest point of the range — the fully extended position with your legs barely off the floor. That pause is everything.",
            harder: "Ankle weights during the extensions. The weight at the end of the lever when legs are extended creates extreme lower ab loading. Even light ankle weights make this a completely different exercise.",
          },
          {
            name: "Weighted Sit-Up",
            sets: 2,
            reps: "4 sec lower · 1 sec pause at bottom · 15 reps",
            rest: "20 sec",
            cue: "Holding a weight plate at your chest. 4-second lower to the floor — controlled, not collapsed. 1-second pause at full extension at the bottom. Drive up through your abs. This is not a hip flexor exercise — anchor your feet if needed but focus on initiating every rep with your abs, not your legs.",
            harder: "Extend the weight overhead instead of at your chest. The overhead position dramatically increases the lever and demands more from your abs to control the descent.",
          },
          {
            name: "Dragon Flag Negative",
            sets: 2,
            reps: "6 sec lower · 5 reps",
            rest: "25 sec",
            cue: "6-second descent this week. One more second than last time you saw this movement. Your entire anterior chain is under load for 6 full seconds on every rep. By rep 4 you will be shaking. That is the point. Rigid body, slow descent, every time.",
            harder: "8-second descent. If you can lower for 8 seconds with a completely rigid body, you have one of the strongest cores in any gym. Chase that standard.",
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
            cue: "Side plank with a resistance band or cable anchored in front of you. Row with your top arm while maintaining the side plank — 1 second hold at full row. Your obliques are working isometrically to hold the plank while your back and bicep work dynamically through the row. The combination is significantly harder than either exercise alone.",
            harder: "Heavier band resistance. The heavier the row, the harder your obliques work to prevent your hips from rotating toward the anchor. Find the weight where the plank is genuinely threatened by the row.",
          },
          {
            name: "Windmill",
            sets: 2,
            reps: "3 sec lower · 2 sec hold at bottom · 10 reps each side",
            rest: "20 sec",
            cue: "3-second descent and 2-second hold at the bottom position this week. The held bottom position is where the oblique is fully lengthened under load. This is the most demanding part of the windmill — staying in that loaded stretch for 2 full seconds before returning. Your lateral chain is being taken to its limit.",
            harder: "Heavier weight overhead. The combination of more load and a 2-second held bottom position is an advanced oblique and shoulder stability challenge.",
          },
          {
            name: "Pallof Press — Walking",
            sets: 2,
            reps: "10 steps each direction · 3 sets each side",
            rest: "15 sec",
            cue: "Press out, hold the press, and walk laterally 10 steps — keeping the arms extended the entire time. You are resisting rotation while moving. Your obliques and deep stabilizers are working simultaneously. Do not let the arms come in during the walk. Press stays locked.",
            harder: "Heavier band or cable. Walking Pallof with significant load is one of the most functional anti-rotation movements you can do. Every step is a fight.",
          },
          {
            name: "Bicycle Crunch — Weighted",
            sets: 2,
            reps: "3 sec rotation · 3 sec hold · 20 reps each side",
            rest: "15 sec",
            cue: "Light weight behind your head — resting against your skull, not pulling your neck. 3-second rotation, 3-second hold at full trunk rotation. The load forces more complete rotation to reach the knee. Every rep has to be a full rotation or it doesn't count.",
            harder: "Heavier weight, 4-second hold. The loaded 4-second hold at full rotation is the most demanding bicycle crunch variation in the program.",
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
            cue: "From a hollow body hold, rock forward and backward — maintaining the exact same body position throughout. You never break the hollow shape. The rocking challenges your abs to maintain tension dynamically instead of statically. By second 20 your abs will be shaking. Do not let the shape collapse — if it does, pause, reset, and continue.",
            harder: "Weight plate overhead during the rocks. The loaded overhead position with continuous dynamic movement is an extreme hollow body challenge. Even 10 lbs overhead during rocks will test elite athletes.",
          },
          {
            name: "Toes to Bar",
            sets: 2,
            reps: "2 sec up · 4 sec down · 10 reps",
            rest: "20 sec",
            cue: "Dead hang. Raise straight legs all the way until your toes touch the bar. 4-second descent back to dead hang. This is the full expression of hanging anterior core strength — it demands hip flexor strength, lat engagement, and extreme ab control simultaneously. Zero swing. If the bar moves, reset.",
            harder: "Slow the descent to 6 seconds. Toes to bar with a 6-second eccentric from the bar to dead hang is one of the hardest hanging core movements that exists.",
          },
          {
            name: "V-Up to Tuck",
            sets: 2,
            reps: "Alternate V-Up and Tuck Crunch · 3 sec lower each · 20 reps total",
            rest: "15 sec",
            cue: "Alternate between a full V-Up and a Tuck Crunch each rep. The V-Up loads the full anterior chain. The tuck loads the compressed upper ab position. Your abs are being challenged at two completely different lengths on alternating reps. 3-second lower on every single rep — no exceptions.",
            harder: "Weight plate for the V-Ups only. The loaded V-Ups alternated with unweighted tucks creates an intensity variation within the set that takes your abs through maximum and moderate load alternately.",
          },
          {
            name: "Ab Wheel — Standing",
            sets: 2,
            reps: "5 sec out · 4 sec pause · 8 reps",
            rest: "25 sec",
            cue: "Standing ab wheel rollouts. From standing, roll out until your body is nearly parallel to the floor and hold for 4 seconds. Your entire body is a rigid plank supported only by the wheel and your toes. This is one of the hardest core exercises possible. If you cannot maintain a rigid body in the extended position, pull back. The pause has to be perfect.",
            harder: "6-second pause at full extension. Standing rollouts with a 6-second pause fully extended is elite-level anterior chain strength. Most athletes cannot do this cleanly.",
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
            cue: "30-second hold immediately into 8 hip dips — no break. The hold pre-exhausts your obliques and then the dips demand more from an already-fatigued lateral core. By dip 6 your obliques will be at failure. Do all 8. This combination is harder than either element done separately.",
            harder: "Dumbbell on hip during both the hold and dips. Loaded Copenhagen hold into loaded dips is the most demanding lateral core stimulus in the program.",
          },
          {
            name: "Half-Kneeling Cable Chop",
            sets: 2,
            reps: "3 sec chop · 1 sec hold · 12 reps each side",
            rest: "20 sec",
            cue: "Half-kneeling, cable or band anchored high. Chop diagonally across your body from high to low for 3 seconds — hold at the bottom for 1. Your obliques are working through full diagonal rotation under load. The half-kneeling position eliminates lower body assistance — your core does everything.",
            harder: "Heavier cable weight. The diagonal chop pattern under load is one of the most functional rotational core exercises. Heavy enough that the hold at the bottom is genuinely hard to maintain.",
          },
          {
            name: "Pallof Press — Single Leg",
            sets: 2,
            reps: "8 sec hold per rep · 8 reps each side",
            rest: "20 sec",
            cue: "Standing on one leg, press the band out and hold for 8 seconds. Your core is now resisting rotation AND managing single-leg balance simultaneously. The two demands compound each other — your obliques have to work harder because your base is unstable. This is functional core training at its most demanding.",
            harder: "Eyes closed, single leg, 8-second hold. No visual input forces your proprioceptive system to manage everything internally. This is elite stability training.",
          },
          {
            name: "Russian Twist — Weighted",
            sets: 2,
            reps: "3 sec rotation · 3 sec hold · 25 reps each side",
            rest: "15 sec",
            cue: "Weight plate or medicine ball, 45-degree lean, feet elevated. 3-second rotation to full range, 3-second hold with the weight at the furthest point. 25 reps each side. Your obliques are loaded through full rotation with extended holds at maximum range. This is the highest rotation volume of the program so far.",
            harder: "Heavier weight, 4-second hold. 25 reps with a 4-second hold under heavy load is a rotational oblique event. Your core will be completely spent.",
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
            cue: "12 reps this week. 5-second descent. The highest hanging core volume of the program. Your abs are controlling your entire bodyweight for 5 seconds on every rep. By rep 9 your grip and abs will both be fighting. Finish every rep. Form does not drop on the final week.",
            harder: "Ankle weights, 5-second descent. Weighted toes to bar at 12 reps is an elite hanging core standard. If you can do this cleanly, your anterior core is exceptional.",
          },
          {
            name: "Dragon Flag",
            sets: 2,
            reps: "Full rep — up and down · 6 sec lower · 5 reps",
            rest: "25 sec",
            cue: "Full dragon flag — press up to vertical and lower for 6 full seconds. Not just the negative anymore. The full rep requires you to generate enough strength to press up AND control the descent. 5 reps of that on the final week is the peak of anterior core training in this program.",
            harder: "8-second descent on the full rep. The complete dragon flag with an 8-second eccentric is one of the hardest core exercises a human being can perform. This is the ceiling.",
          },
          {
            name: "Hollow Body Rocks to V-Up",
            sets: 2,
            reps: "15 sec rocking · straight into 10 V-Ups · no rest",
            rest: "20 sec",
            cue: "15 seconds of hollow body rocks immediately into 10 V-Ups without stopping. Your abs are pre-exhausted from the rocks before the V-Ups even start. The V-Ups on pre-exhausted abs are a completely different exercise. This is the hardest anterior combination in the program.",
            harder: "Weight plate for both. Loaded rocks into loaded V-Ups is the absolute peak of anterior core training. Leave everything on the floor. This is the final week.",
          },
          {
            name: "Ab Wheel — Standing · Max Protocol",
            sets: 2,
            reps: "6 sec out · 5 sec pause · 10 reps",
            rest: "20 sec",
            cue: "The longest rollout and longest pause of the entire program. 6 seconds out, 5-second pause fully extended, 10 reps. You are spending 11 seconds of active loading per rep in the most mechanically demanding position possible. 10 reps of that is the hardest ab wheel protocol in the program. This is what 6 weeks built you for.",
            harder: "Standing, 5-second pause, add a weight vest. The combination of bodyweight leverage and external load in the fully extended standing rollout position is the absolute ceiling of anterior core training.",
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
            cue: "Toes to bar — at the top, rotate your hips to one side before descending. Alternate sides each rep. Your obliques are now working at the peak of the hanging range — the hardest position. The rotation demands rotational core strength simultaneously with peak anterior chain loading. This is the most complete hanging core movement in the program.",
            harder: "Ankle weights, 5-second rotational descent. The combination of load, peak range, and rotation is elite. Most athletes cannot do this movement at all.",
          },
          {
            name: "Copenhagen Plank — Full Destruction",
            sets: 2,
            reps: "45 sec hold · 12 hip dips · no rest",
            rest: "10 sec between sides · 15 sec between sets",
            cue: "45-second hold into 12 hip dips. This is the highest Copenhagen volume of the program. Your lateral core is being taken to absolute failure on every set. When you cannot do another dip, do one more. The final rep of the final set is the most important rep of the entire program.",
            harder: "Dumbbell on hip for the full protocol. 45-second loaded hold into 12 loaded dips is the hardest lateral core session possible. Your obliques will be destroyed. That's the goal.",
          },
          {
            name: "Half-Kneeling Cable Chop — Heavy",
            sets: 2,
            reps: "3 sec chop · 2 sec hold · 15 reps each side",
            rest: "15 sec",
            cue: "Maximum weight you can control for 15 reps with a 2-second hold at the bottom. 15 reps of heavy diagonal chops is the highest rotational loading of the program. Your obliques are working through full range under maximum load for every single rep. Final week — no compromises.",
            harder: "Add a rotation at the bottom hold — twist an extra inch further for 1 second before returning. The additional rotation at end range under maximum load is the hardest oblique stimulus in the program.",
          },
          {
            name: "Russian Twist — Final Protocol",
            sets: 2,
            reps: "3 sec rotation · 4 sec hold · 30 reps each side",
            rest: "10 sec",
            cue: "30 reps each side. 4-second holds. Maximum weight. Final session. Your obliques have been built over 6 weeks for this exact set. 30 reps with 4-second holds under maximum load is 210 seconds of oblique tension per set. This is the last movement of the program. Leave absolutely everything you have on the floor.",
            harder: "Heaviest weight you've used all program. 30 reps at 4-second holds with max load is the rotational peak of everything you've built. Empty the tank completely.",
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

        .week-btn {
          flex: 1;
          padding: 10px 4px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
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
        }
        .chevron.open { transform: rotate(180deg); }

        .focus-tag {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7a9e7e;
          font-weight: 700;
          margin-top: 4px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .exercise-body { animation: fadeIn 0.25s ease; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Abs</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>6 Weeks · 4x/Week · Under 20 Min · Pure Core · Floor + Hanging</div>
      </div>

      {/* Week selector */}
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
              Session {s.session} — {s.focus}
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
                    <div className="stat-value" style={{ fontSize: 12 }}>{ex.reps}</div>
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
