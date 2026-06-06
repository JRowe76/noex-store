import { useState, useEffect, useRef } from "react";

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
          { name: "World's Greatest Stretch", area: "Hips · Thoracic · Hamstring", style: "Dynamic", duration: 45, reps: "5 each side", cue: "Step into a deep lunge, plant your front hand, open your chest to the sky and reach. Move through it — not a hold. Breathe into each rotation.", easier: "Reduce lunge depth. Step shorter and focus on the rotation quality before going deep.", harder: "Add a 2-second hold at the top of each rotation before moving to the next rep." },
          { name: "Hip Circle", area: "Hips · Hip Flexor", style: "Dynamic", duration: 40, reps: "10 each direction", cue: "Hands on hips, big slow circles. Full range — front, side, back, side. Make the circles as large as possible.", easier: "Smaller circles. Build range gradually rather than forcing it on the first session.", harder: "Add a slight resistance by pressing your hands into your hips as you circle." },
          { name: "Cat-Cow", area: "Back · Spine", style: "Dynamic", duration: 40, reps: "10 full cycles", cue: "On all fours. Exhale and arch the spine to the ceiling, tuck the chin. Inhale and drop the belly, lift the head. Move with your breath.", easier: "Reduce the range of motion. Small movements are still effective — build the full range over time.", harder: "Hold the arch and the drop for 2 seconds each before transitioning." },
          { name: "Thread the Needle", area: "Shoulders · Lats · Thoracic", style: "Dynamic", duration: 40, reps: "8 each side", cue: "From all fours, slide one arm under your body and rotate. Let your shoulder drop toward the floor. Reach further on each rep.", easier: "Reduce how far you thread. Just rotating the arm partway builds the pattern before going full range.", harder: "Add a 3-second hold at the deepest rotation before returning." },
          { name: "Standing Hamstring Swings", area: "Hamstrings", style: "Dynamic", duration: 40, reps: "12 each leg", cue: "Hold a wall, swing one leg forward and back with control. Not a kick — a controlled pendulum. Gradually increase range over the 12 reps.", easier: "Reduce swing height. Control matters more than range at this stage.", harder: "Remove the wall for a balance challenge. Adds core and hip stability demand to every swing." },
        ],
      },
      {
        id: "1E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "90/90 Hip Stretch", area: "Hips · Hip Rotators", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "Both legs at 90 degrees, front shin parallel to your body. Sit tall. Breathe into the tightness — don't lean, stay upright.", easier: "Prop your hips up on a folded blanket. Reduces the range required to sit upright.", harder: "Fold forward over your front shin. Deepens the hip rotator stretch significantly." },
          { name: "Supine Hamstring Stretch", area: "Hamstrings", style: "PNF", duration: 60, reps: "Contract 10 sec · release · deepen · 3 rounds each leg", cue: "Pull one leg toward you. At end range — push your leg gently against your hands for 10 seconds. Fully relax. Then pull further.", easier: "Use a strap or towel around your foot instead of pulling with your hands. Reduces shoulder tension.", harder: "Straighten your leg fully and dorsiflex your foot while pulling. Maximum hamstring tension." },
          { name: "Child's Pose with Lat Reach", area: "Lats · Back · Shoulders", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "From child's pose, walk both hands to one side. On every exhale let your ribcage drop closer to the floor.", easier: "Keep hands centered. Standard child's pose still stretches the lats — add the reach when it feels comfortable.", harder: "Press the extended hand into the floor and actively reach further on each exhale." },
          { name: "Doorway Chest & Shoulder Stretch", area: "Shoulders · Chest", style: "Static", duration: 45, reps: "Hold 45 sec each side", cue: "Arm at 90 degrees on a wall or door frame. Rotate your body away slowly. Hold and breathe — do not push further. Let the tension dissolve.", easier: "Bring the arm lower — below 90 degrees. Less shoulder demand, same chest opening.", harder: "Raise the arm higher than 90 degrees to target the lower pec and anterior shoulder." },
          { name: "Lying Spinal Twist", area: "Back · Hips · Glutes", style: "Static", duration: 60, reps: "Hold 60 sec each side", cue: "On your back, one knee crosses to the opposite side. Arms out wide. Both shoulders stay flat. Let gravity do the work.", easier: "Put a pillow under the crossed knee. Reduces the range required to keep shoulders flat.", harder: "Look away from the crossed knee to add a neck rotation component to the twist." },
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
          { name: "World's Greatest Stretch", area: "Hips · Thoracic · Hamstring", style: "Dynamic", duration: 50, reps: "6 each side — add thoracic rotation hold", cue: "Same as week 1 but add a 3-second hold at the top of each rotation. The brief hold lets the thoracic tissue actually respond before you move on.", easier: "Keep week 1 protocol — no hold. Add the hold once the movement itself feels fluid.", harder: "5-second hold at the top. More time for the thoracic to release before you move on." },
          { name: "Deep Hip Circle with Pause", area: "Hips · Hip Flexor", style: "Dynamic", duration: 45, reps: "10 each direction — pause front and back", cue: "Pause for 2 seconds at the front — hip flexor loaded — and 2 seconds at the back — glute loaded. The pauses turn this into a hybrid mobilization.", easier: "1-second pauses instead of 2. Build up the hold time over the week.", harder: "3-second pauses at all four points of the circle — front, side, back, side." },
          { name: "Cat-Cow with Side Bend", area: "Back · Spine · Lats", style: "Dynamic", duration: 45, reps: "10 cycles + 5 side bends each side", cue: "After 10 cat-cows, add lateral spine waves — walk your hands to the right, arch, walk left, arch.", easier: "Stick to cat-cow only. Add the side bends once the basic movement is comfortable.", harder: "Hold each lateral position for 3 seconds before returning to center." },
          { name: "Thread the Needle with Hold", area: "Shoulders · Lats · Thoracic", style: "Dynamic + Static", duration: 50, reps: "6 each side — 5 sec hold at deepest point", cue: "Thread through and hold for 5 seconds at maximum rotation. The held position lets your thoracic rotators actually release.", easier: "Keep a 2-second hold from week 1. Build up to 5 seconds gradually.", harder: "Use your top hand to gently press the bottom shoulder closer to the floor during the hold." },
          { name: "Inchworm", area: "Hamstrings · Back · Shoulders", style: "Dynamic", duration: 50, reps: "8 full reps", cue: "Standing, fold forward, walk hands out to plank, walk feet back to hands, stand. Your entire posterior chain moves through its full range in a single flowing movement.", easier: "Bend your knees on the forward fold. Reduces the hamstring demand and lets you focus on the movement pattern.", harder: "Add a push-up at the plank position before walking feet back in." },
        ],
      },
      {
        id: "2E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "90/90 with Forward Fold", area: "Hips · Hip Rotators", style: "Static + PNF", duration: 75, reps: "45 sec hold · contract 10 sec · deepen · each side", cue: "From 90/90, fold forward over your front shin. At end range, push your front shin into the floor for 10 seconds. Release and fold further.", easier: "Skip the fold — stay upright in 90/90. Add the fold once the upright position feels comfortable.", harder: "Aim to get your chest to your front shin. Deeper fold, more hip rotator release." },
          { name: "Single-Leg Forward Fold", area: "Hamstrings · Back", style: "PNF", duration: 75, reps: "Contract 10 sec · release · 3 rounds each leg", cue: "Seated, one leg extended. Reach toward your foot. At end range, flex your foot and push your heel away for 10 seconds. Release. Reach further.", easier: "Bend the knee of the extended leg slightly. Reduces the stretch intensity while keeping the PNF benefit.", harder: "Loop a strap around your foot and use it to pull yourself further forward on each release." },
          { name: "Puppy Pose", area: "Lats · Shoulders · Back", style: "Static", duration: 75, reps: "Hold 75 sec", cue: "From all fours, walk your hands forward and lower your chest toward the floor — hips stay over knees. Every exhale, let your chest drop further.", easier: "Place a folded blanket under your chest. Reduces the range required and allows full relaxation.", harder: "Extend one arm further than the other to add a unilateral lat stretch." },
          { name: "Sleeper Stretch", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 60, reps: "Contract 8 sec · release · deepen · 3 rounds each side", cue: "Lying on your side, bottom arm extended. Push your forearm toward the ceiling for 8 seconds. Release and let gravity push your forearm toward the floor.", easier: "Reduce contraction time to 5 seconds. Build up to 8 seconds as the shoulder gets used to the position.", harder: "Add gentle downward pressure with your top hand during the release phase." },
          { name: "Figure Four Glute Stretch", area: "Hips · Glutes · Piriformis", style: "Static", duration: 75, reps: "Hold 75 sec each side", cue: "On your back, ankle over opposite knee. Either hold there or pull the bottom leg toward your chest. Breathe through it — every exhale, let it go a little more.", easier: "Keep the bottom foot on the floor instead of pulling the leg toward you. Reduces the intensity significantly.", harder: "Pull the bottom leg fully toward your chest and hold it there. Maximum piriformis stretch." },
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
          { name: "World's Greatest Stretch + Hamstring Reach", area: "Hips · Hamstring · Thoracic", style: "Dynamic", duration: 55, reps: "6 each side — add hamstring extension", cue: "After the rotation, straighten your front leg and reach for your foot. Bent knee lunge into hamstring stretch in one fluid movement.", easier: "Keep the knee bent during the reach. Same movement, less hamstring demand.", harder: "Add a 3-second hold in the hamstring reach position before returning to the lunge." },
          { name: "Lateral Lunge to Deep Squat", area: "Hips · Inner Thigh · Hamstrings", style: "Dynamic", duration: 50, reps: "8 each side", cue: "Step wide into a lateral lunge — sit into the hip. Then shift into a deep squat in the center. Then the other side. Stay low throughout.", easier: "Reduce the lateral lunge depth. Focus on staying low in the squat before increasing the lunge range.", harder: "Add a pause in each position — 2 seconds in the lunge, 2 seconds in the squat." },
          { name: "Thoracic Extension over Foam Roller", area: "Back · Thoracic · Shoulders", style: "Dynamic", duration: 50, reps: "Segment through 8 positions", cue: "Foam roller perpendicular to your spine. Arms crossed over chest. Extend back over the roller at each segment — move up your thoracic spine one vertebra at a time.", easier: "Arms at your sides instead of crossed over your chest. Less load on each extension.", harder: "Arms overhead during each extension. Increases the lever and the thoracic range significantly." },
          { name: "Standing Lat Stretch with Reach", area: "Lats · Shoulders", style: "Dynamic + Static", duration: 50, reps: "8 each side — 4 sec hold", cue: "One arm overhead gripping a wall or doorframe, lean away and rotate slightly. 4-second hold.", easier: "Lighter lean — just tilt away rather than committing to the full rotation.", harder: "6-second hold and increase the lean angle." },
          { name: "Leg Swings — Forward, Lateral, and Cross", area: "Hamstrings · Hips · Glutes", style: "Dynamic", duration: 50, reps: "10 each direction each leg", cue: "All three planes this week. Forward and back, lateral, cross-body. 10 reps each direction, gradually increasing range.", easier: "Start with just forward and back. Add lateral and cross-body swings once those feel controlled.", harder: "Remove the wall for balance. Every swing becomes a single-leg stability challenge." },
        ],
      },
      {
        id: "3E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon Pose", area: "Hips · Piriformis · Hip Flexor", style: "Static", duration: 90, reps: "Hold 90 sec each side", cue: "Front shin parallel or angled, back leg fully extended. Walk your hands forward and let your chest drop toward the floor. Breathe through the resistance — every exhale, let your hip surrender a little more.", easier: "Use a folded blanket under your front hip. Reduces the range required and allows full relaxation.", harder: "Walk your hands further forward and aim to get your forehead to the floor." },
          { name: "PNF Hamstring Stretch — Band or Towel", area: "Hamstrings", style: "PNF", duration: 90, reps: "Contract 12 sec · release · 3 rounds each leg", cue: "Lying on your back with a band or towel around your foot. At end range, push your foot into the band for 12 seconds. Release. Pull 10 to 15 degrees further. Hold 30 seconds.", easier: "Reduce contraction to 8 seconds. Build up to 12 seconds as your hamstrings adapt.", harder: "Increase the pull angle after each release. Push for a larger range gain each round." },
          { name: "Doorway Lat Stretch", area: "Lats · Shoulders · Back", style: "Static + PNF", duration: 75, reps: "Hold 30 sec · contract 8 sec · deepen · each side", cue: "Hold a door frame at shoulder height, step back, drop into a hip hinge. At end range, pull the door frame toward you for 8 seconds. Release and drop hips further.", easier: "Reduce the hip hinge depth. Less hinge means less lat stretch — build the range gradually.", harder: "Increase hinge depth to nearly parallel. The deeper the hinge, the greater the lat stretch." },
          { name: "Cross-Body Shoulder Stretch + PNF", area: "Shoulders · Posterior Deltoid", style: "PNF", duration: 75, reps: "Contract 8 sec · release · 3 rounds each side", cue: "Pull one arm across your body. At end range, push your arm against your hand for 8 seconds. Release. Pull it further.", easier: "Lighter pull across the body. Reduce the intensity before adding the PNF contraction.", harder: "Add gentle downward pressure during the release phase to deepen the posterior deltoid stretch." },
          { name: "Supported Back Extension", area: "Back · Lumbar", style: "Static", duration: 75, reps: "Hold 75 sec", cue: "Lying face down, press up onto your forearms or hands. Your lumbar spine is gently extending. 75 seconds of lumbar decompression. Breathe and let your spine lengthen.", easier: "Stay on your forearms only. Less extension range, same decompression benefit.", harder: "Press up onto your hands with arms fully extended. Increases the extension range significantly." },
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
          { name: "World's Greatest Stretch — Full Sequence", area: "Hips · Hamstring · Thoracic · Shoulder", style: "Dynamic", duration: 60, reps: "6 each side — full 4-movement sequence", cue: "Deep lunge, rotation, hamstring reach, shoulder opener — all four in sequence before switching legs. Move deliberately between each position.", easier: "Drop back to 3 movements if 4 feels rushed. Quality matters more than completing all 4 on the first attempt.", harder: "Add a 3-second hold at each position within the sequence." },
          { name: "Deep Squat with Thoracic Rotation", area: "Hips · Back · Thoracic", style: "Dynamic + Static", duration: 55, reps: "10 rotations each side from the squat", cue: "Hold a deep squat, one hand on the floor, other arm rotating open to the ceiling. 10 rotations each side.", easier: "Hold a doorframe or post in front for support. Allows you to sit deeper without worrying about balance.", harder: "Remove all hand support. Full balance demand from the deep squat position." },
          { name: "Foam Roller Thoracic + Lat", area: "Back · Lats · Thoracic", style: "Dynamic", duration: 55, reps: "Thoracic segment roll + 8 lat positions each side", cue: "Segment through the thoracic spine, then turn the roller perpendicular and roll your lat from armpit to mid-back.", easier: "Skip the lat rolling and focus on thoracic only. Add the lat segment once thoracic feels manageable.", harder: "Hold each thoracic extension position for 3 seconds before moving to the next segment." },
          { name: "Overhead Lat Stretch with Lateral Lean", area: "Lats · Shoulders · Back", style: "Dynamic + Static", duration: 55, reps: "8 each side — 5 sec hold at max lean", cue: "Both arms overhead, clasp hands. Lean to one side — feel the entire lat from armpit to hip stretching. 5-second hold.", easier: "One arm overhead instead of both. Less shoulder demand, same lat stretch.", harder: "Increase lean and rotate your torso slightly toward the floor during the hold." },
          { name: "Hip Flexor Lunge with Rotation", area: "Hip Flexors · Hips · Thoracic", style: "Dynamic", duration: 55, reps: "8 each side", cue: "Deep lunge with your back knee on the floor. Rotate your torso over your front leg. Hip flexor of the back leg and thoracic spine both mobilized.", easier: "Keep both hands on the front knee for stability. Focus on the lunge position before adding the rotation.", harder: "Reach the top arm overhead during the rotation for a combined hip flexor and lat stretch." },
        ],
      },
      {
        id: "4E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon with PNF", area: "Hips · Piriformis", style: "PNF", duration: 100, reps: "Contract 12 sec · release · 2 rounds each side", cue: "From half pigeon, push your front shin into the floor for 12 full seconds. Release completely. Your hip will drop noticeably further. Hold that new position for 30 seconds.", easier: "Contract for 8 seconds instead of 12. Build up to the full 12 seconds.", harder: "3 rounds instead of 2. Each additional round produces more range." },
          { name: "Standing Hamstring Fold with PNF", area: "Hamstrings · Back", style: "PNF", duration: 100, reps: "Contract 12 sec · release · 3 rounds", cue: "Standing, fold forward as far as possible. Squeeze your quads hard — hamstrings relax reflexively. Now fold further. At the new end range, tighten your hamstrings against the stretch for 12 seconds. Release. Fold further.", easier: "Bend your knees slightly during the fold. Reduces the hamstring demand while keeping the PNF protocol intact.", harder: "Add a slight hip hinge at the end of each fold to increase the lower back decompression." },
          { name: "Wall Lat Stretch — Hip Hinge", area: "Lats · Shoulders · Back", style: "Static + PNF", duration: 90, reps: "Hold 45 sec · contract 10 sec · deepen · each side", cue: "Both hands on a wall at waist height, step back, push your hips back, chest toward the floor. At end range, pull the wall toward you for 10 seconds. Release. Push hips further back.", easier: "Reduce the hip hinge depth. Start upright and gradually increase the hinge over time.", harder: "Increase hinge to parallel — chest aiming for the floor. Maximum lat stretch under full load." },
          { name: "Sleeper Stretch — Extended Protocol", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 90, reps: "Contract 10 sec · release · 4 rounds each side", cue: "4 rounds this week. Each contraction-release cycle gives you more range. By round 4 your posterior shoulder should be dramatically more open.", easier: "Keep 3 rounds from week 1. Add the fourth round when the first three feel comfortable.", harder: "Use your top hand to apply gentle downward pressure during the release phase of each round." },
          { name: "Supine Twist with Arm Overhead", area: "Back · Lats · Hips", style: "Static", duration: 90, reps: "Hold 90 sec each side", cue: "Lying spinal twist with your top arm extended overhead — fingers reaching away from your feet. Back, lat, and hip all releasing simultaneously.", easier: "Keep the top arm at your side. Standard spinal twist without the overhead component.", harder: "Reach the overhead arm further and actively pull your fingers away from your body during each exhale." },
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
          { name: "Flow Sequence — Lunge to Pigeon to Downward Dog", area: "Hips · Hamstrings · Back · Shoulders", style: "Dynamic Flow", duration: 65, reps: "5 full flows each side", cue: "Lunge, lower the back knee, open into a half pigeon shape, press back to downward dog, walk out to the other side. 5 complete flows. Move with your breath.", easier: "Replace the pigeon shape with a simple lunge stretch. Reduces hip demand while keeping the flow pattern.", harder: "Hold each position for 3 seconds before flowing to the next. Adds a static component to every transition." },
          { name: "Thoracic Rotation in Squat", area: "Back · Thoracic · Hips", style: "Dynamic", duration: 55, reps: "12 rotations each side", cue: "Deep squat hold, elbow on the inside of your knee for leverage, other arm rotating fully overhead. 12 each side.", easier: "Hold a post in front for squat support. Allows you to focus on the rotation without worrying about balance.", harder: "Remove elbow-to-knee leverage. Rotate freely from a deep squat without assistance." },
          { name: "Banded Lat Pulldown Stretch", area: "Lats · Shoulders", style: "Dynamic + Static", duration: 55, reps: "10 reps · 5 sec hold at full stretch", cue: "Band overhead anchored high, step back, hinge at the hip, arms long. Pull down slowly and return. 5-second hold at maximum length on each rep.", easier: "Lighter band. Less resistance means less lat loading — build up gradually.", harder: "Heavier band. More resistance through the full range creates greater lat stimulus." },
          { name: "Hip 90/90 Transition Flow", area: "Hips · Hip Rotators", style: "Dynamic Flow", duration: 55, reps: "10 full transitions each direction", cue: "From 90/90 position, rotate your hips and transition to the opposite 90/90 — both legs switching simultaneously. Your hip rotators are being taken through their full active range.", easier: "Use your hands on the floor for support during each transition. Reduces the hip rotator demand.", harder: "Transition without using your hands at all. Pure hip rotator strength required." },
          { name: "Inchworm with Push-Up and Rotation", area: "Hamstrings · Back · Shoulders · Hips", style: "Dynamic Flow", duration: 60, reps: "8 full reps", cue: "Inchworm out to plank, add a push-up, add a thoracic rotation, walk back in. 8 complete reps.", easier: "Skip the push-up or rotation. Add each element back once the basic inchworm is fluid.", harder: "Add a 2-second hold at the top of the thoracic rotation before walking back in." },
        ],
      },
      {
        id: "5E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Half Pigeon — Extended Hold + PNF", area: "Hips · Piriformis · Hip Flexor", style: "PNF + Static", duration: 110, reps: "Contract 12 sec · release · 90 sec hold · each side", cue: "Contract, release, then settle into the deepest position and hold for 90 full seconds. By 90 seconds your piriformis should be completely surrendered. Stay in it.", easier: "60-second hold instead of 90. Build up to 90 seconds over the next few sessions.", harder: "Add a second PNF round before the 90-second hold." },
          { name: "PNF Hamstring — 4 Round Protocol", area: "Hamstrings", style: "PNF", duration: 110, reps: "Contract 12 sec · release · 4 rounds each leg", cue: "4 rounds of PNF. Each round unlocks more range. Trust the process and complete every round.", easier: "3 rounds instead of 4. Add the fourth round when the previous three feel fully controlled.", harder: "5 rounds. The fifth round is where the final range gain lives." },
          { name: "Doorway Lat Stretch — Full Protocol", area: "Lats · Shoulders · Back", style: "PNF", duration: 100, reps: "Contract 10 sec · release · 3 rounds · each side", cue: "3 rounds of PNF on your lat. By round 3 your lat should be significantly more open than at the start.", easier: "2 rounds instead of 3. Add the third round when the second feels fully controlled.", harder: "4 rounds. Your lat will continue releasing with each additional round." },
          { name: "Posterior Shoulder PNF — 4 Rounds", area: "Shoulders · Posterior Capsule", style: "PNF", duration: 100, reps: "Contract 10 sec · release · 4 rounds each side", cue: "4 rounds this week. By round 4 your internal shoulder rotation should be dramatically improved. The last round is where the biggest change happens.", easier: "3 rounds. Add the fourth when the first three feel comfortable and controlled.", harder: "5 rounds. Commit to all five — cumulative release compounds with each round." },
          { name: "Legs Up the Wall", area: "Hamstrings · Back · Hips", style: "Static", duration: 90, reps: "Hold 90 sec — flex and point feet", cue: "Hips as close to the wall as possible, legs straight up. Alternate between flexing your feet and pointing. Let gravity do everything.", easier: "Move your hips further from the wall. Less hamstring stretch, same decompression benefit.", harder: "Hips touching the wall with legs fully straight. Maximum hamstring stretch under gravity." },
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
          { name: "Sun Salutation Flow — Modified", area: "Full Body · Hips · Hamstrings · Back · Shoulders", style: "Dynamic Flow", duration: 70, reps: "5 full flows", cue: "Modified sun salutation — mountain pose, forward fold, halfway lift, lunge, downward dog, lunge other side, forward fold, stand. 5 flows. Move freely.", easier: "3 flows instead of 5. Build up the volume as the sequence becomes more familiar.", harder: "Add a pigeon pose transition between the lunge and downward dog on each side." },
          { name: "Deep Squat Hold with Reach", area: "Hips · Back · Shoulders", style: "Dynamic + Static", duration: 60, reps: "2 min cumulative — move within the squat", cue: "Hold a deep squat for 2 cumulative minutes. Inside the squat — rotate, reach, shift weight, move your arms overhead. Stay in the squat the entire time.", easier: "Hold a post or door frame for support. Allows you to focus on the internal movements without worrying about falling.", harder: "Add an overhead reach with both arms simultaneously while staying in the squat." },
          { name: "Active Lat Hang", area: "Lats · Shoulders · Back", style: "Dynamic + Static", duration: 60, reps: "5 x 20 sec hangs · active depression", cue: "Hang from a bar with a relaxed grip. Pack your shoulders down — engage your lats to pull your shoulder blades down. Hold 20 seconds. Release. 5 hangs.", easier: "10-second hangs instead of 20. Build grip and shoulder endurance progressively.", harder: "Single-arm hang for 10 seconds each arm. Dramatically increases lat and shoulder demand." },
          { name: "Hip Flow — 90/90, Pigeon, Squat Cycle", area: "Hips · Hip Rotators · Hip Flexors", style: "Dynamic Flow", duration: 60, reps: "6 full cycles each side", cue: "90/90 transition — flow into a half pigeon — press back and flow into a deep squat. 6 cycles each side.", easier: "4 cycles. Build up to 6 once the transitions feel fluid.", harder: "No hands on the floor during any transition. Pure hip mobility required." },
          { name: "Standing Thoracic Rotation with Reach", area: "Back · Thoracic · Lats", style: "Dynamic", duration: 60, reps: "15 each side", cue: "Standing, arms at 90 degrees, rotate fully and reach the top arm as far as possible. 15 each side.", easier: "10 each side. Build the volume once the rotation feels controlled.", harder: "Add a slight lateral lean toward the reaching arm. Combines thoracic rotation with lat stretch." },
        ],
      },
      {
        id: "6E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon — Stacked Shins", area: "Hips · Hip Rotators · Glutes", style: "Static + PNF", duration: 110, reps: "Contract 12 sec · release · 90 sec hold · each side", cue: "Shins stacked, one on top of the other. PNF first, then settle for 90 seconds. If you can't stack — use blocks or a pillow.", easier: "Half pigeon instead of double pigeon. Build to double pigeon over the remaining weeks.", harder: "Fold forward over the stacked shins during the 90-second hold." },
          { name: "PNF Hamstring — Standing Fold", area: "Hamstrings · Back", style: "PNF", duration: 110, reps: "Contract 12 sec · release · 4 rounds", cue: "Standing fold — at end range, tighten your hamstrings for 12 seconds. Release. Fold further. 4 rounds.", easier: "3 rounds. Gravity-assisted release still gives significant range gain.", harder: "5 rounds. By round 5 your hamstrings should be at their maximum open position." },
          { name: "Banded Shoulder Distraction", area: "Shoulders · Lats", style: "Static + PNF", duration: 100, reps: "Contract 10 sec · release · 3 rounds each arm", cue: "Band anchored low, loop around your wrist, step away to create traction. At end range, resist the band for 10 seconds. Release. The distraction allows the capsule to open further.", easier: "Lighter band. Less traction means less shoulder joint opening — build up.", harder: "Heavier band. More traction creates greater joint space opening." },
          { name: "Saddle Pose — Supported", area: "Hip Flexors · Quads · Back", style: "Static", duration: 100, reps: "Hold 100 sec — supported with props", cue: "Sitting back between your feet or on a block, fully supported. Hip flexors and quads in a sustained lengthened position. 100 seconds. Breathe and surrender.", easier: "Sit higher on a block or bolster. Less quad and hip flexor range required.", harder: "Lower the support — sit closer to the floor. More quad and hip flexor range." },
          { name: "Extended Supine Twist with Bind", area: "Back · Lats · Hips · Shoulders", style: "Static", duration: 100, reps: "Hold 100 sec each side", cue: "Lying twist with your top arm reaching overhead and your bottom arm wrapping around the bent knee. Back, lat, hip, shoulder — all releasing simultaneously.", easier: "Standard lying twist without the arm overhead. Add the overhead reach once the basic twist is comfortable.", harder: "Reach both arms in opposite directions — one overhead, one toward your feet. Full lateral body stretch." },
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
          { name: "Full Sun Salutation with Holds", area: "Full Body · All Hot Spots", style: "Dynamic Flow", duration: 75, reps: "4 flows — 3 sec hold at each position", cue: "Full sun salutation with a 3-second hold at every position — downward dog, lunge, pigeon, low lunge, halfway lift. 4 complete flows.", easier: "2-second holds instead of 3. Less time in each position but same movement quality.", harder: "5-second holds. Longer holds at each position create a deeper tissue response." },
          { name: "Cossack Squat", area: "Hips · Inner Thigh · Hamstrings · Ankles", style: "Dynamic", duration: 65, reps: "10 each side", cue: "Wide stance, shift into a deep lateral squat on one side while the other leg extends fully. Alternate. Your inner hip, adductors, and hamstrings are all being dynamically loaded.", easier: "Hold a post for balance support. Allows you to sit deeper without the balance challenge.", harder: "Add a 3-second hold at the deepest point of each lateral squat." },
          { name: "Active Lat Hang with Rotation", area: "Lats · Shoulders · Thoracic", style: "Dynamic + Static", duration: 65, reps: "5 x 20 sec — rotate during each hang", cue: "Hang from the bar, then gently rotate your body left and right during the hang. Thoracic and lat decompression simultaneously.", easier: "Standard hang without rotation. Add the rotation once you can hold for 20 seconds comfortably.", harder: "Single-arm hang with rotation. Dramatically more demanding on the shoulder and lat." },
          { name: "Hip 90/90 to Stand Flow", area: "Hips · Hip Rotators · Balance", style: "Dynamic Flow", duration: 60, reps: "8 each side", cue: "From 90/90, use your hip rotators to stand up without using your hands — then lower back to 90/90 on the other side.", easier: "Use one hand on the floor for support during the stand. Add no-hands once the pattern is familiar.", harder: "Add a single-leg balance hold at the top of the stand before lowering back down." },
          { name: "Arm Circles to Shoulder Flow", area: "Shoulders · Lats · Thoracic", style: "Dynamic", duration: 60, reps: "10 each direction + reach sequence", cue: "Large controlled arm circles in both directions, then transition into an overhead reach, lateral reach, and cross-body reach sequence.", easier: "Smaller circles. Full range of motion is the goal — build to it over the session.", harder: "Add a light resistance band for the reach sequence. Active stretching under light resistance." },
        ],
      },
      {
        id: "7E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon + Forward Fold PNF", area: "Hips · Hip Rotators · Back", style: "PNF", duration: 120, reps: "Contract 12 sec · release · fold · 2 rounds each side", cue: "From double pigeon, fold forward. PNF from the folded position — push your shins into the floor for 12 seconds. Release and fold further. 2 rounds.", easier: "Fold less deeply. The PNF protocol works at any range — start where you are.", harder: "3 rounds. By round 3 your chest may be close to your shins." },
          { name: "PNF Hamstring — Contract-Relax-Contract", area: "Hamstrings", style: "PNF", duration: 110, reps: "Contract ham · relax · contract quad · release · 4 rounds each leg", cue: "Supine stretch. Push your leg into your hands — hamstring contracts. Release. Now pull your leg toward you while tightening your quad — reciprocal inhibition forces the hamstring to release even more. 4 rounds.", easier: "Standard PNF — hamstring contract and release only. Add the quad contraction once the basic protocol is comfortable.", harder: "5 rounds. The final round produces the largest range gain." },
          { name: "Overhead Lat PNF — Band Assisted", area: "Lats · Shoulders · Serratus", style: "PNF", duration: 110, reps: "Contract 10 sec · release · 3 rounds each side", cue: "Band overhead, arm fully extended, lean away. At end range, pull the band toward your body for 10 seconds — lat contraction. Release.", easier: "Lighter band. Less resistance during contraction means a less demanding lat stimulus.", harder: "Heavier band. More resistance creates greater lat activation during the contraction." },
          { name: "Saddle Pose — Deepened", area: "Hip Flexors · Quads · Lumbar", style: "Static + PNF", duration: 110, reps: "Hold 60 sec · contract 10 sec · release · hold 40 sec", cue: "Saddle pose for 60 seconds, then push your knees into the floor for 10 seconds — quad and hip flexor contraction. Release. Hold the new position for 40 seconds.", easier: "Maintain the supported position from week 6 during the PNF. Add depth only when you're comfortable.", harder: "Remove all support. Full saddle pose on the floor for the entire protocol." },
          { name: "Full Body Supine Release", area: "Back · Hips · Shoulders · Lats", style: "Static Flow", duration: 110, reps: "Twist · legs up wall · star · 35 sec each", cue: "Move through three final positions — supine twist with overhead reach 35 seconds each side, legs up wall 35 seconds, then spread-eagle star position 35 seconds. Let your entire body release completely.", easier: "Spend more time in whichever position feels most needed. There's no wrong order.", harder: "Add conscious deep breathing in each position — 4 counts in, 6 counts out. Amplifies the release." },
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
          { name: "Full Flow — Your Morning Practice", area: "Full Body · All Hot Spots", style: "Dynamic Flow", duration: 80, reps: "5 full flows — your own pace", cue: "Everything you have built — sun salutation with holds, pigeon transitions, thoracic rotations, lat hangs. 5 flows at your own pace. This is your morning practice for life.", easier: "4 flows. Quality over quantity — every position should feel intentional.", harder: "6 flows. By week 8 your body has the endurance and mobility to handle the additional volume." },
          { name: "Cossack Squat with Overhead Reach", area: "Hips · Hamstrings · Lats · Shoulders", style: "Dynamic", duration: 65, reps: "12 each side — reach opposite arm overhead", cue: "Cossack squat with the arm on the extended-leg side reaching overhead and laterally. Hip, hamstring, and lat all being stretched simultaneously.", easier: "Keep both hands on the floor for support. Add the overhead reach once the squat position is comfortable.", harder: "Add a 3-second hold at the deepest point with the arm fully overhead." },
          { name: "Active Lat Hang — Max Duration", area: "Lats · Shoulders · Spine", style: "Static", duration: 65, reps: "3 x max duration hangs", cue: "3 max-effort hangs — go as long as you can with active shoulder depression. No fixed time.", easier: "Fixed 20-second hangs. Consistent duration is fine — max duration is optional.", harder: "Rotate slowly during each max hang. Adds thoracic and lat decompression on top of the traction." },
          { name: "Full Hip Flow — No Stops", area: "Hips · All Planes", style: "Dynamic Flow", duration: 65, reps: "Continuous 65 sec flow — all hip positions", cue: "Continuous hip flow — 90/90 transitions, pigeon, squat, lateral lunge, hip circles. No stopping, no reset.", easier: "Move through each position with brief pauses between them. Continuous flow is the goal — build to it.", harder: "Add a 2-second hold at each position within the flow. More time under tension throughout." },
          { name: "Thoracic + Shoulder Integration Flow", area: "Thoracic · Shoulders · Lats", style: "Dynamic Flow", duration: 65, reps: "Continuous 65 sec — all positions", cue: "Arm circles, thoracic rotations, lat reaches, thread the needle, overhead hangs — all flowing into each other without stopping. Move freely.", easier: "Pause between each element. Continuous flow is the ultimate goal — build to it.", harder: "Add a resistance band for the reach and rotation elements. Active stretching under light resistance." },
        ],
      },
      {
        id: "8E",
        type: "Evening",
        vibe: "Release & Restore",
        totalTime: "15 min",
        stretches: [
          { name: "Double Pigeon — Full Protocol", area: "Hips · Hip Rotators", style: "PNF + Static", duration: 120, reps: "PNF 2 rounds · hold 90 sec · each side", cue: "2 rounds of PNF, then hold for 90 full seconds. By week 8 your piriformis and deep hip rotators should feel dramatically more open than week 1.", easier: "1 round of PNF then 60-second hold. Build to the full protocol.", harder: "3 rounds of PNF then 90-second hold. Maximum hip rotator release." },
          { name: "PNF Hamstring — Full Advanced Protocol", area: "Hamstrings", style: "PNF", duration: 120, reps: "Contract ham · relax · contract quad · 5 rounds each leg", cue: "5 rounds of the full contract-relax-contract protocol. By round 5 your hamstrings should be at their maximum open position. Note where you are — come back and test in a month.", easier: "4 rounds. Complete the fifth round only when all four feel fully controlled.", harder: "Add a strap to pull further into the range after each release. External assistance amplifies every gain." },
          { name: "Full Lat PNF — Standing and Overhead", area: "Lats · Shoulders · Serratus", style: "PNF", duration: 120, reps: "Wall protocol + overhead protocol · 3 rounds each · each side", cue: "Wall hip hinge lat stretch PNF first, then overhead band-assisted lat PNF. Both protocols back to back on each side.", easier: "Wall protocol only. Add the overhead protocol once the wall version produces consistent range gains.", harder: "4 rounds of each protocol. By the fourth round your lat should be fully released." },
          { name: "Full Body Saddle PNF", area: "Hip Flexors · Quads · Lumbar", style: "PNF + Static", duration: 120, reps: "Contract 12 sec · release · hold 60 sec", cue: "PNF in saddle pose, then hold the deepest position for 60 full seconds. Your hip flexors have been systematically lengthened over 8 weeks.", easier: "Maintain the supported position throughout. Add depth only if completely comfortable.", harder: "Remove all support for the 60-second hold. Full unsupported saddle pose is the ceiling." },
          { name: "Final Release — Complete Body Surrender", area: "Everything", style: "Static Flow", duration: 120, reps: "Twist · legs up wall · star · savasana — 30 sec each", cue: "Supine twist both sides, legs up the wall, star position, then complete stillness. This is the final session. No effort. No holding. Just complete release.", easier: "Spend more time in whichever position feels most needed. There's no wrong order at the end.", harder: "Add 4-7-8 breathing in every position — 4 counts in, 7 hold, 8 out. The deepest relaxation response possible." },
        ],
      },
    ],
  },
];

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
        .easier-box { background:#f5f9f5; border-left:3px solid #4a7a50; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#444; line-height:1.6; margin-top:8px; }
        .harder-box { background:#1a1a1a; border-left:3px solid #c0392b; padding:10px 14px; border-radius:0 6px 6px 0; font-size:13px; color:#ccc; line-height:1.6; margin-top:8px; }
        .chevron { transition:transform 0.25s ease; color:#bbb; font-size:18px; flex-shrink:0; }
        .chevron.open { transform:rotate(180deg); }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .exercise-body { animation:fadeIn 0.25s ease; }
      `}</style>

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
              <div style={{ fontSize: 16 }}>{s.type === "Morning" ? "☀️" : "🌙"}</div>
              <div>{s.type}</div>
              <div style={{ fontSize: 9, opacity: 0.65, marginTop: 2 }}>{s.vibe}</div>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: "uppercase", letterSpacing: -0.5 }}>
            Week {currentWeek.week} — {currentWeek.label}
          </div>
          <div style={{ fontSize: 11, color: "#7a9e7e", fontWeight: 600, letterSpacing: 1 }}>{currentSession.totalTime}</div>
        </div>
        <div style={{ fontSize: 11, color: "#999", letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>{currentSession.vibe}</div>

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
                  <div style={{ background: "#f8f8f6", border: "1px solid #e8e8e4", borderRadius: 8, padding: "14px 16px", marginBottom: 12 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#999", fontWeight: 700, marginBottom: 4 }}>Timer · {stretch.duration} sec</div>
                    <Timer key={`${currentSession.id}-${i}`} duration={stretch.duration} />
                    <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>{stretch.reps}</div>
                  </div>

                  <div className="cue-box">
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#7a9e7e", fontWeight: 700, marginBottom: 5 }}>Coach Cue</div>
                    {stretch.cue}
                  </div>

                  <div className="easier-box">
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4a7a50", fontWeight: 700, marginBottom: 5 }}>↓ Make It Easier</div>
                    {stretch.easier}
                  </div>

                  <div className="harder-box">
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#c0392b", fontWeight: 700, marginBottom: 5 }}>↑ Make It Harder</div>
                    {stretch.harder}
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
