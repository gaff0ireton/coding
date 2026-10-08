
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

        const { back_default, front_default } = sprites;

        pokeName.textContent = name.toUpperCase();
        pokeHeight.textContent = height;
        pokeWeight.textContent = weight;
        pokeImg.src = front_default;
    } catch (error) {
        console.error(error);
    }
};

const form = document.querySelector("#search-form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchText = document.querySelector('#search-form input');
    getPokemon(searchText.value.trim());

})
