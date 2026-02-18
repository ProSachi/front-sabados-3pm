let allCharacters = [];
async function obtenerDatos() {

    const url = "https://dragonball-api.com/api/characters";
    // 2. Usamos 'try...catch' para manejar errores
    try {
        // 3. Usamos 'await' para pausar la ejecución hasta que 'fetch' se resuelva
        const response = await fetch(url);

        // 4. Usamos 'await' de nuevo para pausar hasta que '.json()' se resuelva
        const data = await response.json();
        if (data.items) {
            allCharacters = data.items;
            renderCharacters(data.items);
        }
        // 5. Ahora podemos usar los datos como si fueran síncronos
        console.log(data);
    } catch (error) {
        // 6. El 'catch' atrapará cualquier error de red o de parseo
        console.error('Hubo un fallo:', error);
    }

}

obtenerDatos();

function renderCharacters(characters) {
    const container = document.getElementById('mainContent');

    if (!characters || characters.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            <h3>Sin resultados</h3>
            <p>No se encontraron personajes con esos criterios.</p>
          </div>
        `;
        return;
    }

    let html = '<div class="grid">';
    characters.forEach(char => {
        html += `
          <article class="card" onclick="openCharacterModal(${char.id})" tabindex="0" role="button" aria-label="Ver detalles de ${char.name}">
            <div class="card-image">
              <img src="${char.image}" alt="${char.name}" loading="lazy" />
            </div>
            <div class="card-body">
              <h3 class="card-name">${char.name}</h3>
              <div class="card-meta">
                <span class="badge race">${char.race || 'Desconocida'}</span>
                <span class="badge gender">${char.gender === 'Male' ? 'Masculino' : char.gender === 'Female' ? 'Femenino' : char.gender}</span>
              </div>
              <p class="card-ki">Ki: <strong>${char.ki}</strong> | Max: <strong>${char.maxKi}</strong></p>
            </div>
          </article>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

