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


async function loadPokemon() {
    let blockStart = blocks[counter]['start'];
    let blockEnd = blocks[counter]['end'];
    for (let i = blockStart; i < blockEnd; i++) {
        await loadFromNet(i);
    }
}

async function loadFromNet(i) {
    let urlNames = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let responseNames = await fetch(urlNames);
    currentPokemon = await responseNames.json();
    allPokemon.push(currentPokemon);
    // console.log(allPokemon);
    pokeInfo(currentPokemon);
    input();
}

function pokeInfo(loaded) {
    // let id = loaded['id'];
    let name = loaded['name'].toUpperCase();
    let typeOne = loaded['types']['0']['type']['name'];
    let typeTwo;
    let typesLength = loaded['types'].length;
    if (typesLength > 1) {
        typeTwo = loaded['types']['1']['type']['name'];
    } else {
        typeTwo = '';
    }
    let img = loaded['sprites']['other']['dream_world']['front_default'];
    renderPokemon(name, typeOne, typeTwo, img);
}

function renderPokemon(name, typeOne, typeTwo, img) {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML += pokedexHTML(name, typeOne.toUpperCase(), typeTwo.toUpperCase(), img);
    let pokemon = document.getElementById(name);
    pokemon.classList.add(typeOne);
    
}

function pokedexHTML(name, typeOne, typeTwo, img) {
    return /*html*/ `
        <div id="${name}" class="pokemon">
            <div class="flexing">
                <h2>${name}</h2>
                <div>
                    <h4>${typeOne}</h4>
                    <h4>${typeTwo}</h4>
                </div>
            </div>
            <img src="${img}">
        </div>
    `;
}

function loadNext() {
    if (counter < 4) {
        counter++;
        loadPokemon();
    } else if (counter == 4) {
        counter++;
        hideButton();
        loadPokemon();
    }
}

function hideButton() {
    document.getElementById('hide').classList.add('d-none');
}

function input() {
    let search = document.getElementById('search').value;
    search = search.toUpperCase();
    // console.log(currentPokemon);
    document.getElementById('pokedex').innerHTML ='';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        if (pokemon['name'].toUpperCase().includes(search)) {
            pokeInfo(pokemon);
        }
    }
}

function selectedType(type) {
    document.getElementById('pokedex').innerHTML ='';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        if (pokemon['types']['0']['type']['name'].includes(type)) {
            pokeInfo(pokemon);
        }else if (pokemon['types'].length > 1 && pokemon['types']['1']['type']['name'].includes(type)) {
            pokeInfo(pokemon);
        } else if (type == 'all') {
            pokeInfo(pokemon);
            
        }
    }
}