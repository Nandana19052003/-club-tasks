//header.js
const header = document.getElementById("header");
header.innerHTML = `<h1>Pokedex</h1>`;

//pokemon-list.js
const pokemonList = document.getElementById("pokemon-list");
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(response => response.json())
  .then(data => {
    // Extract pokemons from API response
    const pokemons = data.results;
    // Generate HTML for pokemons
    const pokemonListHTML = pokemons
      .map(pokemon => `<li>${pokemon.name}</li>`)
      .join("");
    // Set HTML for pokemon-list element
    pokemonList.innerHTML = `<ul>${pokemonListHTML}</ul>`;
  })
  .catch(error => console.log(error));

