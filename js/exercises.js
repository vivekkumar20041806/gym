// ======================
// MUSCLE IMAGE MAP
// ======================
const muscleImageMap = {
    "Arms": "Arms",
    "Back": "Back",
    "Chest": "Chest",
    "Core": "Core",
    "Glutes": "Glutes",
    "Legs": "Legs",
    "Shoulders": "Shoulders"
};

// ======================
// CENTRAL FOLDER MAPPING
// ======================
const folderMapping = {
    "Body Weight": {
        "Chest": "3.Chest",
        "Arms": "3.Arms",
        "Core": "5.Abs",
        "Legs": "5.Hamstrings",
        "Back": "8.Lats",
        "Glutes": "4.Glutes",
        "Shoulders": "12.Shoulders"
    },
    "Dumbbell": {
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "5.Abs",
        "Legs": "5.Hamstrings",
        "Back": "8.Lats",
        "Glutes": "4.Glutes",
        "Shoulders": "12.Shoulders"
    },

    "Barbell": {
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "5.Abs",
        "Legs": "5.Hamstrings",
        "Back": "8.Lats",
        "Glutes": "4.Glutes",
        "Shoulders": "12.Shoulders"
}};

// ======================
// EXERCISES DATA
// ======================
const exercisesData = {
  "Body Weight": {
    "Arms": {
      
      "Biceps": [
        { name: "Bench Curl", img: "BenchCurl.webp", vod: "../data/Dumbbell/Arms/BenchCurl.mp4", desc: "Classic biceps builder." },
        { name: "Hammer Curl", img: "HammerCurl.webp", vod: "../data/Dumbbell/Arms/HammerCurl.mp4", desc: "Biceps & brachialis focus." },
        { name: "Concentration Curl", img: "ConcentrationCurl.webp", vod: "../data/Dumbbell/Arms/ConcentrationCurl.mp4", desc: "Isolates biceps." },
        { name: "Incline Dumbbell Curl", img: "InclineCurl.webp", vod: "../data/Dumbbell/Arms/InclineCurl.mp4", desc: "Stretch & peak contraction." }
      ],

      "Triceps": [
        { name: "Triceps Kickback", img: "TricepsKickback.webp", vod: "../data/Dumbbell/Arms/TricepsKickback.mp4", desc: "Isolates triceps." },
        { name: "Skull Crusher", img: "SkullCrusher.webp", vod: "../data/Dumbbell/Arms/SkullCrusher.mp4", desc: "Long head emphasis." },
        { name: "Overhead Dumbbell Extension", img: "OverheadExt.webp", vod: "../data/Dumbbell/Arms/OverheadExt.mp4", desc: "Great for long head." },
        { name: "Bench Dips", img: "BenchDips.webp", vod: "../data/Dumbbell/Arms/BenchDips.mp4", desc: "Bodyweight finisher." }
      ],

      "Forearms": [
        { name: "Wrist Curl", img: "WristCurl.webp", vod: "../data/Dumbbell/Arms/WristCurl.mp4", desc: "Forearm flexors." },
        { name: "Reverse Wrist Curl", img: "ReverseWristCurl.webp", vod: "../data/Dumbbell/Arms/ReverseWristCurl.mp4", desc: "Forearm extensors." },
        { name: "Farmer’s Carry", img: "FarmersCarry.webp", vod: "../data/Dumbbell/Arms/FarmersCarry.mp4", desc: "Grip & stability." },
        { name: "Dumbbell Reverse Curl", img: "ReverseCurl.webp", vod: "../data/Dumbbell/Arms/ReverseCurl.mp4", desc: "Combo move for biceps & forearms." }
      ]
      
    },


// ==================== BACK ====================
  "Back": {
    "All": [
      { name: "Bent Over Row", img: "BentOverRow.webp", vod: "../data/Dumbbell/Back/BentOverRow.mp4", desc: "Targets lats & traps." },
      { name: "Single Arm Row", img: "SingleArmRow.webp", vod: "../data/Dumbbell/Back/SingleArmRow.mp4", desc: "Isolates each side of the back." }
    ],
    "Lats": [
      { name: "Lat Pullover", img: "LatPullover.webp", vod: "../data/Dumbbell/Back/LatPullover.mp4", desc: "Focus on lats." },
      { name: "Bent Over Row", img: "BentOverRow.webp", vod: "../data/Dumbbell/Back/BentOverRow.mp4", desc: "Strengthens lats & traps." }
    ],
    "Traps": [
      { name: "Shrugs", img: "Shrugs.webp", vod: "../data/Dumbbell/Back/Shrugs.mp4", desc: "Upper traps." },
      { name: "Upright Row", img: "UprightRow.webp", vod: "../data/Dumbbell/Back/UprightRow.mp4", desc: "Traps & shoulders." }
    ],
    "Rhomboids": [
      { name: "Reverse Fly", img: "ReverseFly.webp", vod: "../data/Dumbbell/Back/ReverseFly.mp4", desc: "Rhomboid focus." },
      { name: "Face Pull", img: "FacePull.webp", vod: "../data/Dumbbell/Back/FacePull.mp4", desc: "Mid back & posture." }
    ]
  },

  // ==================== CHEST ====================
  "Chest": {
    "All": [
      { name: "Flat Dumbbell Press", img: "FlatPress.webp", vod: "../data/Dumbbell/Chest/FlatPress.mp4", desc: "Overall chest." },
      { name: "Incline Dumbbell Press", img: "InclinePress.webp", vod: "../data/Dumbbell/Chest/InclinePress.mp4", desc: "Upper chest." }
    ],
    "Upper Chest": [
      { name: "Incline Dumbbell Press", img: "InclinePress.webp", vod: "../data/Dumbbell/Chest/InclinePress.mp4", desc: "Upper chest." },
      { name: "Incline Fly", img: "InclineFly.webp", vod: "../data/Dumbbell/Chest/InclineFly.mp4", desc: "Stretch upper chest." }
    ],
    "Middle Chest": [
      { name: "Flat Press", img: "FlatPress.webp", vod: "../data/Dumbbell/Chest/FlatPress.mp4", desc: "Middle chest." },
      { name: "Flat Fly", img: "FlatFly.webp", vod: "../data/Dumbbell/Chest/FlatFly.mp4", desc: "Chest isolation." }
    ],
    "Lower Chest": [
      { name: "Decline Press", img: "DeclinePress.webp", vod: "../data/Dumbbell/Chest/DeclinePress.mp4", desc: "Lower chest." },
      { name: "Decline Fly", img: "DeclineFly.webp", vod: "../data/Dumbbell/Chest/DeclineFly.mp4", desc: "Lower chest isolation." }
    ]
  },

  // ==================== CORE ====================
  "Core": {
    "All": [
      { name: "Russian Twist", img: "RussianTwist.webp", vod: "../data/Dumbbell/Core/RussianTwist.mp4", desc: "Obliques focus." },
      { name: "Weighted Sit-up", img: "WeightedSitup.webp", vod: "../data/Dumbbell/Core/WeightedSitup.mp4", desc: "Abdominals." }
    ],
    "Abs": [
      { name: "Weighted Sit-up", img: "WeightedSitup.webp", vod: "../data/Dumbbell/Core/WeightedSitup.mp4", desc: "Abdominals." },
      { name: "Crunch", img: "Crunch.webp", vod: "../data/Dumbbell/Core/Crunch.mp4", desc: "Upper abs." }
    ],
    "Obliques": [
      { name: "Russian Twist", img: "RussianTwist.webp", vod: "../data/Dumbbell/Core/RussianTwist.mp4", desc: "Obliques focus." },
      { name: "Side Bend", img: "SideBend.webp", vod: "../data/Dumbbell/Core/SideBend.mp4", desc: "Oblique stretch." }
    ]
  },

  // ==================== GLUTES ====================
  "Glutes": {
    "All": [
      { name: "Glute Bridge", img: "GluteBridge.webp", vod: "../data/Dumbbell/Glutes/GluteBridge.mp4", desc: "Glute activation." },
      { name: "Hip Thrust", img: "HipThrust.webp", vod: "../data/Dumbbell/Glutes/HipThrust.mp4", desc: "Strengthens glutes." }
    ],
    "Glute Max": [
      { name: "Glute Bridge", img: "GluteBridge.webp", vod: "../data/Dumbbell/Glutes/GluteBridge.mp4", desc: "Glute maximus." },
      { name: "Hip Thrust", img: "HipThrust.webp", vod: "../data/Dumbbell/Glutes/HipThrust.mp4", desc: "Glute strength." }
    ],
    "Glute Med": [
      { name: "Side Leg Raise", img: "SideLegRaise.webp", vod: "../data/Dumbbell/Glutes/SideLegRaise.mp4", desc: "Glute medius." },
      { name: "Donkey Kick", img: "DonkeyKick.webp", vod: "../data/Dumbbell/Glutes/DonkeyKick.mp4", desc: "Glute med activation." }
    ]
  },

  // ==================== LEGS ====================
  "Legs": {
    "All": [
      { name: "Dumbbell Squat", img: "DumbbellSquat.webp", vod: "../data/Dumbbell/Legs/DumbbellSquat.mp4", desc: "Quadriceps & glutes." },
      { name: "Lunge", img: "Lunge.webp", vod: "../data/Dumbbell/Legs/Lunge.mp4", desc: "Quads & hamstrings." }
    ],
    "Quadriceps": [
      { name: "Dumbbell Squat", img: "DumbbellSquat.webp", vod: "../data/Dumbbell/Legs/DumbbellSquat.mp4", desc: "Quads." },
      { name: "Front Lunge", img: "FrontLunge.webp", vod: "../data/Dumbbell/Legs/FrontLunge.mp4", desc: "Quadriceps focus." }
    ],
    "Hamstrings": [
      { name: "Romanian Deadlift", img: "RDL.webp", vod: "../data/Dumbbell/Legs/RDL.mp4", desc: "Hamstrings & glutes." },
      { name: "Lunge", img: "Lunge.webp", vod: "../data/Dumbbell/Legs/Lunge.mp4", desc: "Hamstrings & quads." }
    ]
  },

  // ==================== SHOULDERS ====================
  "Shoulders": {
    "All": [
      { name: "Dumbbell Shoulder Press", img: "ShoulderPress.webp", vod: "../data/Dumbbell/Shoulders/ShoulderPress.mp4", desc: "Overall shoulder." },
      { name: "Lateral Raise", img: "LateralRaise.webp", vod: "../data/Dumbbell/Shoulders/LateralRaise.mp4", desc: "Side delts." }
    ],
    "Front Delts": [
      { name: "Front Raise", img: "FrontRaise.webp", vod: "../data/Dumbbell/Shoulders/FrontRaise.mp4", desc: "Front deltoids." },
      { name: "Arnold Press", img: "ArnoldPress.webp", vod: "../data/Dumbbell/Shoulders/ArnoldPress.mp4", desc: "Front & side delts." }
    ],
    "Side Delts": [
      { name: "Lateral Raise", img: "LateralRaise.webp", vod: "../data/Dumbbell/Shoulders/LateralRaise.mp4", desc: "Side delts." },
      { name: "Upright Row", img: "UprightRow.webp", vod: "../data/Dumbbell/Shoulders/UprightRow.mp4", desc: "Side & traps." }
    ],
    "Rear Delts": [
      { name: "Reverse Fly", img: "ReverseFly.webp", vod: "../data/Dumbbell/Shoulders/ReverseFly.mp4", desc: "Rear delts focus." },
      { name: "Face Pull", img: "FacePull.webp", vod: "../data/Dumbbell/Shoulders/FacePull.mp4", desc: "Rear delts & traps." }
    ]
  },
  },



 
// ============================================ 
// ============================================
//                  Dumbbell
// ============================================
// ============================================


  "Dumbbell": {

// ============================================
//                  Arms
// ============================================

    "Arms": {
      "All": [
        // 🦾 BICEPS
        { name: "Bench Curl", img: "BenchCurl.webp", vod: "../data/Dumbbell/Arms/BenchCurl.mp4", desc: "Classic biceps builder." },
        { name: "Hammer Curl", img: "HammerCurl.webp", vod: "../data/Dumbbell/Arms/HammerCurl.mp4", desc: "Targets brachialis & biceps." },
        { name: "Concentration Curl", img: "ConcentrationCurl.webp", vod: "../data/Dumbbell/Arms/ConcentrationCurl.mp4", desc: "Isolates biceps for peak contraction." },
        { name: "Incline Dumbbell Curl", img: "InclineCurl.webp", vod: "../data/Dumbbell/Arms/InclineCurl.mp4", desc: "Stretch + peak contraction for biceps." },

        // 💪 TRICEPS
        { name: "Triceps Kickback", img: "TricepsKickback.webp", vod: "../data/Dumbbell/Arms/TricepsKickback.mp4", desc: "Isolates triceps." },
        { name: "Skull Crusher", img: "SkullCrusher.webp", vod: "../data/Dumbbell/Arms/SkullCrusher.mp4", desc: "Effective for long head of triceps." },
        { name: "Overhead Dumbbell Extension", img: "OverheadExt.webp", vod: "../data/Dumbbell/Arms/OverheadExt.mp4", desc: "Targets long head of triceps." },
        { name: "Bench Dips", img: "BenchDips.webp", vod: "../data/Dumbbell/Arms/BenchDips.mp4", desc: "Bodyweight triceps finisher." },

        // ✋ FOREARMS
        { name: "Wrist Curl", img: "WristCurl.webp", vod: "../data/Dumbbell/Arms/WristCurl.mp4", desc: "Strengthens forearm flexors." },
        { name: "Reverse Wrist Curl", img: "ReverseWristCurl.webp", vod: "../data/Dumbbell/Arms/ReverseWristCurl.mp4", desc: "Targets top of forearms." },
        { name: "Farmer’s Carry", img: "FarmersCarry.webp", vod: "../data/Dumbbell/Arms/FarmersCarry.mp4", desc: "Grip & forearm exercise." },
        { name: "Dumbbell Reverse Curl", img: "ReverseCurl.webp", vod: "../data/Dumbbell/Arms/ReverseCurl.mp4", desc: "Biceps + forearm synergy." }
      ],


    
//==================== Biceps ====================

      "Biceps": [
    { name: "Dumbbell Bicep Curl",  
    img: "dumbbell_bicep_curl", 
    vod: "../data/Dumbbell/Arms/dumbbell_bicep_curl.mp4", 
    difficulty: 4, 
    desc: "Basic aur most effective move — overall biceps growth ke liye perfect." },

    { name: "Alternating Bicep Curl",  
    img: "alternating_bicep_curl", 
    vod: "../data/Dumbbell/Arms/alternating_bicep_curl.mp4", 
    difficulty: 3, 
    desc: "Ek haath se ek time curl karo — control aur balance dono improve hote hain." },

    { name: "Hammer Curl",  
    img: "hammer_curl", 
    vod: "../data/Dumbbell/Arms/hammer_curl.mp4", 
    difficulty: 5, 
    desc: "Neutral grip se curl karo — biceps ke saath forearm aur brachialis ko target karta hai." },

    { name: "Incline Dumbbell Curl",  
    img: "incline_dumbbell_curl", 
    vod: "../data/Dumbbell/Arms/incline_dumbbell_curl.mp4", 
    difficulty: 6, 
    desc: "Incline bench par lean karke curl karo — long head ko stretch karta hai." },

    { name: "Seated Alternating Curl",  
    img: "seated_alternating_curl", 
    vod: "../data/Dumbbell/Arms/seated_alternating_curl.mp4", 
    difficulty: 5, 
    desc: "Baithkar alternate curls karo — body swing kam aur control zyada milta hai." },

    { name: "Concentration Curl",  
    img: "concentration_curl", 
    vod: "../data/Dumbbell/Arms/concentration_curl.mp4", 
    difficulty: 4, 
    desc: "Baithkar ek haath ko thigh par tikakar curl karo — inner biceps ko isolate karta hai." },

    { name: "Zottman Curl",  
    img: "zottman_curl", 
    vod: "../data/Dumbbell/Arms/zottman_curl.mp4", 
    difficulty: 7, 
    desc: "Curl karte waqt upar wrist rotate karo — forearm aur biceps dono develop karta hai." },

    { name: "Cross Body Curl",  
    img: "cross_body_curl", 
    vod: "../data/Dumbbell/Arms/cross_body_curl.mp4", 
    difficulty: 4, 
    desc: "Dumbbell ko body ke across le jao — outer biceps aur forearm dono active hote hain." },

    { name: "Reverse Dumbbell Curl",  
    img: "reverse_dumbbell_curl", 
    vod: "../data/Dumbbell/Arms/reverse_dumbbell_curl.mp4", 
    difficulty: 6, 
    desc: "Overhand grip se curl karo — forearm aur upper biceps dono ko engage karta hai." },

    { name: "21s (Partial + Full Range)",  
    img: "bicep_curl_21s", 
    vod: "../data/Dumbbell/Arms/bicep_curl_21s.mp4", 
    difficulty: 7, 
    desc: "7 lower + 7 upper + 7 full curls — maximum pump aur burn ke liye." },
       ],


//==================== Triceps ====================

      "Triceps": [
    { name: "Close Grip Dumbbell Press",  
    img: "close_grip_dumbbell_press", 
    vod: "../data/Dumbbell/Arms/close_grip_dumbbell_press.mp4", 
    difficulty: 5, 
    desc: "Flat bench par dumbbells ko paas rakhkar press karo — triceps aur chest dono engage hote hain." },

    { name: "Dumbbell Floor Press (Close Grip)",  
    img: "dumbbell_floor_press_close_grip", 
    vod: "../data/Dumbbell/Arms/dumbbell_floor_press_close_grip.mp4", 
    difficulty: 4, 
    desc: "Floor par lete hue dumbbells ko chest ke paas press karo — triceps aur chest dono mild stress me aate hain." },

    { name: "Dumbbell Skull Crusher",  
    img: "dumbbell_skull_crusher", 
    vod: "../data/Dumbbell/Arms/dumbbell_skull_crusher.mp4", 
    difficulty: 6, 
    desc: "Bench par lete hue dumbbells ko forehead ke paas laao aur extend karo — triceps ke 3 heads par kaam karta hai." },

    { name: "Seated Dumbbell Overhead Extension",  
    img: "seated_dumbbell_overhead_extension", 
    vod: "../data/Dumbbell/Arms/seated_dumbbell_overhead_extension.mp4", 
    difficulty: 7, 
    desc: "Baithkar dono dumbbells upar uthakar peeche flex karo — triceps long head ke liye effective." },

    { name: "Dumbbell Overhead Extension",  
    img: "dumbbell_overhead_extension", 
    vod: "../data/Dumbbell/Arms/dumbbell_overhead_extension.mp4", 
    difficulty: 6, 
    desc: "Ek ya dono haathon se dumbbell head ke peeche le jao aur upar extend karo — long head ko target karta hai." },

    { name: "Tate Press",  
    img: "tate_press", 
    vod: "../data/Dumbbell/Arms/tate_press.mp4", 
    difficulty: 5, 
    desc: "Bench par lete hue dumbbells ko chest ke side se upar press karo — triceps ke lateral head ko hit karta hai." },

    { name: "Dumbbell Kickback",  
    img: "dumbbell_kickback", 
    vod: "../data/Dumbbell/Arms/dumbbell_kickback.mp4", 
    difficulty: 3, 
    desc: "Body ko lean karke elbows fixed rakho aur dumbbell peeche extend karo — triceps isolation ke liye best." },

    { name: "Two Arm Dumbbell Kickback",  
    img: "two_arm_dumbbell_kickback", 
    vod: "../data/Dumbbell/Arms/two_arm_dumbbell_kickback.mp4", 
    difficulty: 4, 
    desc: "Dono haathon se ek saath kickback karo — triceps isolation aur balance dono improve hota hai." },

    { name: "One Arm Overhead Extension",  
    img: "one_arm_overhead_extension", 
    vod: "../data/Dumbbell/Arms/one_arm_overhead_extension.mp4", 
    difficulty: 5, 
    desc: "Ek haath se dumbbell upar le jao aur peeche flex karo — single arm strength aur symmetry ke liye." },

    { name: "Lying Dumbbell Triceps Extension",  
    img: "lying_dumbbell_triceps_extension", 
    vod: "../data/Dumbbell/Arms/lying_dumbbell_triceps_extension.mp4", 
    difficulty: 6, 
    desc: "Bench par seedha lete hue dumbbell ko head ke peeche le jaakar extend karo — triceps stretch aur squeeze dono milta hai." },

    { name: "Incline Dumbbell Overhead Extension",  
    img: "incline_dumbbell_overhead_extension", 
    vod: "../data/Dumbbell/Arms/incline_dumbbell_overhead_extension.mp4", 
    difficulty: 7, 
    desc: "Incline bench par upar dumbbell utha kar peeche flex karo — long head aur stretch ke liye extra focus." },

    { name: "Incline Dumbbell Kickback",  
    img: "incline_dumbbell_kickback", 
    vod: "../data/Dumbbell/Arms/incline_dumbbell_kickback.mp4", 
    difficulty: 4, 
    desc: "Incline bench par chest ko support karke kickback karo — strict form aur better contraction milta hai." },

      ],


//==================== Forearms ====================

      "Forearms": [
    { name: "Wrist Curl (Seated)",  
    img: "wrist_curl_seated", 
    vod: "../data/Dumbbell/Arms/wrist_curl_seated.mp4", 
    difficulty: 3, 
    desc: "Baithkar forearm ke liye dumbbell ko wrist se curl karo — wrist flexors target hote hain." },

    { name: "Reverse Wrist Curl (Seated)",  
    img: "reverse_wrist_curl_seated", 
    vod: "../data/Dumbbell/Arms/reverse_wrist_curl_seated.mp4", 
    difficulty: 4, 
    desc: "Baithkar overhand grip se wrist curl karo — forearm extensors target hote hain." },

    { name: "Hammer Wrist Curl",  
    img: "hammer_wrist_curl", 
    vod: "../data/Dumbbell/Arms/hammer_wrist_curl.mp4", 
    difficulty: 4, 
    desc: "Neutral grip se dumbbell curl karo — brachioradialis aur forearm dono strengthen hote hain." },

    { name: "Zottman Curl",  
    img: "zottman_curl_forearm", 
    vod: "../data/Dumbbell/Arms/zottman_curl_forearm.mp4", 
    difficulty: 6, 
    desc: "Curl karte waqt wrist rotate karo — biceps ke saath forearm bhi engage hota hai." },

    { name: "Reverse Curl",  
    img: "reverse_curl_forearm", 
    vod: "../data/Dumbbell/Arms/reverse_curl_forearm.mp4", 
    difficulty: 5, 
    desc: "Overhand grip se dumbbell curl karo — forearm aur brachioradialis strong hota hai." },

    { name: "Farmer's Walk",  
    img: "farmers_walk", 
    vod: "../data/Dumbbell/Arms/farmers_walk.mp4", 
    difficulty: 7, 
    desc: "Dumbbells ko dono haathon me pakad ke walk karo — grip strength aur forearms ka overall workout." },

    { name: "Wrist Rotation",  
    img: "wrist_rotation", 
    vod: "../data/Dumbbell/Arms/wrist_rotation.mp4", 
    difficulty: 3, 
    desc: "Dumbbell pakad ke wrist clockwise & anticlockwise rotate karo — forearm flexibility aur strength." },

    { name: "Reverse Grip Curl",  
    img: "reverse_grip_curl", 
    vod: "../data/Dumbbell/Arms/reverse_grip_curl.mp4", 
    difficulty: 5, 
    desc: "Overhand grip se curl karo — forearm aur brachioradialis par focus." },

    { name: "Hammer Curl",  
    img: "hammer_curl_forearm", 
    vod: "../data/Dumbbell/Arms/hammer_curl_forearm.mp4", 
    difficulty: 5, 
    desc: "Neutral grip se dumbbell curl karo — forearm aur biceps dono ko engage karta hai." },

    { name: "Finger Curl",  
    img: "finger_curl", 
    vod: "../data/Dumbbell/Arms/finger_curl.mp4", 
    difficulty: 3, 
    desc: "Dumbbell ko finger ke tips se curl karo — finger aur grip strength improve hoti hai." },

      ]
    },

// ============================================
//                   Back
// ============================================

    "Back": {
    "All": [
      { name: "Bent Over Row", img: "BentOverRow.webp", vod: "../data/Dumbbell/Back/BentOverRow.mp4", desc: "Targets lats & traps." },
      { name: "Single Arm Row", img: "SingleArmRow.webp", vod: "../data/Dumbbell/Back/SingleArmRow.mp4", desc: "Isolates each side of the back." }
    ],

//==================== Lats ====================

    "Lats": [
      { name: "Dumbbell Bent Over Row",  
    img: "dumbbell_bent_over_row", 
    vod: "../data/Dumbbell/Back/dumbbell_bent_over_row.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko haathon me pakad ke bend karo, chest ko forward lean karke rows karo — lats aur mid-back engage hote hain." },

  { name: "Single Arm Dumbbell Row",  
    img: "single_arm_dumbbell_row", 
    vod: "../data/Dumbbell/Back/single_arm_dumbbell_row.mp4", 
    difficulty: 5, 
    desc: "Ek haath se dumbbell row karo, doosra haath bench par support — lats ka isolation aur balance improve hota hai." },

  { name: "Renegade Row",  
    img: "renegade_row", 
    vod: "../data/Dumbbell/Back/renegade_row.mp4", 
    difficulty: 6, 
    desc: "Push-up position me dumbbells hold karke alternate row karo — core aur lats dono engage hote hain." },

  { name: "Dumbbell Pullover",  
    img: "dumbbell_pullover", 
    vod: "../data/Dumbbell/Back/dumbbell_pullover.mp4", 
    difficulty: 5, 
    desc: "Bench par lete hue dumbbell ko chest se head ke upar le jao aur wapas laao — lats aur chest dono stretch aur engage hote hain." },

  { name: "Incline Dumbbell Row",  
    img: "incline_dumbbell_row", 
    vod: "../data/Dumbbell/Back/incline_dumbbell_row.mp4", 
    difficulty: 6, 
    desc: "Incline bench par lean karke dumbbells ko pull karo — lats ko strict form me target karta hai." },

  { name: "Seated Dumbbell Row",  
    img: "seated_dumbbell_row", 
    vod: "../data/Dumbbell/Back/seated_dumbbell_row.mp4", 
    difficulty: 5, 
    desc: "Bench par baithkar dumbbells ko pull karo — lats aur rhomboids ko focus me lata hai." },

  { name: "Dumbbell Shrug",  
    img: "dumbbell_shrug", 
    vod: "../data/Dumbbell/Back/dumbbell_shrug.mp4", 
    difficulty: 4, 
    desc: "Dumbbells ko haathon me pakad kar upar shrug karo — upper traps aur lats ke upper portion engage hote hain." },

  { name: "Reverse Grip Dumbbell Row",  
    img: "reverse_grip_dumbbell_row", 
    vod: "../data/Dumbbell/Back/reverse_grip_dumbbell_row.mp4", 
    difficulty: 6, 
    desc: "Underhand grip se dumbbells ko pull karo — lats aur lower traps zyada engage hote hain." },

  { name: "Dumbbell Deadlift",  
    img: "dumbbell_deadlift", 
    vod: "../data/Dumbbell/Back/dumbbell_deadlift.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko haathon me pakad ke deadlift karo — lower back aur lats ko stabilize karta hai." },

  { name: "Meadows Row (Dumbbell)",  
    img: "meadows_row_dumbbell", 
    vod: "../data/Dumbbell/Back/meadows_row_dumbbell.mp4", 
    difficulty: 7, 
    desc: "Bench ke side se dumbbell ko row karo — lats aur obliques ko alag angle se target karta hai." },

  ],

//==================== Traps ====================

    "Traps": [
       { name: "Dumbbell Shrug",  
    img: "dumbbell_shrug", 
    vod: "../data/Dumbbell/Back/dumbbell_shrug.mp4", 
    difficulty: 4, 
    desc: "Dumbbells ko haathon me pakad kar upar shrug karo — upper traps aur neck area engage hote hain." },

  { name: "Upright Row (Dumbbell)",  
    img: "upright_row_dumbbell", 
    vod: "../data/Dumbbell/Back/upright_row_dumbbell.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko hip se upar shoulder level tak pull karo — traps aur delts dono target hote hain." },

  { name: "Dumbbell Face Pull",  
    img: "dumbbell_face_pull", 
    vod: "../data/Dumbbell/Back/dumbbell_face_pull.mp4", 
    difficulty: 6, 
    desc: "Bench ke saath incline ya cable position me dumbbell ko face ke direction me pull karo — rear delts aur traps upper/mid engage hote hain." },

  { name: "Reverse Fly",  
    img: "reverse_fly", 
    vod: "../data/Dumbbell/Back/reverse_fly.mp4", 
    difficulty: 5, 
    desc: "Incline bench par lean karke dumbbells ko side me open karo — mid traps aur rear delts ko isolate karta hai." },

  { name: "Dumbbell High Pull",  
    img: "dumbbell_high_pull", 
    vod: "../data/Dumbbell/Back/dumbbell_high_pull.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko floor se shoulder level tak fast pull karo — traps aur shoulders dono activate hote hain." },

  { name: "Farmer’s Carry",  
    img: "farmers_carry", 
    vod: "../data/Dumbbell/Back/farmers_carry.mp4", 
    difficulty: 5, 
    desc: "Dumbbells dono haathon me pakad ke walk karo — traps aur grip strength improve hoti hai." },

  { name: "Incline Dumbbell Shrug",  
    img: "incline_dumbbell_shrug", 
    vod: "../data/Dumbbell/Back/incline_dumbbell_shrug.mp4", 
    difficulty: 5, 
    desc: "Incline bench par lean karke dumbbells ko upar shrug karo — traps ke upper aur mid portion ke liye extra focus." },

  { name: "Dumbbell Y Raise",  
    img: "dumbbell_y_raise", 
    vod: "../data/Dumbbell/Back/dumbbell_y_raise.mp4", 
    difficulty: 6, 
    desc: "Incline bench par face down position me dumbbells ko Y shape me lift karo — traps ke mid aur lower part ko isolate karta hai." },

  { name: "Dumbbell Trap Raise",  
    img: "dumbbell_trap_raise", 
    vod: "../data/Dumbbell/Back/dumbbell_trap_raise.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko side me upar lift karo — upper traps ko isolate karta hai, shoulder aur neck ko stabilize karta hai." },

  { name: "Seated Dumbbell Shrug",  
    img: "seated_dumbbell_shrug", 
    vod: "../data/Dumbbell/Back/seated_dumbbell_shrug.mp4", 
    difficulty: 4, 
    desc: "Bench par baithkar dumbbells ko upar shrug karo — strict form se upper traps par focus." },

  ],

//==================== Rhomboids ====================

    "Rhomboids": [
       { name: "Reverse Fly",  
    img: "reverse_fly", 
    vod: "../data/Dumbbell/Back/reverse_fly.mp4", 
    difficulty: 5, 
    desc: "Incline bench par lean karke dumbbells ko side me open karo — mid traps aur rhomboids ko isolate karta hai." },

  { name: "Seated Dumbbell Row",  
    img: "seated_dumbbell_row", 
    vod: "../data/Dumbbell/Back/seated_dumbbell_row.mp4", 
    difficulty: 5, 
    desc: "Bench par baithkar dumbbells ko pull karo — rhomboids aur lats ko focus me lata hai." },

  { name: "Single Arm Dumbbell Row",  
    img: "single_arm_dumbbell_row", 
    vod: "../data/Dumbbell/Back/single_arm_dumbbell_row.mp4", 
    difficulty: 5, 
    desc: "Ek haath se dumbbell row karo, doosra haath bench par support — rhomboids aur lats ka isolation improve hota hai." },

  { name: "Incline Dumbbell Row",  
    img: "incline_dumbbell_row", 
    vod: "../data/Dumbbell/Back/incline_dumbbell_row.mp4", 
    difficulty: 6, 
    desc: "Incline bench par lean karke dumbbells ko pull karo — strict form se rhomboids aur mid-back target hote hain." },

  { name: "Dumbbell Face Pull",  
    img: "dumbbell_face_pull", 
    vod: "../data/Dumbbell/Back/dumbbell_face_pull.mp4", 
    difficulty: 6, 
    desc: "Bench ke saath incline ya cable position me dumbbell ko face ke direction me pull karo — rear delts aur rhomboids upper/mid engage hote hain." },

  { name: "Prone Dumbbell Lateral Raise",  
    img: "prone_dumbbell_lateral_raise", 
    vod: "../data/Dumbbell/Back/prone_dumbbell_lateral_raise.mp4", 
    difficulty: 5, 
    desc: "Bench par face down lete hue dumbbells ko side me lift karo — rhomboids aur rear delts target hote hain." },

  { name: "Dumbbell Scapular Retraction",  
    img: "dumbbell_scapular_retraction", 
    vod: "../data/Dumbbell/Back/dumbbell_scapular_retraction.mp4", 
    difficulty: 5, 
    desc: "Bench par lean ya standing position me dumbbells ko pull karte hue shoulder blades ko squeeze karo — rhomboids isolation ke liye best." },

  { name: "Incline Reverse Fly",  
    img: "incline_reverse_fly", 
    vod: "../data/Dumbbell/Back/incline_reverse_fly.mp4", 
    difficulty: 6, 
    desc: "Incline bench par lean kar ke dumbbells ko reverse fly karo — strict form se rhomboids aur mid traps par focus." },

  ],

//==================== Lower Back ====================

    "Lower Back": [
{ name: "Dumbbell Deadlift",  
    img: "dumbbell_deadlift", 
    vod: "../data/Dumbbell/Back/dumbbell_deadlift.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko ground se utha kar khade ho jao — lower back aur glutes engage hote hain." },

  { name: "Romanian Dumbbell Deadlift",  
    img: "romanian_dumbbell_deadlift", 
    vod: "../data/Dumbbell/Back/romanian_dumbbell_deadlift.mp4", 
    difficulty: 6, 
    desc: "Slight bend knees ke saath dumbbells ko neeche le jao aur upar uthao — erector spinae aur hamstrings target." },

  { name: "Dumbbell Good Morning",  
    img: "dumbbell_good_morning", 
    vod: "../data/Dumbbell/Back/dumbbell_good_morning.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko shoulders par rakho aur waist se bend ho kar upar uthao — lower back stretch aur strengthening ke liye best." },

  { name: "Dumbbell Hyperextension",  
    img: "dumbbell_hyperextension", 
    vod: "../data/Dumbbell/Back/dumbbell_hyperextension.mp4", 
    difficulty: 6, 
    desc: "Bench par face down position me dumbbells pakad kar upar lift karo — erector spinae aur glutes activate hote hain." },

  { name: "Dumbbell Rack Pull",  
    img: "dumbbell_rack_pull", 
    vod: "../data/Dumbbell/Back/dumbbell_rack_pull.mp4", 
    difficulty: 6, 
    desc: "Bench ya elevated surface par dumbbells ko pull karo — lower back aur traps support ke liye effective." },

  { name: "Single Arm Dumbbell Deadlift",  
    img: "single_arm_dumbbell_deadlift", 
    vod: "../data/Dumbbell/Back/single_arm_dumbbell_deadlift.mp4", 
    difficulty: 6, 
    desc: "Ek haath se dumbbell utha kar lower back ko stabilize karo — unilateral strength aur balance improve hota hai." },

  { name: "Dumbbell Swing",  
    img: "dumbbell_swing", 
    vod: "../data/Dumbbell/Back/dumbbell_swing.mp4", 
    difficulty: 5, 
    desc: "Dumbbell ko dono haathon se swing karte hue hips se control me upar le jao — lower back aur posterior chain ke liye dynamic move." },

  { name: "Suitcase Carry",  
    img: "suitcase_carry", 
    vod: "../data/Dumbbell/Back/suitcase_carry.mp4", 
    difficulty: 5, 
    desc: "Ek haath me dumbbell pakad ke walk karo — lower back aur obliques stabilize karte hain." },

  ],
  },



// ============================================
//                   Chest
// ============================================

      "Chest": {
    "All": [
      { name: "Flat Dumbbell Press", img: "FlatPress.webp", vod: "../data/Dumbbell/Chest/FlatPress.mp4", desc: "Overall chest." },
      { name: "Incline Dumbbell Press", img: "InclinePress.webp", vod: "../data/Dumbbell/Chest/InclinePress.mp4", desc: "Upper chest." }
    ],

//==================== Upper Chest ====================

    "Upper Chest": [
  { name: "Incline Dumbbell Press",  
    img: "incline_dumbbell_press", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_press.mp4", 
    difficulty: 5, 
    desc: "Incline bench par dumbbells ko press karo — upper chest aur shoulders engage hote hain." },

  { name: "Incline Dumbbell Fly",  
    img: "incline_dumbbell_fly", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_fly.mp4", 
    difficulty: 5, 
    desc: "Incline bench par dumbbells ko side me open karo aur squeeze karo — upper chest stretch aur contraction ke liye best." },

  { name: "Dumbbell Pullover",  
    img: "dumbbell_pullover", 
    vod: "../data/Dumbbell/Chest/dumbbell_pullover.mp4", 
    difficulty: 6, 
    desc: "Bench par lete hue dumbbell ko upar se head ke peeche le jao — upper chest aur serratus ko stretch aur engage karta hai." },

  { name: "Incline Hammer Press",  
    img: "incline_hammer_press", 
    vod: "../data/Dumbbell/Chest/incline_hammer_press.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko neutral grip me incline bench par press karo — upper chest aur front delts ke liye effective." },

  { name: "Incline Dumbbell Squeeze Press",  
    img: "incline_dumbbell_squeeze_press", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_squeeze_press.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko press karte hue ek dusre ke saath squeeze karo — upper chest ko maximum contraction milta hai." },

  { name: "Incline Dumbbell Reverse Fly",  
    img: "incline_dumbbell_reverse_fly", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_reverse_fly.mp4", 
    difficulty: 6, 
    desc: "Incline bench par lean karke dumbbells ko side me reverse fly karo — upper chest ke saath rear delts aur traps bhi engage hote hain." },

  { name: "Incline Dumbbell Front Raise",  
    img: "incline_dumbbell_front_raise", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_front_raise.mp4", 
    difficulty: 5, 
    desc: "Incline bench ke saath dumbbell ko front se upar raise karo — upper chest aur front delts focus hote hain." },

  { name: "Incline Dumbbell Spider Press",  
    img: "incline_dumbbell_spider_press", 
    vod: "../data/Dumbbell/Chest/incline_dumbbell_spider_press.mp4", 
    difficulty: 6, 
    desc: "Incline bench par dumbbells ko slightly outwards press karo — upper chest aur inner contraction ke liye best." },

  { name: "Guillotine Press (Dumbbell)",  
    img: "guillotine_dumbbell_press", 
    vod: "../data/Dumbbell/Chest/guillotine_dumbbell_press.mp4", 
    difficulty: 7, 
    desc: "Incline bench par dumbbells ko chest ke upar aur head ke thoda neeche se press karo — upper chest aur clavicular fibers ke liye intense." },

  { name: "Landmine Press (Dumbbell Variation)",  
    img: "landmine_dumbbell_press", 
    vod: "../data/Dumbbell/Chest/landmine_dumbbell_press.mp4", 
    difficulty: 6, 
    desc: "Bench ke side ya floor se dumbbell press karo — upper chest aur anterior delts engage hote hain, shoulder friendly." },

  ],

//==================== Middle Chest ====================

    "Middle Chest": [
      { name: "Flat Dumbbell Press",  
    img: "flat_dumbbell_press", 
    vod: "../data/Dumbbell/Chest/flat_dumbbell_press.mp4", 
    difficulty: 5, 
    desc: "Flat bench par dumbbells ko press karo — middle chest aur shoulders engage hote hain." },

  { name: "Flat Dumbbell Fly",  
    img: "flat_dumbbell_fly", 
    vod: "../data/Dumbbell/Chest/flat_dumbbell_fly.mp4", 
    difficulty: 5, 
    desc: "Flat bench par dumbbells ko side me open karo aur squeeze karo — chest stretch aur contraction ke liye best." },

  { name: "Dumbbell Pullover",  
    img: "dumbbell_pullover", 
    vod: "../data/Dumbbell/Chest/dumbbell_pullover.mp4", 
    difficulty: 6, 
    desc: "Bench par lete hue dumbbell ko head ke peeche le jao — middle chest aur serratus ko stretch aur engage karta hai." },

  { name: "Dumbbell Squeeze Press",  
    img: "dumbbell_squeeze_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_squeeze_press.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko press karte hue ek dusre ke saath squeeze karo — middle chest contraction ke liye effective." },

  { name: "Dumbbell Floor Press",  
    img: "dumbbell_floor_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_floor_press.mp4", 
    difficulty: 5, 
    desc: "Floor par lete hue dumbbells ko press karo — middle chest aur triceps engage hote hain." },

  { name: "Dumbbell Around the World",  
    img: "dumbbell_around_the_world", 
    vod: "../data/Dumbbell/Chest/dumbbell_around_the_world.mp4", 
    difficulty: 6, 
    desc: "Flat bench par dumbbells ko circular motion me upar se neeche le jao — chest ke saare fibers activate hote hain." },

  { name: "Dumbbell Close Grip Press",  
    img: "dumbbell_close_grip_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_close_grip_press.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko paas rakhe press karo — middle chest aur triceps ko mild isolation milta hai." },

  { name: "Dumbbell Reverse Grip Press",  
    img: "dumbbell_reverse_grip_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_reverse_grip_press.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko underhand grip me press karo — middle chest ke lower fibers aur front delts ko target karta hai." },

  ],


//==================== Lower Chest ====================

    "Lower Chest": [
       { name: "Decline Dumbbell Press",  
    img: "decline_dumbbell_press", 
    vod: "../data/Dumbbell/Chest/decline_dumbbell_press.mp4", 
    difficulty: 5, 
    desc: "Decline bench par dumbbells ko press karo — lower chest aur triceps engage hote hain." },

  { name: "Decline Dumbbell Fly",  
    img: "decline_dumbbell_fly", 
    vod: "../data/Dumbbell/Chest/decline_dumbbell_fly.mp4", 
    difficulty: 5, 
    desc: "Decline bench par dumbbells ko side me open karo aur squeeze karo — lower chest stretch aur contraction ke liye best." },

  { name: "Dumbbell Pullover",  
    img: "dumbbell_pullover", 
    vod: "../data/Dumbbell/Chest/dumbbell_pullover.mp4", 
    difficulty: 6, 
    desc: "Bench par lete hue dumbbell ko head ke peeche le jao — lower chest aur serratus ko stretch aur engage karta hai." },

  { name: "Decline Dumbbell Squeeze Press",  
    img: "decline_dumbbell_squeeze_press", 
    vod: "../data/Dumbbell/Chest/decline_dumbbell_squeeze_press.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko press karte hue ek dusre ke saath squeeze karo — lower chest ko maximum contraction milta hai." },

  { name: "Dumbbell Reverse Grip Press",  
    img: "dumbbell_reverse_grip_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_reverse_grip_press.mp4", 
    difficulty: 6, 
    desc: "Dumbbells ko underhand grip me press karo — lower chest ke fibers aur front delts ko target karta hai." },

  { name: "Dumbbell Around the World (Decline)",  
    img: "dumbbell_around_the_world_decline", 
    vod: "../data/Dumbbell/Chest/dumbbell_around_the_world_decline.mp4", 
    difficulty: 6, 
    desc: "Decline bench par dumbbells ko circular motion me upar se neeche le jao — lower chest ke fibers fully activate hote hain." },

  { name: "Dumbbell Pullover on Decline",  
    img: "dumbbell_pullover_decline", 
    vod: "../data/Dumbbell/Chest/dumbbell_pullover_decline.mp4", 
    difficulty: 6, 
    desc: "Decline bench par dumbbell ko head ke peeche le jao — lower chest aur serratus ko extra stretch aur contraction milta hai." },

  { name: "Dumbbell Close Grip Decline Press",  
    img: "dumbbell_close_grip_decline_press", 
    vod: "../data/Dumbbell/Chest/dumbbell_close_grip_decline_press.mp4", 
    difficulty: 5, 
    desc: "Dumbbells ko paas rakhe press karo — lower chest aur triceps ko mild isolation milta hai." },

  ],
  },

// ============================================
//                   Core
// ============================================

      "Core": {
    "All": [
      { name: "Russian Twist", img: "RussianTwist.webp", vod: "../data/Dumbbell/Core/RussianTwist.mp4", desc: "Obliques focus." },
      { name: "Weighted Sit-up", img: "WeightedSitup.webp", vod: "../data/Dumbbell/Core/WeightedSitup.mp4", desc: "Abdominals." }
    ],

//==================== Abdominis (Abs) ====================
   
    "Abdominis (Abs)": [
  { name: "Dumbbell Sit-up",  
    img: "dumbbell_situp", 
    vod: "../data/Core/Abs/dumbbell_situp.mp4", 
    difficulty: 5, 
    desc: "Dumbbell pakadkar full sit-up karo — overall abs strength aur resistance ke liye." },

  { name: "Dumbbell V-Up",  
    img: "dumbbell_vup", 
    vod: "../data/Core/Abs/dumbbell_vup.mp4", 
    difficulty: 6, 
    desc: "Dumbbell hold karke V shape me body raise karo — upper + lower abs ko simultaneously target karta hai." },

  { name: "Weighted Sit-up Twist",  
    img: "weighted_situp_twist", 
    vod: "../data/Core/Abs/weighted_situp_twist.mp4", 
    difficulty: 6, 
    desc: "Dumbbell ya plate pakad kar sit-up ke saath twist karo — oblique aur rectus abdominis engage hota hai." },

  { name: "Dumbbell Russian Twist",  
    img: "dumbbell_russian_twist", 
    vod: "../data/Core/Abs/dumbbell_russian_twist.mp4", 
    difficulty: 5, 
    desc: "Floor par baith kar dumbbell se side to side twist karo — obliques aur abs ko tone karta hai." },

  { name: "Dumbbell Overhead Sit-up",  
    img: "dumbbell_overhead_situp", 
    vod: "../data/Core/Abs/dumbbell_overhead_situp.mp4", 
    difficulty: 6, 
    desc: "Dumbbell ko upar pakad kar sit-up karo — full range abs aur shoulder stability ke liye." }
],


//==================== Obliques  ====================

    "Obliques": [
  { name: "Dumbbell Side Bend",  
    img: "dumbbell_side_bend", 
    vod: "../data/Core/Obliques/dumbbell_side_bend.mp4", 
    difficulty: 4, 
    desc: "Dumbbell pakad kar side bend karo — lateral obliques ko target karta hai." },

  { name: "Dumbbell Russian Twist",  
    img: "dumbbell_russian_twist", 
    vod: "../data/Core/Obliques/dumbbell_russian_twist.mp4", 
    difficulty: 5, 
    desc: "Floor par baith kar dumbbell se side to side twist karo — obliques aur abs ko tone karta hai." },

  { name: "Weighted Side Bend",  
    img: "weighted_side_bend", 
    vod: "../data/Core/Obliques/weighted_side_bend.mp4", 
    difficulty: 5, 
    desc: "Heavy dumbbell ya plate pakad kar side bend karo — obliques aur waist shaping ke liye effective." },

  { name: "Dumbbell Oblique Crunch",  
    img: "dumbbell_oblique_crunch", 
    vod: "../data/Core/Obliques/dumbbell_oblique_crunch.mp4", 
    difficulty: 5, 
    desc: "Floor par side par lete hue dumbbell upar uthao — side abs ko isolate karta hai." },

  { name: "Dumbbell Standing Twist",  
    img: "dumbbell_standing_twist", 
    vod: "../data/Core/Obliques/dumbbell_standing_twist.mp4", 
    difficulty: 6, 
    desc: "Stand kar ke dumbbell pakad kar trunk ko side to side twist karo — obliques ko strengthen karta hai." }

  ],

//==================== Transverse Abdominis (TVA) ====================

    "Transverse Abdominis (TVA)": [
 { name: "Dumbbell Plank Row",  
    img: "dumbbell_plank_row", 
    vod: "../data/Core/TVA/dumbbell_plank_row.mp4", 
    difficulty: 6, 
    desc: "Plank position me dumbbell pakad kar row karo — deep core + TVA ko engage karta hai." },

  { name: "Dumbbell Dead Bug",  
    img: "dumbbell_dead_bug", 
    vod: "../data/Core/TVA/dumbbell_dead_bug.mp4", 
    difficulty: 5, 
    desc: "Floor par lete hue dumbbell hold kar ke opposite arm-leg extend karo — TVA aur core stability ke liye." },

  { name: "Dumbbell Side Plank Reach",  
    img: "dumbbell_side_plank_reach", 
    vod: "../data/Core/TVA/dumbbell_side_plank_reach.mp4", 
    difficulty: 6, 
    desc: "Side plank me dumbbell upar uthakar reach karo — lateral TVA aur obliques ko activate karta hai." },

  { name: "Dumbbell Suitcase Carry",  
    img: "dumbbell_suitcase_carry", 
    vod: "../data/Core/TVA/dumbbell_suitcase_carry.mp4", 
    difficulty: 5, 
    desc: "Dumbbell ek haath me pakad kar walk karo — deep core aur oblique stabilization ke liye." },

  { name: "Dumbbell Overhead Carry",  
    img: "dumbbell_overhead_carry", 
    vod: "../data/Core/TVA/dumbbell_overhead_carry.mp4", 
    difficulty: 6, 
    desc: "Dumbbell overhead pakad kar walk karo — TVA, shoulders aur posture improve hota hai." }

  ],

// ==================== Quadratus Lumborum (QL) ====================

    "Quadratus Lumborum (QL)": [
  { name: "Dumbbell Side Bend",  
    img: "dumbbell_side_bend", 
    vod: "../data/Core/QL/dumbbell_side_bend.mp4", 
    difficulty: 4, 
    desc: "Dumbbell pakad kar side bend karo — lateral QL aur obliques ko target karta hai." },

  { name: "Weighted Side Bend",  
    img: "weighted_side_bend", 
    vod: "../data/Core/QL/weighted_side_bend.mp4", 
    difficulty: 5, 
    desc: "Heavy dumbbell ya plate pakad kar side bend karo — waist aur lateral QL ko strengthen karta hai." },

  { name: "Dumbbell Suitcase Carry",  
    img: "dumbbell_suitcase_carry", 
    vod: "../data/Core/QL/dumbbell_suitcase_carry.mp4", 
    difficulty: 5, 
    desc: "Ek haath me dumbbell pakad kar walk karo — lateral QL aur obliques ko stabilize karta hai." },

  { name: "Dumbbell Overhead Side Bend",  
    img: "dumbbell_overhead_side_bend", 
    vod: "../data/Core/QL/dumbbell_overhead_side_bend.mp4", 
    difficulty: 6, 
    desc: "Dumbbell overhead pakad kar side bend karo — QL aur deep core ko extra stretch aur engagement deta hai." }

  ],
  },


// ============================================
//                   Glutes
// ============================================

     "Glutes": {
    "All": [
      { name: "Glute Bridge", img: "GluteBridge.webp", vod: "../data/Dumbbell/Glutes/GluteBridge.mp4", desc: "Glute activation." },
      { name: "Hip Thrust", img: "HipThrust.webp", vod: "../data/Dumbbell/Glutes/HipThrust.mp4", desc: "Strengthens glutes." }
    ],

// ==================== Gluteus Maximus ====================

    "Gluteus Maximus": [
       { name: "Dumbbell Hip Thrust",  
      img: "dumbbell_hip_thrust", 
      vod: "../data/Glutes/Maximus/dumbbell_hip_thrust.mp4", 
      difficulty: 5, 
      desc: "Bench par back rakh kar dumbbell hip par rakho aur hips upar uthao — gluteus maximus ke liye best." },

    { name: "Dumbbell Glute Bridge",  
      img: "dumbbell_glute_bridge", 
      vod: "../data/Glutes/Maximus/dumbbell_glute_bridge.mp4", 
      difficulty: 5, 
      desc: "Floor par lete hue dumbbell hip par rakho aur hips upar uthao — gluteus maximus aur hamstrings ko target karta hai." },

    { name: "Dumbbell Bulgarian Split Squat",  
      img: "dumbbell_bulgarian_split_squat", 
      vod: "../data/Glutes/Maximus/dumbbell_bulgarian_split_squat.mp4", 
      difficulty: 6, 
      desc: "Ek pair bench par rakho aur dumbbells haath me pakadkar squat karo — gluteus maximus aur medius engage hote hain." },

    { name: "Dumbbell Sumo Squat",  
      img: "dumbbell_sumo_squat", 
      vod: "../data/Glutes/Maximus/dumbbell_sumo_squat.mp4", 
      difficulty: 5, 
      desc: "Wide stance me dumbbell pakadkar squat karo — gluteus maximus aur medius ke liye effective." },

    { name: "Dumbbell Step-Up",  
      img: "dumbbell_step_up", 
      vod: "../data/Glutes/Maximus/dumbbell_step_up.mp4", 
      difficulty: 5, 
      desc: "Bench par step-up karo dumbbells pakadkar — gluteus maximus aur medius ko activate karta hai." },

    { name: "Dumbbell Glute Kickback",  
      img: "dumbbell_glute_kickback", 
      vod: "../data/Glutes/Maximus/dumbbell_glute_kickback.mp4", 
      difficulty: 4, 
      desc: "Dumbbell ankle me band karke kickback karo — gluteus maximus isolation ke liye." },

    { name: "Dumbbell Single-Leg Deadlift",  
      img: "dumbbell_single_leg_deadlift", 
      vod: "../data/Glutes/Maximus/dumbbell_single_leg_deadlift.mp4", 
      difficulty: 6, 
      desc: "Ek pair support karke dumbbells ke saath deadlift — gluteus stabilizing aur hamstring stretch ke liye." }
  ],

// ==================== Gluteus Medius ====================

  "Gluteus Medius": [
    { name: "Dumbbell Bulgarian Split Squat",  
      img: "dumbbell_bulgarian_split_squat", 
      vod: "../data/Glutes/Medius/dumbbell_bulgarian_split_squat.mp4", 
      difficulty: 6, 
      desc: "Ek pair bench par rakho aur dumbbells haath me pakadkar squat karo — gluteus medius aur maximus engage hote hain." },

    { name: "Dumbbell Sumo Squat",  
      img: "dumbbell_sumo_squat", 
      vod: "../data/Glutes/Medius/dumbbell_sumo_squat.mp4", 
      difficulty: 5, 
      desc: "Wide stance me dumbbell pakadkar squat karo — gluteus maximus aur medius ke liye effective." },

    { name: "Dumbbell Step-Up",  
      img: "dumbbell_step_up", 
      vod: "../data/Glutes/Medius/dumbbell_step_up.mp4", 
      difficulty: 5, 
      desc: "Bench par step-up karo dumbbells pakadkar — gluteus maximus aur medius ko activate karta hai." },

    { name: "Dumbbell Lateral Walk",  
      img: "dumbbell_lateral_walk", 
      vod: "../data/Glutes/Medius/dumbbell_lateral_walk.mp4", 
      difficulty: 4, 
      desc: "Dumbbell hold kar ke side-step karo — side glutes ko activate karta hai." },

    { name: "Dumbbell Single-Leg Deadlift",  
      img: "dumbbell_single_leg_deadlift", 
      vod: "../data/Glutes/Medius/dumbbell_single_leg_deadlift.mp4", 
      difficulty: 6, 
      desc: "Ek pair support karke dumbbells ke saath deadlift — gluteus stabilizing aur hamstring stretch ke liye." }
  ],


// ==================== Gluteus Minimus ====================

  "Gluteus Minimus": [
    { name: "Dumbbell Lateral Walk",  
      img: "dumbbell_lateral_walk", 
      vod: "../data/Glutes/Minimus/dumbbell_lateral_walk.mp4", 
      difficulty: 4, 
      desc: "Dumbbell hold kar ke side-step karo — side glutes ko activate karta hai." },

    { name: "Dumbbell Clamshell",  
      img: "dumbbell_clamshell", 
      vod: "../data/Glutes/Minimus/dumbbell_clamshell.mp4", 
      difficulty: 3, 
      desc: "Side lying me dumbbell ankle par rakho aur knees open-close karo — side glutes isolation ke liye." }
  ]
},

  // ==================== LEGS ====================
  "Legs": {
    "All": [
      { name: "Dumbbell Squat", img: "DumbbellSquat.webp", vod: "../data/Dumbbell/Legs/DumbbellSquat.mp4", desc: "Quadriceps & glutes." },
      { name: "Lunge", img: "Lunge.webp", vod: "../data/Dumbbell/Legs/Lunge.mp4", desc: "Quads & hamstrings." }
    ],
    "Quadriceps": [
      { name: "Dumbbell Squat", img: "DumbbellSquat.webp", vod: "../data/Dumbbell/Legs/DumbbellSquat.mp4", desc: "Quads." },
      { name: "Front Lunge", img: "FrontLunge.webp", vod: "../data/Dumbbell/Legs/FrontLunge.mp4", desc: "Quadriceps focus." }
    ],
    "Hamstrings": [
      { name: "Romanian Deadlift", img: "RDL.webp", vod: "../data/Dumbbell/Legs/RDL.mp4", desc: "Hamstrings & glutes." },
      { name: "Lunge", img: "Lunge.webp", vod: "../data/Dumbbell/Legs/Lunge.mp4", desc: "Hamstrings & quads." }
    ]
  },

  // ==================== SHOULDERS ====================
  "Shoulders": {
    "All": [
      { name: "Dumbbell Shoulder Press", img: "ShoulderPress.webp", vod: "../data/Dumbbell/Shoulders/ShoulderPress.mp4", desc: "Overall shoulder." },
      { name: "Lateral Raise", img: "LateralRaise.webp", vod: "../data/Dumbbell/Shoulders/LateralRaise.mp4", desc: "Side delts." }
    ],
    "Front Delts": [
      { name: "Front Raise", img: "FrontRaise.webp", vod: "../data/Dumbbell/Shoulders/FrontRaise.mp4", desc: "Front deltoids." },
      { name: "Arnold Press", img: "ArnoldPress.webp", vod: "../data/Dumbbell/Shoulders/ArnoldPress.mp4", desc: "Front & side delts." }
    ],
    "Side Delts": [
      { name: "Lateral Raise", img: "LateralRaise.webp", vod: "../data/Dumbbell/Shoulders/LateralRaise.mp4", desc: "Side delts." },
      { name: "Upright Row", img: "UprightRow.webp", vod: "../data/Dumbbell/Shoulders/UprightRow.mp4", desc: "Side & traps." }
    ],
    "Rear Delts": [
      { name: "Reverse Fly", img: "ReverseFly.webp", vod: "../data/Dumbbell/Shoulders/ReverseFly.mp4", desc: "Rear delts focus." },
      { name: "Face Pull", img: "FacePull.webp", vod: "../data/Dumbbell/Shoulders/FacePull.mp4", desc: "Rear delts & traps." }
    ]
  },
  }};










  
// ======================
// DOCUMENT READY
// ======================
document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const muscleParam = params.get("muscle");

    if (!type || !muscleParam) {
        showMuscleSelection(contentArea);
    } else {
        showMuscleExercises(type, muscleParam, contentArea);
    }
});

// ======================
// SHOW MUSCLE SELECTION
// ======================
function showMuscleSelection(container) {
    container.innerHTML = '';
    const type = new URLSearchParams(window.location.search).get("type") || "Body Weight";
    const muscles = Object.keys(exercisesData[type]);
    const wrapper = document.createElement('div');
    wrapper.className = 'muscle-group-container';

    muscles.forEach(m => {
        const card = document.createElement('div');
        card.className = 'muscle-card';
        card.innerHTML = `
            <a href="muscle.html?type=${encodeURIComponent(type)}&muscle=${encodeURIComponent(m)}">
                <img src="../data/Mussels/${muscleImageMap[m]}/${muscleImageMap[m]}.webp" alt="${m}">
                <h3>${m}</h3>
            </a>
        `;
        wrapper.appendChild(card);
    });

    container.appendChild(wrapper);
}

// ======================
// SHOW EXERCISES WITH SORT OPTION
// ======================
function showMuscleExercises(type, muscle, container) {
    container.innerHTML = '';
    const categories = exercisesData[type][muscle];
    if (!categories) {
        container.innerHTML = "<p style='text-align:center; padding:20px;'>No exercises found.</p>";
        return;
    }

    // Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.id = 'category-tabs';
    const categoryNames = Object.keys(categories);
    categoryNames.forEach((cat, index) => {
        const tab = document.createElement('div');
        tab.className = 'category-tab';
        if (index === 0) tab.classList.add('active');
        tab.textContent = cat;

        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderExercises(categories[cat]);
        });

        tabsDiv.appendChild(tab);
    });
    container.appendChild(tabsDiv);

    // Sort dropdown
    const sortDiv = document.createElement('div');
    sortDiv.style.textAlign = 'center';
    sortDiv.style.margin = '10px 0';
    sortDiv.innerHTML = `
        <select id="exercise-sort">
            <option value="default">Default</option>
            <option value="a-z">A → Z</option>
            <option value="z-a">Z → A</option>
            <option value="easy-hard">Easy → Hard</option>
            <option value="hard-easy">Hard → Easy</option>
        </select>
    `;
    
    container.appendChild(sortDiv);

    // Render exercises with sort
    const renderExercises = (exList) => {
        const sortValue = document.getElementById('exercise-sort').value;
        let exercises = [...exList];

        // Sort by name
        if (sortValue === 'a-z') exercises.sort((a,b) => a.name.localeCompare(b.name));
        else if (sortValue === 'z-a') exercises.sort((a,b) => b.name.localeCompare(a.name));
        // Sort by difficulty if ex.desc has "Easy", "Medium", "Hard"
        else if (sortValue === 'easy-hard') exercises.sort((a,b) => difficultyRank(a) - difficultyRank(b));
        else if (sortValue === 'hard-easy') exercises.sort((a,b) => difficultyRank(b) - difficultyRank(a));

        showExercises(exercises, type, muscle);
    };

    // Difficulty helper
    const difficultyRank = (ex) => ex.difficulty || 2; // default medium


    document.getElementById('exercise-sort').addEventListener('change', () => {
        const activeTab = document.querySelector('.category-tab.active').textContent;
        renderExercises(categories[activeTab]);
    });

    // Initial render
    renderExercises(categories[categoryNames[0]]);
}




// ======================
// DISPLAY EXERCISES + LIGHTBOX
// ======================
function showExercises(exercises, type, muscle) {
    const gallery = document.getElementById('exercise-gallery') || document.createElement('div');
    gallery.id = 'exercise-gallery';
    gallery.className = 'exercise-gallery';
    gallery.innerHTML = '';

    // ✅ Use central folder mapping
    let folderName = folderMapping[type]?.[muscle] || muscle;

   exercises.forEach((ex, index) => {
    const card = document.createElement('div');
    card.className = 'exercise-card';

    // Agar img hai to use show karo, nahi to default play icon
    const thumb = ex.img ? `../data/${type}/${folderName}/${ex.img}` : "../data/default-play.png";

    card.innerHTML = `
        <img src="${thumb}" alt="${ex.name}">
        <h3>${ex.name}</h3>
    `;

    // Click on card, not just img
    card.addEventListener('click', () => {
        openLightbox(exercises, type, folderName, index);
    });

    gallery.appendChild(card);
});


    if (!document.getElementById('exercise-gallery'))
        document.getElementById('content-area').appendChild(gallery);

    let lightbox = document.getElementById('exercise-lightbox');
    if(!lightbox) lightbox = createLightbox();

    gallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => openLightbox(exercises, type, folderName, parseInt(img.dataset.index)));
    });
}

// ======================
// CREATE LIGHTBOX
// ======================
// ======================
// CREATE LIGHTBOX WITH LOOP BUTTON
// ======================
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'exercise-lightbox';
    lightbox.style.display = 'none';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span id="lightbox-close">&times;</span>
            <div id="lightbox-desc" style="color:white; text-align:center; margin-bottom:10px; font-size:1rem; max-height:150px; overflow-y:auto;"></div>
            
            <video id="lightbox-video" controls style="max-width:100%; max-height:70vh; border-radius:10px; display:none;"></video>
            <img id="lightbox-img" src="" alt="" style="display:none; margin-top:10px;">
            <h3 id="lightbox-name" style="margin-top:10px;"></h3>
            
            <div style="margin-top:10px;">
                <button id="prev-exercise">Prev</button>
                <button id="next-exercise">Next</button>
                <button id="loop-toggle">Loop: Off</button>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const video = document.getElementById('lightbox-video');
    const loopBtn = document.getElementById('loop-toggle');

    // Close lightbox
    document.getElementById('lightbox-close').addEventListener('click', () => {
        lightbox.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    // Toggle loop button
    loopBtn.addEventListener('click', () => {
        video.loop = !video.loop;
        loopBtn.textContent = `Loop: ${video.loop ? "On" : "Off"}`;
    });

    return lightbox;
}

// ======================
// OPEN LIGHTBOX
// ======================
function openLightbox(exercises, type, folderName, index) {
    const lightbox = document.getElementById('exercise-lightbox');
    const video = document.getElementById('lightbox-video');
    const img = document.getElementById('lightbox-img');
    const name = document.getElementById('lightbox-name');
    const desc = document.getElementById('lightbox-desc');
    const loopBtn = document.getElementById('loop-toggle');

    let currentIndex = index;
    let isLooping = false; // loop state track

    function showExercise(i) {
        const ex = exercises[i];
        name.textContent = ex.name || "";
        desc.textContent = ex.desc || "";

        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        img.style.display = 'none';

        // Reset loop state for new video
        video.loop = isLooping;

        if (ex.vod) {
            video.src = ex.vod;
            video.style.display = 'block';
            video.play().catch(err => console.error(err));

            video.onended = () => {
                if (!isLooping) {
                    // Loop off → next exercise
                    currentIndex = (currentIndex + 1) % exercises.length;
                    showExercise(currentIndex);
                }
            };
        } else if (ex.img) {
            img.src = `../data/${type}/${folderName}/${ex.img}`;
            img.style.display = 'block';
            video.onended = null;
        }
    }

    // Navigation buttons
    document.getElementById('prev-exercise').onclick = () => {
        currentIndex = (currentIndex - 1 + exercises.length) % exercises.length;
        showExercise(currentIndex);
    };
    document.getElementById('next-exercise').onclick = () => {
        currentIndex = (currentIndex + 1) % exercises.length;
        showExercise(currentIndex);
    };

    // Loop button
    loopBtn.onclick = () => {
        isLooping = !isLooping;
        video.loop = isLooping;
        loopBtn.textContent = `Loop: ${isLooping ? "On" : "Off"}`;
    };

    showExercise(currentIndex);
    lightbox.style.display = 'flex';
}


