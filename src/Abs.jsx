import { useState } from "react";

// SVG silhouette illustrations for each exercise
const ExerciseIllustration = ({ name }) => {
  const svgs = {
    "Dead Bug": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Body on floor */}
        <line x1="60" y1="75" x2="140" y2="75" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="55" cy="70" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Extended arm up */}
        <line x1="80" y1="75" x2="80" y2="35" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="35" x2="95" y2="20" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Extended leg down-diagonal */}
        <line x1="120" y1="75" x2="155" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Other arm down */}
        <line x1="80" y1="75" x2="70" y2="95" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Other leg bent */}
        <line x1="120" y1="75" x2="115" y2="55" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="115" y1="55" x2="130" y2="45" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Floor line */}
        <line x1="30" y1="108" x2="170" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Hollow Body Hold": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Curved hollow body shape */}
        <path d="M 30 85 Q 100 55 170 80" fill="none" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="25" cy="80" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms overhead */}
        <line x1="35" y1="78" x2="15" y2="58" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="15" y1="58" x2="10" y2="42" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Legs extended low */}
        <line x1="155" y1="80" x2="180" y2="88" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="5" y1="108" x2="195" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "V-Up": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* V shape - torso up, legs up meeting in middle */}
        <line x1="100" y1="55" x2="55" y2="95" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="55" x2="145" y2="90" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="47" cy="88" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms reaching toward feet */}
        <line x1="58" y1="92" x2="90" y2="70" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="90" y1="70" x2="118" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Ab Wheel Rollout": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Extended body */}
        <line x1="50" y1="85" x2="155" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="160" cy="62" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms extended to wheel */}
        <line x1="50" y1="85" x2="35" y2="90" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Wheel */}
        <circle cx="28" cy="95" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="22" y1="95" x2="34" y2="95" stroke="#7a9e7e" strokeWidth="2"/>
        {/* Knees on floor */}
        <circle cx="120" cy="95" r="5" fill="#7a9e7e" opacity="0.5"/>
        <circle cx="135" cy="96" r="5" fill="#7a9e7e" opacity="0.5"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Hanging Knee Raise": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bar */}
        <line x1="60" y1="15" x2="140" y2="15" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms up */}
        <line x1="90" y1="15" x2="85" y2="35" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="15" x2="115" y2="35" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Torso */}
        <line x1="85" y1="35" x2="100" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="115" y1="35" x2="100" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="100" cy="28" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Torso down */}
        <line x1="100" y1="38" x2="100" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Knees raised */}
        <line x1="100" y1="65" x2="82" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="82" y1="80" x2="88" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="65" x2="118" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="118" y1="80" x2="112" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    "Copenhagen Plank": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bench */}
        <rect x="130" y="65" width="55" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="140" y1="73" x2="140" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="175" y1="73" x2="175" y2="108" stroke="#333" strokeWidth="3"/>
        {/* Body - side plank */}
        <line x1="30" y1="90" x2="150" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="22" cy="88" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Support arm */}
        <line x1="55" y1="88" x2="45" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="43" cy="103" r="4" fill="#7a9e7e" opacity="0.6"/>
        {/* Top leg on bench */}
        <line x1="135" y1="67" x2="152" y2="63" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Bottom leg hanging */}
        <line x1="130" y1="72" x2="128" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Pallof Press Hold": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Band anchor */}
        <rect x="10" y="45" width="8" height="30" rx="2" fill="#555"/>
        {/* Band */}
        <path d="M 18 60 Q 60 55 85 65" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Standing figure */}
        <circle cx="110" cy="35" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="110" y1="45" x2="110" y2="80" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms extended pressing out */}
        <line x1="110" y1="58" x2="85" y2="63" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="58" x2="85" y2="63" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Hands at press point */}
        <circle cx="83" cy="63" r="4" fill="#7a9e7e" opacity="0.7"/>
        {/* Legs */}
        <line x1="110" y1="80" x2="95" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="80" x2="125" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Bicycle Crunch": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Body on floor, crunch position */}
        <line x1="55" y1="80" x2="120" y2="70" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head lifted */}
        <circle cx="50" cy="72" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Hands behind head */}
        <line x1="58" y1="68" x2="70" y2="58" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="58" y1="68" x2="42" y2="58" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Elbow to knee */}
        <line x1="42" y1="58" x2="105" y2="55" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="3,2"/>
        {/* Extended leg */}
        <line x1="120" y1="70" x2="165" y2="65" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Bent knee up */}
        <line x1="120" y1="70" x2="105" y2="50" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="105" y1="50" x2="115" y2="40" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Tuck Crunch": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Crunched body */}
        <line x1="55" y1="85" x2="110" y2="70" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head lifted */}
        <circle cx="47" cy="80" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Knees tucked to chest */}
        <line x1="110" y1="70" x2="120" y2="52" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="120" y1="52" x2="105" y2="42" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="70" x2="130" y2="55" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="130" y1="55" x2="115" y2="45" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Hands behind head */}
        <line x1="56" y1="76" x2="68" y2="65" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="56" y1="76" x2="40" y2="68" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "L-Sit Hold": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Parallel bars */}
        <rect x="55" y="70" width="8" height="38" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <rect x="137" y="70" width="8" height="38" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="55" y1="72" x2="63" y2="72" stroke="#555" strokeWidth="2"/>
        <line x1="137" y1="72" x2="145" y2="72" stroke="#555" strokeWidth="2"/>
        {/* Body - pressed up, legs extended */}
        <circle cx="100" cy="42" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="52" x2="100" y2="72" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms on bars */}
        <line x1="100" y1="62" x2="63" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="62" x2="137" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Legs extended parallel */}
        <line x1="100" y1="72" x2="155" y2="72" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Jackknife": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Meeting at center - jackknife peak */}
        <line x1="100" y1="60" x2="50" y2="90" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="60" x2="150" y2="88" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="42" cy="85" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms reaching up */}
        <line x1="52" y1="88" x2="80" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="68" x2="100" y2="60" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Dragon Flag Negative": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bench */}
        <rect x="25" y="85" width="150" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="40" y1="93" x2="40" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="160" y1="93" x2="160" y2="108" stroke="#333" strokeWidth="3"/>
        {/* Body angled - lowering */}
        <line x1="45" y1="82" x2="155" y2="52" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head gripping bench */}
        <circle cx="48" cy="75" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms gripping */}
        <line x1="48" y1="75" x2="38" y2="82" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="38" y1="82" x2="30" y2="82" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Side Plank with Thread": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Body in side plank */}
        <line x1="35" y1="90" x2="145" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="27" cy="87" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Support arm down */}
        <line x1="60" y1="88" x2="50" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="48" cy="103" r="4" fill="#7a9e7e" opacity="0.6"/>
        {/* Top arm threading under */}
        <path d="M 110 68 Q 90 78 75 85" fill="none" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Stacked feet */}
        <line x1="140" y1="67" x2="155" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Windmill": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Standing figure hinged laterally */}
        <circle cx="100" cy="25" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arm up */}
        <line x1="100" y1="35" x2="115" y2="10" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="117" cy="7" r="4" fill="#7a9e7e" opacity="0.6"/>
        {/* Torso hinged */}
        <line x1="100" y1="35" x2="75" y2="68" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arm reaching down */}
        <line x1="75" y1="68" x2="58" y2="85" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Wide legs */}
        <line x1="75" y1="68" x2="50" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="75" y1="68" x2="120" y2="90" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Russian Twist": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Seated lean-back position */}
        <line x1="80" y1="95" x2="115" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="110" cy="58" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms rotated to side */}
        <line x1="100" y1="72" x2="65" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="62" cy="61" r="5" fill="#7a9e7e" opacity="0.6"/>
        {/* Feet elevated */}
        <line x1="80" y1="95" x2="65" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="65" y1="80" x2="52" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="95" x2="78" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="75" x2="65" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Dead Bug with Rotation": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Same as dead bug but with rotation indicator */}
        <line x1="60" y1="78" x2="140" y2="75" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="52" cy="73" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="85" y1="76" x2="85" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="85" y1="38" x2="100" y2="22" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="120" y1="75" x2="155" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Rotation arc indicator */}
        <path d="M 90 65 Q 105 55 118 65" fill="none" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="118,65 112,60 115,68" fill="#7a9e7e" opacity="0.7"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Stir the Pot": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Stability ball */}
        <circle cx="80" cy="88" r="22" fill="none" stroke="#555" strokeWidth="2"/>
        {/* Forearms on ball */}
        <line x1="65" y1="70" x2="95" y2="70" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Plank body */}
        <line x1="80" y1="70" x2="160" y2="60" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Head */}
        <circle cx="165" cy="57" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Toes */}
        <line x1="155" y1="62" x2="168" y2="75" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Circle motion arrow */}
        <path d="M 70 65 Q 55 75 65 88 Q 75 100 88 92" fill="none" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="88,92 80,90 88,85" fill="#7a9e7e" opacity="0.7"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Hanging Knee Raise to Extension": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bar */}
        <line x1="60" y1="12" x2="140" y2="12" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="88" y1="12" x2="85" y2="30" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="112" y1="12" x2="115" y2="30" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="24" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="33" x2="100" y2="60" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Knee up one side, leg extended other */}
        <line x1="100" y1="60" x2="82" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="82" y1="75" x2="90" y2="90" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="60" x2="118" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="118" y1="72" x2="138" y2="82" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    "Reverse Crunch": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Body on floor */}
        <line x1="55" y1="82" x2="130" y2="78" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="47" cy="78" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms flat */}
        <line x1="80" y1="80" x2="68" y2="95" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="80" y1="80" x2="95" y2="95" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Hips raised, knees to chest */}
        <line x1="130" y1="78" x2="135" y2="60" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="135" y1="60" x2="118" y2="48" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="130" y1="78" x2="148" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="148" y1="62" x2="132" y2="50" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Hanging Straight-Leg Raise": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bar */}
        <line x1="60" y1="12" x2="140" y2="12" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="88" y1="12" x2="85" y2="30" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="112" y1="12" x2="115" y2="30" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="24" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="33" x2="100" y2="60" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Straight legs raised to parallel */}
        <line x1="100" y1="60" x2="78" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="62" x2="58" y2="64" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="60" x2="122" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="122" y1="62" x2="142" y2="64" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    "Copenhagen Plank with Hip Dip": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bench */}
        <rect x="130" y="58" width="55" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="140" y1="66" x2="140" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="175" y1="66" x2="175" y2="108" stroke="#333" strokeWidth="3"/>
        {/* Body - hip dipped toward floor */}
        <path d="M 35 100 Q 85 110 148 63" fill="none" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="27" cy="97" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="55" y1="102" x2="45" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="43" cy="108" r="3" fill="#7a9e7e" opacity="0.6"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Pallof Press — Kneeling": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Band anchor */}
        <rect x="10" y="40" width="8" height="30" rx="2" fill="#555"/>
        <path d="M 18 55 Q 60 50 82 60" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Kneeling figure */}
        <circle cx="110" cy="32" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="110" y1="42" x2="110" y2="72" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms extended */}
        <line x1="110" y1="55" x2="82" y2="58" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="80" cy="59" r="4" fill="#7a9e7e" opacity="0.7"/>
        {/* Kneeling legs */}
        <line x1="110" y1="72" x2="90" y2="85" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="90" y1="85" x2="82" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="72" x2="130" y2="85" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="130" y1="85" x2="138" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Toe Touch Crunch": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Legs straight up */}
        <line x1="88" y1="88" x2="85" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="85" y1="38" x2="82" y2="20" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="108" y1="88" x2="112" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="112" y1="38" x2="115" y2="20" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Body crunched up */}
        <line x1="50" y1="90" x2="100" y2="88" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="42" cy="86" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms reaching up */}
        <line x1="65" y1="88" x2="88" y2="55" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="88" y1="55" x2="95" y2="38" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Pike to Plank": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Pike position - hips high */}
        <line x1="45" y1="95" x2="100" y2="48" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="48" x2="158" y2="80" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Hands on floor */}
        <circle cx="42" cy="97" r="4" fill="#7a9e7e" opacity="0.6"/>
        <circle cx="55" cy="100" r="4" fill="#7a9e7e" opacity="0.6"/>
        {/* Head */}
        <circle cx="42" cy="88" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Toes */}
        <line x1="155" y1="82" x2="168" y2="88" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Seated Knee Tuck": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bench edge */}
        <rect x="95" y="75" width="80" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        {/* Seated figure leaned back */}
        <circle cx="145" cy="42" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="145" y1="52" x2="135" y2="75" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Hands gripping bench */}
        <line x1="135" y1="65" x2="120" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="135" y1="65" x2="150" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Knees tucked up */}
        <line x1="135" y1="75" x2="110" y2="58" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="58" x2="100" y2="45" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="135" y1="75" x2="120" y2="58" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="120" y1="58" x2="108" y2="47" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Weighted Sit-Up": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Sit-up position - halfway up */}
        <line x1="60" y1="95" x2="120" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="125" cy="58" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Weight plate at chest */}
        <rect x="108" y="62" width="14" height="10" rx="2" fill="none" stroke="#7a9e7e" strokeWidth="2"/>
        {/* Bent knees anchored */}
        <line x1="60" y1="95" x2="50" y2="78" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="78" x2="30" y2="88" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="60" y1="95" x2="70" y2="78" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="70" y1="78" x2="50" y2="90" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Side Plank with Row": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Band anchor front */}
        <rect x="10" y="55" width="8" height="20" rx="2" fill="#555"/>
        <path d="M 18 65 Q 55 60 85 68" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Side plank body */}
        <line x1="40" y1="90" x2="150" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="32" cy="87" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Support elbow */}
        <line x1="65" y1="88" x2="55" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="53" cy="103" r="4" fill="#7a9e7e" opacity="0.6"/>
        {/* Rowing arm pulled back */}
        <line x1="105" y1="73" x2="85" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="105" y1="73" x2="120" y2="60" stroke="#7a9e7e" strokeWidth="2.5" strokeDasharray="3,2" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Pallof Press — Walking": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Band anchor */}
        <rect x="10" y="40" width="8" height="30" rx="2" fill="#555"/>
        <path d="M 18 55 Q 50 50 75 58" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Walking figure arms extended */}
        <circle cx="110" cy="32" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="110" y1="42" x2="110" y2="75" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="110" y1="55" x2="75" y2="57" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="73" cy="57" r="4" fill="#7a9e7e" opacity="0.7"/>
        {/* Walking legs */}
        <line x1="110" y1="75" x2="95" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="110" y1="75" x2="128" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="128" y1="95" x2="140" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Motion arrows */}
        <polygon points="165,55 155,50 155,60" fill="#7a9e7e" opacity="0.5"/>
        <line x1="140" y1="55" x2="162" y2="55" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Bicycle Crunch — Weighted": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Same as bicycle crunch with weight indicator */}
        <line x1="55" y1="80" x2="120" y2="70" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="47" cy="75" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Weight behind head */}
        <rect x="52" y="60" width="16" height="10" rx="2" fill="none" stroke="#7a9e7e" strokeWidth="2"/>
        <line x1="52" y1="68" x2="42" y2="60" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68" y1="68" x2="75" y2="60" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Extended leg */}
        <line x1="120" y1="70" x2="162" y2="65" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Bent knee */}
        <line x1="120" y1="70" x2="107" y2="50" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="107" y1="50" x2="118" y2="40" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Hollow Body Rocks": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Hollow body curved shape rocking */}
        <path d="M 25 88 Q 100 52 175 82" fill="none" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="20" cy="83" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="28" y1="80" x2="15" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="15" y1="62" x2="10" y2="46" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Motion arc */}
        <path d="M 80 55 Q 100 48 120 55" fill="none" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="120,55 113,50 114,58" fill="#7a9e7e" opacity="0.6"/>
        {/* Floor */}
        <line x1="5" y1="108" x2="195" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Toes to Bar": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Bar */}
        <line x1="55" y1="10" x2="145" y2="10" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="85" y1="10" x2="82" y2="28" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="115" y1="10" x2="118" y2="28" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="22" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="31" x2="100" y2="55" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Legs raised to bar */}
        <line x1="100" y1="55" x2="82" y2="25" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="82" y1="25" x2="75" y2="12" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="55" x2="118" y2="25" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="118" y1="25" x2="125" y2="12" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    "V-Up to Tuck": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* V-up left side */}
        <line x1="45" y1="88" x2="78" y2="55" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="55" x2="108" y2="70" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="38" cy="84" r="8" fill="none" stroke="#7a9e7e" strokeWidth="2.5"/>
        {/* Divider */}
        <line x1="120" y1="20" x2="120" y2="105" stroke="#333" strokeWidth="1" strokeDasharray="4,3"/>
        {/* Tuck crunch right side */}
        <line x1="135" y1="88" x2="165" y2="78" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="128" cy="84" r="8" fill="none" stroke="#7a9e7e" strokeWidth="2.5"/>
        <line x1="165" y1="78" x2="172" y2="60" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="172" y1="60" x2="158" y2="50" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="165" y1="78" x2="178" y2="63" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="178" y1="63" x2="165" y2="52" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Ab Wheel — Standing": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Extended nearly parallel to floor */}
        <line x1="50" y1="80" x2="158" y2="55" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="163" cy="52" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        {/* Arms to wheel */}
        <line x1="50" y1="80" x2="35" y2="85" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Wheel */}
        <circle cx="27" cy="90" r="11" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="20" y1="90" x2="34" y2="90" stroke="#7a9e7e" strokeWidth="2"/>
        {/* Feet on floor */}
        <line x1="148" y1="58" x2="158" y2="75" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="158" y1="75" x2="162" y2="90" stroke="#7a9e7e" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Copenhagen Plank — Full Protocol": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Same as Copenhagen plank */}
        <rect x="130" y="62" width="55" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="140" y1="70" x2="140" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="175" y1="70" x2="175" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="30" y1="90" x2="150" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="22" cy="87" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="55" y1="88" x2="45" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="43" cy="103" r="4" fill="#7a9e7e" opacity="0.6"/>
        <line x1="135" y1="67" x2="152" y2="63" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="130" y1="72" x2="128" y2="95" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Hip dip arrow */}
        <path d="M 80 92 Q 82 102 80 108" fill="none" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="80,108 76,100 84,100" fill="#7a9e7e" opacity="0.6"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Half-Kneeling Cable Chop": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Cable anchor high */}
        <rect x="172" y="8" width="10" height="25" rx="2" fill="#555"/>
        <path d="M 172 20 Q 140 30 118 48" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Half kneeling figure */}
        <circle cx="100" cy="28" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="38" x2="100" y2="68" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms chopping diagonal */}
        <line x1="100" y1="50" x2="118" y2="40" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="50" x2="82" y2="72" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="3,2" strokeLinecap="round"/>
        {/* Kneeling legs */}
        <line x1="100" y1="68" x2="78" y2="82" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="82" x2="68" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="68" x2="120" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="120" y1="80" x2="128" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Pallof Press — Single Leg": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        {/* Band anchor */}
        <rect x="10" y="40" width="8" height="30" rx="2" fill="#555"/>
        <path d="M 18 55 Q 55 50 78 58" fill="none" stroke="#7a9e7e" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Single leg figure */}
        <circle cx="112" cy="30" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="112" y1="40" x2="112" y2="72" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="112" y1="55" x2="78" y2="57" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="76" cy="57" r="4" fill="#7a9e7e" opacity="0.7"/>
        {/* One leg down */}
        <line x1="112" y1="72" x2="108" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Other leg lifted */}
        <line x1="112" y1="72" x2="132" y2="85" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="132" y1="85" x2="148" y2="78" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Balance indicator */}
        <circle cx="108" cy="108" r="4" fill="#7a9e7e" opacity="0.4"/>
        {/* Floor */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Russian Twist — Weighted": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <line x1="80" y1="95" x2="115" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="110" cy="58" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="72" x2="65" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Weight plate */}
        <rect x="52" y="57" width="12" height="10" rx="2" fill="none" stroke="#7a9e7e" strokeWidth="2"/>
        <line x1="80" y1="95" x2="65" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="65" y1="80" x2="52" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="95" x2="78" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="75" x2="65" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Toes to Bar with Rotation": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <line x1="55" y1="10" x2="145" y2="10" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="85" y1="10" x2="82" y2="28" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="115" y1="10" x2="118" y2="28" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="100" cy="22" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="31" x2="100" y2="52" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        {/* Legs rotated to side at top */}
        <line x1="100" y1="52" x2="78" y2="18" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="18" x2="68" y2="10" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="52" x2="88" y2="22" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="88" y1="22" x2="80" y2="13" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Rotation arc */}
        <path d="M 78 30 Q 95 25 108 32" fill="none" stroke="#7a9e7e" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="108,32 100,28 103,36" fill="#7a9e7e" opacity="0.6"/>
      </svg>
    ),
    "Copenhagen Plank — Full Destruction": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="130" y="58" width="55" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
        <line x1="140" y1="66" x2="140" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="175" y1="66" x2="175" y2="108" stroke="#333" strokeWidth="3"/>
        <line x1="30" y1="88" x2="148" y2="63" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="22" cy="85" r="9" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="55" y1="86" x2="45" y2="100" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="43" cy="103" r="4" fill="#7a9e7e" opacity="0.6"/>
        <line x1="133" y1="65" x2="148" y2="61" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="130" y1="70" x2="128" y2="92" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Half-Kneeling Cable Chop — Heavy": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="172" y="8" width="10" height="25" rx="2" fill="#555"/>
        <path d="M 172 20 Q 140 30 115 50" fill="none" stroke="#7a9e7e" strokeWidth="2.5" strokeDasharray="4,2"/>
        <circle cx="98" cy="28" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="98" y1="38" x2="98" y2="68" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <line x1="98" y1="50" x2="115" y2="42" stroke="#7a9e7e" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="115" y1="42" x2="128" y2="35" stroke="#7a9e7e" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="98" y1="68" x2="76" y2="82" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="76" y1="82" x2="66" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="98" y1="68" x2="118" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="118" y1="80" x2="126" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
    "Russian Twist — Final Protocol": (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <line x1="80" y1="95" x2="115" y2="65" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="110" cy="58" r="10" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
        <line x1="100" y1="72" x2="135" y2="62" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <rect x="135" y="57" width="14" height="10" rx="2" fill="none" stroke="#7a9e7e" strokeWidth="2.5"/>
        <line x1="80" y1="95" x2="65" y2="80" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="65" y1="80" x2="52" y2="72" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="95" x2="78" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="75" x2="65" y2="68" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
        {/* Intensity dots */}
        <circle cx="160" cy="35" r="3" fill="#7a9e7e" opacity="0.8"/>
        <circle cx="170" cy="28" r="3" fill="#7a9e7e" opacity="0.6"/>
        <circle cx="180" cy="22" r="3" fill="#7a9e7e" opacity="0.4"/>
        <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
      </svg>
    ),
  };

  const fallback = (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="35" r="12" fill="none" stroke="#7a9e7e" strokeWidth="3"/>
      <line x1="100" y1="47" x2="100" y2="85" stroke="#7a9e7e" strokeWidth="4" strokeLinecap="round"/>
      <line x1="100" y1="62" x2="75" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="62" x2="125" y2="75" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="85" x2="82" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      <line x1="100" y1="85" x2="118" y2="108" stroke="#7a9e7e" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="108" x2="190" y2="108" stroke="#444" strokeWidth="1.5"/>
    </svg>
  );

  return (
    <div style={{ width: "100%", background: "#111", borderRadius: 8, aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, padding: "12px 20px" }}>
      <div style={{ width: "100%", maxHeight: "100%" }}>
        {svgs[name] || fallback}
      </div>
    </div>
  );
};

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
                <ExerciseIllustration name={ex.name} />

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
