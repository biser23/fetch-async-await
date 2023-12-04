const app = document.getElementById('app')
const characterList = document.getElementById('character-list');

function getpokemon(){
fetch(`https://pokeapi.co/api/v2/pokemon`)
.then((response) => {
    if(!response.ok){
        throw new Error ('Solicitud sin éxtio')
    } return response.json()
})
.then((data) => {
    const characters = data.results
    characters.forEach(character => {
        let listItem = `
        <li>
        <img src ='${character.image}' alt='${character.name}' />
        <p><span></span>${character.name}</p>
        </li>
        `
        app.innerHTML += listItem
    })})};
    getpokemon()
