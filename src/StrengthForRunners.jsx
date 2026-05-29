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
            cue: "One leg, hinge at the hip, back completely flat. 4 seconds down — your hamstring is loading like a spring. 1 second pause at the bottom before driving back up. This is the single most important injury prevention movement for runners. Hamstring weakness is why runners get hurt. Fix it here.",
            harder: "Hold a dumbbell in the opposite hand. The contralateral load forces your hip stabilizers to fight harder on every rep. This is how you build the hip strength that protects your IT band and knee.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "4 sec lower · 2 sec pause · 12 reps each leg",
            rest: "20 sec",
            cue: "Rear foot on a box or step, front foot far enough forward that your shin stays vertical at the bottom. 4 seconds down. 2 second pause. Your quad, glute, and hip flexor are all loaded simultaneously. Runners who do these consistently don't get knee injuries. This is why.",
            harder: "Hold dumbbells at your sides. The load amplifies quad and glute demand dramatically. Your single-leg stability is being built rep by rep — exactly what every stride demands.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "20 steps each direction · stay low",
            rest: "15 sec",
            cue: "Band around your ankles, stay in a slight squat the entire time. Every step activates your glute medius. That muscle controls hip drop when you run — if it's weak, every stride collapses inward and your knees pay the price. This exercise exists to fix that specific problem.",
            harder: "Heavier resistance band, add a squat pulse between every step. The pulse eliminates momentum and makes your glute medius work through its full range on every single step.",
          },
          {
            name: "Glute Bridge March",
            sets: 2,
            reps: "2 sec hold each leg · 20 reps total",
            rest: "15 sec",
            cue: "Hips up in bridge, hold that height the entire time. Lift one foot and hold for 2 full seconds before switching. Your glute and core resist rotation on every march — which is exactly what happens during every running stride. One leg supports your entire body. Train that.",
            harder: "Resistance band above the knees. The band forces your glutes to fire harder to stop the knees caving. Every march becomes a simultaneous hip extension and abduction challenge.",
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
            cue: "On a step — heel drops fully below the edge on the way down. 3 seconds up to full plantar flexion, 4 seconds all the way back down. This is Achilles tendon loading. Slow eccentrics are clinically proven to treat and prevent Achilles tendinopathy. If you run, you do these. No exceptions.",
            harder: "Hold a dumbbell in the same-side hand. Weighted single-leg calf raises with a 4-second eccentric are one of the most effective tendon-strengthening protocols in sports medicine. Your Achilles will thank you at mile 18.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "As slow as possible · 6 reps",
            rest: "30 sec",
            cue: "Hook your feet under a bar or have someone hold them. Lower your body toward the floor as slowly as possible — hands ready to catch yourself. Pull back up using your hamstrings. This is the single most effective hamstring injury prevention exercise in existence. Studies show Nordics reduce hamstring injury risk by over 50% in runners. 6 reps. Every one matters.",
            harder: "Slower descent — aim for 8 to 10 seconds down. If you can lower for 10 seconds and pull back without hands, you have exceptional hamstring strength. That is the standard to chase.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "3 sec up · 3 sec down · 20 reps",
            rest: "15 sec",
            cue: "Back against a wall, heels about 12 inches out. Raise your toes as high as possible — 3 seconds up, 3 seconds down. Your tibialis anterior controls foot strike and is the root cause of shin splints. Most runners have never directly trained it. This is why they keep getting shin splints. Fix it.",
            harder: "Resistance band around the top of your foot anchored low. The band fights your dorsiflexion — that direct resistance is exactly the loading your tibialis needs to become bulletproof.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "10 reps · hold top position 3 sec each",
            rest: "20 sec",
            cue: "Deep wall sit — thighs parallel. Raise both heels simultaneously and hold for 3 seconds at the top. Your soleus — the deep calf muscle — is maximally loaded in a bent-knee position. The soleus is the primary load-bearing calf muscle during running. Most calf raises miss it entirely. This doesn't.",
            harder: "Add a resistance band across your thighs pressing down. The added load through the wall sit position increases soleus tension dramatically. This is the most underrated calf exercise in any runner's program.",
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
            cue: "Full reset means you step off, stand still for 2 seconds, then jump again. No bounce, no rhythm — pure explosive intent on every single rep. Land soft, absorb through the hips and knees. The goal is maximum height and perfect landing mechanics. Sloppy landings are how ankles get hurt. Own every one.",
            harder: "Higher box. Add 4 inches when you can land 5 perfect reps without any wobble. The landing demands more from your tendons and stabilizers — that's exactly what makes you a stronger runner.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "8 hops each leg · stick each landing 2 sec",
            rest: "20 sec",
            cue: "Hop forward on one leg and stick the landing for 2 full seconds — completely still, no wobble. If you wobble, that rep doesn't count. Your ankle stabilizers, glute, and quad are all learning to absorb force on one leg. Every running stride is a single-leg landing. This trains exactly that.",
            harder: "Hop laterally instead of forward, or increase hop distance. Lateral single-leg hops challenge your frontal plane stability — the same plane that gets stressed on turns, trails, and camber roads.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "20 meters · max effort",
            rest: "30 sec",
            cue: "Exaggerated running strides — drive your knee up aggressively, push off explosively, cover maximum distance per stride. This is plyometric running. Your hip flexors, glutes, and calves all fire at maximum rate. Bounding builds the elastic energy storage in your tendons that makes you faster and more efficient. Run with purpose.",
            harder: "Uphill bounds. Bounding uphill increases hip extension demand and forces even more aggressive drive. If you have a hill, use it. Your glutes will be completely destroyed in the best way.",
          },
          {
            name: "Pogo Jumps",
            sets: 2,
            reps: "30 sec continuous · minimal ground contact",
            rest: "20 sec",
            cue: "Small, fast, continuous jumps on both feet — the goal is minimal ground contact time. You are training your Achilles tendon to store and release elastic energy rapidly. This is the exact mechanism that makes elite runners efficient. Stiff ankles, fast turnover. Land and go immediately.",
            harder: "Single-leg pogo jumps. One leg, 20 seconds each. The demand on your Achilles and calf to absorb and return force on one leg is dramatically higher. This is where true tendon resilience is built.",
          },
        ],
      },
    ],
  },
  {
    week: 2,
    label: "Deepen the Load",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 10 reps each leg",
            rest: "15 sec",
            cue: "5-second lower this week. One extra second means more time your hamstring is under eccentric load. 2-second pause at the bottom — that pause eliminates the stretch reflex and forces your hamstring to generate force from a dead stop. This is how you build the kind of hamstring strength that doesn't tear.",
            harder: "Heavier dumbbell than week 1. The contralateral load increases the demand on your hip stabilizers with every added pound. Your lateral hip is being built with precision.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "5 sec lower · 2 sec pause · 12 reps each leg",
            rest: "15 sec",
            cue: "5-second lower this week. Your quad is loaded eccentrically for one more second than last week — which is where the strength adaptation happens. The 2-second pause remains. Do not rush the descent to make the reps easier. The descent is the workout.",
            harder: "Heavier dumbbells than week 1. Progressive overload on single-leg movements is the fastest way to build the quad and glute strength that protects runners' knees over long miles.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "25 steps each direction · squat pulse every 5 steps",
            rest: "15 sec",
            cue: "25 steps this week plus a squat pulse every 5 steps. The pulse drives your glute medius through its full range of motion mid-walk. Your lateral hip is getting no rest. That sustained activation is building the stability your stride depends on.",
            harder: "Heaviest band you have. At high resistance, every step is a genuine challenge for your hip abductors. Your glute medius will be on fire by step 15. That's exactly where it needs to be.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 4 sec down · 15 reps each leg",
            rest: "15 sec",
            cue: "Swap the march for a full single-leg bridge this week. 2 seconds up driving the hip as high as possible, 4 seconds down. One leg is doing all the work. Your glute max and hamstring are co-contracting — which is exactly how they work during every running push-off. Train them together.",
            harder: "Dumbbell or weight plate on the working hip. Loaded single-leg bridges with a 4-second eccentric are elite posterior chain work. Every pound you add directly transfers to more powerful push-off when you run.",
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
            reps: "3 sec up · 5 sec down · 15 reps each leg",
            rest: "15 sec",
            cue: "5-second eccentric this week. One more second of Achilles tendon loading per rep. Your tendon is getting stronger with every second you control that descent. Tendon adaptations take 6 to 8 weeks — you are right in the window where this starts making you bulletproof.",
            harder: "Heavier dumbbell than week 1. The combination of increased load and 5-second eccentric is a clinical tendon-loading protocol. This is the same protocol elite distance runners use for Achilles rehab. You're using it to prevent ever needing rehab.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "8 reps · slower than week 1",
            rest: "25 sec",
            cue: "8 reps this week. Every rep slower than last week. Your hamstring is the primary brake for knee extension — when it's too weak to control that force, it tears. Nordics train the one thing that prevents that. There is no substitute. Be slower. Be more controlled.",
            harder: "Aim for a 9 to 10 second descent. If you can lower for 10 seconds without hands, you are in elite territory for hamstring eccentric strength. Most professional athletes can't do this. Chase it.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "3 sec up · 3 sec down · 25 reps",
            rest: "15 sec",
            cue: "25 reps this week. 5 more than last week. Your tibialis is building endurance tolerance — which is exactly what it needs to protect you through the back half of a long run when shin splints typically show up. Train the fatigue resistance now.",
            harder: "Resistance band, heavier resistance than week 1. Progressive tibialis loading is rare — most runners never do it. The ones who do stop getting shin splints. Build the tendon now.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "12 reps · 4 sec hold at top",
            rest: "15 sec",
            cue: "4-second hold at the top this week. Your soleus is under sustained contraction at peak plantar flexion for 4 full seconds. That sustained tension is exactly what builds the soleus endurance that carries you through mile 20 when your calves are threatening to cramp.",
            harder: "Resistance band across the thighs — heavier than week 1. The added load through the bent-knee position creates maximum soleus tension. Your deep calf is being built for long-distance durability.",
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
            reps: "6 reps · step down every rep",
            rest: "25 sec",
            cue: "6 reps this week. Step down every single time — never jump down. Jumping down creates uncontrolled landing forces that your tendons don't need. The work is in the jump up. Step down, reset fully, explode again. Every rep is maximum intent.",
            harder: "Higher box than week 1. If you landed 5 perfect reps cleanly last week, go up 4 inches. The higher landing demands more from every stabilizer in your lower leg. This is where ankle resilience is built.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "10 hops each leg · 2 sec stick",
            rest: "15 sec",
            cue: "10 hops this week. The last 2 should be your hardest — your stabilizers will be fatiguing and your landing quality has to hold. If it drops, that tells you exactly where your single-leg stability limits are. Note it. That's what you're building.",
            harder: "Lateral hops this week. Hop sideways and stick. The lateral direction challenges your frontal plane — the exact plane that gets stressed on every road camber and every turn. Build the stability before the road demands it.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "25 meters · max effort",
            rest: "25 sec",
            cue: "25 meters this week. More distance means more total explosive reps. Your goal is maximum distance per stride — not maximum stride rate. Drive the knee high, extend the hip fully behind you, push off aggressively. Every bound should feel like you're trying to leap over something.",
            harder: "Uphill bounds this week. 25 meters uphill is completely different — your glutes are working at their maximum range and your hip flexors are firing hard to drive the knee. This builds the power that carries you up race-day hills without slowing down.",
          },
          {
            name: "Pogo Jumps",
            sets: 2,
            reps: "40 sec continuous · minimal ground contact",
            rest: "15 sec",
            cue: "40 seconds this week. 10 more seconds of rapid Achilles energy return. By second 30 your calves will be burning. Keep the contact time short — the moment you start landing heavy and slow, you've lost the stimulus. Stiff, fast, reactive. That is the goal.",
            harder: "Single-leg pogos — 20 seconds each leg. The demand on one Achilles tendon to absorb and return force continuously is extreme. This is elite tendon conditioning. Build to it.",
          },
        ],
      },
    ],
  },
  {
    week: 3,
    label: "Stress the System",
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
            cue: "12 reps this week — 2 more per leg. The increased volume combined with the 5-second lower is a significant hamstring stimulus. By rep 10 your hamstring will be burning. Reps 11 and 12 are where the adaptation happens. Do not skip them. Do not rush them.",
            harder: "Heavier dumbbell than week 2. You should be progressively loading this every week. Your hip stabilizer strength directly determines how well your pelvis stays level during hard runs. Load it.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 12 reps each leg",
            rest: "15 sec",
            cue: "3-second pause this week — one more second of quad and glute loading at full depth. You are sitting in your weakness for 3 full seconds. Your quads are firing to hold the position and your glutes are loaded at their longest range. This is where athletic leg strength is built.",
            harder: "Heavier dumbbells than week 2. The 3-second pause with additional load is a quad and glute challenge that most gym-based training cannot replicate. Your legs will feel this on your next run.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "30 steps each direction · squat pulse every 3 steps",
            rest: "10 sec",
            cue: "Pulse every 3 steps now. More frequent pulses mean your glute medius barely gets a moment between activations. 30 steps with a pulse every 3 is 10 pulses per direction. Your lateral hip is being conditioned for the sustained activation that every mile of running demands.",
            harder: "Heaviest band and add a forward lean. Leaning slightly forward shifts more load onto your glutes and less onto your quads — which is the position your hip abductors work in during running. Train the exact position.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 5 sec down · 15 reps each leg",
            rest: "10 sec",
            cue: "5-second eccentric this week. Your glute and hamstring are braking your entire body weight for 5 full seconds on every rep. There are 15 of those per leg. That's 75 seconds of glute and hamstring eccentric loading per set. This is serious posterior chain work.",
            harder: "Heaviest hip load yet. 5-second eccentric with maximum load on one leg is one of the most demanding glute and hamstring exercises in the program. Your push-off power when running is being built right here.",
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
            cue: "20 reps this week. More total tendon loading volume than any week prior. Your Achilles is adapting — tendon stiffness is increasing, elastic energy return is improving. Every rep at this tempo is building the Achilles resilience that keeps you off the injury table.",
            harder: "Heavier dumbbell, 20 reps. At this volume and load, your calf and Achilles are being pushed to a level most recreational runners never approach. That's the gap between runners who stay healthy and those who don't.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "8 reps · 9-10 sec descent",
            rest: "25 sec",
            cue: "Target 9 to 10 seconds on the descent. This is the clinical gold standard for Nordic hamstring loading. At this eccentric speed under full bodyweight, you are generating more hamstring protective adaptation than any other exercise. Your hamstrings are becoming bulletproof. Trust the process.",
            harder: "If you can reach the floor without hands on every rep, add a weight plate held at your chest. Weighted Nordics are an elite strength movement. Most professional athletes cannot do unweighted ones correctly — you are building something exceptional.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 25 reps",
            rest: "10 sec",
            cue: "4-second tempo both ways this week. Slower tempo means your tibialis is under tension for longer per rep. The anterior shin is a commonly neglected structure — you are directly addressing the root cause of shin splints, anterior knee pain, and poor foot strike mechanics. All three.",
            harder: "Resistance band, heavier than week 2. Progressively loading the tibialis through its full range of motion is rare training. The runners who do this stop getting shin splints. The ones who don't keep wondering why they keep getting them.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "15 reps · 4 sec hold at top · add hip extension",
            rest: "15 sec",
            cue: "After each calf raise hold, lift one heel and extend that hip slightly — a tiny glute squeeze at the top. This co-activation of the soleus and glute is exactly what happens at push-off during running. You are training the chain, not just the calf in isolation.",
            harder: "Resistance band plus heavier load across the thighs. Co-activation of soleus and glute under load is a compound stimulus that builds the integrated leg strength that makes runners powerful and efficient.",
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
            reps: "6 reps · pause 3 sec at top",
            rest: "25 sec",
            cue: "Land on the box and hold for 3 full seconds before stepping down. The landing hold trains your stabilizers to absorb force and lock in position — which is exactly what happens at foot strike. If you wobble on the hold, you've identified the weak link. Train it until it's solid.",
            harder: "Higher box, 3-second hold. More height means more force to absorb on landing. The hold with added height is a genuine ankle, knee, and hip stability challenge. Your tendons are being loaded eccentrically at maximum height.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "10 hops each leg · directional changes",
            rest: "15 sec",
            cue: "Mix forward, lateral, and diagonal hops. Stick every landing for 2 seconds. Directional variety trains your ankle and knee stabilizers in all the planes of movement that running actually demands — especially on trails, turns, and uneven terrain.",
            harder: "Increase hop distance and add rotation on landing. Land facing a different direction than you took off. The rotational element demands complete lower limb control. This is athletic ankle and knee training.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "30 meters · max drive per stride",
            rest: "20 sec",
            cue: "30 meters. Focus specifically on the push-off — drive from the back of the foot, fully extend the hip, feel the glute fire at the end of every stride. Bounding teaches your body to generate propulsive force efficiently. Every meter of bounding makes your actual running economy better.",
            harder: "Uphill bounds, 30 meters. Uphill removes the momentum advantage of flat ground — every stride is pure power. Your glutes and hip flexors will be working at their absolute maximum. This is the most running-specific explosive stimulus in the program.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "8 reps each leg · 3 sec stick",
            rest: "25 sec",
            cue: "Step off a box and land on one leg — absorb the landing and hold completely still for 3 seconds. No wobble. No second hop. You are training your neuromuscular system to absorb and stabilize impact force on one leg. This is injury prevention at its most direct. Every bad ankle and knee sprain starts with a poor landing. Fix the landing.",
            harder: "Higher box for more landing force. The added drop height significantly increases the impact load on your ankle, knee, and hip. Perfect landings from higher drops is elite reactive stability training.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    label: "Peak Strength",
    sessions: [
      {
        session: "A",
        focus: "Lower Body Strength",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 12 reps each leg",
            rest: "10 sec",
            cue: "3-second pause at the bottom this week. Your hamstring is fully loaded at its longest range for 3 full seconds before you drive back up. This is the hardest version of this exercise in the program. Your posterior chain is being demanded to produce force from a dead stop under full load.",
            harder: "Heaviest dumbbell yet. The 3-second bottom pause with maximum load is a hamstring and hip stabilizer challenge that almost no training program includes. You are building the posterior chain strength that separates injury-free runners from the ones sitting on the sidelines.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 15 reps each leg",
            rest: "10 sec",
            cue: "15 reps this week. The highest rep count of the program with the longest pause. 5-second lower, 3-second pause, 15 reps — that's nearly 2 minutes of single-leg quad and glute loading per set. Your legs will be completely done. That means it worked.",
            harder: "Heaviest load yet. 15 reps of Bulgarian split squats with a 5-second lower and 3-second pause under maximum load is one of the most demanding single-leg strength protocols possible. This is the strength ceiling of the program. Hit it.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "30 steps · continuous squat pulses",
            rest: "10 sec",
            cue: "Continuous pulses for all 30 steps this week. Every step is a squat pulse. Your glute medius is activated and loaded through every single step. This is the highest glute medius volume of the program. Your lateral hip stability is being pushed to its limit.",
            harder: "Heaviest band, continuous pulses. At maximum resistance with a pulse on every step, 30 steps each direction is a lateral hip conditioning event. Your glute medius will be completely spent after 2 sets. That's the goal.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 5 sec down · 20 reps each leg",
            rest: "10 sec",
            cue: "20 reps this week — 5 more than any previous session. 5-second eccentric, 20 reps each leg. Your glute and hamstring are under eccentric load for 100 seconds per leg per set. This is the peak posterior chain session of the entire program. Leave absolutely nothing behind.",
            harder: "Maximum hip load. 20 single-leg glute bridges with a 5-second eccentric under maximum weight is the peak of posterior chain training in this program. Your push-off power as a runner is being built right now. Load it.",
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
            cue: "6-second eccentric. The longest Achilles loading of the program. 20 reps at 6 seconds down means 2 full minutes of eccentric calf and Achilles work per leg per set. Your Achilles tendon has been adapting for 4 weeks. This week it gets tested. Control every second.",
            harder: "Heaviest load yet, 20 reps with 6-second eccentric. This is elite tendon loading. The combination of maximum weight and maximum eccentric duration is the highest Achilles and calf stimulus in the program. If you can do this cleanly, your Achilles is bulletproof.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "10 reps · 10 sec descent target",
            rest: "20 sec",
            cue: "10 reps, 10-second descent target. This is the clinical gold standard. At 10 seconds under full bodyweight, your hamstring eccentric strength is at elite level. Every rep is a fight. Win every one. Your hamstrings are the reason runners stay healthy at high mileage. Build them to last.",
            harder: "Plate at your chest, 10-second descent. Weighted Nordics at 10-second eccentrics are an elite standard. Very few athletes in any sport can do this. You have been building to it for 4 weeks. Try it.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 30 reps",
            rest: "10 sec",
            cue: "30 reps. The highest tibialis volume of the program. Your anterior shin is being conditioned for the long-run fatigue that causes shin splints. By rep 25 it will be burning. Reps 26 through 30 are the ones that build the endurance buffer that protects you late in a race.",
            harder: "Resistance band at maximum resistance, 30 reps with 4-second tempo. The combination of maximum loading and maximum volume is the hardest tibialis session possible. After 4 weeks of this, shin splints become a thing of the past.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "15 reps · 5 sec hold · alternating hip extension",
            rest: "10 sec",
            cue: "5-second hold at the top, alternating hip extensions. Both soleus muscles are loaded, then one glute fires. You are training the integrated push-off chain — soleus, glute, and hip all firing together under load. This is the closest thing to strength training your actual running stride.",
            harder: "Maximum resistance band across thighs plus weights. The integrated calf and glute co-activation under maximum load is a running-specific strength stimulus you cannot replicate any other way. This is what makes your push-off powerful for the entire duration of a run.",
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
            reps: "8 reps · maximum height · 3 sec hold",
            rest: "20 sec",
            cue: "Maximum height box. 8 reps. 3-second landing hold every rep. This is the explosive peak of the first half of the program. Every jump is maximum intent — not submaximal, not comfortable. You are training your nervous system to recruit maximum power on demand. That's what makes a runner fast.",
            harder: "Highest box available with 3-second hold. The landing stabilization demand at maximum height trains every neuromuscular pathway your ankle and knee depend on. This is the most demanding box jump session in the program.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "12 hops each leg · mixed directions · 2 sec stick",
            rest: "15 sec",
            cue: "12 hops, every direction — forward, back, lateral, diagonal. Your stabilizers are being trained in all planes simultaneously. By hop 10 your ankle and glute will be fatigued. Hops 11 and 12 must be just as controlled as hop 1. That's the test.",
            harder: "Add a slight incline to your landing surface — hop onto a step and stick. Landing on a raised surface increases the stabilization demand on your ankle and knee significantly. This is reactive stability training at the highest level.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "35 meters · max distance per stride",
            rest: "20 sec",
            cue: "35 meters. Maximum distance per stride, maximum hip extension, maximum push-off. You are training the power output and elastic energy storage that makes running feel effortless. Elite distance runners have exceptional bounding ability. You are building that quality right now.",
            harder: "Uphill bounds, 35 meters. The combination of maximum distance and uphill grade is the most demanding bounding stimulus in the program. Your glutes and hip flexors will remember this session every time you run a hill.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "10 reps each leg · 3 sec stick · max height",
            rest: "20 sec",
            cue: "Maximum box height. 10 reps each leg. 3-second stick. This is the highest reactive stability demand of the first half of the program. Perfect landings from maximum height trains everything your ankle, knee, and hip need to handle the impact forces of hard running. Land like you mean it.",
            harder: "Maximum height, immediately hop forward after the stick. Step off, land, stick for 1 second, then hop forward and stick again. The sequence trains absorption and re-propulsion — the exact pattern of running itself.",
          },
        ],
      },
    ],
  },
  {
    week: 5,
    label: "Second Wind",
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
            cue: "14 reps this week. The highest rep count of the program for this movement. Your hamstring and hip stabilizers are being pushed to their endurance ceiling at this tempo. The later reps are the ones that build the fatigue resistance that protects you at mile 20. Do not skip them.",
            harder: "Maximum load for 14 reps with perfect tempo. Every rep counts. The combination of high volume and heavy contralateral load is the most demanding hip stability stimulus of the program.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 12 reps each leg",
            rest: "10 sec",
            cue: "6-second lower this week. The longest eccentric of the program. You are loading your quad and glute for 6 full seconds on the way down. The 3-second pause remains. This is the hardest single-leg strength stimulus of the entire 8 weeks. Your legs should feel this for days.",
            harder: "Maximum load, 6-second lower. The combination of the longest eccentric and maximum weight is the absolute ceiling of this exercise. Your single-leg strength is at its peak.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "35 steps · continuous pulses · forward lean",
            rest: "10 sec",
            cue: "35 steps, continuous pulses, slight forward lean the entire time. The lean shifts the load onto the glutes specifically — the position your hips are in during running. You are training your glute medius in the exact body position it needs to be strong in.",
            harder: "Maximum resistance band, forward lean, 35 steps. This is the highest lateral hip volume of the program. Your glute medius will be completely exhausted. That complete exhaustion is the stimulus that forces it to adapt.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 15 reps each leg",
            rest: "10 sec",
            cue: "6-second eccentric. The longest of the program. Your glute and hamstring are braking your full body weight for 6 seconds on every rep. 15 reps means 90 seconds of eccentric posterior chain loading per leg per set. This is where your push-off power as a runner gets built.",
            harder: "Maximum hip load, 6-second lower. At this volume, tempo, and load your posterior chain is being pushed to its absolute limit. Every runner who completes this session is stronger than they were when they started the program.",
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
            reps: "3 sec up · 6 sec down · 20 reps · add pause at bottom",
            rest: "10 sec",
            cue: "Add a 1-second pause at the full bottom stretch this week. Your Achilles is loaded at its maximum length for 1 second before you rise. That stretched loaded position creates the most mechanical tension on the tendon — which is exactly what drives tendon adaptation. Every rep has 3 distinct positions of tension.",
            harder: "Maximum load with the bottom pause. Weighted calf raise with a 6-second eccentric and a loaded bottom pause is the most advanced Achilles tendon loading protocol in the program. Your tendons are becoming exceptional.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "10 reps · 10 sec descent · pause at 90 degrees",
            rest: "20 sec",
            cue: "Add a 2-second pause when your body reaches 90 degrees — midway through the descent. Your hamstring is maximally loaded at that angle. The pause at 90 degrees forces it to generate force isometrically at the hardest point in the range. This is where hamstring tears happen in sprinters. Strengthen it here.",
            harder: "Plate at your chest, 10-second descent with a 2-second pause at 90 degrees. This is one of the most advanced hamstring protocols in any sport. If you can do it cleanly, your hamstrings are exceptional.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 30 reps · add toe spread",
            rest: "10 sec",
            cue: "Spread your toes fully at the top of every raise. The toe spread activates the intrinsic foot muscles simultaneously with the tibialis — building the full anterior chain from foot to shin. Your foot strike mechanics are being addressed at the source.",
            harder: "Maximum resistance band, toe spread on every rep. The combination of tibialis loading and intrinsic foot muscle activation with resistance is comprehensive anterior chain conditioning. This is what makes your foot strike efficient.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "20 reps · 5 sec hold · alternating hip extension",
            rest: "10 sec",
            cue: "20 reps this week — 5 more than week 4. Your soleus and integrated glute chain is being pushed to its highest volume of the program. By rep 15 your deep calf will be burning. The 5-second holds on top of that volume make this a genuine lower leg endurance event.",
            harder: "Maximum resistance, 20 reps with 5-second holds. The integrated soleus and glute stimulus at maximum load and maximum volume is the peak of calf and posterior chain co-activation training in this program.",
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
            reps: "8 reps · immediate rebound",
            rest: "20 sec",
            cue: "No step-down this week — land and immediately rebound into the next jump. Continuous box jumps train your reactive strength — the ability to absorb force and immediately redirect it upward. This is the elastic quality that makes elite runners efficient. Touch and explode. No hesitation.",
            harder: "Higher box, immediate rebound. Continuous box jumps at maximum height are one of the most demanding plyometric protocols possible. Your Achilles and quads are storing and releasing energy on every landing. This is elite reactive training.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "12 hops each leg · max distance · 2 sec stick",
            rest: "15 sec",
            cue: "Maximum distance per hop this week. Covering more ground per hop means more force at landing — which means more demand on your stabilizers. The 2-second stick must be rock solid regardless of how far you hopped. Distance and stability together. Both standards are non-negotiable.",
            harder: "Maximum distance onto a step or box. Landing on a raised surface after a maximum-distance hop is an extreme reactive stability demand. Your ankle and knee stabilizers will be completely tested.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "40 meters · focus on flight time",
            rest: "20 sec",
            cue: "Focus on flight time — how long you are in the air between bounds. Maximum flight time means maximum power output per stride. This is the exact metric that separates efficient runners from inefficient ones. Push off hard, drive the knee high, spend time in the air. Gravity will bring you back. Make it wait.",
            harder: "Uphill bounds, 40 meters. At 40 meters uphill with maximum flight time focus, you are generating more power per stride than most training methods can produce. This directly translates to race-day hill power and flat-ground speed.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "10 reps each leg · immediately bound forward",
            rest: "15 sec",
            cue: "Land and stick for 1 second, then immediately bound forward as far as possible. The sequence is absorption then propulsion — the exact pattern of running. You are training your leg to take impact and immediately generate force. This is the most running-specific plyometric in the program.",
            harder: "Maximum height drop, maximum distance bound. The combination of maximum eccentric loading from the drop and maximum concentric output on the bound is the most complete single-leg power training stimulus possible.",
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
            name: "Single-Leg Romanian Deadlift",
            sets: 2,
            reps: "5 sec lower · 3 sec pause · 14 reps · add rotation",
            rest: "10 sec",
            cue: "At the bottom of each rep, rotate your torso slightly toward the floor leg — then reverse back to square before driving up. The rotation challenges your spinal stabilizers and obliques while your hamstring is fully loaded. Running involves significant rotational forces. Train your posterior chain to handle them.",
            harder: "Maximum load with rotation. The combination of heavy contralateral load and rotational challenge at full hamstring stretch is an advanced movement. Your entire posterior and lateral chain is being trained simultaneously.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps · add pulse at bottom",
            rest: "10 sec",
            cue: "At the bottom of the 3-second pause, add 3 small pulses before driving up. The pulses at the deepest point of the squat force your quad and glute to generate force repeatedly at their longest range. This is the hardest quad stimulus in the program. Your knees are being protected by the strength being built here.",
            harder: "Maximum load with bottom pulses. 3 pulses at the bottom of a loaded Bulgarian split squat with a 6-second lower is an advanced technique that creates extreme quad and glute tension. Your single-leg strength is at its peak.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "40 steps · continuous pulses · add overhead reach",
            rest: "10 sec",
            cue: "Reach both arms overhead during the walk. The overhead reach destabilizes your base and forces your lateral core and glute medius to work harder to maintain position. Running involves arm swing and upper body rotation — your lateral hip has to be stable through all of that. Train it.",
            harder: "Maximum band, overhead reach, 40 steps. The combination of maximum lateral resistance and overhead reach creates a full-body stability challenge. Your glute medius and lateral core are both being pushed to their ceiling.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · add abduction at top",
            rest: "10 sec",
            cue: "At the top of each bridge, abduct the working leg slightly outward before lowering. The abduction at peak hip extension trains the glute max and glute medius simultaneously — which is exactly how your glutes work at push-off during running. This is integrated glute training.",
            harder: "Maximum load with abduction at the top. The loaded glute bridge with simultaneous abduction at the peak is one of the most comprehensive glute training stimuli in the program. Your push-off power and hip stability are both being built in the same rep.",
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
            reps: "3 sec up · 6 sec down · 25 reps · bottom pause",
            rest: "10 sec",
            cue: "25 reps this week. The highest calf and Achilles volume of the program. 6-second eccentrics, bottom pause, 25 reps. Your Achilles has been adapting for 6 weeks — this is where that adaptation is tested at its highest volume. Control every single descent. Every single one.",
            harder: "Maximum load, 25 reps, full tempo. At this volume and load your calf and Achilles are being pushed to their absolute limit. Completing 25 reps with perfect tempo and maximum load means your Achilles is stronger than it has ever been.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "12 reps · 10 sec descent · pause at 90 degrees",
            rest: "20 sec",
            cue: "12 reps. 2 more than week 5. At 10-second descents with a 90-degree pause, 12 reps is a significant hamstring endurance challenge. By rep 9 your hamstrings will be burning. Reps 10, 11, and 12 are where the injury protection is being cemented. Earn every one.",
            harder: "Plate at your chest, 12 reps, full tempo. Weighted Nordics at 10-second eccentrics with a mid-range pause for 12 reps is one of the hardest hamstring protocols that exists. Your hamstrings are exceptional if you can complete this.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 35 reps · toe spread",
            rest: "10 sec",
            cue: "35 reps. The highest tibialis volume of the entire program. By rep 28 your anterior shin will be burning in a way you've never felt before. That burn is the tibialis being pushed beyond its previous capacity. Reps 29 through 35 are the ones that build the endurance buffer you need at mile 24.",
            harder: "Maximum band, 35 reps, full tempo. At this volume with maximum resistance, your tibialis is being pushed to its absolute ceiling. After 6 weeks of progressive loading, your shin is bulletproof.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "20 reps · 5 sec hold · both hip extensions simultaneously",
            rest: "10 sec",
            cue: "Raise both heels, hold 5 seconds, then extend both hips simultaneously — a slight glute squeeze while maintaining the wall sit and the calf raise. All three positions held at once. This is the most integrated posterior chain position in the program. Your soleus, glutes, and hip extensors all firing together.",
            harder: "Maximum resistance, both hip extensions simultaneous. The complete integrated posterior chain co-activation under maximum load is the peak of calf and glute training in this program. This is what powerful running feels like.",
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
            reps: "10 reps · immediate rebound · maximum height",
            rest: "15 sec",
            cue: "10 continuous box jumps at maximum height. No step-down, no pause — land and immediately go. By jump 7 your legs will be fatigued. Jumps 8, 9, and 10 are where reactive strength in fatigue is built — which is exactly the quality you need in the final miles of a race.",
            harder: "Higher box, 10 immediate rebounds. Reactive box jumps at maximum height for 10 continuous reps is elite plyometric training. Your tendons are loading and releasing at maximum capacity. This is where the most running-specific power is built.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "15 hops each leg · all directions · 2 sec stick",
            rest: "10 sec",
            cue: "15 hops, every direction. Your single-leg stability is being tested at its highest volume and directional variety. By hop 12 you will be fatigued. Perfect sticks through fatigue is the exact quality that prevents ankle sprains during the final miles of a race when your form starts to break down.",
            harder: "Maximum distance, all directions, onto raised surfaces. The combination of maximum hop distance, directional variety, and raised landing surface is the most demanding single-leg reactive stability stimulus in the program.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "45 meters · maximum flight time · sprint finish",
            rest: "15 sec",
            cue: "45 meters of maximum bounds, then transition into a 10-meter sprint at the end. The transition from bounding to sprinting trains your neuromuscular system to convert elastic power into running speed. This is the most running-specific plyometric sequence in the program. Bound to sprint. Explode.",
            harder: "Uphill bounds transitioning to flat sprint. The combination of uphill explosive power and flat-ground speed conversion is the most complete running power development stimulus possible.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound forward",
            rest: "15 sec",
            cue: "12 reps, maximum height, bound forward after every stick. The volume, height, and rebound sequence combined is the peak reactive training session of the first 6 weeks. Your lower leg is absorbing and redirecting force at maximum capacity. This is what makes legs feel indestructible.",
            harder: "Maximum height, maximum forward bound, add a second stick after the bound. The complete sequence — drop, stick, bound, stick — trains the entire reactive chain from impact to propulsion. This is elite.",
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
            cue: "15 reps. The highest single-leg RDL volume of the program. Every rep with rotation at the bottom. Your hamstrings, hip stabilizers, and rotational core are all being pushed to their absolute limit. This is the penultimate week. Everything you've built is being tested.",
            harder: "Maximum load, rotation, 15 reps. The combination of highest volume, longest pause, rotation, and maximum load is the most demanding hip hinge protocol in the program. Your posterior chain is at its strongest.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps · 3 bottom pulses",
            rest: "10 sec",
            cue: "Everything — 6-second lower, 3-second pause, 3 bottom pulses, 15 reps. This is the most demanding single-leg strength session of the program. Your quad and glute are being pushed to their absolute ceiling. After this session your legs should feel completely worked. That means you did it right.",
            harder: "Maximum load with all tempo and pulse elements. There is no harder version of this exercise than maximum load with a 6-second lower, 3-second pause, and 3 bottom pulses for 15 reps. This is the peak of the program.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "40 steps · continuous pulses · overhead reach · tempo",
            rest: "10 sec",
            cue: "Slow every step down — take 2 seconds per step. The slower tempo eliminates momentum entirely. Every step at this pace is pure glute medius work. 40 slow steps with continuous pulses and overhead reach is the most demanding lateral hip session of the program.",
            harder: "Maximum band, 2 seconds per step, overhead reach. At this tempo and resistance, 40 steps will take you well into glute medius failure. Complete every step. Your hip stability depends on it.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · abduction at top",
            rest: "10 sec",
            cue: "20 reps, 6-second lower, abduction at the top. This is the peak posterior chain session of the program. Your glute max and glute medius are both being loaded through their full ranges simultaneously. 20 reps at this standard is the hardest glute bridge protocol in the entire 8 weeks.",
            harder: "Maximum hip load with abduction at top. The loaded integrated glute session at maximum volume and load is the absolute ceiling of posterior chain training in this program. Your glutes have never been stronger.",
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
            cue: "Eyes closed this week. No visual input forces your proprioceptive system to manage your ankle stability completely internally. 25 reps, 6-second eccentric, bottom pause, eyes closed. Your ankle and Achilles are now being trained under the same sensory conditions as trail running or racing fatigue. This is advanced.",
            harder: "Maximum load, eyes closed. Weighted calf raises with eyes closed at maximum load is one of the most advanced ankle stability and tendon loading protocols possible. Your proprioceptive system and Achilles are both being pushed to their absolute limit.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "12 reps · 10 sec descent · pause · add lateral reach",
            rest: "15 sec",
            cue: "At the 90-degree pause, reach one arm out to the side — hold 1 second, return, continue the descent. The lateral reach destabilizes the position and forces your contralateral hip stabilizers to work while your hamstring is maximally loaded. This is the most complete Nordic variation in the program.",
            harder: "Plate at chest, lateral reach at 90 degrees. Weighted Nordics with a lateral reach at the hardest point in the range of motion is an advanced hamstring and hip stability stimulus. Exceptional.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 35 reps · single leg",
            rest: "10 sec",
            cue: "Single-leg tibialis raise this week — one foot raised, all the load on one tibialis. 35 reps at 4-second tempo. Your anterior shin is being loaded at double the intensity of the bilateral version. By rep 25 the single-leg tibialis will be burning intensely. Finish every rep.",
            harder: "Resistance band on single-leg version. Single-leg tibialis raises against resistance at 35 reps with 4-second tempo is the most advanced tibialis loading in the program. Your anterior shin is bulletproof.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "20 reps · 5 sec hold · integrated extensions · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed, all integrated positions. Your proprioceptive system is managing ankle, knee, and hip position simultaneously without visual input. This is exactly the sensory challenge your legs face during trail running, night running, and late-race fatigue. Train the system that keeps you upright.",
            harder: "Maximum resistance, eyes closed. At maximum load with no visual input, your proprioceptive system and integrated posterior chain are both at their peak demand. This is elite.",
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
            reps: "10 reps · rebound · maximum height · fatigued start",
            rest: "15 sec",
            cue: "Do 20 bodyweight squats immediately before starting your box jumps — no rest. The fatigued state forces your nervous system to recruit maximum power when your legs are already tired. This is race-day specificity — generating explosive power late in the game when you're fatigued.",
            harder: "Maximum height box, 10 rebounds, fatigued start. Explosive reactive jumping at maximum height when already fatigued is one of the most demanding and race-specific plyometric protocols. This is where championship legs are built.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "15 hops each leg · maximum distance · all directions",
            rest: "10 sec",
            cue: "Maximum distance every hop, every direction, 15 total per leg. Your single-leg reactive stability is being pushed to its highest volume and intensity simultaneously. Perfect sticks at maximum distance in all directions is the peak of your reactive stability training.",
            harder: "Maximum distance onto raised surfaces, all directions. Every variable is maxed simultaneously — distance, height, direction, and volume. This is the hardest reactive stability session in the program.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "50 meters · maximum flight · sprint finish",
            rest: "15 sec",
            cue: "50 meters of maximum bounds. The longest distance of the program. Every stride is maximum power, maximum flight time, maximum hip extension. Transition to a sprint at the end. 50 meters of bounding followed by sprinting generates more running-specific power than any other training stimulus.",
            harder: "Uphill bounds, 50 meters, sprint to flat at the end. The hill-to-flat transition trains your legs to convert uphill power into flat-ground speed. This is what running a fast last mile feels like. Build it.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound · sprint",
            rest: "15 sec",
            cue: "Drop, stick, bound forward, then immediately sprint 10 meters. The full sequence — reactive absorption, propulsion, and speed — is the most complete running-power chain in the program. Every rep is a simulation of the explosive demands of racing. Do not slow down on the sprint.",
            harder: "Maximum drop height, maximum bound, maximum sprint. The complete reactive power chain at maximum capacity is the peak of explosive training in this program. Your legs are ready for anything.",
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
            cue: "Everything. Eyes closed. 15 reps. 8 weeks of hamstring, hip stabilizer, and rotational strength being tested simultaneously without visual input. Your proprioceptive system is managing the entire movement. This is what strong legs feel like in the dark miles of a race. Own it.",
            harder: "Maximum load, eyes closed, rotation, 15 reps. The final test of your posterior chain. There is no harder version of this exercise. Complete every rep perfectly and you have built something exceptional.",
          },
          {
            name: "Bulgarian Split Squat",
            sets: 2,
            reps: "6 sec lower · 3 sec pause · 15 reps · 3 bottom pulses · to failure",
            rest: "10 sec",
            cue: "After your 15 reps with the full protocol — drop the weights and go to absolute failure with bodyweight. The drop set after 15 loaded reps at this tempo will take you completely to the limit. Your quad is being asked to produce force after it's already exhausted. This is the final session. Leave everything.",
            harder: "Maximum load for 15, drop set to failure, add resistance band above knees. The complete stimulus — maximum load, drop set, resistance band — is the most demanding single-leg quad protocol in the program. Your legs will feel this for days. Good.",
          },
          {
            name: "Lateral Band Walk",
            sets: 2,
            reps: "45 steps · 2 sec per step · continuous pulses · overhead",
            rest: "10 sec",
            cue: "45 steps. The highest volume of the program. 2 seconds per step, continuous pulses, overhead reach. This is 90 seconds of continuous glute medius loading per direction. Your lateral hip is being taken to its absolute limit. Every single step is deliberate. Every pulse counts.",
            harder: "Maximum band, 45 steps, 2 seconds per step. At maximum resistance with the slowest tempo and highest volume, your glute medius will fail before step 45. Push through it. The final steps are the ones that build the final layer of hip stability.",
          },
          {
            name: "Single-Leg Glute Bridge",
            sets: 2,
            reps: "2 sec up · 6 sec down · 20 reps · abduction · eyes closed",
            rest: "10 sec",
            cue: "Eyes closed, abduction at the top, 6-second lower, 20 reps. Your glute max, glute medius, and hamstring are all working simultaneously without visual input. This is what your glutes are doing every stride of every run — managing hip position in three dimensions without thinking about it. Now train it that way.",
            harder: "Maximum load, eyes closed, abduction. The final posterior chain session. Maximum load, maximum complexity, maximum volume. Your glutes have been trained for 8 weeks. This is the final proof of everything you built.",
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
            reps: "3 sec up · 6 sec down · 25 reps · bottom pause · eyes closed · uneven surface",
            rest: "10 sec",
            cue: "Stand on a folded towel or slightly uneven surface, eyes closed. Every variable is maximized — load, tempo, volume, and proprioceptive challenge. Your Achilles, soleus, and ankle stabilizers are all being pushed simultaneously to their absolute limit. This is what trail running demands. You are ready for it.",
            harder: "Maximum load on uneven surface, eyes closed. The final Achilles and calf loading session. Every variable at its maximum. If you can complete 25 reps with perfect tempo under load on an uneven surface with eyes closed, your calves and Achilles are genuinely elite.",
          },
          {
            name: "Nordic Hamstring Curl",
            sets: 2,
            reps: "12 reps · 10 sec descent · pause · lateral reach · weighted",
            rest: "15 sec",
            cue: "The final Nordic session. Everything — 10-second descent, 90-degree pause, lateral reach, plate at the chest. This is the hardest hamstring exercise in the program and it is being performed at its most complex. 8 weeks of hamstring work has led to this. Earn every rep.",
            harder: "Heavier plate, 12 reps, full protocol. The final test of your hamstring eccentric strength. If you can complete 12 reps with a plate at your chest, a 10-second descent, a 90-degree pause, and a lateral reach — your hamstrings are bulletproof. That is the goal of this program.",
          },
          {
            name: "Tibialis Raise",
            sets: 2,
            reps: "4 sec up · 4 sec down · 35 reps · single leg · uneven surface",
            rest: "10 sec",
            cue: "Single-leg tibialis raise on a folded towel or slightly uneven surface. Your tibialis is managing both dorsiflexion force and ankle stability simultaneously. This is the most functional tibialis training in the program — the exact conditions your anterior shin faces on trails and uneven roads.",
            harder: "Resistance band, single leg, uneven surface. At maximum resistance with stability challenge, your tibialis and ankle stabilizers are being trained in the most complete way possible. After 8 weeks of this, shin splints are a memory.",
          },
          {
            name: "Wall Sit Calf Raise",
            sets: 2,
            reps: "25 reps · 5 sec hold · integrated extensions · eyes closed · uneven surface",
            rest: "10 sec",
            cue: "The final session of the program. 25 reps, 5-second holds, integrated glute extensions, eyes closed, on a slightly uneven surface. Every system is being tested simultaneously — soleus, glute, hip stability, proprioception. This is what 8 weeks of lower body work built you for. Finish it.",
            harder: "Maximum resistance, all variables. The complete integrated posterior chain stimulus at maximum complexity and load is the final test of this program. Complete every rep. Your legs are unbreakable.",
          },
        ],
      },
      {
        session: "C",
        focus: "Explosive Power — Final Test",
        exercises: [
          {
            name: "Box Jump",
            sets: 2,
            reps: "12 reps · rebound · maximum height · fatigued start",
            rest: "10 sec",
            cue: "30 bodyweight squats immediately before. Then 12 continuous maximum-height rebounds. This is the final explosive session. Your legs will be screaming. Jump anyway. Explosive power in fatigue is what wins races. You have trained for this for 8 weeks. Show what you built.",
            harder: "Maximum height, 12 rebounds, fatigued start. The final box jump session at maximum complexity and volume. Reactive power in fatigue at maximum height is the hardest plyometric stimulus in the program. This is the ceiling.",
          },
          {
            name: "Single-Leg Hop and Stick",
            sets: 2,
            reps: "15 hops each leg · maximum distance · all directions · raised surface",
            rest: "10 sec",
            cue: "Maximum distance, all directions, onto a raised surface, 15 hops each leg. Every variable at maximum. This is the final reactive stability test of the program. Your ankle stabilizers, glute medius, and quad are all being demanded simultaneously. Perfect sticks. No excuses.",
            harder: "Maximum distance onto maximum height surfaces, all directions. The final reactive stability test at its highest demand. Your legs are capable of this. 8 weeks of training said so.",
          },
          {
            name: "Bounding",
            sets: 2,
            reps: "50 meters · maximum flight · sprint · uphill if possible",
            rest: "15 sec",
            cue: "50 meters of maximum bounds. Sprint at the end. Uphill if you have it. This is the final bounding session and it is the most complete running-power stimulus of the program. Every stride is the culmination of 8 weeks of explosive training. Make it count. Bound like you mean it.",
            harder: "Uphill bounds, 50 meters, sprint to flat at maximum speed. The most running-specific explosive protocol at its absolute peak. Your legs are stronger than when you started. Prove it on this final session.",
          },
          {
            name: "Depth Drop to Stick",
            sets: 2,
            reps: "12 reps each leg · max height · bound · sprint · stick",
            rest: "10 sec",
            cue: "The final movement of the program. Drop, stick, bound, sprint, stick. The complete reactive power chain at maximum capacity for 12 reps each leg. This is the final test of everything — your Achilles, your glutes, your hamstrings, your stabilizers, your power. You built all of it. Use all of it. Finish strong.",
            harder: "Maximum height, maximum bound, maximum sprint, maximum distance stick. Every variable at its peak on the final movement of the final session of the program. Your legs are unbreakable. This is the proof.",
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
