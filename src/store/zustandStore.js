import create from "zustand";
import { persist } from "zustand/middleware";

export const useMyPokemonStore = create(
  persist(
    (set, get) => ({
      pokemonsList: [],
      addPokemon: (id, image, nickname, name) =>
        set((state) =>
          state.pokemonsList.push({
            index: state.pokemonsList.length,
            id: id,
            image: image,
            nickname: nickname,
            name: name,
          })
        ),
      removePokemon: (index) =>
        set(
          (state) =>
            (state.pokemonsList = state.pokemonsList.filter(
              (pokemon) => pokemon.index !== index
            ))
        ),
      resetList: () => set({ pokemonsList: [] }),
      getPokemonCount: (id) => {
        let count = 0;
        get().pokemonsList.map((pokemon) => pokemon.id === id && ++count);
        return count;
      },
    }),
    {
      name: "myPokemonList",
    }
  )
);
