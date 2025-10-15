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



 



  "Dumbbell": {
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
// SHOW EXERCISES
// ======================
function showMuscleExercises(type, muscle, container) {
    container.innerHTML = '';
    const categories = exercisesData[type][muscle];
    if (!categories) {
        container.innerHTML = "<p style='text-align:center; padding:20px;'>No exercises found.</p>";
        return;
    }

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
            showExercises(categories[cat], type, muscle);
        });
        tabsDiv.appendChild(tab);
    });
    container.appendChild(tabsDiv);

    showExercises(categories[categoryNames[0]], type, muscle);
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
