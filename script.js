let state = {
    group: "Нет",
    weapon: "Нет",
    data: {},
    groupEl: null,
    weaponEl: null,
    genGroupEl: null,
    genWeaponEl: null,
}

function updateState() {
    state.groupEl.textContent = state.group;
    state.weaponEl.textContent = state.weapon;
}

function generateGroup() {
    const groups = Object.keys(state.data);
    const group = groups[Math.floor(Math.random() * groups.length)];
    state.group = group;
    updateState();
}

function generateWeapon() {
    const weapons = state.data[state.group];
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    state.weapon = weapon;
    updateState();
}

async function main() {
    const resp = await fetch('/data.json');
    const data = await resp.json();

    state.data = data;
    state.groupEl = document.querySelector('#group');
    state.weaponEl = document.querySelector('#weapon');
    state.genGroupEl = document.querySelector('#genGroup');
    state.genWeaponEl = document.querySelector('#genWeapon');
    state.genGroupEl.addEventListener('click', generateGroup);
    state.genWeaponEl.addEventListener('click', generateWeapon);
    updateState();
}

document.addEventListener('DOMContentLoaded', main);
