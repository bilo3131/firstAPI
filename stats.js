function showStats(id) {
    let currentPokemon = allPokemon[id - 1];
    currentStats(currentPokemon);
    document.getElementById('stats').classList.remove('statsHidden');
    document.getElementById('statsBackground').classList.remove('d-none');
    document.getElementById('body').style.overflow = 'hidden';
    console.log(currentPokemon);
}

function currentStats(currentPokemon) {
    let baseExperience = currentPokemon['base_experience'];
    let id = currentPokemon['id'];
    // renderMoves(currentPokemon);
    let name = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    let image = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let height = currentPokemon['height'] / 10;
    let weight = currentPokemon['weight'] / 10;
    currentTypes(currentPokemon);
    generateStats(currentPokemon);
}

function currentTypes(currentPokemon) {
    let typeOne = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);
    let typeTwo;
    let types = currentPokemon['types'];
    if (types.length > 1) {
        typeTwo = currentPokemon['types']['1']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['1']['type']['name'].slice(1);
    } else {
        typeTwo = '';
    }
    loadBackgroundColor(typeOne);
}

function loadBackgroundColor(typeOne) {
    document.getElementById('stats').classList.add(typeOne+'Clicked');
}

function generateStats(currentPokemon) {
    let stats = currentPokemon['stats'];
    for (let i = 0; i < stats.length; i++) {
        let statName = stats[i]['stat']['name'];
        let statValue = stats[i]['base_stat'];
    }
}

function showAll() {
    // document.getElementById('statsBackground').classList.add('d-none');
    document.getElementById('body').style.overflow = '';
    document.getElementById('stats').classList.add('statsHidden');
    
    refreshStatsContainer();
}

function refreshStatsContainer() {
    let statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = statsContainerHTML();
    
}

function statsContainerHTML() {
    return /*html*/ `
        <div id="stats" class="stats statsHidden">
        <div class="statsBottom">

</div>
        </div>
        <div id="statsBackground" class="d-none statsBackground" onclick="showAll()">
        </div>
    `;
}

// src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js";

// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });