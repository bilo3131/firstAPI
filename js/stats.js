function showStats(id) {
    let currentPokemon = allPokemon[id - 1];
    let previousPokemon = allPokemon[id -2];
    let nextPokemon = allPokemon[id];
    bluryBackground();
    renderStatsContainer(id);
    currentStats(currentPokemon);
    setChangeImages(previousPokemon, nextPokemon);
    console.log(currentPokemon);
}

function bluryBackground() {
    let statsBackground = document.getElementById('bluryBackground');
    statsBackground.innerHTML = bluryBackgroundHTML();
    document.getElementById('body').style.overflow = 'hidden';
}

function bluryBackgroundHTML() {
    return /*html*/ `
        <div id="statsBackground" class="statsBackground" onclick="showAll()">

        </div>
    `;
}

function renderStatsContainer(id) {
    let colorClass = allPokemon[id-1]['types']['0']['type']['name'].charAt(0).toUpperCase() + allPokemon[id-1]['types']['0']['type']['name'].slice(1);
    let statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = statsContainerHTML(id);
    document.getElementById('statsContainer').classList.remove('statsHidden');
    document.getElementById('statsTop').classList.add(colorClass+'Clicked')
}

{/* <canvas id="myChart" width="400" height="400"></canvas> */}

function currentStats(currentPokemon) {
    let id = currentPokemon['id'];
    // renderMoves(currentPokemon);
    let name = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1);
    let image = currentPokemon['sprites']['other']['dream_world']['front_default'];
    let height = (currentPokemon['height'] / 10).toFixed(2);
    let weight = (currentPokemon['weight'] / 10).toFixed(1);
    currentTypes(currentPokemon, name, id); 
    setBottomSection(image);
    // generateStats(currentPokemon);
}

function currentTypes(currentPokemon, name, id) {
    let typeOne = currentPokemon['types']['0']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['0']['type']['name'].slice(1);
    let typeTwo;
    let types = currentPokemon['types'];
    if (types.length > 1) {
        typeTwo = currentPokemon['types']['1']['type']['name'].charAt(0).toUpperCase() + currentPokemon['types']['1']['type']['name'].slice(1);
        setTopSection(name, id, typeOne, typeTwo);
    } else {
        typeTwo = '';
        setTopSection(name, id, typeOne, typeTwo);
    }
    clickedTypeIsVoid(typeTwo);
    currentAbilities(currentPokemon);
}

function setTopSection(name, id, typeOne, typeTwo) {
    document.getElementById('clickedName').innerHTML = name;
    document.getElementById('clickedId').innerHTML += id;
    document.getElementById('clickedTypeOne').innerHTML = typeOne;
    document.getElementById('clickedTypeTwo').innerHTML = typeTwo;
}

function setBottomSection(image) {
    document.getElementById('clickedImage').src = image;
}

function clickedTypeIsVoid(typeTwo) {
    if (typeTwo == '') {
        document.getElementById('clickedTypeTwo').classList.add('d-none');
    }
}

function currentAbilities(currentPokemon) {
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {
        let ability = currentPokemon['abilities'][i]['ability']['name'];
    }
}

// function generateStats(currentPokemon) {
//     let stats = currentPokemon['stats'];
//     for (let i = 0; i < stats.length; i++) {
//         let statName = stats[i]['stat']['name'];
//         let statValue = stats[i]['base_stat'];
//     }
// }

function statsContainerHTML(id) {
    return /*html*/ `
    <div>
        <div id="statsTop" class="statsTop">
            <div class="nameIdArea">
                <h2 id="clickedName"></h2>
                <h4 id="clickedId">#</h4>
            </div>
            <div class="typeArea">
                <h4 id="clickedTypeOne"></h4>
                <h4 id="clickedTypeTwo"></h4>
            </div>
        </div>
        <div id="statsBottom" class="statsBottom">
            <div class="imageToCenter">
                <img class=clickedImage id="clickedImage">
            </div>
            <div class="changeStatsArea">
                <img id="previousImage" class="smallPNG left" onclick="showStats(${id-1})">
                <div class="navArea">
                    <p>About</p>
                    <p>Base Stats</p>
                    <p>Evolution</p>
                    <p>Moves</p>
                </div>
                <img id="nextImage" class="smallPNG right" onclick="showStats(${id+1})">
            </div>
            <div id="section">
                <table>
                    <tr>
                        <th></th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    `;
}

function showAll() {
    document.getElementById('statsBackground').classList.add('d-none');
    document.getElementById('body').style.overflow = '';
    document.getElementById('statsContainer').classList.add('statsHidden');
}

function setChangeImages(previousPokemon, nextPokemon) {
    if (previousPokemon == undefined) {
        document.getElementById('previousImage').classList.add('d-none');
    } else {
        let previousImage = previousPokemon['sprites']['other']['home']['front_default'];
        document.getElementById('previousImage').src = previousImage; 
    }
    if (nextPokemon == undefined) {
        document.getElementById('nextImage').classList.add('d-none');
    } else {
        let nextImage = nextPokemon['sprites']['other']['home']['front_default'];
        document.getElementById('nextImage').src = nextImage; 
    }
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