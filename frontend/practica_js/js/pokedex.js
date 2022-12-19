const fetchPokemon = async () => {
    const inputPokemon = document.getElementById("pokeName");
    let pokemon = inputPokemon.value;
    pokemon = pokemon.toLowerCase();
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(pokeApi).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage("./pokemon-sad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            /* console.log(pokeImg); */
            let pokemonName = data.species.name;
            pokeName(pokemonName);
            let ability = data.abilities[0].ability.name;
            pokeAbility(ability);
            let tipo = data.types[0].type.name;
            pokeType(tipo);
            let baseExperience = data.base_experience;
            pokeBaseExperience(baseExperience);
        }
    })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeName = (url) => {
    const name = document.getElementById("nombre");
    name.innerHTML = "Nombre: " + url;
}

const pokeAbility = (url) => {
    const abilidad = document.getElementById("abilidad");
    abilidad.innerHTML = "Abilidad: " + url;
}

const pokeType = (url) => {
    const tipo = document.getElementById("tipo");
    tipo.innerHTML = "Tipo de pokemon: " + url;
}

const pokeBaseExperience = (url) => {
    const experience = document.getElementById("xp");
    experience.innerHTML = "Estadistica: " + url+"%";
}