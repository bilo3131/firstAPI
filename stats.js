function showStats(id) {
    document.getElementById('stats').classList.remove('statsHidden');
    document.getElementById('statsBackground').classList.remove('d-none');
    document.getElementById('body').style.overflow = 'hidden';
    let currentPokemon = allPokemon[id-1];
    // console.log(currentPokemon);
    currentStats(currentPokemon);
}

function currentStats(currentPokemon) {
    let baseExperience = currentPokemon['base_experience'];
    let id = currentPokemon['id'];
    // renderMoves(currentPokemon);
    let name = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    let image = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let height = currentPokemon['height'] / 10;
    let weight = currentPokemon['weight'] / 10;
    let typeOne = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);
    let typeTwo;
    let types = currentPokemon['types'];
    if (types.length > 1) {
        typeTwo = currentPokemon['types']['1']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['1']['type']['name'].slice(1);
    } else {
        typeTwo = '';
    }
    // console.log(typeTwo);
    generateStats(currentPokemon);
}

function generateStats(currentPokemon) {
    let stats = currentPokemon['stats'];
    for (let i = 0; i < stats.length; i++) {
        let statName = stats[i]['stat']['name'];
        let statValue = stats[i]['base_stat'];
    }
}

function showAll() {
    document.getElementById('statsBackground').classList.add('d-none');
    document.getElementById('body').style.overflow = '';
    document.getElementById('stats').classList.add('statsHidden');
}