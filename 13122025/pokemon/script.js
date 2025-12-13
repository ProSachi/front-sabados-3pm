    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const errorMessage = document.getElementById('errorMessage');
    const pokemonCard = document.getElementById('pokemonCard');

    const typeColors = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-400',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300'
    };

    async function fetchPokemon(query) {
      try {
        // Hide previous results and show loading
        pokemonCard.classList.add('hidden');
        error.classList.add('hidden');
        loading.classList.remove('hidden');

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
        
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }

        const data = await response.json();
        displayPokemon(data);
      } catch (err) {
        showError(err.message);
      } finally {
        loading.classList.add('hidden');
      }
    }

    function displayPokemon(pokemon) {
      // Basic Info
      document.getElementById('pokemonImage').src = pokemon.sprites['back_default'] || pokemon.sprites.front_default;
      document.getElementById('pokemonImage').alt = pokemon.name;
      document.getElementById('pokemonName').textContent = pokemon.name;
      document.getElementById('pokemonId').textContent = `#${String(pokemon.id).padStart(3, '0')}`;

      // Types
      const typesContainer = document.getElementById('pokemonTypes');
      typesContainer.innerHTML = pokemon.types.map(type => {
        const typeColor = typeColors[type.type.name] || 'bg-gray-400';
        return `<span class="${typeColor} text-white px-4 py-1 rounded-full text-sm font-semibold capitalize">${type.type.name}</span>`;
      }).join('');

      // Stats
      const statsContainer = document.getElementById('pokemonStats');
      statsContainer.innerHTML = pokemon.stats.map(stat => {
        const percentage = (stat.base_stat / 255) * 100;
        return `
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-sm text-gray-600 capitalize">${stat.stat.name.replace('-', ' ')}</span>
              <span class="text-sm font-semibold text-gray-800">${stat.base_stat}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-indigo-600 h-2 rounded-full" style="width: ${percentage}%"></div>
            </div>
          </div>
        `;
      }).join('');

      // Abilities
      const abilitiesContainer = document.getElementById('pokemonAbilities');
      abilitiesContainer.innerHTML = pokemon.abilities.map(ability => {
        return `<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm capitalize">${ability.ability.name.replace('-', ' ')}</span>`;
      }).join('');

      // Physical Info
      document.getElementById('pokemonHeight').textContent = `${pokemon.height / 10} m`;
      document.getElementById('pokemonWeight').textContent = `${pokemon.weight / 10} kg`;

      // Show the card
      pokemonCard.classList.remove('hidden');
    }

    function showError(message) {
      errorMessage.textContent = message;
      error.classList.remove('hidden');
    }

    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        fetchPokemon(query);
      }
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          fetchPokemon(query);
        }
      }
    });

    // Load a default Pokemon on page load
    fetchPokemon('pikachu');