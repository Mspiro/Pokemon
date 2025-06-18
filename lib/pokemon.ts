import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemon = async () => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=2000`);
  const results = res.data.results;

  results.sort((a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name)
  );

  return results;
};

export const getPokemonDetails = async (name: string) => {
  const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return res.data;
};

export const getPokemonBatchDetails = async (limit = 20) => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = res.data;

  const details = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const res = await axios.get(pokemon.url);
      const fullData = res.data;

      return {
        name: fullData.name,
        image: fullData.sprites.other["official-artwork"].front_default,
        height: fullData.height,
        weight: fullData.weight,
      };
    })
  );

  return details;
};

export const getAllPokemonWithPagination = async (offset = 0, limit = 20) => {
  const res = await axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  const data = res.data;

  const detailedPokemon = await Promise.all(
    data.results.map(async (poke: any) => {
      const res = await axios.get(poke.url);
      const details = res.data;

      return {
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
        height: details.height,
        weight: details.weight,
      };
    })
  );

  return detailedPokemon;
};
