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
    label: "Time Under Tension",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Dead Bug",
            sets: 2,
            reps: "7 sec hold per rep · 10 reps each side",
            rest: "15 sec",
            cue: "7 seconds this week. 2 more seconds than week 1. Your lower back will try to lift during that extra 2 seconds — that's exactly when you fight the hardest. Back flat. Every second. Non-negotiable.",
            harder: "Heavier plate overhead. More weight, more hold time. If you can do this cleanly, you have exceptional core control. Most athletes can't.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "60 sec hold",
            rest: "10 sec",
            cue: "60 seconds. 15 more than week 1. You will hit a wall around 40 seconds. That wall is the point. Push through it with more tension — squeeze harder, press your back flatter, reach your arms longer. More tension fixes everything.",
            harder: "Heavier plate overhead, longer hold. 60 seconds of hollow body with load overhead is elite-level isometric core work. Do not let the arms drift forward.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "4 sec lower · 20 reps",
            rest: "15 sec",
            cue: "4-second eccentric this week. Slower descent means more time under tension. Your abs are doing the work of braking your entire body weight. Own every second of that descent. Do not drop.",
            harder: "Heavier weight held overhead. 4-second lower with load is a completely different exercise. Your abs have to work against both gravity and the load.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "4 sec out · 3 sec pause · 10 reps",
            rest: "20 sec",
            cue: "4 seconds out, 3 second pause. You are extended for 3 full seconds with your entire body weight on your abs. If your form breaks at any point during the pause, you went too far. Pull back in and go again.",
            harder: "Standing rollouts. If you haven't earned them yet, add 2 reps from your knees. If you have — stand up. There is no middle ground.",
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
            reps: "2 sec up · 4 sec down · 15 reps",
            rest: "15 sec",
            cue: "4-second descent this week. Your abs are braking the weight of both legs for 4 full seconds. Zero swing. If the bar is moving, your core isn't working — momentum is. Stop. Reset. Pull down.",
            harder: "Straight legs, 4-second descent. 15 reps of that is an advanced athlete movement. Work toward it rep by rep.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "50 sec each side",
            rest: "10 sec between sides · 15 sec between sets",
            cue: "50 seconds. 10 more than week 1. Your lateral core will be screaming at 35 seconds. That's when the adaptation happens. Hold the position harder — don't let it collapse gradually. Fight every second.",
            harder: "Hip dips for the full 50 seconds. Each dip loads the lateral core through full range. 50 seconds of loaded lateral flexion is not for the faint of heart.",
          },
          {
            name: "Pallof Press Hold",
            sets: 2,
            reps: "7 sec hold per rep · 10 reps each side",
            rest: "15 sec",
            cue: "7-second hold this week. More resistance to rotation for longer. Your obliques are under sustained load. Do not let your shoulders rotate toward the anchor. If they drift, you've lost the anti-rotation benefit. Start the rep over.",
            harder: "Heavier band or cable. 7-second hold with increased load means your obliques are working harder for longer. This is real rotational strength being built.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · 3 sec hold · 20 reps each side",
            rest: "15 sec",
            cue: "3-second rotation, 3-second hold. You are sitting in full trunk rotation for 3 seconds with your leg extended. This is where athletes who skip real core work fall apart. Stay rotated. Don't rush the hold.",
            harder: "Add a light weight behind your head — not pulling your neck, resting against your skull. The load forces more trunk rotation to reach the knee. If your neck is working, you're doing it wrong.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Break Point",
    sessions: [
      {
        session: "A",
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Dead Bug",
            sets: 2,
            reps: "10 sec hold per rep · 10 reps each side",
            rest: "10 sec",
            cue: "10 full seconds. Both limbs extended, lower back glued to the floor. At 7 seconds your body will start shaking. That's fine. That's the point. Keep the back flat. If it lifts, bring the limbs in, reset, and go again.",
            harder: "Heaviest plate yet overhead. 10-second holds with significant load overhead is a movement that will humble elite athletes. Earn every second.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "75 sec hold",
            rest: "10 sec",
            cue: "75 seconds. 2 sets. 10 seconds rest. You are in near-constant tension for this entire session element. Your lower abs will be on fire. Your hip flexors will be screaming. Your job is to not care about any of that and hold.",
            harder: "Plate overhead, legs as low as possible without your back arching. Find the lowest position where you can maintain perfect contact. That's your position. Hold it for 75 seconds.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "5 sec lower · 25 reps",
            rest: "15 sec",
            cue: "25 reps with a 5-second lower. That's over 2 minutes of eccentric loading per set. Your abs are doing nothing but working. No rest between reps — the top of the movement is not a break. Touch and go.",
            harder: "Heavier weight, 5-second lower. 25 reps of that with load is a finishing movement that will make your core completely seize up. Do it anyway.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "5 sec out · 3 sec pause · 12 reps",
            rest: "15 sec",
            cue: "5 seconds out. 3 seconds frozen. 12 reps. You are spending 8 seconds of every rep in a compromised position with your entire body weight on your abs. This is where real core strength lives. Don't rush in.",
            harder: "Standing. If you've been doing these from your knees, it's time. Standing ab wheel rollouts require full-body tension that floor variations cannot replicate.",
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
            cue: "Straight legs now. Raise them to parallel or higher — abs only, no swing. 5-second descent. Your entire anterior chain is loaded for 5 seconds on the way down. If the bar is swinging, reset. Dead hang. Go again.",
            harder: "Add ankle weights. Even 2.5 lbs per ankle changes the leverage dramatically. 12 reps with a 5-second eccentric and ankle weights is elite core work.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "60 sec each side",
            rest: "10 sec between sides · 10 sec between sets",
            cue: "60 seconds. If you're not shaking at 40, you're not squeezing hard enough. Drive the top leg into the bench, drive the hip up, squeeze everything. Every second of every set is earned.",
            harder: "Hip dips for the full 60 seconds. This is the hardest lateral core exercise in the program. Your obliques will be destroyed after 2 sets. Good.",
          },
          {
            name: "Pallof Press Hold",
            sets: 2,
            reps: "10 sec hold per rep · 12 reps each side",
            rest: "10 sec",
            cue: "10 seconds. 12 reps. That's 2 full minutes of anti-rotation work per side per set. Your obliques are never getting a break. Do not let your torso rotate even 1 degree. If it does, reduce the weight and hold the position perfectly.",
            harder: "Max resistance you can hold with perfect form for 10 seconds. Find that weight. Use it every set. This is where anti-rotation strength is built.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · 4 sec hold · 25 reps each side",
            rest: "15 sec",
            cue: "4-second hold at full rotation, 25 reps each side. You are spending 7 seconds per rep in controlled tension. 25 reps means over 3 minutes of oblique work per set. This should destroy you. If it doesn't, you're not rotating fully.",
            harder: "Weight behind head, 4-second hold. The load forces deeper rotation to reach the knee. Every rep has to be a full rotation or it doesn't count.",
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
            name: "Dead Bug to Hollow Hold",
            sets: 2,
            reps: "10 reps dead bug · straight into 45 sec hollow hold",
            rest: "15 sec",
            cue: "10 controlled dead bug reps — 10-second holds each — then without rest, lock into hollow body and hold for 45 seconds. Your abs are pre-exhausted from the dead bugs. The hollow hold will be the hardest 45 seconds of the program so far. That's exactly what we want.",
            harder: "Plate overhead for both. No transition break. The loaded dead bug into loaded hollow body is a combination that will push elite athletes to their limit.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "90 sec hold",
            rest: "10 sec",
            cue: "90 seconds. You've built to this. At 60 seconds you'll want to quit — you've held that before. Now you need 30 more. Squeeze harder. Press the back flatter. Reach further. More tension is the only answer.",
            harder: "Heaviest plate overhead yet. 90 seconds with load is an event. Treat it like one.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "5 sec lower · 25 reps",
            rest: "10 sec",
            cue: "2 sets. 10 seconds rest. You barely stop before you go again. Your abs never recover between sets — that's the stimulus. Maintain the 5-second lower on set 6 with the same quality as set 1. That's the standard.",
            harder: "Max weight you can control through 25 reps with a 5-second lower. No compromising the eccentric for heavier weight. The slow lower is the workout.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "5 sec out · 4 sec pause · 12 reps",
            rest: "15 sec",
            cue: "4-second pause fully extended. Your abs are holding your entire body weight in the most compromised position possible. For 4 seconds. 12 times. 2 sets. This is not a core exercise — this is a core event.",
            harder: "Standing, 4-second pause. If you can do standing rollouts with a 4-second pause, you have one of the strongest cores in the room. Every room.",
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
            reps: "2 sec up · 5 sec down · 15 reps",
            rest: "15 sec",
            cue: "15 reps now. 2 sets. The 15th rep should look exactly like the 1st — no swing, straight legs, 5-second lower. If it doesn't, you're fatiguing into bad movement. Stop at the last perfect rep and note it. Beat that number next session.",
            harder: "Ankle weights, heaviest you've used. 15 reps with weighted ankles and a 5-second eccentric is the hardest hanging core exercise in this program.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "60 sec + 10 hip dips each side",
            rest: "10 sec between sides · 10 sec between sets",
            cue: "60-second hold, then 10 hip dips at the end of every set. You're already destroyed from the hold — now you have to move. Drive the hip down and up 10 times before you're allowed to stop. The dips at the end of an exhausted hold are a completely different exercise.",
            harder: "Hip dips for the full 60 seconds, then 10 more at the end. That's 70 reps of lateral flexion. Your obliques will not forgive you. Good.",
          },
          {
            name: "Pallof Press — Walking",
            sets: 2,
            reps: "10 steps each direction · 2 setss each side",
            rest: "15 sec",
            cue: "Press out, hold the press, and walk laterally 10 steps — keeping the arms extended the entire time. You are resisting rotation while moving. Your obliques and deep stabilizers are working simultaneously. Do not let the arms come in during the walk. Press stays locked.",
            harder: "Heavier band or cable. Walking Pallof with significant load is one of the most functional anti-rotation movements you can do. Every step is a fight.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · 5 sec hold · 25 reps each side",
            rest: "10 sec",
            cue: "5-second hold. 25 reps each side. 2 sets. 10 seconds rest. You are spending 8 seconds per rep in controlled oblique tension. This is 200 seconds of oblique work per set. If you finish set 6 with the same quality as set 1, you've built something real.",
            harder: "Max weight behind head. 5-second hold with load at full rotation is as hard as bicycle crunches get. This is the final movement of the week. Empty the tank.",
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
            name: "Dead Bug to Hollow Hold",
            sets: 2,
            reps: "12 reps dead bug · straight into 60 sec hollow hold",
            rest: "10 sec",
            cue: "12 dead bugs, 60-second hollow hold, no break. 2 sets. 10 seconds rest. This is the most demanding anterior core sequence in the program. Your abs will be pre-exhausted from week 4. Week 5 is built on that exhaustion. Earn it.",
            harder: "Heaviest plate yet for both. The combination of loaded dead bugs into a loaded hollow hold is a test of true core endurance. Most athletes won't make it through set 4 with load. You will.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "90 sec hold · squeeze harder each 30 sec",
            rest: "10 sec",
            cue: "Every 30 seconds, actively increase your tension. At 30 seconds — squeeze harder. At 60 seconds — press the back flatter. At 90 seconds — reach further. You are not maintaining. You are escalating. That's the difference.",
            harder: "Plate overhead. Escalating tension with load for 90 seconds. If you can do this cleanly for 2 sets, you have an elite core. This is the standard.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "5 sec lower · 1 sec pause at bottom · 25 reps",
            rest: "10 sec",
            cue: "Pause at the bottom — legs and arms extended — for 1 second before coming up. You are now loading the bottom position. Your abs are stretched under load at the bottom. That 1 second matters more than the rest of the rep.",
            harder: "Weight overhead with a 1-second bottom pause. The loaded stretch at the bottom is an advanced technique. Your abs are working eccentrically at their longest length. This builds core strength nothing else can.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "6 sec out · 4 sec pause · 12 reps",
            rest: "10 sec",
            cue: "6 seconds out. 4 seconds frozen. Every rep is 10 seconds of active core loading. 12 reps means 2 full minutes of ab wheel tension per set. If your lower back sags at any point in the pause, bring it in. The pause has to be perfect or it doesn't count.",
            harder: "Standing, 4-second pause. If you haven't stood up yet, this is the week. 6-second rollout standing with a 4-second pause is elite. That's the target.",
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
            reps: "Toes to bar · 3 sec lower · 12 reps",
            rest: "15 sec",
            cue: "Toes to bar this week. Full range. Your toes touch the bar at the top — no partial reps accepted. 3-second lower from the bar back to dead hang. This is the full expression of hanging core strength. Every rep is earned.",
            harder: "Ankle weights, toes to bar, 3-second lower. This is the hardest hanging movement in the program. If you can do 12 clean reps of this with ankle weights, your core is elite.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "75 sec + 15 hip dips each side",
            rest: "10 sec between sides · 10 sec between sets",
            cue: "75 seconds — 15 more than last week — then 15 hip dips. Your obliques are being taken to complete failure every set. When you feel like you can't do the dips, that's when the dips start. Push through the failure point.",
            harder: "Hip dips for all 75 seconds, then 15 more. 90 total reps of lateral flexion per side per set. This will be the hardest thing your lateral core has ever done.",
          },
          {
            name: "Pallof Press — Walking",
            sets: 2,
            reps: "15 steps each direction · 2 setss each side",
            rest: "10 sec",
            cue: "15 steps this week. More distance means more time fighting rotation under load. Every step you take away from the anchor increases the rotational force you're resisting. Stay pressed out. Don't let the arms bend.",
            harder: "Max band resistance, 15 steps. The further you walk with max load, the harder each step becomes. By step 12 you are fighting with everything you have. That's where the strength is built.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · 5 sec hold · 30 reps each side",
            rest: "10 sec",
            cue: "30 reps each side. 5-second holds. 8 seconds per rep. That's 240 seconds of oblique tension per set. This is the volume peak of the program. Your obliques will be completely exhausted. Finish every rep. Form does not drop.",
            harder: "Max weight, 5-second hold. 30 reps with weight and holds at full rotation is the hardest this exercise gets. This is the peak of 5 weeks of work. Show up for it.",
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
        focus: "Flexion + Anterior",
        exercises: [
          {
            name: "Dead Bug to Hollow Hold",
            sets: 2,
            reps: "15 reps dead bug · straight into 75 sec hollow hold",
            rest: "10 sec",
            cue: "15 dead bugs — 10 second holds each — straight into 75 seconds of hollow body. No break. 2 sets. This is the final week of the program. Every rep of every set is the culmination of 6 weeks of work. Perform accordingly.",
            harder: "Heaviest plate for both. 15 loaded dead bugs into 75 seconds of loaded hollow body, 2 times. This is the hardest anterior core sequence in the program. You built to this.",
          },
          {
            name: "Hollow Body Hold",
            sets: 2,
            reps: "2 min hold · escalating tension",
            rest: "10 sec",
            cue: "2 minutes. Final week. You've held 90 seconds — now you hold 2 full minutes. Escalate tension every 30 seconds. At 90 seconds you're in uncharted territory. Push harder. This is what 6 weeks of hollow body work built you for.",
            harder: "Heaviest plate. 2 minutes with load overhead. This is an elite isometric core test. Pass it.",
          },
          {
            name: "V-Up",
            sets: 2,
            reps: "5 sec lower · 2 sec pause at bottom · 30 reps",
            rest: "10 sec",
            cue: "30 reps. 5-second lower. 2-second bottom pause. 2 sets. 10 seconds rest. This is the highest volume and longest time under tension of the program. Your abs will be completely broken by the end. That means it worked.",
            harder: "Max weight, 2-second pause at the stretched bottom position. This is the hardest V-up variation possible. 30 reps of it is the peak of 6 weeks of core development.",
          },
          {
            name: "Ab Wheel Rollout",
            sets: 2,
            reps: "6 sec out · 5 sec pause · 15 reps",
            rest: "10 sec",
            cue: "5-second pause. 15 reps. 2 sets. The longest pause of the program, the most reps, the most sets. 11 seconds of active loading per rep. 165 seconds of ab wheel tension per set. This is the final test of what you built. Don't waste it.",
            harder: "Standing, 5-second pause. 15 standing rollouts with a 5-second pause fully extended. If you can do this cleanly, your core is in the top percentile of any athlete.",
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
            reps: "Toes to bar · 4 sec lower · 15 reps",
            rest: "10 sec",
            cue: "15 reps, toes to bar, 4-second eccentric. 2 sets. 10 seconds rest. This is the hardest hanging movement of the program in terms of volume and control. Your abs are being asked to do everything. They've trained 6 weeks for this. Trust the work.",
            harder: "Ankle weights, toes to bar, 4-second lower. This is the absolute peak of hanging core strength training. 15 reps at this standard with load is a lifetime achievement for most athletes.",
          },
          {
            name: "Copenhagen Plank",
            sets: 2,
            reps: "90 sec + 20 hip dips each side",
            rest: "10 sec between sides · 10 sec between sets",
            cue: "90 seconds. 20 hip dips. Final week. Your lateral core has been built over 6 weeks for this exact set. 90 seconds feels impossible right now — it won't when you get there. The dips after an exhausted 90-second hold are the hardest thing in this program. Do them all.",
            harder: "Hip dips for the full 90 seconds, then 20 more. 110 total lateral flexion reps per side per set. This is a lateral core event. There is nothing harder.",
          },
          {
            name: "Pallof Press — Walking",
            sets: 2,
            reps: "20 steps each direction · 2 setss each side",
            rest: "10 sec",
            cue: "20 steps. Max resistance. Final week. You are walking 20 steps with full press, maximum anti-rotation load. Every step tests your core stability. Step 20 should look exactly like step 1. If it doesn't, you know what to work on next cycle.",
            harder: "Absolute max band or cable resistance, 20 steps. If the anchor point allows it, angle yourself further away — more distance means more load on every step. This is functional rotational strength at its peak.",
          },
          {
            name: "Bicycle Crunch",
            sets: 2,
            reps: "3 sec rotation · 5 sec hold · 35 reps each side",
            rest: "10 sec",
            cue: "35 reps. Final session. 5-second holds. 2 sets. 10 seconds rest. This is the last movement of the entire program. You will be exhausted. Your obliques will be spent. Do every single rep with the same quality as rep 1 of week 1. That's what 6 weeks of training means.",
            harder: "Max weight. 35 reps with 5-second holds under load. This is the final set of the program. Leave absolutely everything you have on the floor. That's the whole point.",
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
