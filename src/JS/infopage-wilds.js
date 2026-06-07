const params =
    new URLSearchParams(
        window.location.search
    );

const monsterId =
    parseInt(params.get("id"));

const monster =
    baseWildsMonsters.find(
        monster => monster.id === monsterId
    );
document.getElementById("monsterTitle")
    .textContent =
        `Information: ${monster.name}`;