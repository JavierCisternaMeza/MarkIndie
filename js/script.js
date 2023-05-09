const pokemonContainer = document.querySelector('.pokemon-row');

// Función para obtener un número aleatorio entre un mínimo y un máximo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener datos de un Pokémon por su ID
async function getPokemonData(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemonData = await response.json();
  return pokemonData;
}

// Función para crear y mostrar una caja de Pokémon en la página
function showPokemonBox(pokemonData) {
  const box = document.createElement('div');
  box.classList.add('box');

  const pokemonName = document.createElement('h3');
  pokemonName.textContent = pokemonData.name;

  const pokemonNumber = document.createElement('p');
  pokemonNumber.textContent = `N.º ${pokemonData.id}`;

  const pokemonTypes = document.createElement('p');
  pokemonTypes.textContent = `Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}`;

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemonData.sprites.front_default;
  pokemonImage.alt = pokemonData.name;

  box.appendChild(pokemonName);
  box.appendChild(pokemonNumber);
  box.appendChild(pokemonTypes);
  box.appendChild(pokemonImage);
  pokemonContainer.appendChild(box);
}

// Obtener 30 Pokémon aleatorios
for (let i = 0; i < 30; i++) {
  const pokemonId = getRandomNumber(1, 898);
  getPokemonData(pokemonId).then(pokemonData => {
    showPokemonBox(pokemonData);
  });
}
