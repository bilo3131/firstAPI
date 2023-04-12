let blocks = [
    {
        'start': 1,
        'end': 26
    },
    {
        'start': 26,
        'end': 51
    },
    {
        'start': 51,
        'end': 76
    },
    {
        'start': 76,
        'end': 101
    },
    {
        'start': 101,
        'end': 126
    },
    {
        'start': 126,
        'end': 152
    }
]

let counter = 0;
let currentPokemon;
let allPokemon = [];
let blockStart = blocks[counter]['start'];
let blockEnd = blocks[counter]['end'];

async function loadPokemon() {
    // for (let i = blockStart; i < blockEnd; i++) {
        loadFromNet();
    // }
    
    
    
}

async function loadFromNet() {
    let urlNames = `https://pokeapi.co/api/v2/pokemon/1`;
    let responseNames = await fetch(urlNames);
    currentPokemon = await responseNames.json();
    allPokemon.push(currentPokemon['name'])
    console.log(currentPokemon);

    renderPokemon();
}

function renderPokemon() {
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('pokemon').classList.add(currentPokemon['types']['0']['type']['name'])
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'].toUpperCase();
    document.getElementById('type1').innerHTML = (currentPokemon['types']['0']['type']['name']).toUpperCase();
    document.getElementById('type2').innerHTML = (currentPokemon['types']['1']['type']['name']).toUpperCase();
}