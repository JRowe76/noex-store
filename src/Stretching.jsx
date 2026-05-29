import { useState, useEffect, useRef } from "react";

// 8 Weeks · 5x/Week · 15 Min Sessions
// Sessions alternate: M=Morning (dynamic + shorter holds), E=Evening (static + PNF + long holds)
// Week schedule: Mon=M, Tue=E, Wed=M, Thu=E, Fri=M  (or any 5 days)
// Focus areas: Hips, Hamstrings, Back, Shoulders, Lats

const weeks = [
  {
    week: 1,
    label: "Open Up",
    sessions: [
      {
        id: "1M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "World's Greatest Stretch", area: "Hips · Thoracic · Hamstring", style: "Dynamic", duration: 45, reps: "5 each side", cue: "Step into a deep lunge, plant your front hand, open your chest to the sky and reach. Move through it — this is not a hold. Breathe into each rotation. Your hips and thoracic spine are waking up together." },
          { name: "Hip Circle", area: "Hips · Hip Flexor", style: "Dynamic", duration: 40, reps: "10 each direction", cue: "Hands on hips, big slow circles. Full range — front, side, back, side. You are lubricating the joint before you demand anything from it. Make the circles as large as possible." },
          { name: "Cat-Cow", area: "Back · Spine", style: "Dynamic", duration: 40, reps: "10 full cycles", cue: "On all fours. Exhale and arch the spine to the ceiling, tuck the chin. Inhale and drop the belly, lift the head. Move with your breath. Your spine needs this every single morning." },
          { name: "Thread the Needle", area: "Shoulders · Lats · Thoracic", style: "Dynamic", duration: 40, reps: "8 each side", cue: "From all fours, slide one arm under your body and rotate. Let your shoulder drop toward the floor. Breathe and reach further on each rep. Your lats and thoracic rotation are being gently mobilized." },
          { name: "Standing Hamstring Swings", area: "Hamstrings", style: "Dynamic", duration: 40, reps: "12 each leg", cue: "Hold a wall, swing one leg forward and back with control. Not a kick — a controlled pendulum. Gradually increase range over the 12 reps. Your hamstrings are warming up, not being forced." },
        ],
      },
      {
        id: "1E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "90/90 Hip Stretch", area: "Hips · Hip Rotators", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "Both legs at 90 degrees, front shin parallel to your body, back shin perpendicular. Sit tall. Feel the deep hip rotator of your front leg releasing. Do not lean — stay upright and breathe into the tightness." },
          { name: "Supine Hamstring Stretch", area: "Hamstrings", style: "PNF", duration: 60, reps: "Contract 10 sec · release · deepen · 3 rounds each leg", cue: "Lying on your back, pull one leg toward you. At the end range — push your leg gently against your hands for 10 seconds. Fully relax. Then pull further. That new range is real. PNF doubles the stretch effect of passive holding alone." },
          { name: "Child's Pose with Lat Reach", area: "Lats · Back · Shoulders", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "From child's pose, walk both hands to one side and hold. You should feel a deep pull along the lat on the opposite side. Breathe — on every exhale let your ribcage drop closer to the floor. Your lat has to completely surrender." },
          { name: "Doorway Chest & Shoulder Stretch", area: "Shoulders · Chest", style: "Static", duration: 45, reps: "Hold 45 sec each side", cue: "Arm at 90 degrees on a wall or door frame. Rotate your body away slowly. You will feel your anterior shoulder and chest open. Hold the position and breathe — do not push further. Let the tension dissolve." },
          { name: "Lying Spinal Twist", area: "Back · Hips · Glutes", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "On your back, one knee crosses to the opposite side. Arms out wide. Both shoulders stay flat. Let gravity do the work — your spine is decompressing. This is the reward for everything you did today." },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "Sink Deeper",
    sessions: [
      {
        id: "2M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "World's Greatest Stretch", area: "Hips · Thoracic · Hamstring", style: "Dynamic", duration: 50, reps: "6 each side — add thoracic rotation hold", cue: "Same as week 1 but add a 3-second hold at the top of each rotation. You are bridging dynamic and static. The brief hold lets the thoracic tissue actually respond before you move on." },
          { name: "Deep Hip Circle with Pause", area: "Hips · Hip Flexor", style: "Dynamic", duration: 45, reps: "10 each direction — pause front and back", cue: "Pause for 2 seconds at the front of the circle — hip flexor loaded — and 2 seconds at the back — glute loaded. The pauses turn this into a hybrid mobilization. More range, more tissue response." },
          { name: "Cat-Cow with Side Bend", area: "Back · Spine · Lats", style: "Dynamic", duration: 45, reps: "10 cycles + 5 side bends each side", cue: "After 10 cat-cows, add lateral spine waves — walk your hands to the right, arch, walk left, arch. Your lats and quadratus lumborum are getting their morning dose of mobility." },
          { name: "Thread the Needle with Hold", area: "Shoulders · Lats · Thoracic", style: "Dynamic + Static", duration: 50, reps: "6 each side — 5 sec hold at deepest point", cue: "Thread through and hold for 5 seconds at maximum rotation. The held position lets your thoracic rotators actually release. Feel the difference from week 1." },
          { name: "Inchworm", area: "Hamstrings · Back · Shoulders", style: "Dynamic", duration: 50, reps: "8 full reps", cue: "Standing, fold forward, walk hands out to plank, walk feet back to hands, stand. Your entire posterior chain — hamstrings, back, shoulders — moves through its full range in a single flowing movement. This is whole-body morning activation." },
        ],
      },
      {
        id: "2E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "90/90 with Forward Fold", area: "Hips · Hip Rotators", style: "Static + PNF", duration: 75, reps: "45 sec hold · contract 10 sec · deepen · each side", cue: "From 90/90, fold forward over your front shin. At end range, push your front shin into the floor for 10 seconds — contract your hip rotators. Release completely and fold further. PNF on the hip rotators unlocks range that static stretching cannot reach." },
          { name: "Single-Leg Forward Fold", area: "Hamstrings · Back", style: "PNF", duration: 75, reps: "Contract 10 sec · release · 3 rounds each leg", cue: "Seated, one leg extended. Reach toward your foot. At end range, flex your foot and push your heel away — hamstring contraction against the stretch for 10 seconds. Release. Reach further. Your hamstrings will release 20 to 30 percent more range after each contraction." },
          { name: "Puppy Pose", area: "Lats · Shoulders · Back", style: "Static", duration: 75, reps: "Hold 75 sec", cue: "From all fours, walk your hands forward and lower your chest toward the floor — hips stay over knees. This is a deep lat and shoulder stretch. Every exhale, let your chest drop further. By 60 seconds your lats should feel completely open." },
          { name: "Sleeper Stretch", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 60, reps: "Contract 8 sec · release · deepen · 3 rounds each side", cue: "Lying on your side, bottom arm extended. Push your forearm toward the ceiling — your posterior shoulder contracts. Hold 8 seconds. Release and let gravity push your forearm toward the floor. Your posterior shoulder capsule is releasing. This prevents shoulder injuries and opens the joint space." },
          { name: "Figure Four Glute Stretch", area: "Hips · Glutes · Piriformis", style: "Static", duration: 75, reps: "Hold 75 sec each side", cue: "On your back, ankle over opposite knee. Either hold there or pull the bottom leg toward your chest. Your piriformis and deep hip rotators are being targeted. If your hips are tight, this will be intense. Breathe through it. Every exhale, let it go a little more." },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Find the Edge",
    sessions: [
      {
        id: "3M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "World's Greatest Stretch + Hamstring Reach", area: "Hips · Hamstring · Thoracic", style: "Dynamic", duration: 55, reps: "6 each side — add hamstring extension", cue: "After the rotation, straighten your front leg and reach for your foot. Bent knee lunge into hamstring stretch in one fluid movement. You are now loading two major tight spots simultaneously. Move with control — this is not a race." },
          { name: "Lateral Lunge to Deep Squat", area: "Hips · Inner Thigh · Hamstrings", style: "Dynamic", duration: 50, reps: "8 each side", cue: "Step wide into a lateral lunge — sit into the hip. Then shift into a deep squat in the center. Then the other side. Your inner hip, adductors, and deep hip flexors are all being activated. Stay low throughout — do not pop up between positions." },
          { name: "Thoracic Extension over Foam Roller", area: "Back · Thoracic · Shoulders", style: "Dynamic", duration: 50, reps: "Segment through 8 positions", cue: "Foam roller perpendicular to your spine. Arms crossed over chest. Extend back over the roller at each segment — move up your thoracic spine one vertebra at a time. This is the most direct morning thoracic mobilization possible. Your posture and shoulder mobility depend on this tissue." },
          { name: "Standing Lat Stretch with Reach", area: "Lats · Shoulders", style: "Dynamic + Static", duration: 50, reps: "8 each side — 4 sec hold", cue: "One arm overhead gripping a wall or doorframe, lean away and rotate slightly. 4-second hold. Your lat is one of the most commonly tight muscles in athletes. It pulls your shoulder down and limits overhead mobility. This fixes it." },
          { name: "Leg Swings — Forward, Lateral, and Cross", area: "Hamstrings · Hips · Glutes", style: "Dynamic", duration: 50, reps: "10 each direction each leg", cue: "All three planes this week. Forward and back for hamstrings and hip flexors, lateral for glutes and abductors, cross-body for IT band and piriformis. 10 reps each direction, gradually increasing range. Your hips are being mobilized in every plane they move in during real activity." },
        ],
      },
      {
        id: "3E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon Pose", area: "Hips · Piriformis · Hip Flexor", style: "Static", duration: 90, reps: "Hold 90 sec each side", cue: "Front shin parallel or angled, back leg fully extended. Walk your hands forward and let your chest drop toward the floor. 90 seconds. Your hip is going to fight this. Breathe through the resistance — on each exhale, let your hip surrender a little more. By 60 seconds most of the tension should be releasing." },
          { name: "PNF Hamstring Stretch — Band or Towel", area: "Hamstrings", style: "PNF", duration: 90, reps: "Contract 12 sec · release · 3 rounds each leg", cue: "Lying on your back with a band or towel around your foot. At end range, push your foot into the band for 12 seconds — full hamstring contraction. Release completely. Pull your leg 10 to 15 degrees further. Hold 30 seconds. That new range is real adaptation happening in real time." },
          { name: "Doorway Lat Stretch", area: "Lats · Shoulders · Back", style: "Static + PNF", duration: 75, reps: "Hold 30 sec · contract 8 sec · deepen · each side", cue: "Hold a door frame at shoulder height, step back, drop into a hip hinge. Your lat stretches along your entire side. At end range, pull the door frame toward you for 8 seconds — lat contraction. Release. Drop your hips further and feel the lat open even more." },
          { name: "Cross-Body Shoulder Stretch + PNF", area: "Shoulders · Posterior Deltoid", style: "PNF", duration: 75, reps: "Contract 8 sec · release · 3 rounds each side", cue: "Pull one arm across your body. At end range, push your arm against your hand for 8 seconds. Release. Pull it further. Your posterior deltoid and shoulder capsule are being systematically opened. Tight posterior shoulders affect everything from posture to upper body mechanics." },
          { name: "Supported Back Extension", area: "Back · Lumbar", style: "Static", duration: 75, reps: "Hold 75 sec", cue: "Lying face down, props under your hips if needed, press up onto your forearms or hands. Your lumbar spine is gently extending. Most people spend their entire day in flexion — this is the antidote. 75 seconds of lumbar decompression. Breathe and let your spine lengthen." },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "Hold Longer",
    sessions: [
      {
        id: "4M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "World's Greatest Stretch — Full Sequence", area: "Hips · Hamstring · Thoracic · Shoulder", style: "Dynamic", duration: 60, reps: "6 each side — full 4-movement sequence", cue: "Deep lunge, rotation, hamstring reach, shoulder opener — all four in sequence before switching legs. You have built to this over 3 weeks. This is now a complete morning mobility sequence in one exercise. Move deliberately between each position." },
          { name: "Deep Squat with Thoracic Rotation", area: "Hips · Back · Thoracic", style: "Dynamic + Static", duration: 55, reps: "10 rotations each side from the squat", cue: "Hold a deep squat, one hand on the floor, other arm rotating open to the ceiling. 10 rotations each side. The deep squat opens the hips while the rotation mobilizes your thoracic spine. Two major problem areas simultaneously." },
          { name: "Foam Roller Thoracic + Lat", area: "Back · Lats · Thoracic", style: "Dynamic", duration: 55, reps: "Thoracic segment roll + 8 lat positions each side", cue: "Segment through the thoracic spine, then turn the roller perpendicular and roll your lat from armpit to mid-back. Your thoracic and lat tissue is being directly mobilized before you load it with any activity. This is morning soft tissue work." },
          { name: "Overhead Lat Stretch with Lateral Lean", area: "Lats · Shoulders · Back", style: "Dynamic + Static", duration: 55, reps: "8 each side — 5 sec hold at max lean", cue: "Both arms overhead, clasp hands. Lean to one side — feel the entire lat from armpit to hip stretching. 5-second hold. The overhead position with lateral lean is the deepest lat stretch accessible without equipment." },
          { name: "Hip Flexor Lunge with Rotation", area: "Hip Flexors · Hips · Thoracic", style: "Dynamic", duration: 55, reps: "8 each side", cue: "Deep lunge with your back knee on the floor. Rotate your torso over your front leg. Your hip flexor of the back leg and the thoracic spine on the same side are both being mobilized. Runners and desk workers both desperately need this." },
        ],
      },
      {
        id: "4E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon with PNF", area: "Hips · Piriformis", style: "PNF", duration: 100, reps: "Contract 12 sec · release · 2 rounds each side", cue: "From half pigeon, push your front shin into the floor for 12 full seconds — your hip rotators contract hard. Release completely. Your hip will drop noticeably further. Hold that new position for 30 seconds. PNF on the pigeon pose is the fastest way to open stubborn hip rotators." },
          { name: "Standing Hamstring Fold with PNF", area: "Hamstrings · Back", style: "PNF", duration: 100, reps: "Contract 12 sec · release · 3 rounds", cue: "Standing, fold forward as far as possible. Squeeze your quads hard — hamstrings relax reflexively. Now fold further. At the new end range, tighten your hamstrings against the stretch for 12 seconds. Release. Fold further. Repeat 3 times. You will touch the floor by the end if you couldn't before." },
          { name: "Wall Lat Stretch — Hip Hinge", area: "Lats · Shoulders · Back", style: "Static + PNF", duration: 90, reps: "Hold 45 sec · contract 10 sec · deepen · each side", cue: "Both hands on a wall at waist height, step back, push your hips back, chest toward the floor. Your lats are being stretched from attachment to attachment. At end range, pull the wall toward you for 10 seconds. Release. Push your hips further back. The lat will give you more range." },
          { name: "Sleeper Stretch — Extended Protocol", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 90, reps: "Contract 10 sec · release · 4 rounds each side", cue: "4 rounds this week. Each contraction-release cycle gives you more range. By round 4 your posterior shoulder should be dramatically more open than when you started. This is cumulative release — it only works if you complete all 4 rounds." },
          { name: "Supine Twist with Arm Overhead", area: "Back · Lats · Hips", style: "Static", duration: 90, reps: "Hold 90 sec each side", cue: "Lying spinal twist with your top arm extended overhead — fingers reaching away from your feet. This adds a lat stretch on top of the spinal rotation. Your back, lat, and hip are all releasing simultaneously. 90 seconds. Breathe slowly. This is how you end the day." },
        ],
      },
    ],
  },
  {
    week: 5,
    label: "PNF Depth",
    sessions: [
      {
        id: "5M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "Flow Sequence — Lunge to Pigeon to Downward Dog", area: "Hips · Hamstrings · Back · Shoulders", style: "Dynamic Flow", duration: 65, reps: "5 full flows each side", cue: "Lunge, lower the back knee, open into a half pigeon shape, press back to downward dog, walk out to the other side. 5 complete flows. By week 5 your body has the mobility to flow through this without stopping. Move with your breath. Each position gets a natural hold before flowing on." },
          { name: "Thoracic Rotation in Squat", area: "Back · Thoracic · Hips", style: "Dynamic", duration: 55, reps: "12 rotations each side", cue: "Deep squat hold, elbow on the inside of your knee for leverage, other arm rotating fully overhead. 12 each side. Your thoracic is warm, your hips are open, and the squat gives you the base to rotate further than standing ever allows." },
          { name: "Banded Lat Pulldown Stretch", area: "Lats · Shoulders", style: "Dynamic + Static", duration: 55, reps: "10 reps · 5 sec hold at full stretch", cue: "Band overhead anchored high, step back, hinge at the hip, arms long. Pull down slowly and return. 5-second hold at maximum length on each rep. Your lat is being loaded through its full range of motion under slight resistance. This is active stretching — far more effective than passive." },
          { name: "Hip 90/90 Transition Flow", area: "Hips · Hip Rotators", style: "Dynamic Flow", duration: 55, reps: "10 full transitions each direction", cue: "From 90/90 position, rotate your hips and transition to the opposite 90/90 position — both legs switching simultaneously. 10 rotations each direction. Your hip rotators are being taken through their full active range. This is the dynamic version of what you've been holding statically." },
          { name: "Inchworm with Push-Up and Rotation", area: "Hamstrings · Back · Shoulders · Hips", style: "Dynamic Flow", duration: 60, reps: "8 full reps", cue: "Inchworm out to plank, add a push-up, add a thoracic rotation, walk back in. 8 complete reps. Your entire posterior chain, chest, shoulders, and hips are all involved. This is the most complete morning movement sequence in the program." },
        ],
      },
      {
        id: "5E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon — Extended Hold + PNF", area: "Hips · Piriformis · Hip Flexor", style: "PNF + Static", duration: 110, reps: "Contract 12 sec · release · 90 sec hold · each side", cue: "Contract, release, then settle into the deepest position and hold for 90 full seconds. The combination of PNF followed by a long static hold is the most effective hip-opening protocol in the program. By 90 seconds your piriformis should be completely surrendered. Stay in it." },
          { name: "PNF Hamstring — 4 Round Protocol", area: "Hamstrings", style: "PNF", duration: 110, reps: "Contract 12 sec · release · 4 rounds each leg", cue: "4 rounds of PNF. Each round unlocks more range. If you started the program barely reaching your shins, by round 4 tonight you may be reaching your ankles. That range accumulation is real structural change happening in your hamstrings. Trust the process and complete every round." },
          { name: "Doorway Lat Stretch — Full Protocol", area: "Lats · Shoulders · Back", style: "PNF", duration: 100, reps: "Contract 10 sec · release · 3 rounds · each side", cue: "3 rounds of PNF on your lat. By round 3 your lat should be significantly more open than at the start. Your shoulder will sit lower and further back — that's correct positioning. Tight lats pull the shoulder forward and down. You are undoing that." },
          { name: "Posterior Shoulder PNF — 4 Rounds", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 100, reps: "Contract 10 sec · release · 4 rounds each side", cue: "4 rounds this week. Your posterior shoulder capsule releases a little more with every round. By round 4 your internal shoulder rotation should be dramatically improved. This is the stretch that keeps overhead athletes healthy. Commit to all 4 rounds — the last round is where the biggest change happens." },
          { name: "Legs Up the Wall", area: "Hamstrings · Back · Hips", style: "Static", duration: 90, reps: "Hold 90 sec — flex and point feet", cue: "Hips as close to the wall as possible, legs straight up. Alternate between flexing your feet — hamstring stretch — and pointing — calf release. 90 seconds of passive hamstring and back decompression after a full day. This is the most restorative position in the program. Let gravity do everything." },
        ],
      },
    ],
  },
  {
    week: 6,
    label: "Full Release",
    sessions: [
      {
        id: "6M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "Sun Salutation Flow — Modified", area: "Full Body · Hips · Hamstrings · Back · Shoulders", style: "Dynamic Flow", duration: 70, reps: "5 full flows", cue: "Modified sun salutation — mountain pose, forward fold, halfway lift, lunge, downward dog, lunge other side, forward fold, stand. 5 flows. By week 6 you have built the hip, hamstring, and shoulder mobility to move through this cleanly. Your morning flow is now a complete mobility session in itself." },
          { name: "Deep Squat Hold with Reach", area: "Hips · Back · Shoulders", style: "Dynamic + Static", duration: 60, reps: "2 min cumulative — move within the squat", cue: "Hold a deep squat for 2 cumulative minutes. Inside the squat — rotate, reach, shift weight, move your arms overhead. Stay in the squat the entire time. By week 6 your hips have the mobility to do this. The deep squat is one of the most important human movement patterns. Own it." },
          { name: "Active Lat Hang", area: "Lats · Shoulders · Back", style: "Dynamic + Static", duration: 60, reps: "5 x 20 sec hangs · active depression", cue: "Hang from a bar with a relaxed grip. Pack your shoulders down — engage your lats to pull your shoulder blades down. Hold 20 seconds. Release. 5 hangs. This decompresses your spine, lengthens your lats, and builds active shoulder stability simultaneously. It's the most efficient lat and shoulder stretch in the program." },
          { name: "Hip Flow — 90/90, Pigeon, Squat Cycle", area: "Hips · Hip Rotators · Hip Flexors", style: "Dynamic Flow", duration: 60, reps: "6 full cycles each side", cue: "90/90 transition — flow into a half pigeon — press back and flow into a deep squat. 6 cycles each side. Your hips are moving through every position that has been built over 6 weeks. This flow is the morning expression of all your evening work. It should feel dramatically easier than week 1." },
          { name: "Standing Thoracic Rotation with Reach", area: "Back · Thoracic · Lats", style: "Dynamic", duration: 60, reps: "15 each side", cue: "Standing, arms at 90 degrees, rotate fully and reach the top arm as far as possible. 15 each side. Your thoracic has been opened over 6 weeks of consistent work. The range you have now compared to week 1 is the result of that work. Use it." },
        ],
      },
      {
        id: "6E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon — Stacked Shins", area: "Hips · Hip Rotators · Glutes", style: "Static + PNF", duration: 110, reps: "Contract 12 sec · release · 90 sec hold · each side", cue: "Shins stacked, one on top of the other. This is a deeper hip rotator stretch than half pigeon. If you can't stack — use blocks or a pillow. PNF first, then settle for 90 seconds. By week 6 most people can feel the difference from week 1. Your hip tissue is genuinely more pliable now." },
          { name: "PNF Hamstring — Standing Fold", area: "Hamstrings · Back", style: "PNF", duration: 110, reps: "Contract 12 sec · release · 4 rounds", cue: "Standing fold — at end range, tighten your hamstrings by trying to stand up without actually moving. 12 seconds. Release. Fold further. 4 rounds. Standing PNF is different from supine — gravity assists the release and your back also decompresses. By round 4 your hamstrings have released more than any single passive session could produce." },
          { name: "Banded Shoulder Distraction", area: "Shoulders · Lats", style: "Static + PNF", duration: 100, reps: "Contract 10 sec · release · 3 rounds each arm", cue: "Band anchored low, loop around your wrist, step away to create traction. Your shoulder joint space is being opened under gentle distraction. At end range, resist the band for 10 seconds — the joint muscles contract. Release. The distraction allows the capsule to open further than stretching alone." },
          { name: "Saddle Pose — Supported", area: "Hip Flexors · Quads · Back", style: "Static", duration: 100, reps: "Hold 100 sec — supported with props", cue: "Sitting back between your feet or on a block, supported so you can fully relax. Your hip flexors and quads are in a sustained lengthened position. Most athletes have chronically shortened hip flexors — this position reverses it over time. 100 seconds. Do not fight it. Breathe and surrender." },
          { name: "Extended Supine Twist with Bind", area: "Back · Lats · Hips · Shoulders", style: "Static", duration: 100, reps: "Hold 100 sec each side", cue: "Lying twist with your top arm reaching overhead and your bottom arm wrapping around the bent knee — creating a full side-body and lat stretch simultaneously with the spinal rotation. This combines everything — back, lat, hip, shoulder — in one position. 100 seconds. This is the reward for 6 weeks of consistent work." },
        ],
      },
    ],
  },
  {
    week: 7,
    label: "Integrate",
    sessions: [
      {
        id: "7M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "Full Sun Salutation with Holds", area: "Full Body · All Hot Spots", style: "Dynamic Flow", duration: 75, reps: "4 flows — 3 sec hold at each position", cue: "Full sun salutation with a 3-second hold at every position — downward dog, lunge, pigeon, low lunge, halfway lift. Each hold lets the tissue respond before you flow on. 4 complete flows takes the full 75 seconds. This is your peak morning mobility session." },
          { name: "Cossack Squat", area: "Hips · Inner Thigh · Hamstrings · Ankles", style: "Dynamic", duration: 65, reps: "10 each side", cue: "Wide stance, shift into a deep lateral squat on one side while the other leg extends fully. Alternate. Your inner hip, adductors, and hamstrings are all being dynamically loaded. This is a movement most people cannot do in week 1 — your 7 weeks of hip and hamstring work make it possible now." },
          { name: "Active Lat Hang with Rotation", area: "Lats · Shoulders · Thoracic", style: "Dynamic + Static", duration: 65, reps: "5 x 20 sec — rotate during each hang", cue: "Hang from the bar, then gently rotate your body left and right during the hang. The rotation adds thoracic and lat decompression on top of the traction. Your spine is being lengthened and rotated simultaneously. This is the most complete spinal decompression in the program." },
          { name: "Hip 90/90 to Stand Flow", area: "Hips · Hip Rotators · Balance", style: "Dynamic Flow", duration: 60, reps: "8 each side", cue: "From 90/90, use your hip rotators to stand up without using your hands — then lower back to 90/90 on the other side. This is active hip mobility — your hip rotators are working through the full range, not just being passively stretched. By week 7 you should be able to do this smoothly." },
          { name: "Arm Circles to Shoulder Flow", area: "Shoulders · Lats · Thoracic", style: "Dynamic", duration: 60, reps: "10 each direction + reach sequence", cue: "Large controlled arm circles in both directions, then transition into an overhead reach, lateral reach, and cross-body reach sequence. Your shoulder joint and lat are being taken through every plane of motion as a morning warmup. Full range shoulder mobility before your day begins." },
        ],
      },
      {
        id: "7E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon + Forward Fold PNF", area: "Hips · Hip Rotators · Back", style: "PNF", duration: 120, reps: "Contract 12 sec · release · fold · 2 rounds each side", cue: "From double pigeon, fold forward. PNF from the folded position — push your shins into the floor for 12 seconds. Release and fold further. 2 rounds. The forward fold deepens the hip rotator stretch dramatically. By round 2 your chest may be close to your shins. Week 7 is where the big breakthroughs happen." },
          { name: "PNF Hamstring — Contract-Relax-Contract", area: "Hamstrings", style: "PNF", duration: 110, reps: "Contract ham · relax · contract quad · release · 4 rounds each leg", cue: "Supine stretch. Push your leg into your hands — hamstring contracts. Release. Now pull your leg toward you while tightening your quad — reciprocal inhibition forces the hamstring to release even more. 4 rounds. This advanced PNF protocol produces the largest range gains of any stretch in the program." },
          { name: "Overhead Lat PNF — Band Assisted", area: "Lats · Shoulders · Serratus", style: "PNF", duration: 110, reps: "Contract 10 sec · release · 3 rounds each side", cue: "Band overhead, arm fully extended, lean away. At end range, pull the band toward your body for 10 seconds — lat contraction. Release. Let the band pull your arm further overhead. Your lat is now stretching from a position most people cannot reach statically. This builds true overhead mobility." },
          { name: "Saddle Pose — Deepened", area: "Hip Flexors · Quads · Lumbar", style: "Static + PNF", duration: 110, reps: "Hold 60 sec · contract 10 sec · release · hold 40 sec", cue: "Saddle pose for 60 seconds, then push your knees into the floor for 10 seconds — quad and hip flexor contraction. Release. Your hips drop further. Hold the new position for 40 seconds. PNF in saddle pose opens the hip flexors faster than any passive approach. Your hip flexors are the most important muscle group for posture and performance." },
          { name: "Full Body Supine Release", area: "Back · Hips · Shoulders · Lats", style: "Static Flow", duration: 110, reps: "Twist · legs up wall · star · 35 sec each", cue: "Move through three final positions — supine twist with overhead reach 35 seconds each side, legs up wall 35 seconds, then spread-eagle star position 35 seconds with slow full-body breath. This is the closing sequence of every evening session. Let your entire body release completely." },
        ],
      },
    ],
  },
  {
    week: 8,
    label: "Your New Normal",
    sessions: [
      {
        id: "8M",
        type: "Morning",
        vibe: "Activate & Mobilize",
        totalTime: "15 min",
        stretches: [
          { name: "Full Flow — Your Morning Practice", area: "Full Body · All Hot Spots", style: "Dynamic Flow", duration: 80, reps: "5 full flows — your own pace", cue: "Everything you have built — sun salutation with holds, pigeon transitions, thoracic rotations, lat hangs. 5 flows at your own pace. By week 8 this should feel like a practice, not a workout. You know what each position should feel like. Move with intention. This is your morning practice for life." },
          { name: "Cossack Squat with Overhead Reach", area: "Hips · Hamstrings · Lats · Shoulders", style: "Dynamic", duration: 65, reps: "12 each side — reach opposite arm overhead", cue: "Cossack squat with the arm on the extended-leg side reaching overhead and laterally. Your hip, hamstring, and lat are all being stretched simultaneously in a dynamic loaded position. This is the most demanding morning hip and lat exercise in the program. 8 weeks built you for this." },
          { name: "Active Lat Hang — Max Duration", area: "Lats · Shoulders · Spine", style: "Static", duration: 65, reps: "3 x max duration hangs", cue: "3 max-effort hangs — go as long as you can with active shoulder depression. No fixed time. Your grip and shoulder endurance will determine the duration. The cumulative spinal decompression from 3 max hangs is the most complete lat and spine release in the program." },
          { name: "Full Hip Flow — No Stops", area: "Hips · All Planes", style: "Dynamic Flow", duration: 65, reps: "Continuous 65 sec flow — all hip positions", cue: "Continuous hip flow — 90/90 transitions, pigeon, squat, lateral lunge, hip circles. No stopping, no reset. Your hips have been trained for 8 weeks to move through all these positions with ease. Flow through all of them continuously. This is what mobile hips feel like." },
          { name: "Thoracic + Shoulder Integration Flow", area: "Thoracic · Shoulders · Lats", style: "Dynamic Flow", duration: 65, reps: "Continuous 65 sec — all positions", cue: "Arm circles, thoracic rotations, lat reaches, thread the needle, overhead hangs — all flowing into each other without stopping. Your thoracic and shoulder mobility has been built over 8 weeks. This final morning flow is the proof of that work. Move freely." },
        ],
      },
      {
        id: "8E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon — Full Protocol", area: "Hips · Hip Rotators", style: "PNF + Static", duration: 120, reps: "PNF 2 rounds · hold 90 sec · each side", cue: "2 rounds of PNF, then hold for 90 full seconds. This is the longest hip rotator hold of the program. By week 8 your piriformis and deep hip rotators should feel dramatically more open than they did in week 1. 90 seconds here now feels different than it did. That's 8 weeks of work." },
          { name: "PNF Hamstring — Full Advanced Protocol", area: "Hamstrings", style: "PNF", duration: 120, reps: "Contract ham · relax · contract quad · 5 rounds each leg", cue: "5 rounds of the full contract-relax-contract protocol. The most complete hamstring PNF session in the program. By round 5 your hamstrings should be at their maximum open position — the result of 8 weeks of progressive loading. This is your hamstring range benchmark. Note where you are. Come back and test it in a month." },
          { name: "Full Lat PNF — Standing and Overhead", area: "Lats · Shoulders · Serratus", style: "PNF", duration: 120, reps: "Wall protocol + overhead protocol · 3 rounds each · each side", cue: "Wall hip hinge lat stretch PNF first, then overhead band-assisted lat PNF. Both protocols back to back on each side. Your lat is being opened from both its origin and its insertion simultaneously. By the end of this session your lats will be more open than they have been in years." },
          { name: "Full Body Saddle PNF", area: "Hip Flexors · Quads · Lumbar", style: "PNF + Static", duration: 120, reps: "Contract 12 sec · release · hold 60 sec", cue: "PNF in saddle pose, then hold the deepest position for 60 full seconds. Your hip flexors have been systematically lengthened over 8 weeks. This final saddle pose is the test. How far you've come from week 1 in this position tells you everything about what consistent stretching does to hip flexor length." },
          { name: "Final Release — Complete Body Surrender", area: "Everything", style: "Static Flow", duration: 120, reps: "Twist · legs up wall · star · savasana — 30 sec each", cue: "Supine twist both sides, legs up the wall, star position, then complete stillness — savasana. This is the final session of the program. 30 seconds in each position. No effort. No holding. Just complete release. Your body has changed over 8 weeks. This is the moment you feel all of it. Let go of everything and breathe." },
        ],
      },
    ],
  },
];

// Timer component
function Timer({ duration, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(duration);
    setRunning(false);
    clearInterval(intervalRef.current);
  }, [duration]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            if (onComplete) onComplete();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const pct = ((duration - timeLeft) / duration) * 100;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div style={{ margin: "12px 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: timeLeft === 0 ? "#7a9e7e" : "#111", letterSpacing: -1 }}>
          {timeLeft === 0 ? "✓ Done" : `${mins}:${secs.toString().padStart(2, "0")}`}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { setTimeLeft(duration); setRunning(false); }}
            style={{ padding: "7px 14px", background: "none", border: "1px solid #ddd", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", color: "#888" }}>
            Reset
          </button>
          <button onClick={() => setRunning(r => !r)}
            style={{ padding: "7px 18px", background: running ? "#c0392b" : "#7a9e7e", border: "none", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", color: "#fff" }}>
            {running ? "Pause" : timeLeft === duration ? "Start" : "Resume"}
          </button>
        </div>
      </div>
      <div style={{ height: 6, background: "#f0f0f0", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: timeLeft === 0 ? "#7a9e7e" : "#2b2e2b", borderRadius: 3, transition: "width 1s linear" }} />
      </div>
    </div>
  );
}

const styleColors = {
  "Static": { bg: "#f0f5f1", color: "#4a7a50" },
  "Dynamic": { bg: "#f0f4ff", color: "#4a5aaa" },
  "PNF": { bg: "#fff5f0", color: "#aa5a2a" },
  "Dynamic + Static": { bg: "#f5f0ff", color: "#7a4aaa" },
  "Static + PNF": { bg: "#fff5f0", color: "#aa5a2a" },
  "PNF + Static": { bg: "#fff5f0", color: "#aa5a2a" },
  "Dynamic Flow": { bg: "#f0faff", color: "#2a7aaa" },
  "Static Flow": { bg: "#f0f5f1", color: "#4a7a50" },
};

export default function Stretching() {
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
        .session-btn { flex:1; padding:12px 8px; background:#fff; border:1px solid #e0e0e0; font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#888; cursor:pointer; transition:all 0.2s; text-align:center; }
        .session-btn:first-child { border-radius:6px 0 0 6px; }
        .session-btn:last-child { border-radius:0 6px 6px 0; }
        .session-btn.active { background:#2b2e2b; color:#fff; border-color:#2b2e2b; }
        .exercise-card { background:#fff; border:1px solid #e8e8e8; border-radius:10px; overflow:hidden; margin-bottom:12px; transition:box-shadow 0.2s; }
        .exercise-card:hover { box-shadow:0 4px 16px rgba(0,0,0,0.07); }
        .exercise-header { display:flex; align-items:center; justify-content:space-between; padding:16px 18px; cursor:pointer; }
        .exercise-body { border-top:1px solid #f0f0f0; padding:20px 18px; background:#fafafa; }
        .cue-box { background:#f0f5f1; border-left:3px solid #7a9e7e; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; margin-top:12px; }
        .chevron { transition:transform 0.25s ease; color:#bbb; font-size:18px; flex-shrink:0; }
        .chevron.open { transform:rotate(180deg); }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .exercise-body { animation:fadeIn 0.25s ease; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#2b2e2b", padding: "24px 20px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>NOEX · Addition</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#7a9e7e", letterSpacing: -1, textTransform: "uppercase", lineHeight: 1 }}>Stretching</div>
        <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: "#666", marginTop: 8 }}>8 Weeks · 5x/Week · 15 Min Sessions · Morning + Evening</div>
        <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          {["Hips", "Hamstrings", "Back", "Shoulders", "Lats"].map(a => (
            <span key={a} style={{ fontSize: 10, letterSpacing: 2, color: "#7a9e7e", textTransform: "uppercase", fontWeight: 600, background: "rgba(122,158,126,0.15)", padding: "3px 10px", borderRadius: 100 }}>{a}</span>
          ))}
        </div>
      </div>

      {/* Week tabs */}
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

        {/* Session toggle */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
          {currentWeek.sessions.map((s, i) => (
            <button key={i} className={`session-btn ${activeSession === i ? "active" : ""}`}
              onClick={() => { setActiveSession(i); setExpandedEx(null); }}>
              <div style={{ fontSize: 16 }}>{s.type === "Morning" ? "☀️" : "🌙"}</div>
              <div>{s.type}</div>
              <div style={{ fontSize: 9, opacity: 0.65, marginTop: 2 }}>{s.vibe}</div>
            </button>
          ))}
        </div>

        {/* Week + session info */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: -0.5 }}>
            Week {currentWeek.week} — {currentWeek.label}
          </div>
          <div style={{ fontSize: 11, color: "#7a9e7e", fontWeight: 600, letterSpacing: 1 }}>{currentSession.totalTime}</div>
        </div>
        <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>{currentSession.vibe}</div>

        {/* Stretches */}
        {currentSession.stretches.map((stretch, i) => {
          const styleColor = styleColors[stretch.style] || styleColors["Static"];
          return (
            <div key={i} className="exercise-card">
              <div className="exercise-header" onClick={() => setExpandedEx(expandedEx === i ? null : i)}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f0f5f1", border: "1.5px solid #7a9e7e", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 800, color: "#7a9e7e", flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 700, textTransform: "uppercase", letterSpacing: -0.5 }}>{stretch.name}</div>
                    <div style={{ display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10, background: styleColor.bg, color: styleColor.color, padding: "2px 8px", borderRadius: 100, fontWeight: 700, letterSpacing: 1 }}>{stretch.style}</span>
                      <span style={{ fontSize: 10, color: "#999", letterSpacing: 0.5 }}>{stretch.area}</span>
                    </div>
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

                  {/* Timer */}
                  <div style={{ background: "#f8f8f6", border: "1px solid #e8e8e4", borderRadius: 8, padding: "14px 16px", marginBottom: 12 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#999", fontWeight: 700, marginBottom: 4 }}>Timer · {stretch.duration} sec</div>
                    <Timer key={`${currentSession.id}-${i}`} duration={stretch.duration} />
                    <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>{stretch.reps}</div>
                  </div>

                  {/* Cue */}
                  <div className="cue-box">
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a9e7e", fontWeight: 700, marginBottom: 5 }}>Coach Cue</div>
                    {stretch.cue}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
