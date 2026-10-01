/*
   Author: Jennie Nguyen
   Date: 10/01/2026
   Purpose: A public park trail webpage to help visitors discover hiking trails based on their experience level.
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    // 3 additional trails
    { name: "Old Rag Mountain Loop - JENNGU8864", difficulty: "high", time: 400 },
    { name: "Rose River Trail", difficulty: "medium", time: 180 },
    { name: "River Trail Loop", difficulty: "medium", time: 120 }
];

/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */

const trailContainer = document.getElementById("trailContainer");

trails.forEach(trail => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${trail.name}</h3>
        <p>Difficulty: ${trail.difficulty}</p>
        <p>Estimated Time: ${trail.time} minutes</p>
    `;
    trailContainer.appendChild(card);
});

/* =========================================
   TODO: FORM LOGIC
========================================= */

const trailForm = document.getElementById("trailForm");
const resultAside = document.getElementById("result");

trailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const petOption = document.querySelector('input[name="pets"]:checked');
    const experienceLevel = document.getElementById("experience").value;

    if (!petOption || !experienceLevel) {
        resultAside.innerHTML = "<p>Please select all options.</p>";
        return;
    }

    const bringingPets = petOption.value === "yes";
    let recommendedTrail = "";

    // Conditional evaluation guidelines
    if (bringingPets && experienceLevel === "low") {
        recommendedTrail = "River Walk";
    } else if (bringingPets && (experienceLevel === "medium" || experienceLevel === "high")) {
        recommendedTrail = "Forest Loop";
    } else if (!bringingPets && experienceLevel === "low") {
        recommendedTrail = "Lake Side Path";
    } else if (!bringingPets && experienceLevel === "medium") {
        recommendedTrail = "Forest Loop";
    } else if (!bringingPets && experienceLevel === "high") {
        recommendedTrail = "Rock Ridge Trail";
    } else {
        recommendedTrail = "River Walk"; // Default fallback
    }

    resultAside.innerHTML = `<h3>Recommended Trail: ${recommendedTrail}</h3>`;
});