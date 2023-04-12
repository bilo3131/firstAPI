let blocks = [
    {
        'start': 0,
        'end': 30
    },
    {
        'start': 30,
        'end': 60
    },
    {
        'start': 60,
        'end': 90
    },
    {
        'start': 90,
        'end': 120
    },
    {
        'start': 120,
        'end': 151
    }
]

let counter = 0;
let currentPokemon;

async function loadPokemon() {
    let urlNames = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let responseNames = await fetch(urlNames);
    currentPokemon = await responseNames.json();
    console.log(currentPokemon);

    // renderPokemon();
}

function renderPokemon() {

}