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
let allPokemon = [];
let AUDIO_PIKA = new Audio('audio/pikaSound.mp3');

function join() {
    AUDIO_PIKA.volume = .08;
    AUDIO_PIKA.play();
    document.getElementById('start').style.opacity = '0';
    document.getElementById('start').style.zIndex = '0';
    document.getElementById('body').style.overflow = '';
}

async function loadPokemon() {
    let blockStart = blocks[counter]['start'];
    let blockEnd = blocks[counter]['end'];
    for (let i = blockStart; i < blockEnd; i++) {
        await loadFromNet(i);
    }
}

async function loadFromNet(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    allPokemon.push(currentPokemon);
    pokeInfo(currentPokemon, i);
    input();
}

function pokeInfo(currentPokemon) {
    let id = currentPokemon['id'];
    let name = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    let typeOne = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);
    let typeTwo;
    let typesLength = currentPokemon['types'].length;
    if (typesLength > 1) {
        typeTwo = currentPokemon['types']['1']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['1']['type']['name'].slice(1);
    } else {
        typeTwo = '';
    }
    let img = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    renderPokemon(name, typeOne, typeTwo, img, id);
}

function renderPokemon(name, typeOne, typeTwo, img, id) {
    let pokedex = document.getElementById('pokedex');
    pokedex.innerHTML += pokedexHTML(name, typeOne, typeTwo, img, id);
    typeIsVoid(typeTwo, id);
    let pokemon = document.getElementById(name);
    pokemon.classList.add(typeOne);
}

function typeIsVoid(typeTwo, id) {
    if (typeTwo == '') {
        document.getElementById(id).classList.add('d-none');
    }
}

function pokedexHTML(name, typeOne, typeTwo, img, id) {
    return /*html*/ `
        <div id="${name}" class="pokemon" onclick="showStats(${id})">
            <div class="flexing">
                <h2>${name}</h2>
                <div>
                    <h4 class="${typeOne}">${typeOne}</h4>
                    <h4 id="${id}" class="${typeOne}">${typeTwo}</h4>
                </div>
            </div>
            <div class="imageContainer">
                <h4><b>#${id}</b></h4>
                <img class="pokemonImage" src="${img}">
            </div>
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
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];
        if (pokemon['name'].toUpperCase().includes(search)) {
            pokeInfo(pokemon);
        }
    }
}

function selectedType(type) {
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        let pokemon = allPokemon[i];
        if (pokemon['types']['0']['type']['name'].includes(type)) {
            pokeInfo(pokemon);
        } else if (pokemon['types'].length > 1 && pokemon['types']['1']['type']['name'].includes(type)) {
            pokeInfo(pokemon);
        } else if (type == 'all') {
            pokeInfo(pokemon);
        }
    }
}