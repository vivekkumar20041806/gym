// Food data
const foodData = {
  // ==============================
  // VEGETABLES CATEGORY START
  // ==============================
  "Vegetables": [
    { 
      name: "Spinach", 
      calories: 23, 
      protein: 2.9, 
      fat: 0.4,
      fiber: 2.2, 
      vitaminA: "469 µg", 
      vitaminC: "28 mg",
      media: { type: "image", src: "../asset/foods/spinach.jpg" },
      namePosition: "top"
    },
    { 
      name: "Carrot", 
      calories: 41, 
      protein: 0.9, 
      fat: 0.2,
      fiber: 2.8, 
      vitaminA: "835 µg", 
      vitaminC: "5.9 mg",
      media: { type: "video", src: "../asset/foods/carrot.mp4" },
      namePosition: "bottom"
    },
    // Add more vegetables here
  ],

  // ==============================
  // FRUITS CATEGORY START
  // ==============================
  "Fruits": [
    { 
      name: "Apple", 
      calories: 52, 
      protein: 0.3, 
      fat: 0.2,
      fiber: 2.4, 
      vitaminA: "54 µg", 
      vitaminC: "4.6 mg",
      media: { type: "image", src: "../asset/foods/apple.jpg" },
      namePosition: "bottom"
    },
    { 
      name: "Mango", 
      calories: 60, 
      protein: 0.8, 
      fat: 0.4,
      fiber: 1.6, 
      vitaminA: "54 µg", 
      vitaminC: "36 mg",
      media: { type: "image", src: "../asset/foods/mango.jpg" },
      namePosition: "bottom"
    },
    // Add more fruits here
  ],

  // ==============================
  // NON-VEGETARIAN CATEGORY START
  // ==============================
  "Non-Vegetarian": [
    {
      name: "Chicken Breast",
      calories: 165,
      protein: 31,
      fat: 3.6,
      fiber: 0,
      vitaminA: "13 µg",
      vitaminC: "0 mg",
      media: { type: "image", src: "../asset/foods/chicken_breast.jpg" },
      namePosition: "top"
    },
    {
      name: "Salmon",
      calories: 208,
      protein: 20,
      fat: 13,
      fiber: 0,
      vitaminA: "50 µg",
      vitaminC: "0 mg",
      media: { type: "video", src: "../asset/foods/salmon.mp4" },
      namePosition: "bottom"
    },
    {
      name: "Egg",
      calories: 155,
      protein: 13,
      fat: 11,
      fiber: 0,
      vitaminA: "140 µg",
      vitaminC: "0 mg",
      media: { type: "image", src: "../asset/foods/egg.jpg" },
      namePosition: "top"
    },
    // Add more non-veg items here
  ],

  // ==============================
  // ADD NEW CATEGORY BELOW THIS COMMENT
  // Example: "Dairy": [ { name: "...", calories: ..., fat: ..., media: {...}, namePosition: "top" }, ... ]
  // ==============================
};
















// ==============================
// Container
// ==============================
const contentArea = document.getElementById('content-area');

// ==============================
// Create category buttons
// ==============================
const categoryDiv = document.createElement('div');
categoryDiv.className = 'category-container';
categoryDiv.style.textAlign = 'center';
categoryDiv.style.marginBottom = '20px';

Object.keys(foodData).forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'category-btn';
  btn.textContent = cat;
  btn.addEventListener('click', () => showTable(cat));
  categoryDiv.appendChild(btn);
});

contentArea.appendChild(categoryDiv);

// ==============================
// Show table function
// ==============================
function showTable(category) {
  // Remove previous table
  const oldTable = document.getElementById('food-table');
  if(oldTable) oldTable.remove();

  // Create new table
  const table = document.createElement('table');
  table.id = 'food-table';
  table.className = 'food-table';

  // Header row
  const header = table.insertRow();
  ["Food & Media", "Calories","Protein(g)","Fat(g)","Fiber(g)","Vitamin A","Vitamin C"].forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    header.appendChild(th);
  });

  // Rows
  foodData[category].forEach(food => {
    const row = table.insertRow();

    // Food + Media
    const mediaCell = row.insertCell();
    mediaCell.style.textAlign = "center";

    if(food.namePosition === "top") {
      const nameDiv = document.createElement('div');
      nameDiv.textContent = food.name;
      nameDiv.style.marginBottom = "5px";
      nameDiv.className = "food-name";
      mediaCell.appendChild(nameDiv);
    }

    if(food.media) {
      if(food.media.type === "image") {
        const img = document.createElement('img');
        img.src = food.media.src;
        img.alt = food.name;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.borderRadius = "8px";
        mediaCell.appendChild(img);
      } else if(food.media.type === "video") {
        const video = document.createElement('video');
        video.src = food.media.src;
        video.width = 120;
        video.height = 80;
        video.controls = true;
        mediaCell.appendChild(video);
      }
    }

    if(food.namePosition === "bottom") {
      const nameDiv = document.createElement('div');
      nameDiv.textContent = food.name;
      nameDiv.style.marginTop = "5px";
      nameDiv.className = "food-name";
      mediaCell.appendChild(nameDiv);
    }

    // Nutrition cells
    row.insertCell().textContent = food.calories;
    row.insertCell().textContent = food.protein;
    row.insertCell().textContent = food.fat;
    row.insertCell().textContent = food.fiber;
    row.insertCell().textContent = food.vitaminA;
    row.insertCell().textContent = food.vitaminC;
  });

  contentArea.appendChild(table);
}
