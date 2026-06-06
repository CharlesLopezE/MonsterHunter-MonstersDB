let currentBaseMonsters = baseWildsMonsters;

function showBaseLargeMonsters() {
    currentBaseMonsters = baseLargeMonsters;
    displayBaseMonsters(currentBaseMonsters);

    document.querySelector("h2").textContent =
        "Base Monster Hunter Wilds";

}

function showBaseSmallMonsters() {
    currentBaseMonsters = baseSmallMonsters;
    displayBaseMonsters(currentBaseMonsters);

    document.querySelector("h2").textContent =
        "Base Monster Hunter Wilds";

}

let currentExpansionMonsters = expansionWildsMonsters;

function showExpansionLargeMonsters() {
    currentExpansionMonsters = expansionLargeMonsters;
    displayExpansionMonsters(currentExpansionMonsters);

    document.querySelector("h3").textContent =
        "Monster Hunter Wilds Expansion";

}

function showExpansionSmallMonsters() {
    currentExpansionMonsters = expansionSmallMonsters;
    displayExpansionMonsters(currentExpansionMonsters);

    document.querySelector("h3").textContent =
        "Monster Hunter Wilds Expansion";

}

/*Toggle sidebar*/
function toggleSidebar() {
    const nav = document.querySelector("nav");
    const button = document.getElementById("sidebarToggle");
    nav.classList.toggle("collapsed");

    if (nav.classList.contains("collapsed")) {
        button.textContent = "❯";
        button.style.left = "0px";
    }
    else {
        button.textContent = "❮";
        button.style.left = "260px";
    }
}

const baseMonsterGrid =
    document.getElementById("baseMonsterGrid");
/* =========================
   DISPLAY BASE MONSTERS
========================= */
function displayBaseMonsters(monstersToDisplay) {
    baseMonsterGrid.innerHTML = "";
    monstersToDisplay.forEach(monster => {

        baseMonsterGrid.innerHTML += `
            <div class="monster-card">
                <div
                    class="monster-image"
                    data-name="${monster.name}"
                    data-species="${monster.species}"
                    data-rank="${monster.rank}">
                    <img
                        src="${monster.image}"
                        alt="${monster.name}">
                </div>
                <div class="monster-name">
                    <a href="infopage-wilds.html">${monster.name}</a>
                    <div class="monster-species">
                        <span class="info-label"> Species:</span>
                        
                        <span class="info-value">${monster.species}</span>
                    </div>
                    <div class="monster-rank">
                        <span class="info-label">Rank:</span>
                        
                        <span class="info-value-rank">${monster.rank}</span>
                    </div>
                </div>
            </div>
        `;
    });
}
displayBaseMonsters(baseWildsMonsters);

const expansionMonsterGrid =
    document.getElementById("expansionMonsterGrid");
/* =========================
   DISPLAY EXPANSION MONSTERS
========================= */
function displayExpansionMonsters(monstersToDisplay) {
    expansionMonsterGrid.innerHTML = "";
    monstersToDisplay.forEach(monster => {

        expansionMonsterGrid.innerHTML += `
            <div class="monster-card">
                <div
                    class="monster-image"
                    data-name="${monster.name}"
                    data-species="${monster.species}"
                    data-rank="${monster.rank}">
                    <img
                        src="${monster.image}"
                        alt="${monster.name}">
                </div>
                <div class="monster-name">
                    ${monster.name}
                    <div class="monster-species">
                        <span class="info-label"> Species:</span>
                        
                        <span class="info-value">${monster.species}</span>
                    </div>
                    <div class="monster-rank">
                        <span class="info-label">Rank:</span>
                        
                        <span class="info-value-rank">${monster.rank}</span>
                    </div>
                </div>
            </div>
        `;
    });
}
displayExpansionMonsters(expansionWildsMonsters);
/* =========================
   SEARCH
========================= */
function searchBaseMonster() {
    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredMonsters =
        currentBaseMonsters.filter(monster =>
            monster.name
                .toLowerCase()
                .includes(input)
        );
    displayBaseMonsters(filteredMonsters);
}
function searchExpansionMonster() {
    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredMonsters =
        currentExpansionMonsters.filter(monster =>
            monster.name
                .toLowerCase()
                .includes(input)
        );
    displayExpansionMonsters(filteredMonsters);
}
/* =========================
   DROPDOWN
========================= */
function toggleDropdown() {
    document
        .getElementById("sortDropdown")
        .classList
        .toggle("open");
}

document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
        document
            .getElementById("sortDropdown")
            .classList
            .remove("open");
    }
});

/* =====================================
   SORTING BASE + EXPANSION MONSTERS
======================================*/
function sortBaseMonsters(method) {
    let sorted = [...currentBaseMonsters];

    if (method === "name") {

        sorted.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }
    else if (method === "name-desc") {

        sorted.sort((a, b) =>
            b.name.localeCompare(a.name)
        );

    }
    displayBaseMonsters(sorted);
}
function sortExpansionMonsters(method) {
    let sorted = [...currentExpansionMonsters];
    if (method === "name") {

        sorted.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }
    else if (method === "name-desc") {

        sorted.sort((a, b) =>
            b.name.localeCompare(a.name)
        );

    }
    displayExpansionMonsters(sorted);
}

function sortBy(method) {
    sortBaseMonsters(method);
    sortExpansionMonsters(method);

    document
        .getElementById("sortDropdown")
        .classList
        .remove("open");
}