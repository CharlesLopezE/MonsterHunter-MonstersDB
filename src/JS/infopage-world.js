/*==================Monster ID Loader====================*/
const params =
    new URLSearchParams(
        window.location.search
    );

const monsterId =
    parseInt(params.get("id"));

const monster =
    baseWorldMonsters.find(
        monster => monster.id === monsterId
    );
document.getElementById("monsterTitle")
    .textContent =
        `Information: ${monster.name}`;


/*==================Monster Rank Drop Scroller====================*/
const ranks = [
    "Low",
    "High",
    "Master"
];

let currentRankIndex = 0;

document
    .getElementById("prevRank")
    .addEventListener("click", () => {
        currentRankIndex--;

        if (currentRankIndex < 0)
            currentRankIndex =
                ranks.length - 1;
        displayDrops();
    });

document
    .getElementById("nextRank")
    .addEventListener("click", () => {
        currentRankIndex++;

        if (currentRankIndex >= ranks.length)
            currentRankIndex = 0;

        displayDrops();
    });

let allDrops = [];

/*==================Monster Rank Drops Display====================*/

async function loadMonsterDrops() {
    console.log("Monster ID:", monsterId);

    const { data, error } = await supabaseClient
        .from("monster_drops-world")
        .select("*")
        .eq("monster_id", monsterId);

    console.log("Returned Data:", data);
    console.log("Returned Error:", error);

    if (error) {
        return;
    }

    allDrops = data;

    displayDrops();
}

loadMonsterDrops();

function displayDrops() {

    const rank =
        ranks[currentRankIndex];

    document.getElementById("rankTitle")
        .textContent =
        `${rank} Rank Drops`;

    const tbody =
        document.getElementById("dropTableBody");

    tbody.innerHTML = "";

    const drops =
        allDrops.filter(drop =>
            drop.rank === rank
        );

    drops.forEach(drop => {
        tbody.innerHTML += `
            <tr>
                <td>${drop.method}</td>
                <td>${drop.drop_type}</td>
                <td>${drop.item_name}</td>
                <td>${drop.rate}</td>
            </tr>
        `;
    });
}

/*==================Monsters Stats Display====================*/

let allStats = [];

async function loadMonsterStats() {
    console.log("Monster ID:", monsterId);

    const { data, error } = await supabaseClient
        .from("monster_stats-world")
        .select("*")
        .eq("monster_id", monsterId);

    console.log("Returned Data:", data);
    console.log("Returned Error:", error);

    if (error) {
        return;
    }

    allStats = data;

    displayStats();
    displayStats2();
    displayStats3();
    displayDescription();
}

loadMonsterStats();

function displayStats() {

    const tbody =
        document.getElementById("statsTableBody1");

    tbody.innerHTML = "";

    const stats =
        allStats.forEach(stat => {
        tbody.innerHTML += `
            <tr>
                <td>${stat.element}</td>
                <td>${stat.status_effect}</td>
                <td>${stat.weakness}</td>
                <td>${stat.capture_hp}</td>
                <td>${stat.limp_hp}</td>
            </tr>
        `;
    });
}

function displayStats2() {
    const tbody =
        document.getElementById("statsTableBody2");
    
    tbody.innerHTML = "";

    const stats =
        allStats.forEach(stat => {
        tbody.innerHTML += `
            <tr>
                <td>${stat.s_gold_crown}</td>
                <td>${stat.avg_size}</td>
                <td>${stat.silver_crown}</td>
                <td>${stat.l_gold_crown}</td>
            </tr>
        `;
    });    
}

function displayStats3() {
    const tbody =
        document.getElementById("statsTableBody3");
    
    tbody.innerHTML = "";

    const stats =
        allStats.forEach(stat => {
        tbody.innerHTML += `
            <tr>
                <td>${stat.locales}</td>
                <td>${stat.sleeping_areas}</td>
            </tr>
        `;
    });    
}
/*==================Monster Description Display====================*/

function displayDescription() {
    const div = 
        document.getElementById("monsterDescription");
    div.innerHTML = "";

    const stats =
        allStats.forEach(stat => {
        div.innerHTML += `
            <p>${stat.description}</p>
        `;
    });
}


/*==================Monster Render Display====================*/
const monsterRender =
    document.getElementById("monsterRender");

function displayMonsterRender(monstersToDisplay) {
    monsterRender.innerHTML = "";
    document.getElementById("monsterRender").innerHTML = `
    <img
        src="${monster.render}"
        alt="${monster.name}"
        class="monster-render-image">
    `;
};

displayMonsterRender(baseWorldMonsters);