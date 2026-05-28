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
displayMonsters(monsters);
/* =========================
   SEARCH
========================= */
function searchMonster() {
    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredMonsters =
        monsters.filter(monster =>
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