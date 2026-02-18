async function buscarPokemon(nombre) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    const respuesta = await fetch(url);

    // ¡Importante! 'fetch' no rechaza en errores HTTP (ej. 404).
    // Debemos comprobarlo manualmente.
    if (!respuesta.ok) {
      throw new Error(`Pokémon no encontrado. Código: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    console.log(`Nombre: ${datos.name}`);
    console.log(`Altura: ${datos.height} decímetros`);
    console.log(`Peso: ${datos.weight} kilos`);
  } catch (err) {
    console.error(err.message);
  }
}

buscarPokemon('charmander');
