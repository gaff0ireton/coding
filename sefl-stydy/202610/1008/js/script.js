
const section = document.querySelector("section");
const pokeName = section?.querySelector(".poke-name");
const pokeHeight = section?.querySelector(".poke-height");
const pokeWeight = section?.querySelector(".poke-weight");
const pokeImg = section?.querySelector(".poke-img img");
const getPokemon = async (name_pokemon) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`);

        if (!response.ok) {
            throw new Error("ポケモンが見つかりません");
        }

        const data = await response.json();
        const { name, height, weight, sprites } = data;

        console.log(data);
        pokeName.textContent = data.name;
        pokeHeight.textContent = data.height;
        pokeWeight.textContent = data.weight;
        pokeImg.src = sprites.front_default;
    } catch (error) {
        console.error(error);
    }
};

getPokemon("zekrom");
