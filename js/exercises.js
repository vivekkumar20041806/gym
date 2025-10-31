
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
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "Core",
        "Legs": "Hamstrings",
        "Back": "Lats",
        "Glutes": "Glutes",
        "Shoulders": "Shoulders"
    },
    "Dumbbell": {
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "Core",
        "Legs": "Hamstrings",
        "Back": "Lats",
        "Glutes": "Glutes",
        "Shoulders":"Shoulders"
    },
    "Barbell": {
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "Core",
        "Legs": "Hamstrings",
        "Back": "Lats",
        "Glutes": "Glutes",
        "Shoulders": "Shoulders"
    },


    "Machines": {
        "Chest": "Chest",
        "Arms": "Arms",
        "Core": "Core",
        "Legs": "Hamstrings",
        "Back": "Lats",
        "Glutes": "Glutes",
        "Shoulders":"Shoulders"
    },
};

// ======================
// DOCUMENT READY
// ======================

async function fetchExercises(type, muscle){
    const res = await fetch(`http://localhost:3000/api/exercises?type=${type}&muscle=${muscle}`);
    const exercises = await res.json();
    showExercises(exercises, type, muscle); // Existing showExercises function
}


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

const title = document.getElementById('muscle-title');
const type = new URLSearchParams(window.location.search).get("type") || "Body Weight";

// Check if current type changed
if (title.dataset.currentType !== type) {
    const headerImageMap = {
        "Body Weight": "../asset/O1.webp",
        "Dumbbell": "../asset/dumbbell.png",
        "Barbell": "../asset/D-Barbell.webp",
        "Cardio": "../asset/cardio.webp",
        "Machines": "../asset/D2.webp"
    };

    if (headerImageMap[type]) {
        // ✅ Image on LEFT
        title.innerHTML = `<img src="${headerImageMap[type]}" alt="${type}" style="height:50px; margin-right:10px; vertical-align:middle;"> Select ${type} Workout`;
    } else {
        title.textContent = `Select ${type} Muscle`;
    }

    // Mark current type to avoid duplicate updates
    title.dataset.currentType = type;
}



    // Muscles for this type
    const muscles = Object.keys(exercisesData[type] || {});
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




if(container) { showMuscleSelection(container); }

// ======================
// RUN ONLY IF MUSCLE CONTAINER EXISTS
// ======================
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('muscle-container');
    if(container) {   // ✅ check if container exists
        showMuscleSelection(container);
    }
});






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

    // Difficulty helper
    const difficultyRank = (ex) => ex.difficulty || 5;

    // Render exercises
    const renderExercises = (exList) => {
        const sortValue = document.getElementById('exercise-sort').value;
        let exercises = [...exList];

        if (sortValue === 'a-z') exercises.sort((a,b) => a.name.localeCompare(b.name));
        else if (sortValue === 'z-a') exercises.sort((a,b) => b.name.localeCompare(a.name));
        else if (sortValue === 'easy-hard') exercises.sort((a,b) => difficultyRank(a) - difficultyRank(b));
        else if (sortValue === 'hard-easy') exercises.sort((a,b) => difficultyRank(b) - difficultyRank(a));

        showExercises(exercises, type, muscle);
    };

    document.getElementById('exercise-sort').addEventListener('change', () => {
        const activeTab = document.querySelector('.category-tab.active').textContent;
        renderExercises(categories[activeTab]);
    });

    // Initial render
    renderExercises(categories[categoryNames[0]]);
}



// ======================
// DISPLAY EXERCISES + PREVIEW (VCROP FROM JS)
// ======================
function showExercises(exercises, type, muscle) {
    const gallery = document.getElementById('exercise-gallery') || document.createElement('div');
    gallery.id = 'exercise-gallery';
    gallery.className = 'exercise-gallery';
    gallery.innerHTML = '';

    let folderName = folderMapping[type]?.[muscle] || muscle;

    exercises.forEach((ex, index) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';

        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';
        previewContainer.style.position = 'relative';
        previewContainer.style.overflow = 'hidden';

        let mediaElement;

        // Local Video
        if (ex.vod) {
            const vid = document.createElement('video');
            vid.src = ex.vod;
            vid.autoplay = true;
            vid.muted = true;
            vid.playsInline = true;
            vid.loop = false;
            vid.className = 'preview-media';
            mediaElement = vid;
            previewContainer.appendChild(vid);

      vid.addEventListener('timeupdate', () => {
    // Agar video 8 sec se zyada lambi hai -> 8 sec pe restart
    // Agar chhoti hai -> apne end pe restart
    const loopLimit = Math.min(8, vid.duration - 0.1);

    if (vid.duration && vid.currentTime >= loopLimit) {
        vid.currentTime = 0;
        vid.play();
    }
});


        }

        // Image
        else if (ex.img) {
            const img = document.createElement('img');
            img.src = `../data/${type}/${folderName}/${ex.img}`;
            img.className = 'preview-media';
            mediaElement = img;
            previewContainer.appendChild(img);
        }

        // Online Embed / YouTube
        else if (ex.embed) {
            const iframe = document.createElement('iframe');
            iframe.className = 'preview-media preview-iframe';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
            iframe.style.border = 'none';
            iframe.style.pointerEvents = 'none';
            previewContainer.appendChild(iframe);

            let vidId = '';
            if (ex.embed.includes('youtu.be')) vidId = ex.embed.split('/')[3].split('?')[0];
            else if (ex.embed.includes('watch')) vidId = (ex.embed.split('v=')[1] || '').split('&')[0];
            else if (ex.embed.includes('embed/')) vidId = ex.embed.split('embed/')[1].split('?')[0];

            if (vidId) {
                iframe.src = `https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${vidId}`;
            }
        }

        // Apply VCROP from JS values (only local video/image)
        if (mediaElement && (ex.vod || ex.img)) {
            const x = ex.vCropX || 0;
            const y = ex.vCropY || 0;
            const z = (ex.vZoom || 100) / 100;

            mediaElement.style.position = 'absolute';
            mediaElement.style.top = '50%';
            mediaElement.style.left = '50%';
            mediaElement.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${z})`;
            mediaElement.style.width = '100%';
            mediaElement.style.height = '100%';
            mediaElement.style.objectFit = 'contain';
        }

        // Overlay click for lightbox
        const clickOverlay = document.createElement('button');
        clickOverlay.className = 'preview-click-overlay';
        clickOverlay.setAttribute('aria-label', `Open ${ex.name}`);
        clickOverlay.addEventListener('click', (ev) => {
            ev.stopPropagation();
            openLightbox(exercises, type, folderName, index);
        });
        previewContainer.appendChild(clickOverlay);

        const title = document.createElement('h3');
        title.textContent = ex.name || '';

        card.appendChild(previewContainer);
        card.appendChild(title);
        gallery.appendChild(card);
    });

    if (!document.getElementById('exercise-gallery'))
        document.getElementById('content-area').appendChild(gallery);

    if (!document.getElementById('exercise-lightbox')) createLightbox();
}



// ======================
// CREATE LIGHTBOX
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
            <iframe id="lightbox-iframe" style="display:none; width:100%; height:400px; border:none; border-radius:10px;"></iframe>
            
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
    const iframe = document.getElementById('lightbox-iframe');

    // Close lightbox
    document.getElementById('lightbox-close').addEventListener('click', () => {
        lightbox.style.display = 'none';
        video.pause();
        video.currentTime = 0;
        iframe.src = "";
        iframe.style.display = 'none';
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
    const iframe = document.getElementById('lightbox-iframe');
    const img = document.getElementById('lightbox-img');
    const name = document.getElementById('lightbox-name');
    const desc = document.getElementById('lightbox-desc');
    const loopBtn = document.getElementById('loop-toggle');
    const prevBtn = document.getElementById('prev-exercise');
    const nextBtn = document.getElementById('next-exercise');

    let currentIndex = index;
    let isLooping = false;

        function showExercise(i) {
        const ex = exercises[i];
        name.textContent = ex.name || "";
        desc.textContent = ex.desc || "";

        // Reset all media
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        iframe.style.display = 'none';
        iframe.src = '';
        img.style.display = 'none';

        // Video autoplay in lightbox
        if (ex.vod) {
            video.src = ex.vod;
            video.style.display = 'block';
            video.loop = isLooping;
            video.autoplay = true;
            video.play().catch(err => console.error(err));
        }
        // YouTube embed autoplay
        else if (ex.embed) {
            iframe.style.display = 'block';
            let videoId;
            if (ex.embed.includes("youtu.be")) {
                videoId = ex.embed.split("/")[3].split("?")[0];
            } else if (ex.embed.includes("youtube.com/watch")) {
                videoId = ex.embed.split("v=")[1].split("&")[0];
            } else if (ex.embed.includes("embed/")) {
                videoId = ex.embed.split("embed/")[1].split("?")[0];
            }
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=${isLooping ? 1 : 0}&playlist=${videoId}`;
        }
        // Image fallback
        else if (ex.img) {
            img.src = `../data/${type}/${folderName}/${ex.img}`;
            img.style.display = 'block';
        }
    }

    // ✅ ADD THIS BELOW showExercise FUNCTION
    video.addEventListener('ended', () => {
        if (!isLooping) {
            currentIndex = (currentIndex + 1) % exercises.length;
            showExercise(currentIndex);
        }
    });

    // ======================
    // BUTTON CONTROLS
    // ======================

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + exercises.length) % exercises.length;
        showExercise(currentIndex);
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % exercises.length;
        showExercise(currentIndex);
    };

    loopBtn.onclick = () => {
        isLooping = !isLooping;
        loopBtn.textContent = `Loop: ${isLooping ? "On" : "Off"}`;
        showExercise(currentIndex); // update loop immediately
    };

    // SHOW FIRST EXERCISE
    showExercise(currentIndex);
    lightbox.style.display = 'flex';
}



// ==========================
// Admin Exercise Management
// ==========================

const form = document.getElementById('exercise-form');
const exerciseList = document.getElementById('exercise-list'); // table/div to show exercises
const categorySelect = document.getElementById('category-select'); // dropdown for type
const muscleSelect = document.getElementById('muscle-select'); // dropdown for muscle
const subMuscleSelect = document.getElementById('sub-muscle-select'); // dropdown for sub-muscle

const API_URL = 'http://localhost:3000/api/exercises'; // backend API

// Fetch all exercises and display
async function loadExercises() {
    const type = categorySelect.value;
    const muscle = muscleSelect.value;
    let url = API_URL;
    if(type && muscle) url += `?type=${encodeURIComponent(type)}&muscle=${encodeURIComponent(muscle)}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    displayExercises(data);
}

// Display exercises in table/cards
function displayExercises(exercises) {
    exerciseList.innerHTML = '';
    if(exercises.length === 0){
        exerciseList.innerHTML = '<p>No exercises found.</p>';
        return;
    }

    exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';

        const title = document.createElement('h3');
        title.textContent = ex.name;

        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';

        // Video / Embed / Image preview
        if(ex.vod){
            const vid = document.createElement('video');
            vid.src = ex.vod;
            vid.autoplay = true;
            vid.loop = true;
            vid.muted = true;
            vid.style.width = '100%';
            vid.style.height = '150px';
            previewContainer.appendChild(vid);
        } else if(ex.embed){
            const iframe = document.createElement('iframe');
            iframe.src = ex.embed;
            iframe.style.width = '100%';
            iframe.style.height = '150px';
            iframe.frameBorder = '0';
            previewContainer.appendChild(iframe);
        } else if(ex.img){
            const img = document.createElement('img');
            img.src = ex.img;
            img.style.width = '100%';
            img.style.height = '150px';
            img.style.objectFit = 'cover';
            previewContainer.appendChild(img);
        }

        card.appendChild(previewContainer);
        card.appendChild(title);

        exerciseList.appendChild(card);
    });
}

// Form submit for add/edit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // convert numeric fields
    payload.difficulty = Number(payload.difficulty) || 5;
    payload.vCropX = Number(payload.vCropX) || 0;
    payload.vCropY = Number(payload.vCropY) || 0;
    payload.vZoom = Number(payload.vZoom) || 100;
    if(payload.id) payload.id = Number(payload.id);

    const res = await fetch('http://localhost:3000/api/exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    if(data.success){
        alert('Saved successfully!');
        form.reset();
        loadExercises(); // refresh list
    } else {
        alert('Error saving exercise.');
        console.log(data);
    }
});

// On dropdown change, reload exercises
categorySelect?.addEventListener('change', loadExercises);
muscleSelect?.addEventListener('change', loadExercises);
subMuscleSelect?.addEventListener('change', loadExercises);

// Initial load
loadExercises();
