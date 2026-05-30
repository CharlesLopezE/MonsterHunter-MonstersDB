let currentMonsters = largeMonsters;

function showLargeMonsters() {

    currentMonsters = largeMonsters;

    displayMonsters(currentMonsters);

    document.querySelector("h2").textContent =
        "Large Monsters";

}

function showSmallMonsters() {

    currentMonsters = smallMonsters;

    displayMonsters(currentMonsters);

    document.querySelector("h2").textContent =
        "Small Monsters";

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

const monsterGrid =
    document.getElementById("monsterGrid");
/* =========================
   DISPLAY MONSTERS
========================= */
function displayMonsters(monstersToDisplay) {
    monsterGrid.innerHTML = "";
    monstersToDisplay.forEach(monster => {

        monsterGrid.innerHTML += `
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
displayMonsters(largeMonsters);
/* =========================
   SEARCH
========================= */
function searchMonster() {
    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredMonsters =
        currentMonsters.filter(monster =>
            monster.name
                .toLowerCase()
                .includes(input)
        );
    displayMonsters(filteredMonsters);
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

/* =========================
   SORTING
========================= */
function sortBy(method) {

    const cards =
        Array.from(
            document.querySelectorAll('.monster-card')
        );
    /* NAME A-Z */
    if (method === 'name') {
        cards.sort((a, b) => {
            const nameA =
                a.querySelector('.monster-image')
                    .dataset.name
                    .toLowerCase();
            const nameB =
                b.querySelector('.monster-image')
                    .dataset.name
                    .toLowerCase();
            return nameA.localeCompare(nameB);
        });
        monsterGrid.innerHTML = "";
        cards.forEach(card => {
            monsterGrid.appendChild(card);
        });
    }
    /* NAME Z-A */
    else if (method === 'name-desc') {
        cards.sort((a, b) => {
            const nameA =
                a.querySelector('.monster-image')
                    .dataset.name
                    .toLowerCase();
            const nameB =
                b.querySelector('.monster-image')
                    .dataset.name
                    .toLowerCase();
            return nameB.localeCompare(nameA);
        });

        monsterGrid.innerHTML = "";

        cards.forEach(card => {
            monsterGrid.appendChild(card);
        });
    }

    document
        .getElementById('sortDropdown')
        .classList
        .remove('open');
}