// Obtener el formulario de búsqueda y los elementos relevantes
const searchForm = document.querySelector('.pokeForm');
const searchInput = searchForm.querySelector('input');

// Función para buscar un Pokémon por su nombre o ID
async function searchPokemon(searchTerm) {
  // Verificar si el término de búsqueda es un número (en cuyo caso, es un ID) o una cadena (en cuyo caso, es un nombre)
  const searchIsNumber = !isNaN(searchTerm);
  let pokemonData;

  if (searchIsNumber) {
    // Si es un número, buscar un Pokémon por su ID
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    pokemonData = await response.json();
  } else {
    // Si es una cadena, buscar todos los Pokémon que contengan el término de búsqueda en su nombre
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
    const pokemonList = await response.json();

    const matchingPokemon = pokemonList.results.filter((pokemon) => {
      return pokemon.name.includes(searchTerm.toLowerCase());
    });

    // Si se encontró al menos un Pokémon, mostrar sus cajas en la página
    if (matchingPokemon.length > 0) {
      // Borrar las cajas de Pokémon existentes
      pokemonContainer.innerHTML = '';

      // Obtener los datos del Pokémon y mostrar sus cajas
      for (let i = 0; i < matchingPokemon.length; i++) {
        const pokemonResponse = await fetch(matchingPokemon[i].url);
        const pokemonData = await pokemonResponse.json();
        showPokemonBox(pokemonData);
      }
    } else {
      // Mostrar un mensaje de error si no se encontró ningún Pokémon
      alert('No se encontró ningún Pokémon con ese nombre o ID.');
    }
  }
}


// Manejar la presentación de resultados de búsqueda
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  searchPokemon(searchTerm);
}

// Agregar un listener de evento para el formulario de búsqueda
searchForm.addEventListener('submit', handleSearch);
